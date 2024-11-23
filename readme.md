# Event Management System API

## Project Overview:

Create a backend system that allows users to manage events. The API should handle event creation, user registration, ticket booking, and provide statistics about the events.

| **Feature**              | **Description**                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------- |
| **User Management**      |                                                                                        |
| - Registration & Login   | Users can register and authenticate using JSON Web Tokens (JWT).                       |
| - Role-Based Access      | Assign roles to users (e.g., Admin and Regular User) to control permissions.           |
| **Event Management**     |                                                                                        |
| - Create Events          | Admins can create events with details like name, date, venue, and ticket availability. |
| - Update & Delete Events | Admins can update or delete events as needed.                                          |
| **Ticket Booking**       |                                                                                        |
| - Book Tickets           | Users can book tickets for available events.                                           |
| - Dynamic Ticket Updates | Ticket availability updates in real-time after each booking.                           |
| **Event Statistics**     |                                                                                        |
| - Attendee Reports       | Admins can view the total number of attendees for each event.                          |
| - Revenue Reports        | Revenue summaries are provided based on ticket sales.                                  |
| **Search & Filtering**   |                                                                                        |
| - Event Search           | Search events by name, date, or location.                                              |
| - Event Filtering        | Filter events by categories such as Music, Sports, or Workshops.                       |
| **API Documentation**    |                                                                                        |
| - Swagger/Postman Docs   | All API endpoints are documented for easy integration and testing.                     |

## Tech Stack:

- Backend Framework: `Node.js` with `Express.js`.
- Database: `MongoDB` (NoSQL)
- Authentication: `JSON Web Tokens` (JWT).
- Validation: Joi
- Development Tools:
  - `Nodemon` for live reloads.
  - `Cors` for API integration
  - `Bcypt` for Encyption

---

## Endpoints Examples:

1. User Endpoints:

- POST /api/register – Register a new user.
- POST /api/login – Log in and receive a JWT token.

2. Event Endpoints:

- POST /api/events – Create a new event (Admin only).
- GET /api/events – Fetch all events.
- GET /api/events/:id – Fetch a specific event by ID.

3. Booking Endpoints:

- POST /api/bookings – Book tickets for an event.
- GET /api/bookings/user/:id – Fetch user bookings.

4. Statistics Endpoints:

- GET /api/events/:id/stats – Get statistics for a specific event.
