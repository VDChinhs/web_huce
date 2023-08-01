const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
require('dotenv').config();
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname));

const url = (name)=>{
    return __dirname + '\\scr\\' + name;
};
const checklogin = (req,res,next) =>{
    try {
        let token = req.cookies.token;
        var result = jwt.verify(token,'123456');
    if (result != null || result != "") {
        next();
    }
    } catch (error) {
        res.sendFile(path.join(url("login.html")));
    }
}
app.get('/dangnhap', (req, res)=>{
    res.sendFile(path.join(url("login.html")));
});
app.get('/trangchu', (req, res)=>{
    res.sendFile(path.join(url("main.html")));
});
app.get('/gioithieu', (req, res)=>{
    res.sendFile(path.join(url("about.html")));

});
app.get('/daotao', (req, res)=>{
    res.sendFile(path.join(url("academic.html")));

});
app.get('/lienhe', checklogin, (req, res)=>{
    res.sendFile(path.join(url("contact.html")));
});
app.post('/dangnhap', (req,res) =>{
    var tk = req.body.tk;
    var mk = req.body.mk;
    if (tk == "admin" && mk == "1234") {
        let payload = {
            taikhoan: tk
        };
        console.log(payload);
        let token = jwt.sign(payload,'123456');
        return res.json({
            mes: "OK",
            taikhoan: tk,
            ten:"admin",
            token: token
        });
    }
    if (tk == "vdc" && mk == "23") {
        let payload = {
            taikhoan: tk
        };
        console.log(payload);
        let token = jwt.sign(payload,'123456');
        return res.json({
            mes: "OK",
            taikhoan: tk,
            ten:"VDChinhs",
            token: token
        });
    }
    else{
        return res.json({
            mes:"FAIL"
        });
    }
});
app.post('/lienhe', (req,res) =>{
    let hoten = req.body.hoten;
    let gmail = req.body.gmail;
    let content = req.body.content;
    let data = {
        hoten : req.body.hoten,
        gmail : req.body.gmail,
        content : req.body.content
    }
    console.log(data);
    return res.json({
        mes: "OK"
    });
});

app.listen(PORT,()=>{
    console.log(`${PORT} started`);
});