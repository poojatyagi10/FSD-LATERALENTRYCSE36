const http = require('http');

const students = [
    {
        id: 1,
        name: "Rahul Sharma",
        rollNumber: "2026001",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Priya Verma",
        rollNumber: "2026002",
        branch: "IT"
    },
    {
        id: 3,
        name: "Aman Kumar",
        rollNumber: "2026003",
        branch: "CSE"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Student Management System</h1>');
    }

    else if (req.url === '/students' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students));
    }

    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Management Application using Node.js</h1>');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');
    }

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});