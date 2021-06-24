const mysqlPool = require("../lib/mysqlPool");

exports.getHeatingCountByMonthYear = async function (month, year) {
	try {
		const [result] = await mysqlPool.query(
			`SELECT COUNT(DISTINCT DAY(date_time)) as 'count' FROM weather WHERE maximum_temperature > 75 AND MONTH(date_time) = ${month} AND YEAR(date_time) = ${year}`
		);

		return result[0];
	} catch (err) {
		console.log('Error: ', err);
	}
};

exports.getHeatingDaysByMonthYear = async function (month, year) {
	try {
		const [result] = await mysqlPool.query(
			`SELECT DISTINCT DAY(date_time) as 'days' FROM weather WHERE maximum_temperature > 75 AND MONTH(date_time) = ${month} AND YEAR(date_time) = ${year}`
		);

		return result.map(day => day.days);
	} catch (err) {
		console.log('Error: ', err);
	}
};

exports.getCoolingCountByMonthYear = async function (month, year) {
	try {
		const [result] = await mysqlPool.query(
			`SELECT COUNT(DISTINCT DAY(date_time)) as 'count' FROM weather WHERE minimum_temperature < 62 AND MONTH(date_time) = ${month} AND YEAR(date_time) = ${year}`
		);

		return result[0];
	} catch (err) {
		console.log('Error: ', err);
	}
};

exports.getCoolingDaysByMonthYear = async function (month, year) {
	try {
		const [result] = await mysqlPool.query(
			`SELECT DISTINCT DAY(date_time) as 'days' FROM weather WHERE minimum_temperature < 62 AND MONTH(date_time) = ${month} AND YEAR(date_time) = ${year}`
		);

		return result.map(day => day.days);
	} catch (err) {
		console.log('Error: ', err);
	}
};