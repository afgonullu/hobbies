export default {
  components: {
    schemas: {
      id: {
        type: 'string',
        description: 'An id of an entity',
        example: '61274eb287d4aaaead57fdee',
      },
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'User ID',
            example: '61274eb287d4aaaead57fdee',
          },
          name: {
            type: 'string',
            description: 'user name',
            example: 'Abdullah',
          },
          hobbies: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'user hobbies',
            example: 'Jogging',
          },
        },
      },
    },
  },
};
