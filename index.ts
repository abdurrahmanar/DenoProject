import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/router.ts";

const PORT = 3000;
const app = new Application();
console.log("worked")
app.use(router.routes());
app.use(router.allowedMethods());
 


console.log(`App started and listening on ${PORT} `);

await app.listen({ port: PORT });