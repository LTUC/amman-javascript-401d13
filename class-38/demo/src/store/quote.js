const initaialState = {
  count: 1,
  results: [{
    quote: 'In theory, Communism works! In theory.',
    character: 'Homer Simpson',
    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'
  }]
}

export default function quote(state = initaialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
}