export default {
  get: {
    tags: ['User'],
    description: 'Get Users',
    operationId: 'getUsers',
    parameters: [],
    responses: {
      200: {
        description: 'Return all users',
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
