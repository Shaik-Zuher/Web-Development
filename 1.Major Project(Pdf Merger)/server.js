import express from 'express';
import path from 'path';
import {mergeit} from "./tool.js";
const app=express();
const __dirname=path.resolve();
import multer from 'multer';
const files=multer({dest:'uploaded files/'});
app.use('/static',express.static('result'));
const port=3000;
app.get('/',(req,res)=>{
  app.use(express.static('main'));
  app.use(express.static('main/Faviicon'));
  res.sendFile(path.join(__dirname,"main/pdf.html"));
})
app.post('/merge',files.array('Pdf',2),async(req,res,next)=>{
    console.log(req.files)
    await mergeit(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
    res.redirect("http://localhost:3000/static/merged.pdf")
})
app.listen(port,()=>{
    console.log(`Your Localhost is https://localhost:${port}`);
});