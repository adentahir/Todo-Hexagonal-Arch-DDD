import { EmailService, SendEmailData, SendEmailError,SendEmailResponse } from "@app/services/external/email/email.service"
import { Client, LibraryResponse, SendEmailV3_1 } from "node-mailjet";
import {Ok, Err, Result} from 'oxide.ts' 
import { env } from "process";


const apiKey = env.MAILJET_API_KEY
const apiSecret = env.MAILJET_API_SECRET

   export class EmailServiceMailjet extends EmailService{
        private readonly client: Client | undefined

        constructor() {
            super();
            this.client = new Client({
              apiKey: apiKey,
              apiSecret: apiSecret,
            });
          }

      async sendEmail(data: SendEmailData): Promise<Result<SendEmailResponse, SendEmailError>> {
        const emailData: SendEmailV3_1.Body = {
            Messages: [
              {
                From: { Email: 'aden.tahir7@gmail.com' },
                To: [{ Email: data.to }],
                Subject: data.subject,
                HTMLPart: data.content,
              },
            ],
          };


          try {
            if (this.client === undefined){
                return Err(new SendEmailError(data.to, "Failed to connect with the client"))
            }
            const resp: LibraryResponse<SendEmailV3_1.Response> = await this.client
              .post('send', { version: 'v3.1' })
              .request(emailData);
      
            const success = resp.body.Messages[0].Status === 'success';
            // Use the response type bool here
            if (success) return Ok({ status: success });
      
            return Err(new SendEmailError(data.to));
          } catch (err) {
            return Err(new SendEmailError(data.to));
          }
        }

    }

        

    

