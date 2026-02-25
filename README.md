# 🛒 E-Commerce Product API

A robust **Express.js** REST API designed for managing a product inventory. This project features full CRUD capabilities, bulk data insertion, and specialized update routes for efficient inventory management.

---

## 🔗 Project Links
*   **GitHub Repository:** [https://github.com](https://github.com)
*   **Live Deployment:** [View on Render](https://your-render-app-link.onrender.com)
*   **Postman Documentation:** [View API Docs](https://documenter.getpostman.com)

---

## 🛠️ Features
- **Full CRUD**: Create, Read, and Update products.
- **Bulk Operations**: Add multiple products in a single request.
- **Specialized Updates**: Dedicated routes for price and stock adjustments.
- **CORS Enabled**: Ready for cross-origin frontend integration.

---

## 📂 Project Structure
```text
├── index.js          # Server logic and route handlers
├── package.json      # Project metadata and dependencies
├── package-lock.json # Version locking for dependencies
└── .gitignore        # Excludes node_modules and env files
```
## 🛣️ API Endpoints


| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | Health check (Server status) |
| **GET** | `/products` | Fetch all products |
| **GET** | `/products/:id` | Fetch a specific product by ID |
| **GET** | `/products/category/:name` | Filter products by category |
| **POST** | `/products` | Create single or bulk products |
| **PUT** | `/products/:id` | Replace entire product details |
| **PUT** | `/products/:id/stock` | Update only stock levels |
| **PUT** | `/products/:id/price` | Update only product price |

---

## 🏃 Local Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com
   cd repo-name

1. **Install Dependencies**
   ```bash
   npm install

1. **Start the Server**
   ```bash
   node index.js

*The server will start on http://localhost:3000*


## 🧪 Testing with Postman

1. **Open Postman**.
2. **Select the Method** (GET/POST/PUT) and enter the **URL**.
3. **For POST and PUT requests**:
   - Go to the **Body** tab.
   - Select **raw**.
   - Select **JSON** from the dropdown menu.
4. **Example JSON Body** for a new product:
   ```json
   {
     "id": 6,
     "name": "Bluetooth Speaker",
     "category": "Electronics",
     "price": 2999,
     "stock": 20,
     "rating": 4.6
   }
