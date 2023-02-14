const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
app.use(express.static(__dirname+ '/public'))

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'))
})

app.get('/productos/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos1.html'))
})
