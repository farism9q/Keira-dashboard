![Keira logo](public/keira_banner.png)

# Admin Web Application for Keira | كيرا

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Dashboard Page](#dashboard-page)
  - [Reports Page](#reports-page)
  - [Bookings Page](#bookings-page)
  - [Users and Cars Pages](#users-and-cars-pages)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Backend Repository](#backend-repository)
- [Dependencies](#dependencies)
- [Demo](#demo)

## Overview

This web application is designed for administrators of our app, providing a comprehensive dashboard and various pages to manage different aspects of the application.

## Features

### Dashboard page

- View essential information about the application.
  - Recent reports initiated and new registered users
  - Today bookings
  - Chart displaying registered user types, car rentals, and individuals, as well as a chart illustrating the number of initiated reports for both car rentals and individuals.
  - An area chart is used to illustrate the total transactions related to bookings and profits, providing a straightforward visualization of the financial performance.

### Reports Page

- Access all initiated reports.
- View specific details for each report.
- Enable responses to reports via email and leverage ChatGPT to enhance the quality of responses for better user engagement.

### Bookings Page

- Browse through all bookings made within the application.
- Clicking on a booking provides additional details.

### Users and Cars Pages

- Explore a list of all users and cars registered in the application.
- Clicking on a user or car redirects to a dedicated page with detailed information.

## Usage

**Important:** This project was created as a graduation project, and it cannot be used by the public due to the inclusion of sensitive data.

## Technologies Used

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS, Shadcn
- **HTTP Requests:** Regular JavaScript Fetch API
- **Map Integration:** Leaflet
- **State Management and Query:** React Query

## Backend Repository

The backend services and API for this project are hosted in a separate repository. You can find more information to the backend code at [Link to Backend Repository](https://github.com/farism9q/keira-backend).

## Dependencies

Listed below are the main libraries and dependencies used in this project:

- [date-fns](https://date-fns.org/): Simple and consistent toolset for manipulating JavaScript dates.
- [firebase](https://firebase.google.com/): Used to retrive data from the app.
- [react-hook-form](https://react-hook-form.com/): Performant, flexible, and extensible forms for React.
- [react-hot-toast](https://react-hot-toast.com/): A toast notification library for React.
- [react-icons](https://react-icons.github.io/react-icons/): Popular icons for React applications.
- [react-leaflet](https://react-leaflet.js.org/): React components for Leaflet maps.
- [react-router-dom](https://reactrouter.com/en/main/start/tutorial): Declarative routing for React.js.
- [recharts](https://recharts.org/en-US/guide/getting-started): A composable charting library built on React components.
- [swiper](https://swiperjs.com/react): Powerful and modern touch slider.

## Demo

[Youtube demo](https://www.youtube.com/watch?v=dZubjA6pt4w)
