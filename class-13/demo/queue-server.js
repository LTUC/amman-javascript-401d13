'use strict';

const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const uuid = require('uuid').v4;

// our Queue is an object
// table >> DB
// keyed Q
const msgQueue = {
    chores: {}
}

// namespace
const family = io.of('/family');

family.on('connection',socket=>{
    console.log("CONNECTED to queue-server", socket.id);

    socket.on('new_chore',payload=>{
        console.log('parent is adding a new chore ....');
        const id = uuid();

        // 2 add the chore to the Msg Q
        msgQueue.chores[id] = payload;
        console.log('after adding task Msg Q >>', msgQueue);

        // 3 send to the parent that the MsgQ added ur task to the Q
        socket.emit('added',payload);

        // 4 send the chore to the child
        family.emit('chore',{id:id, payload: msgQueue.chores[id]})
    });

    // 6 >> delete the chore from the Q
    socket.on('received',payload=>{
        console.log('received from the child and remove it from the Q ...');
        delete msgQueue.chores[payload.id];
        console.log('after deleting the task from Msg Q >>', msgQueue);

    })

    socket.on('get_all',()=>{
        console.log('get all the chores for the child');
        Object.keys(msgQueue.chores).forEach(id=>{
            socket.emit('chore',{id:id, payload: msgQueue.chores[id]})
        })
    })

})

// msgQueue= {
//     chores:{
//         '454545':'wash the dishes',
//         '414111':'clean your room'
//     }
// }

