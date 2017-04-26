'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')

class DatabaseSeeder {

  * run () {
    // make my user the first group leader
    const User = use('App/Model/User')
    const userOne = yield User.find(1)
    const groupOne = Factory.model('App/Model/Group').make()
    groupOne.user_id = userOne.id
    yield groupOne.save()
    let _membership = Factory.model('App/Model/Membership').make()
    _membership.user_id = userOne.id;
    _membership.group_id = groupOne.id
    yield _membership.save()

    // make a bunch of users, have them make groups, then assign a bunch of users to groups
    const users = yield Factory.model('App/Model/User').create(5)
    users.each(function * (user){
      const group = Factory.model('App/Model/Group').make()
      group.user_id = user.id
      yield group.save()
    })
    users.each(function * (user){

      for(let i = 1; i < 5; i++){
        const Group = use('App/Model/Group')
        const group = yield Group.find(i)
        const membership = Factory.model('App/Model/Membership').make()
        membership.user_id = user.id;
        membership.group_id = group.id;
        yield membership.save()
      }

    })
    _membership = Factory.model('App/Model/Membership').make()
    _membership.user_id = userOne.id
    _membership.group_id = 2
    yield _membership.save()
  }

}

module.exports = DatabaseSeeder
