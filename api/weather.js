const router = require("express").Router();

const {
  getCoolingCountByMonthYear,
  getCoolingDaysByMonthYear,
  getHeatingCountByMonthYear,
  getHeatingDaysByMonthYear,
} = require("../models/weather");

/*
 * Route to get count of days and specific days of the month that heating was used based on month and year provided
 */
router.get("/heating", async (req, res, next) => {
  if (req.query.month && req.query.year) {
    try {
      const { month, year, numMonth = +month, numYear = +year } = req.query;

      const countData = await getHeatingCountByMonthYear(numMonth, numYear);
      const { count } = countData;

      const daysData = await getHeatingDaysByMonthYear(numMonth, numYear);

      countData ? res.status(200).send({count, days: daysData}) : next();
    } catch (err) {
      console.log('error: ', err)
			res.status(500).send({
				error: "Unable to fetch that month.  Please try again later.",
			});
		}
  } else {
    res.status(422).send({
      message: "Please provide a year and a month",
    });
  }
});

/*
 * Route to get count of days and specific days of the month that cooling was used based on month and year provided
 */
router.get("/cooling", async (req, res, next) => {
  if (req.query.month && req.query.year) {
    try {
      const { month, year, numMonth = +month, numYear = +year } = req.query;

      const countData = await getCoolingCountByMonthYear(numMonth, numYear);
      const { count } = countData;

      const daysData = await getCoolingDaysByMonthYear(numMonth, numYear);

      countData ? res.status(200).send({count, days: daysData }) : next();
    } catch (err) {
			res.status(500).send({
				error: "Unable to fetch that month.  Please try again later.",
			});
		}
  } else {
    res.status(422).send({
      message: "Please provide a year and a month",
    });
  }
});

module.exports = router;