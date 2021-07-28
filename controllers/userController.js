const { user } = require('../models')
const { checkPassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class userController {
  static login(req, res){
    const { username, password } = req.body
    console.log('masuk')
    user.findOne({
      where : {
        username
      }
    }).then(user => {
      if(user){
        if(checkPassword(password, user.password)){
          const payload = {
            id: user.id,
            email: user.email
          }
          const access_token = generateToken(payload)
          res.status(200).json({access_token})
        } else {
          res.status(401).json({message: 'Invalid Email / Password'})
        }
      } else {
        res.status(401).json({message: 'Invalid Email / Password'})
      }
    }).catch(err => {
      res.status(500).json({message: 'Internal Server Error'})
    })
  }
}

module.exports = userController