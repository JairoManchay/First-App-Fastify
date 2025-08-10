
const postBase = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 10 }
  },
  required: ['title']
};

// Request Body para POST
const requestPostBody = postBase;


// body for response
const geResponseBodyInterface = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string' }
    },
    required: ['id', 'title']
}

// Response Body para GET (lista de posts)
const getResponseBody = {
  200: {
    type: 'object',
    required: ['data'],
    properties: {
      data: {
        type: 'array',
        items: geResponseBodyInterface
      }
    }
  }
};


// Response Body para POST (creación exitosa)
const responsePostBody = {
  201: {
    type: 'object',
    required: ['message', 'data'],
    properties: {
      message: { type: 'string' },
      data: {
        type: 'object',
        required: ['id', 'title'],
        properties: {
          id: { type: 'string' },
          title: { type: 'string' }
        }
      }
    }
  }
};

module.exports = {
  requestPostBody,
  getResponseBody,
  responsePostBody
};
