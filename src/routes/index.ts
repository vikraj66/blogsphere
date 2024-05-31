import { renderUserEdit, renderUserList } from './routeHandler';

export const routes = {
  '/users/:id/edit': renderUserEdit,
  '/users': renderUserList,
  '/': renderUserList,
};