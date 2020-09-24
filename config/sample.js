const responses = [
  {
    method: 'OPTIONS',
    path: '/v1/books',
    statusCode: 200,
  },
  {
    method: 'GET',
    path: '/v1/books',
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    content: [{
      id: "04098a77-a32f-4d14-b938-3b4397aeed29",
      name: "Some name 1",
      author: "Some author 1",
    }, {
      id: "c71dc35b-ae37-4e09-aa1d-1afd0a927e73",
      name: "Some name 2",
      author: "Some author 2",
    }],
  },
  {
    method: 'POST',
    path: '/v1/books',
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    content: {
      id: "04098a77-a32f-4d14-b938-3b4397aeed29",
      name: "Some name 1",
      author: "Some author 1",
    },
  },
];

module.exports = {
  responses,
}
