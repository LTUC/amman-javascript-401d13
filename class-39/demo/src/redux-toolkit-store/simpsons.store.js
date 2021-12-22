import { createSlice } from '@reduxjs/toolkit';


const simpsonsSlice = createSlice({
  name: 'simpsons',
  initialState: [
    {
      quote: 'In theory, Communism works! In theory.',
      character: 'Homer Simpson',
      image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'
    }
  ],
  reducers: {
    add(state, action) {
      console.log('state: ', state);
      console.log('action: ', action);
      state.push(action.payload);
    },
    remove(state, action) {
      console.log('state: ', state);
      console.log('action: ', action);
      const newState = state.filter(character => character.character !== action.payload.character)
      return newState;

    }
  }


});

export const { add, remove } = simpsonsSlice.actions;

export const get = () => async (dispatch) => {
  console.log('Wait for getting data ... 👍');
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
  const data = await response.json();
  console.log(data);
  data.forEach(character => dispatch(add(character)));
};

export default simpsonsSlice.reducer;
