"use client";

import React from "react";
import { useForm, type FieldValues } from "react-hook-form";

export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Form submitted");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 mt-10"
    >
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded text-black"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded text-black"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords must match",
        })}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded text-black"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="px-4 py-2 bg-blue-800 text-white disabled:bg-gray-500 rounded group flex items-center justify-center"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>Submit</>
        )}
      </button>
    </form>
  );
}
