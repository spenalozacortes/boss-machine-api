const checkMillionDollarIdea = (req, res, next) => {
    const { weeklyRevenue, numWeeks } = req.body;
    const total = weeklyRevenue * numWeeks;

    if (total < 1000000 || !weeklyRevenue || !numWeeks || isNaN(weeklyRevenue) || isNaN(numWeeks)) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
