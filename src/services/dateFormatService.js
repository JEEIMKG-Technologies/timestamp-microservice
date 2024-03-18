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
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return { 
            unix: date.getTime(), 
            utc: date.toUTCString(), 
            iso: date.toISOString(),
            en: date.toDateString(),
            es: date.toLocaleDateString('es-ES', options)
        };
    }
}

module.exports = DateFormatService;