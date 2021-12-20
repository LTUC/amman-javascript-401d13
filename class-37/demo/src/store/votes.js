const initialState = {
  totalVotes: 0
};


/**
 * {
 *  type: 'TYPE_OF_ACTION,
 *  payload: {} // any type of data
 * }
 */

// reducer function
export default (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      // HERE WERE ARE GOING TO SUM THE TOTAL
      // we want to create a copy of our state 'totalVotes' then we want to increase the number of total votes for that copied state by 1
      // const copyState = { ...state, totalVotes: state.totalVotes + 1 };
      return { ...state, totalVotes: state.totalVotes + 1 }

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
  };
};

