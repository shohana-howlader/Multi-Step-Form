# Multi-Step Form with Validation

A responsive multi-step form application built with Next.js, React Hook Form, Zod validation, and TailwindCSS. This application provides a clean and intuitive interface for collecting user information across multiple steps with proper validation.

## Features

- Multi-step form with progress indication
- Form validation using Zod
- Field-level error messages
- Responsive design for mobile and desktop
- Dark mode support
- Summary view before final submission
- Simulated API submission

## Tech Stack

- Next.js 14 (App Router)
- React Hook Form for form handling
- Zod for validation
- TailwindCSS for styling
- React Query for API simulation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Main form page
│   ├── layout.tsx        # Root layout with theme provider
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── PersonalInfo.tsx  # Step 1 component
│   ├── AddressDetails.tsx # Step 2 component
│   ├── AccountSetup.tsx  # Step 3 component
│   └── Summary.tsx       # Summary component
├── context/              # React context
│   └── ThemeContext.tsx  # Theme context for dark mode
├── services/             # API services
│   └── api.ts            # Form submission service
└── README.md             # Project documentation
```

## Usage

1. Fill out the form across three steps:
   - Personal Information (name, email, phone)
   - Address Details (street address, city, zip code)
   - Account Setup (username, password)

2. Review your information in the summary view before submission

3. Submit the form (data will be logged to console)

## Mobile Responsiveness

The form adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.

## Dark Mode

Toggle between light and dark mode using the button in the header. Your preference will be remembered between sessions.
