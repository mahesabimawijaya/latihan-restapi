import express, { Request, Response } from "express";
import axios from "axios";
const router = express.Router();

//expense list
router.get("/", async (req: Request, res: Response) => {
  try {
    const expense = await axios.get("http://localhost:3000/expenses");
    res.status(200).send(expense.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//expense detail
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const expenseDetails = await axios.get(
      `http://localhost:3000/expenses/${id}`
    );
    res.status(200).send(expenseDetails.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//add expense(post)
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, nominal, category } = req.body;
    const expensePost = await axios.post("http://localhost:3000/expenses", {
      name: name,
      nominal: nominal,
      category: category,
    });
    res.status(200).send({
      message: "data input success",
      data: expensePost.data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//edit expense(put)
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, nominal, category } = req.body;
    const expensePut = await axios.put(`http://localhost:3000/expenses/${id}`, {
      name: name,
      nominal: nominal,
      category: category,
    });
    res.status(200).send({
      message: "data edit success",
      data: expensePut.data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete expense
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expenseDelete = await axios.delete(
      `http://localhost:3000/expenses/${id}`
    );
    res.status(200).send({
      message: "data deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//sort date & categories belum hehe

export default router;
