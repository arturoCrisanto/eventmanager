const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
// const eventRoutes = require("./routes/eventRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
// app.use("/api/events", eventRoutes);
// app.use("/api/bookings", bookingRoutes);

// Error Handling
// app.use(errorHandler);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    )
  )
  .catch((err) => console.error(err));
