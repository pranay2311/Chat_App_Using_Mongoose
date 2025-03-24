# Chat App

A simple chat application built using Node.js, Express.js, MongoDB (Mongoose), and EJS.

## Features
- Create and send messages
- View all chats
- Edit messages
- Delete messages
- Messages are stored in MongoDB

## Technologies Used
- **Backend:** Node.js, Express.js, Mongoose
- **Frontend:** EJS, HTML, CSS
- **Database:** MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start MongoDB (if not running):
   ```sh
   mongod
   ```

4. Run the server:
   ```sh
   node app.js
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure
```
chat-app/
│── models/
│   └── Chat.js      # Mongoose Schema for Chat
│── public/
│   └── style.css    # CSS for styling
│── views/
│   ├── index.ejs    # Main chat page
│   ├── create.ejs   # Create message page
│   ├── edit.ejs     # Edit message page
│── app.js           # Main Express app
│── package.json     # Project dependencies
│── README.md        # Documentation
```

## API Endpoints
### **GET /chats**
- Fetch all chats

### **POST /chats**
- Create a new chat message

### **GET /chats/:id/edit**
- Edit a chat message

### **PUT /chats/:id**
- Update a chat message

### **DELETE /chats/:id**
- Delete a chat message

## License
This project is licensed under the MIT License.

## Author
Developed by **[Your Name]**

## Contributions
Contributions are welcome! Feel free to submit a pull request or report issues.

---
Happy coding! 🚀

