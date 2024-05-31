import * as Primora from 'primora-js';
import { User, UserProps } from '../models/User';
import { UserList } from '../views/UserList';
import { UserEdit } from '../views/UserEdit';


const rootElement = document.getElementById('root');

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