# Loop Talk

🚀 **Loop Talk** is a modern, real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless chatting experience with a clean UI, authentication, and real-time messaging.

## 🌟 Features

- 🔐 **User Authentication** (JWT-based secure login/signup)
- 📡 **Real-time Messaging** (WebSocket integration)
- 🖼️ **Media Sharing** (Images, GIFs, and documents)
- ✅ **Group & Private Chats**
- 🎨 **Customizable UI** (Dark & Light mode support)
- 📜 **Message History** (Stored in MongoDB)
- 🔔 **Push Notifications** (Stay updated with new messages)
- 🔍 **User Search & Friend Requests**

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.io
- **Authentication:** JWT & bcrypt
- **Storage:** Cloudinary (for media uploads)
- **State Management:** Redux Toolkit

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v16+)
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/SUMANKAYALS/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**
   ```sh
   # Backend
   cd server
   npm install
   
   # Frontend
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `server` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the application**
   ```sh
   # Start backend
   cd server
   npm start
   
   # Start frontend
   cd ../client
   npm run dev
   ```

5. **Access the app**
   Open your browser and go to `http://localhost:5173`

## 📷 Screenshots

Here are some screenshots of **Loop Talk**:

![Screenshot 1](./screenshots/look4.PNG)
![Screenshot 2](./screenshots/look5.PNG)
![Screenshot 3](./screenshots/look6.PNG)
![Screenshot 4](./screenshots/look7.PNG)
![Screenshot 5](./screenshots/look8.PNG)

## 🚀 Deployment

To deploy the app, consider using:
- **Frontend:** Vercel / Netlify
- **Backend:** Render / DigitalOcean / AWS
- **Database:** MongoDB Atlas

## 🤝 Contribution

Contributions are welcome! If you'd like to improve **Loop Talk**, follow these steps:
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your fork
5. Open a pull request

## 📬 Contact

For any queries or support, reach out at:
📧 Email: your-email@example.com  
🐙 GitHub: [your-github](https://github.com/SUMANKAYALS)
