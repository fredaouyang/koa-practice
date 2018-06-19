const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
app.use(router.routes());
app.listen(3000);

// 导入controller middleware:
const controller = require('./controller');
// 使用middleware:
app.use(controller())