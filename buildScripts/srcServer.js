import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


//set PORT
const PORT = 7000;
// Create an Instance of express and set to app
const app = express();

// use webpack
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//tell express which routes to handle

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});




app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + PORT);
    }
});
