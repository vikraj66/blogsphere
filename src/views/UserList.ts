import * as Primora from 'primora-js';
import { UserShow } from './UserShow';
import { User, UserProps } from '../models/User';


export class UserList extends Primora.CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }
}
