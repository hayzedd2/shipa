## Shipa

- A shipment dashboard

## Features

- Displays shipment analytics using a well detailed chart system, also includes a filter to show time range analytics
- Light/Dark mode
- A notification system
- Real time shipment tracking
- Ability to see shipment status in real time as they change state e.g from warehouse to distribution center (this is currently using a local state for this, but can be upgraded to use webhooks)

## Adding a shipment

```tsx
addShipment({
  customer: "Bola tinubu",
  Pickup: "Agege",
  destination: "Badagry",
  status: "Pending",
  date: new Date().toDateString(),
});
```

## Sending a notification

```tsx
sendNotification({
  message: `Your order was created succesfully with order number SVH-${shipments.length
    .toString()
    .padStart(3, "0")}`,
  type: "success",
});
```
