class DateFormatService {
    static getCurrentTimestamp() {
        return new Date();
    }

    static parseDate(dateString) {
        if (!isNaN(dateString)) {
            return new Date(parseInt(dateString));
        }
        
        return new Date(dateString);
    }

    static isValidDate(date) {
        return !isNaN(date.getTime());
    }

    // response (in unix and utc format)
    static buildResponse(date) {
        return { unix: date.getTime(), utc: date.toUTCString() };
    }
}

module.exports = DateFormatService;