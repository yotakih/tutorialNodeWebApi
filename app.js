const express = require('express');
const app = express();
var data = require('./taskController'),
    port = 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/r1', require('./router/r1.js'));

// setting route
app.route('/tasks')
    .get((req, res) => {
        res.json({
            message: "Hello!!"
        });
    });

app.route('/tasks/:taskid')
    .get((req, res) => {
        res.json({
            message: `taskid: ${req.params.taskid}`,
            keyword: `${req.query['keyword']}`,
        })
    });

// app listen
app.listen(port);
console.log(`server start on: ${port}`);
