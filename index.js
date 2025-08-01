import e from "express";

const app = e();

app.get("/", async (req, res) => {
  return res.send("hello world this is the home page");
});
app.get("/todos", async (req, res) => {
  return res.send("this is a the todos list");
});
app.listen(3000, () => console.log("listening on port 3000"));
