import basicInfo from './basicInfo';
import servers from './servers';
import components from './components';
import tags from './tags';
import users from './users';

export default {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...users,
};
