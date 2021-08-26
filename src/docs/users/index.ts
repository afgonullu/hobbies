import getUsers from './get-users';
import getUser from './get-user';
// import createUser from './create-user';
// import updateUser from './update-user';
// import deleteUser from './delete-user';

export default {
  paths: {
    '/users': {
      ...getUsers,
      // ...createUser,
    },
    '/users/{id}': {
      ...getUser,
      //   ...updateUser,
      //   ...deleteUser,
    },
  },
};
