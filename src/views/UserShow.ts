import * as Primora from 'primora-js';
import { User, UserProps } from '../models/User';

export class UserShow extends Primora.View<User, UserProps> {
    template(): string {
        return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
    }
}
