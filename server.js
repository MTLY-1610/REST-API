const express = require('express');
const faker = require('faker');
const app = express();


//user List

const users = [];
for(let i = 0; i <10; i++){
    users.push({

        firstname:faker.name.firstName(),
        lastname: faker.name.lastName(),
        jobtitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    })
}


//Vesion
const versionApi = '/api/v1';
 

//GET /api/v1/users
app.get (`${versionApi}/users`, (req, res) => {
    res.json({

        data: users
        
    })
});


//GET /api/v1/users/:id
app.get (`${versionApi}/users/:id`, (req, res) => {
    const id = req.params.id -1;

    res.json({
        
        data: undefined
        
    })
});

//POST /api/v1/users

//PUT /api/v1/users/:id

//DELETE /api/v1/users/:id




app.listen(3000, () => console.log('rouston'));