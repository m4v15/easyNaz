const fs = require('fs')

const mockResult = JSON.parse(fs.readFileSync('./mock data/mock_result.json'))

module.exports = (req, res) => {
  res.render('serviceInfo', {
    service: mockResult[0]
  })
}
