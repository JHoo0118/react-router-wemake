interface WelcomeUserProps {
  username: string;
}

export const WelcomeUser = ({ username }: WelcomeUserProps) => {
  return <div>Welcome User: {username}</div>;
};
