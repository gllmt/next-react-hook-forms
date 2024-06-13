"use client";

import React, { useState } from "react";

function FormWithoutReactHookForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    if (password !== confirmPassword) {
      setErrors(["Passwords do not match"]);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);

    console.log(
      "Form submitted > ",
      "Email:",
      email,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );
    alert("Form submitted");
  };

  return (
    <form className="flex flex-col gap-y-2 mt-10" onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="flex flex-col gap-y-2 bg-red-100 p-4 rounded-md">
          {errors.map((error) => (
            <p role="alert" key={error} className="text-red-500">
              {error}
            </p>
          ))}
        </div>
      )}

      <label htmlFor="email">
        Email{" "}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        aria-required="true"
        aria-invalid={true}
        maxLength={50}
        name="email"
        id="email"
        placeholder="Email"
        className="px-4 py-2 rounded text-black"
        aria-describedby="emailAccessibleInfos"
      />
      <span id="emailAccessibleInfos" className="sr-only">
        Email is required
      </span>

      <label htmlFor="password">
        Password{" "}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        aria-required="true"
        aria-invalid={true}
        minLength={8}
        maxLength={50}
        name="password"
        id="password"
        placeholder="Password"
        className="px-4 py-2 rounded text-black"
        aria-describedby="passwordAccessibleInfos"
      />
      <span id="passwordAccessibleInfos" className="sr-only">
        Password must be at least 8 characters long and maximum 50 characters
      </span>

      <label htmlFor="confirmPassword">
        Confirm Password{" "}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
      </label>
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        required
        aria-required="true"
        aria-invalid={password !== confirmPassword}
        minLength={8}
        maxLength={50}
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded text-black"
        aria-describedby="confirmPasswordAccessibleInfos"
      />
      <span id="confirmPasswordAccessibleInfos" className="sr-only">
        Confirm Password must be at least 8 characters long and maximum 50
        characters
      </span>

      <button
        className="px-4 py-2 bg-blue-800 text-white disabled:bg-gray-500 rounded group flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>Submit</>
        )}
      </button>
      {/* {isSubmitting && (
        <p className="text-blue-500 max-w-[212px] text-center">
          Your form is being submitted, please wait...
        </p>
      )} */}
    </form>
  );
}

export default FormWithoutReactHookForm;
