export const getDate = (time, lang) => {

    const language = {
        american: 'en-US',
        english: 'en-GB',
        russian: 'ru-RU',
        ukrainian: 'uk-UA'
    }

    const options = {
        //hour12: true, false
        weekday: 'short', //"narrow", "short" и "long"
        //era: "narrow", "short" и "long"
        year: 'numeric', //"numeric" и "2-digit"
        month: 'long', //"numeric", "2-digit", "narrow", "short" и "long"
        day: '2-digit',//"numeric" и "2-digit"
        //hour: "numeric" и "2-digit"
        //minute: "numeric" и "2-digit"
        //seconds: "numeric" и "2-digit"
        //timeZone: "short" и "long"
    }

    try {
        const date = time 
            ? new Date(time).toLocaleDateString(lang ? language[lang] : language.russian, options /*language, options*/) 
            : new Date().toLocaleDateString(lang ? language[lang] : language.russian, options);

        return date;

    } catch (error) {
        
        return error;
    }

}

export const getTime = (time, lang) => {

    const language = {
        american: 'en-US',
        english: 'en-GB',
        russian: 'ru-RU',
        ukrainian: 'uk-UA'
    }

    const options = {
        hour12: true, //true, false
        // weekday: 'short', //"narrow", "short" и "long"
        //era: "narrow", "short" и "long"
        // year: 'numeric', //"numeric" и "2-digit"
        // month: 'long', //"numeric", "2-digit", "narrow", "short" и "long"
        // day: '2-digit',//"numeric" и "2-digit"
        hour: '2-digit', //"numeric" и "2-digit"
        minute: '2-digit', //"numeric" и "2-digit"
        seconds: '2-digit', //"numeric" и "2-digit"
        //timeZone: "short" и "long"
    }

    try {
        const date = time 
            ? new Date(time).toLocaleTimeString(lang ? language[lang] : language.russian, options /*language, options*/) 
            : new Date().toLocaleTimeString(lang ? language[lang] : language.russian, options);

        return date;

    } catch (error) {
        
        return error;
    }

}