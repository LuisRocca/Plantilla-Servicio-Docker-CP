const { Client } = require('pg')
const client = new Client({
  user:"root",
  host:"127.0.0.1",
  database:"monitoreo",
  password:"123456",
  port:"5432"
})
// const queryResponse = async (query) => {
//   await client.connect()  
//   const res = await client.query(query)
//   const response = res.rows // Hello world!
//   await client.end()
//   return response
//  }

module.exports = client
