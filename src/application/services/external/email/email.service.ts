import {Err, Ok, Result} from 'oxide.ts'
import { EmailUtils } from './utils';
import { ExternalServiceFailure } from '@carbonteq/hexapp';
export interface SendEmailData {
  to: string;
  from: string;
  subject: string;
  content: string;
}

// todo: update this
export interface SendEmailResponse {
  status: boolean;
}


export abstract class EmailService {
  abstract sendEmail(data: SendEmailData): Promise<Result<SendEmailResponse, SendEmailError>>;

  async sendWelcomeEmail({to: emailTo}: SendEmailData): Promise<Result<SendEmailResponse, SendEmailError>> {
    const result = await this.sendEmail({
      to: emailTo,
      from: 'aden.tahir7@gmail.com',
      subject: 'Welcome to Todo ',
      content: EmailUtils.welcomeEmail(emailTo)});
      return result;
  } 
}

export class SendEmailError extends ExternalServiceFailure {
  constructor(emailTo: string, reason?: string) {
    let msg = `Failed to send email to <${emailTo}>`;
    if (reason) {
      msg += `. Reason: ${reason}`;
    }
    super(msg);
  }
}

