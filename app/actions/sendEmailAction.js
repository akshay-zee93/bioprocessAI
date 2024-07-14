import { Resend } from "resend";
import EmailTemplate from "../Component/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = "Bioprocess AI <bioprocessai@gmail.com>";

export async function sendEmail(formData, subject) {
  try {
    // https://resend.com/docs/api-reference/emails/send-email#body-parameters
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hari.menon@bioprocess.ai",
      subject: subject,
      react: EmailTemplate({ data: formData }),
    });

    if (error) {
      console.error(`Failed to send email: ${JSON.stringify(error)}`);
    }
  } catch (error) {
    console.error(`Failed to send email: ${JSON.stringify(error)}`);
  }
}
