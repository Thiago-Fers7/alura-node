import http from 'http';

const PORT = 3000;

const routes = {
  '/': 'Curso de Node',
  '/livros': 'Entrei na página de livros',
  '/autores': 'Entrei na página de autores',
} as const;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});