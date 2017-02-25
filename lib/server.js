const express = require('express')

const PORT = 10000

const app = express()

app.get('/', (req, res) => res.status(200).send('Hello World'))

const server= app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

module.exports = server