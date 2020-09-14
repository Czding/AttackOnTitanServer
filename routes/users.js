var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var config = require('../modules/mysqlConfig')

var connection = mysql.createConnection(config)
connection.connect()

var sql = 'SELECT * FROM info'
var addSql = 'INSERT INTO info(id,name) VALUES(?,?)'
var updataSql = 'UPDATE info SET name = ? WHERE id = ?'

router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.get('/getName', function(req, res, next) {
  connection.query(sql,function (err, result) {
    if(err) {
      console.log('[SELECT ERROR] - ',err.message)
      return
    }
    console.log(result)
    res.send(result[0])
  })
})

router.post('/saveName', function(req, res, next) {
  const {id, name} = req.body
  var updateParams = [req.body.name, id]
  connection.query(updataSql,updateParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message)
      return
    } else {
      const data = {
        code: 0,
        msg: '保存成功！'
      }
      res.send(JSON.stringify(data))
    }             
  })
})

module.exports = router
