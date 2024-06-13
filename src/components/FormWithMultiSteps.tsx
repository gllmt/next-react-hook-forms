"use client";

import React, { useState } from "react";
import { useMultistepForm } from "@/app/form-multi-steps/useMultiStepForm";
import { AddressForm } from "@/app/form-multi-steps/AddressForm";
import AccountForm from "@/app/form-multi-steps/AccountForm";
import { UserForm } from "@/app/form-multi-steps/UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;
  confirmPassword: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  password: "",
  confirmPassword: "",
};

export default function FormWithMultiSteps() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };
  const {
    steps,
    currentStepIndex,
    goTo,
    next,
    back,
    step,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <UserForm key={1} {...data} updateFields={updateFields} />,
    <AddressForm key={2} {...data} updateFields={updateFields} />,
    <AccountForm key={3} {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert("Form submitted");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "#e1e1e1",
        color: "black",
        border: "1px solid white",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {isFirstStep ? null : (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
