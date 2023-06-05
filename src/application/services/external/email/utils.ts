export class EmailUtils {
    static welcomeEmail(name: string): string {
      return `
  <h4>Dear ${name},</h4>
  <p>Welcome on board with Todo, you won't Regret this ~ </p>
  <h5>Thank you!</h5>
  `;
    }
}