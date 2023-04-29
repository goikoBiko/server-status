import { IncomingMessage, ServerResponse, createServer } from "http";

const hostname = "localhost";
const port = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const uno: string = "goiko";
  res.end(uno);
  console.log("Request!!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
