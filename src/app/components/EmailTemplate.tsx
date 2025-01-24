interface EmailTemplateProps {
    name: string;
  }
  
  export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    name,
  }) => (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for signing up.</p>
    </div>
  );