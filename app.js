const express =require('express');
const app = express();
const port = 8080;
app.get('/',async(req,res)=>{
return res.status(200).json(`listerning to port:${port}`)
});
app.listen(port,()=>{
console.log(`Server is listerning to port:${port}`);
})
