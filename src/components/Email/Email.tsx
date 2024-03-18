import "./Email.scss";

export type EmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Email({ name, email, subject, message }: EmailProps) {
  return (
    <div className="email">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
