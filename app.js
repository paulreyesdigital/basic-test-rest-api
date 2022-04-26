const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '500mb' }));

/* ROUTES */
app.get('/pauldo', (req, res) => {
  res.send('Hello World.');
});

app.listen(PORT, ()=> {
  console.log(`SERVER running on PORT ${PORT}`);
});
