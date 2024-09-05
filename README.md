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

### 1. Clone the Repository
```bash
git clone https://github.com/EstebanR05/StockTakingApp.git
```

### 2. Navigate to the Project Directory
```bash
cd StockTakingApp
```

### 3. Install Backend Dependencies
```bash
cd Backend
npm install
```

### 4. Install Frontend Dependencies
```bash
cd Frontend
npm install --force
```

### 5. Configure Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables.

### 6. Start the Backend Server
Navigate to the backend directory:
```bash
cd StockTakingApp/Backend
npm run dev
```

### 7. Start the Frontend Server
Navigate to the frontend directory:
```bash
cd StockTakingApp/Frontend
npm start
```

### Versions
- **Angular CLI:** 14.2.0
- **Node.js:** v16.16.0

This updated version organizes the steps more clearly and adds a bit of structure for easier understanding.
---

Thank you for using our motorcycle and car workshop management software!