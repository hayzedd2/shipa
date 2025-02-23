Here’s the improved README in a properly formatted code block:  

```md
# 🚀 Shipa  

A real-time **shipment tracking dashboard** that allows users to monitor their shipments, receive notifications, and visualize shipment analytics.  

## 📌 Features  

✅ **Shipment Analytics:** View shipment data with detailed charts and filter by time range.  
✅ **Light/Dark Mode:** Toggle between light and dark themes.  
✅ **Notification System:** Receive alerts for shipment updates.  
✅ **Real-Time Tracking:** Track shipments as they change status in real time.  
✅ **WebSocket Support:** Live shipment updates (currently works only in development due to Vercel's serverless limitations).  

## 🛠️ Installation & Setup  

Clone the repository:  

```sh
git clone https://github.com/hayzedd2/shipa.git
cd shipa
```

Install dependencies:  

```sh
npm install
# or
yarn install
```

Run the development server:  

```sh
npm run dev
# or
yarn dev
```

> ⚠️ **Note:** WebSockets work only in development because Vercel does not keep a WebSocket server running.  

---

## 📦 Adding a Shipment  

Use the `addShipment` function to add a new shipment:  

```tsx
addShipment({
  customer: "Bola Tinubu",
  pickup: "Agege",
  destination: "Badagry",
  status: "Pending",
  date: new Date().toDateString(),
});
```

---

## 🔔 Sending a Notification  

Use the `sendNotification` function to trigger a notification:  

```tsx
sendNotification({
  message: `Your shipment was created successfully with shipment ID SVH-${shipments.length
    .toString()
    .padStart(3, "0")}`,
  type: "success",
});
```

---

## 🚀 Deployment  

Shipa is built with **Next.js** and is optimized for **Vercel**. However, **WebSocket support requires a separate backend service** (e.g., on Fly.io, Railway, or Render).  


