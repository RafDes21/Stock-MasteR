import "../env.config";
import app from "./app";
import connectDB from "./db/db";

const PORT = process.env.PORT || 8080;

connectDB()

app.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}`);
  });
