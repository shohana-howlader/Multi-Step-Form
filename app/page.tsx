"use client";

import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTheme } from "@/context/ThemeContext";

// First, let's define our schemas

// Define the validation schema for each step
const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .min(10, "Phone Number must be at least 10 digits")
    .regex(/^\d+$/, "Phone Number must contain only digits"),
});

const addressDetailsSchema = z.object({
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(1, "Zip Code is required")
    .min(5, "Zip Code must be at least 5 digits")
    .regex(/^\d+$/, "Zip Code must contain only digits"),
});

const accountSetupSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .min(4, "Username must be at least 4 characters"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Define the FormData type for the entire form
export type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  username: string;
  password: string;
  confirmPassword: string;
};

// Create type aliases for each step's data
type PersonalInfoData = z.infer<typeof personalInfoSchema>;
type AddressDetailsData = z.infer<typeof addressDetailsSchema>;
type AccountSetupData = z.infer<typeof accountSetupSchema>;

// Create components for each step
const PersonalInfo = () => {
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
};

const AddressDetails = () => {
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
};

const AccountSetup = () => {
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
};

interface SummaryProps {
  formData: FormData;
}

const Summary = ({ formData }: SummaryProps) => {
  const { theme } = useTheme();
  
  const sectionClass = "mb-6";
  const titleClass = "text-lg font-medium mb-2";
  const itemClass = "grid grid-cols-3 mb-1";
  const labelClass = "font-medium";
  const valueClass = "";

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <p className="mb-6">Please review your information before submitting:</p>

      <div className={sectionClass}>
        <h3 className={titleClass}>Personal Information</h3>
        <div className={itemClass}>
          <span className={labelClass}>Full Name:</span>
          <span className={valueClass + " col-span-2"}>{formData.fullName}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Email:</span>
          <span className={valueClass + " col-span-2"}>{formData.email}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Phone Number:</span>
          <span className={valueClass + " col-span-2"}>{formData.phoneNumber}</span>
        </div>
      </div>

      <div className={sectionClass}>
        <h3 className={titleClass}>Address Details</h3>
        <div className={itemClass}>
          <span className={labelClass}>Street Address:</span>
          <span className={valueClass + " col-span-2"}>{formData.streetAddress}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>City:</span>
          <span className={valueClass + " col-span-2"}>{formData.city}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Zip Code:</span>
          <span className={valueClass + " col-span-2"}>{formData.zipCode}</span>
        </div>
      </div>

      <div className={sectionClass}>
        <h3 className={titleClass}>Account Information</h3>
        <div className={itemClass}>
          <span className={labelClass}>Username:</span>
          <span className={valueClass + " col-span-2"}>{formData.username}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Password:</span>
          <span className={valueClass + " col-span-2"}>••••••••</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { theme, toggleTheme } = useTheme();

  // Custom resolver function that validates only the fields for the current step
  const stepResolver = (formValues: any) => {
    let schema;
    let validationData;

    switch (step) {
      case 1:
        schema = personalInfoSchema;
        validationData = {
          fullName: formValues.fullName,
          email: formValues.email,
          phoneNumber: formValues.phoneNumber,
        };
        break;
      case 2:
        schema = addressDetailsSchema;
        validationData = {
          streetAddress: formValues.streetAddress,
          city: formValues.city,
          zipCode: formValues.zipCode,
        };
        break;
      case 3:
        schema = accountSetupSchema;
        validationData = {
          username: formValues.username,
          password: formValues.password,
          confirmPassword: formValues.confirmPassword,
        };
        break;
      default:
        // For summary step or any other case, no validation needed
        return {
          values: formValues,
          errors: {},
        };
    }

    try {
      // Validate only the current step's data
      schema.parse(validationData);
      return {
        values: formValues,
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to the format expected by react-hook-form
        const formErrors: Record<string, { type: string; message: string }> = {};
        error.errors.forEach((err) => {
          if (err.path && err.path.length > 0) {
            const fieldName = err.path[0] as string;
            formErrors[fieldName] = { 
              type: 'manual', 
              message: err.message 
            };
          }
        });
        return {
          values: {},
          errors: formErrors,
        };
      }
      return {
        values: {},
        errors: {
          root: {
            type: 'manual',
            message: 'Validation failed',
          },
        },
      };
    }
  };

  const methods = useForm<FormData>({
    resolver: stepResolver,
    defaultValues: formData,
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);

    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log("Form submitted:", updatedData);
      // Here you would typically send the data to an API
      alert("Form submitted successfully! Check the console for details.");
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <AddressDetails />;
      case 3:
        return <AccountSetup />;
      case 4:
        return <Summary formData={formData} />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="py-4 px-6 bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Multi-Step Form</h1>
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-800 transition-colors"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex items-center ${
                    i < 4
                      ? "flex-1"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                      step >= i
                        ? "bg-blue-600"
                        : `${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`
                    }`}
                  >
                    {i}
                  </div>
                  {i < 4 && (
                    <div
                      className={`flex-1 h-1 ${
                        step > i
                          ? "bg-blue-600"
                          : `${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span>Personal Info</span>
              <span>Address</span>
              <span>Account</span>
              <span>Summary</span>
            </div>
          </div>

          <div className={`bg-white shadow-md rounded-lg p-6 mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {renderStep()}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  <div className="ml-auto">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {step < 4 ? "Next" : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </div>
  );
}