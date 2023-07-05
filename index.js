const http = require('express');
const PORT = 3000;

let app = express();

app.use(express.static('angular-app'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
