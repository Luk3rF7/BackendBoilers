import * as express from "express";
import { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(3000, () => console.log("listen rodando na porta  3000"));
