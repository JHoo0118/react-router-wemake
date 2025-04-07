import { Resend } from "resend";
import { WelcomeUser } from "react-email-starter/emails/welcome-user";

const client = new Resend(process.env.RESEND_API_KEY);

export const loader = async () => {
  const { data, error } = await client.emails.send({
    from: "Nico <nico@mail.wemake.cool>",
    to: ["nico@nomadcoders.co"],
    subject: "Welcome to Wemake.cool",
    react: <WelcomeUser username={"Resend"} />,
  });
  return Response.json({ data, error });
};
