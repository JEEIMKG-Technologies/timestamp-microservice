class DateFormatService {
    static formatDate(date, format) {
        let formattedDate;
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        switch (format) {
            case 'unix':
                formattedDate = date.getTime();
                break;
            case 'utc':
                formattedDate = date.toUTCString();
                break;
            case 'iso':
                formattedDate = date.toISOString();
                break;
            case 'en':
                formattedDate = date.toDateString();
                break;
            case 'es':
                formattedDate = date.toLocaleDateString('es-ES', options);
                break;
            default:
                formattedDate = { error: "Formato de fecha no válido" };
        }

        return formattedDate;
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
}

module.exports = DateFormatService;