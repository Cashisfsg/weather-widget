import { useState, useEffect } from "react";

export const useFetching = ({lat, lon}) => {

    const [data, setData] = useState({});

    const [error, setError] = useState({
        status: false,
        message: ''
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=df362dee170e8421f62d3f27e5a7d7f4`)

                if(!response) {
                    throw new Error(response.statusText)
                }

                await response.json()

                .then(data => setData(data))
            } catch (error) {
                console.log(error.message);
                setError({
                    ...error,
                    status: true,
                    message: error.message,
                });
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();

    }, [])

    return [{data, isLoading, error}]
}