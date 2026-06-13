# 📦 **StockLiser – Backend**
Modern backend built with **Node.js**, **Express**, **MongoDB**, and **Session‑based Authentication**.

This backend powers the StockLiser application — a platform that allows users to:

- Authenticate securely  
- Save & manage memes  
- Search & save stocks  
- Maintain personal watchlists  
- Store user‑specific data in MongoDB  

---

# 🔗 **Links**
- **Live App:** : https://backend-stock-sv6k.onrender.com

---

# 🚀 **Project Setup**

## Install dependencies
```bash
npm i
```

## Run the server
```bash
npm start
```

## Environment variables
Create a `.env` file:

```
MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_secret
```

---

# 🏗️ **Project Structure**

```
api/
  auth/
    auth.controller.js
    auth.routes.js
    auth.service.js
  meme/
    meme.controller.js
    meme.routes.js
    meme.service.js
  stock/
    stock.controller.js
    stock.routes.js
    stock.service.js
  user/
    user.controller.js
    user.routes.js
    user.service.js

middlewares/
  requireAuth.js

database.js
server.js
```

---

# 🔐 **Authentication**
Session‑based authentication using:

- `express-session`
- HTTP‑only cookies
- MongoDB‑stored user data
- `requireAuth` middleware to protect routes

### Auth Endpoints
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/signup` | Create new user |
| POST | `/api/auth/logout` | Logout user & destroy session |
| GET | `/api/auth/me` | Get logged‑in user |

---

# 😂 **Meme API**
Each user has their own meme collection stored inside their user document.

### Meme Endpoints
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/meme/save` | Save meme to user |
| GET | `/api/meme` | Get all user memes |
| GET | `/api/meme/:id` | Get single meme |
| DELETE | `/api/meme/:id` | Remove meme |

### Meme Storage Structure
```js
savedMemes: [
  { id, url }
]
```

---

# 📈 **Stock API**
Users can save stocks to a personal watchlist.

### Stock Endpoints
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/stock/save` | Save stock to watchlist |
| GET | `/api/stock` | Get all saved stocks |
| DELETE | `/api/stock/:id` | Remove stock |

### Stock Storage Structure
```js
savedStocks: [
  { stockId, symbol, price }
]
```

---

# 👤 **User API**
General CRUD operations (not used by frontend but available).

### User Endpoints
| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get user by ID |
| POST | `/api/user` | Add user |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

---

# 🧠 **Services Overview**

## **auth.service**
- Hashes passwords with bcrypt  
- Validates credentials  
- Creates new users  

## **meme.service**
- Stores memes inside user document  
- Handles CRUD operations  

## **stock.service**
- Stores stocks inside user document  
- Handles CRUD operations  

## **user.service**
- General user CRUD  

---

# 🧱 **Middlewares**

## **requireAuth**
Protects routes by checking:

```js
if (!req.session.user) return 401
```

Adds:
```js
req.loggedinUser = req.session.user
```

---

# 🗄️ **Database**
MongoDB Atlas connection via:

```js
connectToDB()
db = client.db("stockliser")
```

Collections:
- `users`

User document structure:

```js
{
  _id,
  username,
  fullname,
  password (hashed),
  savedMemes: [],
  savedStocks: []
}
```

---

# 🧪 **Testing the API**
You can use:

- Postman  
- Thunder Client  
- cURL  
- Browser (for GET routes)  
---

# 👥 **Author**
- **Yahav Mor**
---

# 🤝 **Contributions**
Pull requests are welcome.  
Found a bug? Open an issue.

---

# 📜 License
MIT License.
  
- README לפרונטנד  
- להוסיף תמונות  
- גרסה בעברית
