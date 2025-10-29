const express =require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/about', (req, res) => {
    res.send('this is a trial test to learn docker and hosting ');
});
app.post('/data', (req, res) => {
    const obj = req.body;
    res.json(obj);
});
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});