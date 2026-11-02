// const express = require('express')
// const fs = require('fs');
// const app = express();
// const PORT = 6000;

// function sendHTML(file, res) {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) return res.status(500).send('Error reading HTML file');
//     res.type('html').send(data);
//   });
// }

// app.get('/', (req, res) => sendHTML('index.html', res));
// app.get('/about', (req, res) => sendHTML('about.html', res));
// app.get('/contact', (req, res) => sendHTML('contact.html', res));

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require('express');

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory data
let students = [
    {
        id: 1,
        name: "Rahul",
        course: "B.Tech",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Priya",
        course: "B.Tech",
        branch: "IT"
    }
];


// =============================
// READ - Get all students
// =============================

app.get('/students', (req, res) => {
    res.json(students);
});


// =============================
// READ - Get student by ID
// =============================

app.get('/students/:id', (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});


// =============================
// CREATE - Add student
// =============================

app.post('/students', (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});


// =============================
// UPDATE - Update student
// =============================

app.put('/students/:id', (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;
    student.branch = req.body.branch;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});


// =============================
// DELETE - Delete student
// =============================

app.delete('/students/:id', (req, res) => {

    const id = Number(req.params.id);

    const studentIndex = students.findIndex(
        student => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(
        studentIndex,
        1
    );

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


// Start server
app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});