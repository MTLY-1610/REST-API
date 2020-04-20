const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser')
const app = express();


//user List

const users = [];
for (let i = 0; i < 10; i++) {
    users.push({

        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        jobtitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    })
}


//Vesion
const versionApi = '/api/v1';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json());


//GET /api/v1/users
app.get(`${versionApi}/users`, (req, res) => {
    res.send({

        data: users

    })
});


//GET /api/v1/users/:id
app.get(`${versionApi}/users/:id`, (req, res) => {
    const id = req.params.id - 1;

    res.send({

        data: users[id] || null

    })
});

//POST /api/v1/users
app.post(`${versionApi}/users`, (req, res) => {
    const data = req.body;

    users.push(data);

    res.send({
        index: users.length,
        data: users[users.length - 1]

    })
});


//PUT /api/v1/users/:id
app.put(`${versionApi}/users/:id`, (req, res) => {
        const id = req.params.id - 1;
        const data = req.body;

        users[id] = Object.assign(users[id], data);

        res.send({
            index: users.length,
            data: users[id]

        })
    }),

    //DELETE /api/v1/users/:id
    app.delete(`${versionApi}/users/:id`, (req, res) => {
        const id = req.params.id - 1;

        users.splice(id, 1);
        res.send(200);
    })



app.listen(3000, () => console.log('listening'));