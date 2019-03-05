# this project moved to https://git.aytacworld.com/aytacworld/rss/

# @aytacworld/rss

This package is to provide an easy way to create a valid rss/atom feed page.

You need to create a channel object, and pass it to the function and it will return the feed, which you can use to render your page.

## Install

> npm i -s @aytacworld/rss

## Usage

### Minimal

```javascript
const rss = require('@aytacworld/rss');

const channel = {
  title: 'hello world',
  link: 'https://google.com',
  description: 'this is a channel',
  atomLink: 'https://3fe41c64.ngrok.io/feed.xml',
  items: [
    {
      title: 'post 1',
      link: 'https://1111',
      guid: 'https://1111',
      pubDate: new Date(2018, 8, 2, 5, 2),
      description: 'first post',
    },
    {
      title: 'post 2',
      link: 'https://2222',
      guid: 'https://2222',
      pubDate: new Date(2018, 8, 25, 10, 5),
      description: 'second post',
    },
  ],
};

console.log(rss(channel));
```

### Using with default http server

```javascript
const rss = require('@aytacworld/rss');
const http = require('http');

const channel = {
  ...
};

http.createServer((req, res) => {
  res.writeHeader(200, {'Content-Type': 'text/xml'});
  res.write(rss(channel));
  res.end();
}).listen(8080, () => console.log('server running at 8080'));
```

### Using with express server

```javascript
const rss = require('@aytacworld/rss');
const express = require('express');

const channel = {
  ...
};
const app = express();
app.get('/rss', (req, res) => res.send(rss(channel)))
app.listen(8080, () => console.log('Example app listening on port 8080!'))
```

## MIT License

Copyright (c) 2018 Adem Aytac <adem@aytacworld.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
