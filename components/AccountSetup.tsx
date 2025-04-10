"use client";

import { useFormContext } from "react-hook-form";
import { FormData } from "@/app/page";
import { useTheme } from "@/context/ThemeContext";

export default function AccountSetup() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  const { theme } = useTheme();

  const inputClass = `w-full p-2 border rounded-md ${
    theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
  }`;
  const errorClass = "text-red-500 text-sm mt-1";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Account Setup</h2>
      
      <div>
        <label className="block mb-1 font-medium">Username</label>
        <input
          type="text"
          {...register("username")}
          className={inputClass}
        />
        {errors.username && (
          <p className={errorClass}>{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className={inputClass}
        />
        {errors.password && (
          <p className={errorClass}>{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className={inputClass}
        />
        {errors.confirmPassword && (
          <p className={errorClass}>{errors.confirmPassword.message}</p>
        )}
      </div>
    </div>
  );
}