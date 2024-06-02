import { renderUserEdit, renderUserList, testHandler, registerHandler } from './routeHandler';

export const routes = {
  '/users/:id/edit': renderUserEdit,
  '/users': renderUserList,
  '/': renderUserList,
  '/test': testHandler,
  '/register': registerHandler,
};