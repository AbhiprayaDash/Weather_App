import express from 'express';
const app = express();
const port = 3000
import weatherAPI from './weather_api.mjs'

app.get('/weather',async (req,res) => {
    const response =await weatherAPI()
    if(response.error!=null)
    {
        console.log('Invalid data')
    }
    res.send(response.current);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})