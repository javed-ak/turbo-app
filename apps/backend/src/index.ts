import express from 'express';
import { DB_URL } from "@repo/common/config"

const app = express();

console.log(DB_URL)

app.get('/', (req, res) => {
    res.json({
        message: "Hii there..."
    })
})

app.listen(3000)