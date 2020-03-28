const express = require('express')
const mysql = require('mysql')
const path =  require('path')
const app = express()
const port = 3000

const connection = mysql.createConnection({
	host:'sql12.freemysqlhosting.net',
	user:'sql12329757',
	password:'3Q9YrimxTB',
	database:'sql12329757'
})

connection.connect(function(err){
	if(err) console.log(err)
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/website.htm'))
})
app.post('/',function(req,res){
	var data = {
		fullname:req.body.name,
		fathername : req.body.fname,
		address : req.body.address,
		locality : req.body.locality,
		city : req.body.city,
		state : req.body.state 
	};
	connection.query("insert into patent_details SET ?",data,function(err,result){
	if(err) throw err;
	console.log(result)
	})
	console.log(req.body.name)
	console.log(req.body.fname)
	console.log(req.body.address)
	console.log(req.body.locality)
	console.log(req.body.state)
	res.redirect('/')
})
app.get('/:state',function(req,res){
	connection.query("select * from patent_details where state=?",req.params.state,function(err,result){
	if(err) throw err;
	console.log(result)
	res.render('patientsDetails',{page_title:"Corona Patients Table",data:result});	
	})
	
})
app.listen(port,function(){
	console.log('Hello')
	}
)