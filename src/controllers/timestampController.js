const DateFormatService = require("../services/dateFormatService");

class TimestampController {
    static getTimestamp(req, res) {
        const { date } = req.params;
        const { format } = req.query;

        let parsedDate;
        if (!date) {
            parsedDate = new Date();
        } else {
            parsedDate = DateFormatService.parseDate(date);
            if (!DateFormatService.isValidDate(parsedDate)) {
                return res.json({ error: "Fecha no válida" });
            }
        }

        let response;
        if (format) {
            response = DateFormatService.formatDate(parsedDate, format);
        } else {
            response = {
                unix: DateFormatService.formatDate(parsedDate, 'unix'),
                utc: DateFormatService.formatDate(parsedDate, 'utc'),
                iso: DateFormatService.formatDate(parsedDate, 'iso'),
                en: DateFormatService.formatDate(parsedDate, 'en'),
                es: DateFormatService.formatDate(parsedDate, 'es')
            };
        }

        res.json(response);
    }
}

module.exports = TimestampController;