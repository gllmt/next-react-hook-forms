import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstName">First name</label>
      <input
        autoFocus
        required
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        required
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="age">Age</label>
      <input
        required
        min={1}
        type="number"
        id="age"
        value={age}
        onChange={(e) => updateFields({ age: Number(e.target.value) })}
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
