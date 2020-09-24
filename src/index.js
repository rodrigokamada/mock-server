const fs = require('fs');
const http = require('http');
const path = require('path');

const port = process.argv[2] || 3000;

let responses = [];

const files = fs.readdirSync(path.join(__dirname, '..', 'config')).filter((file) => file.endsWith('.js'));
console.log(`Found ${JSON.stringify(files)} files`);

for (const file of files) {
  console.log(`Reading [${file}] file`);
  try {
    const content = require(path.join(__dirname, '..', 'config', file));
    console.log(`Adding [${content.responses ? content.responses.length : 0}] responses`);
    responses = responses.concat(content.responses);
  } catch (error) {
    console.error(`An error occurred while reading the file [${file}]`);
  }
}

const server = http.createServer((req, res) => {
  console.log(`Receiving request in path [${req.url}] and method [${req.method}]`);

  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-headers', 'authorization,content-type');
  res.setHeader('access-control-allow-methods', 'GET, PUT, POST, PATCH, DELETE, HEAD');
  res.setHeader('cache-control', 'no-cache');

  for (const response of responses) {
    if (req.method === response.method && req.url.includes(response.path)) {
      const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
      console.log(`Returning the status code [${response.statusCode}] and content [${content}]`);

      if (response.headers) {
        for (const key of Object.keys(response.headers)) {
          res.setHeader(key, response.headers[key]);
        }
      }

      res.statusCode = response.statusCode;
      return res.end(content);
    }
  }

  console.log(`Returning the default status code [${res.statusCode}]`);
  return res.end();
});

server.listen(port, () => console.log(`Server listening on port [${port}]`));
