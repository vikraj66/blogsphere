import * as Primora from 'primora-js';
import { User, UserProps } from '../models/User';
import { UserList } from '../views/User/UserList';
import { UserEdit } from '../views/User/UserEdit';
import { TestShow } from '../views/Test';
import { RegisterModel, RegisterShow } from '../views/Blog/register';


const rootElement = document.getElementById('root');

export const testHandler = () => {
    if (rootElement) {
        rootElement.innerHTML = '';
        const user = User.buildUser({ name: 'John Doe', age: 30 });
        new TestShow(rootElement, user).render();
    }
}

export const registerHandler = () => {
    if (rootElement) {
        rootElement.innerHTML = '';
        const register = RegisterModel.buildRegister({ id: 1 });
        new RegisterShow(rootElement, register).render();
    }
}

export const renderUserEdit = (params: { [key: string]: string }) => {
    if (rootElement) {
        rootElement.innerHTML = '';
        const user = User.buildUser({ id: parseInt(params.id) });
        user.fetch()
        new UserEdit(rootElement, user).render();
    }
};

export const renderUserList = () => {
    if (rootElement) {
        rootElement.innerHTML = ''
        const users = new Primora.Collection<User, UserProps>(
            'http://localhost:3000/users',
            (json: UserProps) => User.buildUser(json)
        );

        users.on('change', () => {
            new UserList(rootElement, users).render();
        });

        users.fetch();
    }
};