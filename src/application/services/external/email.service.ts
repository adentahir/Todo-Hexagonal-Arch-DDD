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
  abstract sendEmail(data: SendEmailData): Promise<SendEmailResponse>;
}
