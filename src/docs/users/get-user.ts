export default {
  get: {
    tags: ['User'],
    description: 'Get a user',
    operationId: 'getUser',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'A single user id',
      },
    ],
    responses: {
      200: {
        description: 'Return a user',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
  },
};
