import e from "express";

const app = e();

app.get("/", async (res, req) => {
  return res.send("hello world this is the home page");
});
app.get("/todos", async (res, req) => {
  return res.send("this is a the todos list");
});
app.listen(3000, () => console.log("listening on port 3000"));
