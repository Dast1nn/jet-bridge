# JET Bridge

A responsive landing page for **JET Bridge**, implemented as a React test assignment based on a Figma design.

## Tech Stack

- React
- TypeScript
- Vite
- SCSS Modules
- Responsive CSS
- Semantic HTML

## Features

- Responsive landing page based on the provided Figma design
- Reusable React components and section-based architecture
- Desktop, tablet, and mobile layouts
- Interactive navigation elements and buttons
- Reviews carousel
- Contact/application form
- Responsive images and decorative assets
- Hover and focus states
- Smooth scrolling
- Accessible form and button markup

## Page Sections

The landing page includes:

- Hero
- About
- Advantages
- Tariffs
- Delivery Steps
- Delivery Types
- Reviews
- Application Form
- Contacts
- Footer

## Project Structure

```text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── Header/
│   └── Footer/
│
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Advantages/
│   ├── Tariffs/
│   ├── Steps/
│   ├── DeliveryTypes/
│   ├── Reviews/
│   ├── ContactForm/
│   └── Contacts/
│
├── styles/
│   ├── _variables.scss
│   └── global.scss
│
├── App.tsx
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd jet-bridge
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Design

The interface was implemented from the provided **JET Bridge Figma design**.

The goal was to reproduce the visual design as closely as possible while keeping the React code maintainable and reusable instead of relying on automatically generated Figma markup.

## Responsive Design

The desktop layout follows the original Figma design.

Additional responsive behavior was implemented for:

- Desktop
- Tablet
- Mobile

Responsive changes include typography, card layouts, image positioning, forms, and navigation elements.

## Styling

The project uses **SCSS Modules** so styles remain scoped to individual components.

Shared colors and layout values are stored in:

```text
src/styles/_variables.scss
```

Main project colors:

```scss
$blue: #03467c;
$orange: #f97014;
$yellow: #f9bc14;
$white: #ffffff;
$black: #000000;
```

## Form

The application form currently demonstrates the frontend form flow.

No backend or API integration is included unless connected separately.

## Code Quality

The project focuses on:

- Clear component structure
- Reusable UI patterns
- TypeScript
- Scoped styles
- Responsive layouts
- Semantic markup
- Maintainable code organization

## Author

Frontend test assignment implementation.
