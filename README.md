# Motorcycle and Car Workshop Software - Inventory

## Overview

This software is designed to manage motorcycle and car workshops, providing tools for inventory management, role handling, employee management, sales system, and graph generation. It is ideal for workshops that need efficient and organized control of their daily operations.

## Key Features

### Role Management

- Allows configuring the system according to the type of workshop: motorcycles or cars.
- Automatic update of the database, users, login, and guards according to the type of workshop.

### User Types

- **Admin Users:** Administrators with full access to all system functions.
- **Worker Users:** Users linked to an administrator with limited access according to assigned tasks.

### Inventory Management

- **CRUD (Create, Read, Update, Delete):** 
  - Inventory management with specific filters depending on the spare part.
  - Manageable attributes: spare part, value, date, sale date, who sold it.

### Spare Parts Management

- **CRUD (Create, Read, Update, Delete):**
  - Administration of spare parts types with specific details.
  - Manageable attributes: image, spare part, code, spare part brand.

### Employee Management

- **CRUD (Create, Read, Update, Delete):**
  - Management of workshop employee information.
  - Manageable attributes: photo, name, position.

### Sales System

- Complete management of the sales cycle, from order entry to transaction completion.

### Graph System

- Generation of graphs and reports to visualize workshop performance, sales, inventories, and other key metrics.

## Installation and Configuration

1. Clone the repository:
   ```bash
   git clone https://github.com/EstebanR05/StockTakingApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StockTakingApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables in a `.env` file.
5. Start the server:
   ```bash
   npm start
   ```
backend:
cd /StockTakingApp/Backend
npm start
npm run dev

frontend:
cd /StockTakingApp/Frontend
npm install --force
npm start


version 
Angular CLI: 14.2.0
node js: v16.16.0
---

Thank you for using our motorcycle and car workshop management software!