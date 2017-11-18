'use strict';

const bills = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills',bills.viewBills);
	router.post('/updateBills',bills.updateBills);
	router.get('/',bills.mainPage);

	return router;
};
