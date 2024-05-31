import * as Primora from 'primora-js';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Primora.Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Primora.Attributes<UserProps>(attrs),
      new Primora.Eventing(),
      new Primora.ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Primora.Collection<User, UserProps> {
    return new Primora.Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
