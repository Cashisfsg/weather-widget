import { useState, useEffect } from "react";


export const useGeoLocation = () => {

    const [ready, setReady] = useState(false);
    const [position, setPosition] = useState({lat: 0, lon: 0});
    const [error, setError] = useState({
        status: false,
        message: ''
    });

    const sucess = (position) => {
        console.log(position.coords);
        setPosition({...position,
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })
        setReady(true);
    }

    const unsucess = (error) => {
        console.log(error.message);
        setError({...error, status: true, message: error.message});
    }

    const options = {
        enableHighAccuracy: true, //false | true
        timeout: 5000, //целое число (миллисекунды) - количество времени до вызова callback ошибки. Если 0, вызов не происходит.
        maximumAge: 1000 //целое число (миллисекунды) | infinity - максимальное время кеширования позиции.
    };

    useEffect(() => {
        const location = navigator.geolocation;
        location.getCurrentPosition(sucess, unsucess, options)
    }, []);


    return [position, ready, error]

}