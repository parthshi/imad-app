var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
     'article-One' :{
    
    title : 'Artical-One | Parth Shinde',
    heading: 'Artical-One',
    date: 'Aug 8, 2017',
    content: `<p>
                This is the Content of my First artical.This is the Content of my first artical.This is the Content of my first artical.This is the Content of my first artical.This is the Content of my first artical.This is the Content of my first artical.This is the Content of my first artical.
            </p>`
    
},
     'article-two' :{ 
    
    
    title : 'Artical-two | Parth Shinde',
    heading: 'Artical-two',
    date: 'Aug 8, 2017',
    content: `<p>
                This is the Content of my second artical.
            </p>`
         
     },
     'article-three' :{ 
   
    title : 'Artical-three | Parth Shinde',
    heading: 'Artical-three',
    date: 'Aug 8, 2017',
    content: `<p>
                This is the Content of my third artical.
            </p>`
    }
};
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="xyz">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlcontent;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articaleName;
    
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
