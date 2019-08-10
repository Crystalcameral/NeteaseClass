const express = require("express");
const path = require("path");
const info = require("./mock/info.json");
const app = express();
const router = express.Router();
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});
router.get("/info", (req, res) => {
    res.json(info);
});
app.use("/api", router);
app.listen(3000, () => {
    console.log("apiserver is running in 3000");
});