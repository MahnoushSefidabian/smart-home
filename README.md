
# Smart Home Dashboard Website  

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

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/smart-home-system.git
   cd smart-home-system
   ```

2. **Install dependencies for backend:**
   ```bash
   cd smart-home-backend
   npm install
   ```

3. **Install dependencies for frontend:**
   ```bash
   cd ../smart-home-frontend
   npm install
   ```

## Running the Project

### Start Backend Server
```bash
cd smart-home-backend
node server.js
```

### Start Frontend
```bash
cd smart-home-frontend
npm start
```

## API Endpoints

- `GET /sensor` → Fetch sensor data
- `POST /control` → Control devices (Light, Heater, Buzzer)
- `POST /save` → Save sensor values

## Project Structure
```
📁 smart-home-system
 ├── 📁 smart-home-backend
 │   ├── server.js
 │   ├── sensorData.json
 │   ├── package.json
 │
 ├── 📁 smart-home-frontend
 │   ├── src
 │   │   ├── App.js
 │   │   ├── App.css
 │   ├── public
 │   ├── package.json
 │
 ├── README.md
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




