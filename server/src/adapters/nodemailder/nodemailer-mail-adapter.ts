import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "48991c5097cf13",
    pass: "4743c56eff4080",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jhonatad Ribeiro <jhonatasri11@gmail.com>",
      subject,
      html: body,
    });
  }
}
