import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zipCode,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        required
        type="text"
        id="street"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="city">City</label>
      <input
        required
        type="text"
        id="city"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="state">State</label>
      <input
        required
        type="text"
        id="state"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        style={{
          paddingLeft: ".5rem",
          paddingRight: "1rem",
          paddingTop: ".3rem",
          paddingBottom: ".3rem",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      />
      <label htmlFor="zipCode">Zip code</label>
      <input
        required
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(e) => updateFields({ zipCode: e.target.value })}
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
