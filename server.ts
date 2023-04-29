const htmlFile = await Deno.readFile('./index.html');
const decoder = new TextDecoder();
const decodedHtml = decoder.decode(htmlFile);

const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

for await (const conn of server) {
  handleHttp(conn).catch(console.error);
}

async function handleHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const response = new Response(decodedHtml, {headers: {'Content-Type': 'text/html'}});
    await requestEvent.respondWith(response);
  }
}