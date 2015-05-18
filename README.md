Getting Started with Express.js

[Express is a minimal and flexible Framework](http://expressjs.com/)

What is Express? Express is a minimal and flexible Node.js web application
framework. It's an easy to use web framework for Node.js that you can get
started with quickly.

Getting Started

Let's begin by installing it. This is assuming we already have Node.js
installed. If not check out my getting started with io.js post. The same
principles apply you just need to install Node instead of io.js.

mkdir myapp
cd myapp
npm init
npm install express --save

After running 'npm init' you'll be prompted with several questions. You can
fill them out or hit enter to get through it. This will create the package.json
file. Next 'npm install express --save' will install express (version 4.12.0 as
of this writing) and all its dependencies as well as save it to the
package.json file.

Just to make sure everything is working let's create a simple 'hello world'
application by creating a new index.js file.

// index.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

All we did here was create a new server using 'app.listen' and setting the http
GET on app to send a 'Hello World' message. FYI any other route other than '/'
will display a 404 error.

Now we need to start the server.

node index.js

There we go! Open up a web browser at http://localhost:3000 and you should see
the 'Hello World' message.

Express Generator

Express application generator is a very useful tool to create an Express
applications skelton. This Command Line Interface (CLI) tool will be used to
help generate everything you need to get up and running quick. Let's install it
first.

npm install express-generator -g

Did it install correctly?

express -h

As long as we see the help output we're ready to go. Let's create a new
application using handlebars as our HTML template engine and add a '.gitignore'
file for our version control when we set that up later.

express --hbs --git ExpressApp

The output should show all the directories it created to help us get started.
Next we need to run install.

cd ExpressApp
npm install

This will install everything we need to get going. Time to run it.

DEBUG=ExpressApp ./bin/www

// if you're on windows use
set DEBUG=myapp & node .\bin\www

If you browse over to 'http://localhost:3000' you'll see the default 'Welcome
to Express' page. Included in the default install is a second route. You can
find that at 'http://localhost:3000/users'.

If you edit the app.js file in the root folder of your application you'll see
the layout. First notice at the top several require statements. This will
include 'morgan','cookie-parser','body-parser' and 'serve-favicon' to name a
few. These are all middleware that adds more functionality to your program.
Middleware as defined by Express is a function with access to the request
object (req), the response object (res), and the next middleware in line in the
request-response cycle of an Express application, commonly denoted by a
variable named next.

The app.js also defines where the routes are, sets the view engine, sets the
logger and sets the error codes. Try creating a new route and see what happens.


15 May 2015 Oleg G.Kapranov
