const axios = require('axios');

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=10';

export const get = () =>  dispatch => {
  return axios.get(url).then(res => {
    dispatch(actualData(res.data))
  })
}

function actualData(data) {
  return {
    type: 'GET',
    payload: {
      count: data.length,
      results: data
    }
  }
}