"use client";

import { useFormContext } from "react-hook-form";
import { FormData } from "@/app/page";
import { useTheme } from "@/context/ThemeContext";

export default function AddressDetails() {
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
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>
      
      <div>
        <label className="block mb-1 font-medium">Street Address</label>
        <input
          type="text"
          {...register("streetAddress")}
          className={inputClass}
        />
        {errors.streetAddress && (
          <p className={errorClass}>{errors.streetAddress.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">City</label>
        <input
          type="text"
          {...register("city")}
          className={inputClass}
        />
        {errors.city && (
          <p className={errorClass}>{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Zip Code</label>
        <input
          type="text"
          {...register("zipCode")}
          className={inputClass}
        />
        {errors.zipCode && (
          <p className={errorClass}>{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
}