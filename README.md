
# Smart Home System  

A real-time **Smart Home System** using **Node.js, Express, Socket.io, and React**.  
Control and monitor **lights, heater, and security alarms** remotely with real-time updates.  

## Features  
- **Real-time updates** via **Socket.io**  
- Control **lights, heater, buzzer** remotely  
- Displays **temperature & light intensity**  
- Stores sensor states in a **JSON file**  
- Responsive **modern UI** with **React**  

## Technologies Used  
- **React.js** (Frontend UI)  
- **Node.js + Express** (Backend Server)  
- **Socket.io** (Real-time Communication)  
- **CSS** (Styling)  
- **JSON File Storage** (Storing Sensor States)  

## Installation & Setup  

### 1. Clone the Repository  
```bash
git clone https://github.com/YOUR_USERNAME/smart-home.git
cd smart-home
```

### 2. Install Dependencies  

#### Backend (Node.js Server)  
```bash
cd server
npm install
```

#### Frontend (React App)  
```bash
cd ../client
npm install
```

### 3. Run the Project  
#### Start the Backend  
```bash
cd server
node server.js
```
The server should start on **port 5050**.

#### Start the Frontend  
```bash
cd ../client
npm start
```
The React app should open at **`http://localhost:3000`**.

## API Endpoints  

### Get Sensor Data  
```http
GET /sensor
```
#### Response:
```json
{
  "temperature": 25,
  "light": 1,
  "buzzer": 0
}
```

### Control Devices (Turn On/Off)  
```http
POST /control
```
#### Request Body:
```json
{
  "light": 1,
  "buzzer": 0
}
```
#### Response:
```json
{
  "success": true,
  "message": "Device state updated!"
}
```

## Troubleshooting  
### Frontend Not Loading?  
- Make sure the backend is running (`node server.js`).  
- Check the **Console (F12 > Console)** for errors.  

### Backend Errors?  
- Run `npm install` in the **server folder**.  
- Check if **port 5050** is available.  

## Future Improvements  
- Add **Database (MongoDB or Firebase)** instead of JSON file.  
- Implement **User Authentication**.  
- Add **Mobile App** (React Native).  

## License  
This project is **open-source** and available under the **MIT License**.  

Contributions are welcome! If you find bugs or have improvements, feel free to **submit a pull request**.  

---

After saving `README.md`, run the following commands to push it to GitHub:  
```bash
git add README.md
git commit -m "Added README file"
git push origin main
```
