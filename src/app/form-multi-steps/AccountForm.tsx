import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export default function AccountForm({
  email,
  password,
  confirmPassword,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account">
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        required
        type="email"
        id="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        id="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        required
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
    </FormWrapper>
  );
}
