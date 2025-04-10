"use client";
import { FormData } from "@/app/page";
import { useTheme } from "@/context/ThemeContext";

interface SummaryProps {
  formData: FormData;
}

export default function Summary({ formData }: SummaryProps) {
  const { theme } = useTheme();
 
  // Add specific conditional classes for additional styling
  const cardClass = "p-6 rounded-lg shadow-md border transition-colors duration-300";
  const cardThemeClass = theme === 'dark'
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';
 
  const sectionClass = "mb-6";
  const titleClass = "text-lg font-medium mb-2";
  const itemClass = "grid grid-cols-3 mb-1";
  const labelClass = "font-medium summary-label"; // Added summary-label class
  const valueClass = "col-span-2 summary-value"; // Added summary-value class

  return (
    <div className={`${cardClass} ${cardThemeClass}`}>
      <h2 className="text-xl font-bold mb-4 summary-content">
        Summary
      </h2>
      <p className="mb-6 summary-content">
        Please review your information before submitting:
      </p>
     
      <div className={sectionClass}>
        <h3 className={`${titleClass} summary-content`}>
          Personal Information
        </h3>
        <div className={itemClass}>
          <span className={labelClass}>Full Name:</span>
          <span className={valueClass}>{formData.fullName}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Email:</span>
          <span className={valueClass}>{formData.email}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Phone Number:</span>
          <span className={valueClass}>{formData.phoneNumber}</span>
        </div>
      </div>
     
      <div className={sectionClass}>
        <h3 className={`${titleClass} summary-content`}>
          Address Details
        </h3>
        <div className={itemClass}>
          <span className={labelClass}>Street Address:</span>
          <span className={valueClass}>{formData.streetAddress}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>City:</span>
          <span className={valueClass}>{formData.city}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Zip Code:</span>
          <span className={valueClass}>{formData.zipCode}</span>
        </div>
      </div>
     
      <div className={sectionClass}>
        <h3 className={`${titleClass} summary-content`}>
          Account Information
        </h3>
        <div className={itemClass}>
          <span className={labelClass}>Username:</span>
          <span className={valueClass}>{formData.username}</span>
        </div>
        <div className={itemClass}>
          <span className={labelClass}>Password:</span>
          <span className={valueClass}>••••••••</span>
        </div>
      </div>
    </div>
  );
}