const express = require('express');
const app = express();
var port=3000;
var host='localhost';
//main code
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/src/views/index.html')
});
app.get('/styles/style.css',(req,res)=>{
    res.sendFile(__dirname+'/src/styles/styles.css')
});
app.get('/static/js/app.js',(req,res)=>{
    res.sendFile(__dirname+'/src/js/app.js')
});
app.get("/static/play/video/mp4/010",(req,res)=>{
    res.sendFile(__dirname+'/src/media/2301giljian.mp4')
});
//listening stuff
app.listen(port,host,()=>{
    console.log(`Server Running At http://${host}:${port}/\nCtrl+C To Cancel The Server.`);
});
