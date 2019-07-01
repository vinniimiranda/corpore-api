"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async faker => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  };
});

Factory.blueprint("App/Models/Company", async faker => {
  return {  
    cnpj: faker.cnpj(14).replace(/\W/gi, ''),
    slug: faker.name()
  };
});

Factory.blueprint("App/Models/Student", async faker => {
  return {  
    firstName: faker.first(),
    lastName: faker.last(),
    email: faker.email(),
    cpf: faker.cpf(11).replace(/\W/gi, ''),
    company_id: 1
  };
});




