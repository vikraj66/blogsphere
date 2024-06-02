import * as Primora from 'primora-js';
import { User, UserProps } from '../models/User';

export class TestShow extends Primora.View<User, UserProps> {
    useEjs: boolean = true;
    template(): string {
        return `
            <div>
                <h1>User Detail</h1>
                <div>User Name: <%= name %></div>
                <div>User Age: <%= age %></div>
            </div>
        `;
    }
}
