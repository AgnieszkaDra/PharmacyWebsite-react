const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/message', (req, res) => {
  const data = { message: 'Hello from Node.js backend!' }
  res.json(data)
})

app.post('/', (req, res) => {
  res.json({ message: 'Data received' })
})

app.use("/", (req, res) => {
  res.send("Server is running.")
})

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'signup'
})

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

app.listen(8081, () => {
  console.log("Running, ")
})

// https://www.bing.com/videos/riverview/relatedvideo?q=register+form+with+axios+and+express&mid=E102240D5B620A9CF662E102240D5B620A9CF662&FORM=VIRE
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const app = express()
// const PORT = 3003

// app.use(cors())
// app.use(bodyParser.json())

// app.get('/message', (req, res) => {
//   const data = { message: 'Hello from Node.js backend!' }
//   res.json(data)
// })

// app.post('/', (req, res) => {
//   res.json({ message: 'Data received' })
// })
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })
