const initialState = [
  { name: 'Hanin', votes: 0 },
  { name: 'Ali', votes: 0 },
  { name: 'Mishmish', votes: 0 },
];


export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state.map(candidate => { // returns the copy 
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 }; // return for the map
        }
        return candidate; // return for the map
      });


    case 'RESET':
      return initialState;

    default:
      return state;
  }
};


export const increment = (person) => {
  return {
    type: 'INCREMENT',
    payload: person
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  }
}