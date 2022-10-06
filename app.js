const express =require('express');
const app = express();
const port = 8080;
require('./models/index');
app.get('/',async(req,res)=>{
return res.status(200).json(`listerning to port:${port}`)
});
app.listen(port,()=>{
console.log(`Server is listerning to port:${port}`);
})
