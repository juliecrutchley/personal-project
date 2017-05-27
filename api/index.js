import request from 'superagent'

export function getFoodFromApi (apiRequest, cb) {
  console.log(apiRequest)

  request
    .get(`https://edamam-edamam-nutrition-analysis.p.mashape.com/api/nutrition-data?ingr=1+${apiRequest}`)
    .set('X-Mashape-Key', 'r3pzrKns1AmshFG6Ankx5cjJWDWIp1xjqGsjsnjrwKCHYIw3ae')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const apiResponse = res.body
      cb(null, apiResponse)
    })
}
