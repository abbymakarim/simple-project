const { revenue } = require('../models')

class revenueController {
  static getRevenue (req, res){
    revenue.findAll({
      attributes: ['month', 'revenue']
    })
    .then(revenues => {
      let arrRevenues = {}
      for(let i = 0; i < revenues.length; i++){
        let month = revenues[i].month
        let amount = revenues[i].revenue
        arrRevenues[month] = amount
      }
      res.status(200).json(arrRevenues)
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    })
  }
}

module.exports = revenueController