const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth').default);
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
