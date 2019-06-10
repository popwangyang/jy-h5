const OrderList = require('./data/order')

export const getOrderList = (req) => {
	console.log(JSON.parse(req.body));
	return OrderList;
}