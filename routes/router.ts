import { Router } from "https://deno.land/x/oak/mod.ts";
import { getWeather, getAll } from "../controllers/controllers.ts";

const router = new Router();

router.get('/weather', getWeather)
router.get('/civs', getAll)
export default router;