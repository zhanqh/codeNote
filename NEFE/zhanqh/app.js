// app.js
var express = require('express');
var app = express();

// 加载路由模块
var home = require('./routes/index');
var blog = require('./routes/blog');
var bus = require('./routes/bus');

app.use('/', home);  // 主页
app.use('/blog', blog);	// 博客
app.use('/bus', bus); // 公交查询
app.listen(3030);

console.log("服务器启动成功，地址：127.0.0.1:3030");