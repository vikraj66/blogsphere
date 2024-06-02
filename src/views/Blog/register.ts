import * as Primora from 'primora-js';
export interface RegisterProps {
    id?: number;
}
export class RegisterModel extends Primora.Model<RegisterProps> {
    static buildRegister(attrs: RegisterProps): RegisterModel {
        return new RegisterModel(
            new Primora.Attributes<RegisterProps>(attrs),
            new Primora.Eventing(),
            new Primora.ApiSync<RegisterProps>('http://localhost:3000/register')
        );
    }
}

export class RegisterShow extends Primora.View<RegisterModel, RegisterProps> {
    template(): string {
        return `
                <div class="container">
                <div class="content">
                    <h1>Welcome to BlogSphere</h1>
                    <p>Your daily dose of insightful articles</p>
                    <button class="google-signup">
                        <img src="./images/google-icon.png" alt="Google Icon" class="google-icon">
                        Signup with Google
                    </button>
                </div>
                <img src="./images/register2.jpg" alt="Illustration" class="illustration">
            </div>
        `
    }
}