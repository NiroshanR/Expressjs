/*
npm init -y to get package.json
$ npm install express --save - to install express.js
*/  

//Import express
const express = require('express');

//Create an application

const app = express();

const USERS = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    },
    {
    firstName: 'Niroshan',
    lastName: 'Ragulesan',
    batch: 'JJ',
    techStack: 'MERN'
    }
]

// return users with odd id number
app.get('/users/odd', (req, res) =>{
    res.json(USERS.filter(user => user.id % 2 != 0))
})


//Create a Simple GET route
app.get('/', (req, res) =>{
    const niroshanDetails = {
    firstName: 'Niroshan',
    lastName: 'Ragulesan',
    batch: 'JJ',
    techStack: 'MERN'
}
    // res.send('My first dfs node server')
    res.send(niroshanDetails)
})

app.get('/niroshan', (req, res) =>{
    const niroshanDetails = {
    firstName: 'Niroshan',
    lastName: 'Ragulesan',
    batch: 'JJ',
    techStack: 'MERN'
}
    // res.send('My first dfs node server')
    res.json(niroshanDetails)
})

app.get('/users', (req, res) =>{
    const users = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        },
        {
        firstName: 'Niroshan',
        lastName: 'Ragulesan',
        batch: 'JJ',
        techStack: 'MERN'
        }
    ]
    // res.send('My first dfs node server')
    res.json(users)
})

app.get('/about', (req, res) =>{

    res.sendFile(__dirname + '/about.html')
    
})

// to download and file from the website
app.get('/download-img', (req, res) =>{

    res.download(__dirname + '/hp-logo.jpg')
    
})
// Attach the server to a port
app.listen(4000,() =>{
    console.log('Server running successfully on http://localhost:4000')
})

//Run the server


/*
HTTP Methods: (REST APIs)
- GET
- POST
- PUT/PATCH
- DELETE
*/ 