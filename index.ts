import express, { Application } from "express";
import bodyParser from "body-parser";
import expenseRoute from "./route/expenseRoute";

const app: Application = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use("/expenses", expenseRoute);
app.listen(PORT, () => {
  console.log("app running on port :", PORT);
});
