const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the backend.Hi I am Naman Agarwal');
});

app.listen(PORT, () => {
    console.log(`Server running at http://54.226.124.252:${PORT}`);
});
