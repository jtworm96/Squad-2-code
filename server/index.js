const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/../dist')))

app.get('/test', (req, res) => {
    res.send('Hello Word')
})

app.get('/webhook-test', (req, res) => {
    res.send('Hello Webhook');
})

app.listen(process.env.PORT || 3000, () => console.log('App Server is listerning on port: ', process.env.PORT || 3000))