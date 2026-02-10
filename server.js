const express = require('express');
const app = express();
const logicMap= require('./functions.js');

app.use(express.json());

app.get('/health', (req, res) => {
   res.json({
    is_success: true,
    official_email: "rahul1410.be23@chitkara.edu.in",
   })
});


app.post('/bfhl', async (req, res) => {
    const rawkey = Object.keys(req.body)[0];
    const key = rawkey.toLowerCase();
    const value = req.body[rawkey];   

    const fn = logicMap[key];
     if(!fn){
        return res.json({
            is_success: false,
            official_email: "rahul1410.be23@chitkara.edu.in",
            data: null
        });
    }

    let result;

    if(key==="ai"){
        result = await fn(value);   
    }else{
        result = fn(value);
    }

    res.json({
        is_success: true,
        official_email: "rahul1410.be23@chitkara.edu.in",
        data: result
    });
});

app.listen(3000,() => {
  console.log('Server running at http://localhost:3000/bfhl');
});
