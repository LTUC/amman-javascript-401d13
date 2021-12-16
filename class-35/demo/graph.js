'use strict';

// 1. add a class for the vertex

class Vertex {
    constructor(value){
        this.value = value;
    }
}

// 2. add a class for the edge
class Edge {
    constructor(vertex, weight){
        this.vertex = vertex;
        this.weight = weight;
    }
}

// 3. add a class for the graph
    // 3.1 add a vertex to the graph
    // 3.2 add an edge to te graph
    // 3.3 add a method to print the graph

class Graph {
    constructor(){
        this.list = new Map();
    }

    addVertix(vertex){
        this.list.set(vertex, [] )
    }

    addDirectedEdge(startVertex, endVertex, weight = 0){
        if(! this.list.has(startVertex) || ! this.list.has(endVertex)){
            console.log('Invaild nodes');
        }

        const edge = new Edge(endVertex, weight);
        const start = this.list.get(startVertex);
        start.push(edge);

    }
    printAll(){
        for(const [vertex, edge] of this.list.entries()){
            console.log(vertex, edge)
        }
    }

}

// Example: 
const vertexOne = new Vertex(1);
const vertexTwo = new Vertex(2);
const vertexThree = new Vertex(3);
const vertexFour = new Vertex(4);

const graph = new Graph();
graph.addVertix(vertexOne );
graph.addVertix(vertexTwo );
graph.addVertix(vertexThree );
graph.addVertix(vertexFour );

graph.addDirectedEdge(vertexOne, vertexThree, 6);
graph.addDirectedEdge(vertexOne, vertexTwo, 5);
graph.addDirectedEdge(vertexTwo, vertexFour, 0);

graph.printAll();