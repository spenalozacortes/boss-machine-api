// Middleware that won't allow to create a new idea if it's worth less than one million dollars
const checkMillionDollarIdea = (req, res, next) => {
    const { weeklyRevenue, numWeeks } = req.body;
    const total = weeklyRevenue * numWeeks;

    if (total < 1000000 || !weeklyRevenue || !numWeeks || isNaN(weeklyRevenue) || isNaN(numWeeks)) {
        res.status(400).send();
    } else {
        next();
    }
};

module.exports = checkMillionDollarIdea;