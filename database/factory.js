'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/Group', (fake) => {
  return {
    group_name: fake.word(),
    group_description: fake.sentence(),
  }
})
Factory.blueprint('App/Model/Membership', (fake) => {
  return {
    user_id: fake.integer({min: 1, max: 5}),
    group_id: fake.integer({min: 1, max: 5}),
  }
})
Factory.blueprint('App/Model/User', (fake) => {
  return {
    firstname: fake.first(),
    lastname: fake.last(),
    email: fake.email(),
    password: fake.password(),
    profile_img_path: "/assets/default.png",
    is_active: true
  }
})
