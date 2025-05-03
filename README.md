Customer Feedback System

A production-ready feedback management system built with NestJS backend and React frontend.

Requirements

Node.js 22.15.0

npm 11.3.0

MongoDB (local or cloud)

Setup Guide
Backend Installation

Navigate to server directory:
cd server

Install dependencies:
npm install --legacy-peer-deps

Start development server:
npm run start:dev

Successful startup will show:

MongoDB connection check:
- Database: feedback_db  
- Host: localhost:27017
- Ping result: { ok: 1 }
Initial admin user created successfully

Frontend Installation



Navigate to client directory:
cd client

Install dependencies:
npm install --legacy-peer-deps

Launch application:
npm run start

Key Features

Backend

Clean architecture with API, Application, Domain and Persistence layers

Automatic database initialization with:

feedback collection

users collection (pre-seeded admin: admin@example.com/123456)

JWT authentication

Command Pattern implementation

Frontend
React with TypeScript

TailwindCSS for responsive design

Protected routes using HOCs

Context API for state management

Usage
Access the application at: http://localhost:3001

Submit feedback through the form

Admin login via top-right button (credentials above)

Manage feedback in dashboard

API Endpoints
User Registration
POST /api/auth/register
Request body:

json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Architecture
Backend Structure

Controllers: Handle HTTP requests

Services: Business logic

Repositories: Database operations

DTOs: Data validation

Frontend Structure

Components: Reusable UI elements

Pages: Screen layouts

Services: API communication

Contexts: Global state

Security
Password hashing with bcrypt

JWT token authentication

Protected routes validation

