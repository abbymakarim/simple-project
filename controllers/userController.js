const { User } = require('../models')
const { checkPassword } = require('../helper/bcrypt')

class userController {
  static login(req, res){
    const { username, password } = req.body
    User.findOne({
      where : {
        username
      }
    }).then(user => {
      if(user){
        
      } else {
        res.send('Invalid email / password')
      }
    })
  }
}

module.exports = userController