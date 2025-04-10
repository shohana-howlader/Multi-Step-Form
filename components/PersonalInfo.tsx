"use client";

import { useFormContext } from "react-hook-form";
import { FormData } from "@/app/page";
import { useTheme } from "@/context/ThemeContext";

export default function PersonalInfo() {
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
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          {...register("fullName")}
          className={inputClass}
        />
        {errors.fullName && (
          <p className={errorClass}>{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className={errorClass}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          {...register("phoneNumber")}
          className={inputClass}
        />
        {errors.phoneNumber && (
          <p className={errorClass}>{errors.phoneNumber.message}</p>
        )}
      </div>
    </div>
  );
}