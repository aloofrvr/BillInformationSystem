'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.viewBills = (req, res, next) => {
	const queryline = 'select * from BILL where ' + req.query.key + '="' + req.query.value + '"';
	console.log(queryline);
	db.query(queryline,[],(err, result) => {
		res.send(result);
	})
};

exports.updateBills = (req, res, next) => {
	const queryline = 'update BILL set ' + req.body.key + '="' + req.body.value + '" where Billno="' + req.body.billno + '"';
	console.log(req.body);
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
}

exports.mainPage = (req, res, next) => {
	res.send("Welcome to Home Page");
}
