const express = require('express');

const app = express();

app.get('/', (req, res) => { 
		res.send('healthcheck');
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
})