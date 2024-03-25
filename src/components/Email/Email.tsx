import { Body, Head, Html, Text } from "@react-email/components";

import "./Email.scss";

export type EmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function Email({ name, email, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Text>
          From: {name}
        </Text>
        <Text>
          Email: {email}
        </Text>
        <Text>
          {message}
        </Text>
      </Body>
    </Html>
  );
}
