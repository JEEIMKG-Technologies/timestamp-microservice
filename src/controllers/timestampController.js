const DateFormatService = require("../services/dateFormatService");

class TimestampController {
    static getTimestamp(req, res) {
        const dateParam = req.params.date;
        let date;

        if (!dateParam) {
            date = DateFormatService.getCurrentTimestamp();
        } else {
            date = DateFormatService.parseDate(dateParam);
            if (!DateFormatService.isValidDate(date)) {
                return res.json({ error: "Invalid date" });
            }
        }

        const response = DateFormatService.buildResponse(date);
        res.json(response);
    }
}

module.exports = TimestampController;