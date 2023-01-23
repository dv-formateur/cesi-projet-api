const  express = require("express");
const app = express();
// app.use(bodyParser.json());
app.get("/", function (req, res) { res.send("Hello EPSI");
}); app.listen(3002);
