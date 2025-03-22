# 📚 School Management System

A **School Management System** built using **Node.js, Express, Prisma ORM, and MongoDB** to manage students' data, including registration, retrieval, updates, and deletion.

---

## 🚀 Features
- ✅ Student registration with unique **registration number**.
- ✅ Fetch all students or a specific student by **registration number**.
- ✅ Update student details.
- ✅ Soft delete or permanently delete students.
- ✅ RESTful API design with **Prisma ORM** and **MongoDB**.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Prisma ORM)
- **ORM:** Prisma
- **Testing:** Postman
- **Environment Management:** dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/yourusername/school-management-system.git
$ cd school-management-system
```

### 2️⃣ Install Dependencies
```sh
$ npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5001
DATABASE_URL=mongodb+srv://quantneuraljourney:rmsRqexkbV0TCanC@cluster0.worg6.mongodb.net/admin1?retryWrites=true&w=majority&appName=Cluster0

### 4️⃣ Generate Prisma Client & Push Schema
```sh
$ npx prisma generate
$ npx prisma db push
```

### 5️⃣ Start the Server
```sh
$ npm run dev
```
Server will run at **http://localhost:5001** 🚀

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/students` | Create a new student |
| **GET** | `/api/students` | Get all students |
| **GET** | `/api/students/:regNo` | Get a student by registration number |
| **PUT** | `/api/students/:regNo` | Update student details |
| **DELETE** | `/api/students/:regNo` | Delete a student permanently |

---

## 🛠️ Example API Requests (Using Postman)

### **1️⃣ Create a Student**
**POST** `/api/students`
```json
{
  "registrationNo": "STU1001",
  "name": "John Doe",
  "class": "10A",
  "rollNo": 5,
  "contactNumber": "9876543210"
}
```
**Response:**
```json
{
  "id": "60a7b...
  "registrationNo": "STU1001",
  "name": "John Doe",
  "class": "10A",
  "rollNo": 5,
  "contactNumber": "9876543210"
}
```

### **2️⃣ Get All Students**
**GET** `/api/students`

### **3️⃣ Get Student by Registration Number**
**GET** `/api/students/STU1001`

### **4️⃣ Update a Student**
**PUT** `/api/students/STU1001`
```json
{
  "name": "John Doe Updated",
  "class": "10B",
  "rollNo": 6,
  "contactNumber": "9998887776"
}
```

### **5️⃣ Delete a Student**
**DELETE** `/api/students/STU1001`
**Response:**
```json
{
  "message": "Student deleted successfully"
}
```

---

## 🏗️ Project Structure
```
📂 school-management-system
│── 📂 src
│   │── 📂 controllers
│   │   ├── studentController.js
│   │── 📂 routes
│   │   ├── studentRoutes.js
│   │── 📂 config
│   │   ├── database.js
│   │── app.js
│── index.js
│── prisma
│   ├── schema.prisma
│── .env
│── package.json
│── README.md
```

---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

## 🌟 Contributing
If you’d like to contribute, feel free to **fork** this repo and submit a **pull request**!

---

## 💬 Contact
For questions or feedback, reach out via [GitHub Issues](https://github.com/yourusername/school-management-system/issues).

🚀 **Happy Coding!** 🚀

