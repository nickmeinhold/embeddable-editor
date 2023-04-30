import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const htmlFile = await Deno.readFile('./index.html');
const decoder = new TextDecoder();
const decodedHtml = decoder.decode(htmlFile);

const app = new Application();
const port = 8080;

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

const router = new Router();

router.get("/", async (ctx) => {
  ctx.response.body = decodedHtml;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening at http://localhost:" + port);
await app.listen({ port });


///////

// const htmlFile = await Deno.readFile('./index.html');
// const decoder = new TextDecoder();
// const decodedHtml = decoder.decode(htmlFile);

// const server = Deno.listen({ port: 8080 });
// console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

// for await (const conn of server) {
//   handleHttp(conn).catch(console.error);
// }

// async function handleHttp(conn: Deno.Conn) {
//   const httpConn = Deno.serveHttp(conn);
//   for await (const requestEvent of httpConn) {
//     // Use the request pathname as filepath
//     const url = new URL(requestEvent.request.url);
//     const filepath = decodeURIComponent(url.pathname);

//     // Try opening the file
//     let file;
//     try {
//       file = await Deno.open("." + filepath, { read: true });
//     } catch {
//       // If the file cannot be opened, return a "404 Not Found" response
//       const notFoundResponse = new Response("404 Not Found", { status: 404 });
//       await requestEvent.respondWith(notFoundResponse);
//       continue;
//     }

//     // Build a readable stream so the file doesn't have to be fully loaded into
//     // memory while we send it
//     const readableStream = file.readable;

//     // Build and send the response
//     const response = new Response(readableStream);
//     await requestEvent.respondWith(response);
//   }
// }

//////////

// const response = new Response(decodedHtml, {headers: {'Content-Type': 'text/html'}});
//     await requestEvent.respondWith(response);