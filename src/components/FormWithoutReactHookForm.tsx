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
  };

  return (
    <form className="flex flex-col gap-y-2 mt-10" onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="flex flex-col gap-y-2 bg-red-100 p-4 rounded-md">
          {errors.map((error) => (
            <p key={error} className="text-red-500">
              {error}
            </p>
          ))}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        maxLength={50}
        name="email"
        id="email"
        placeholder="Email"
        className="px-4 py-2 rounded text-black"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        minLength={8}
        maxLength={50}
        name="password"
        id="password"
        placeholder="Password"
        className="px-4 py-2 rounded text-black"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        required
        minLength={8}
        maxLength={50}
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded text-black"
      />
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
