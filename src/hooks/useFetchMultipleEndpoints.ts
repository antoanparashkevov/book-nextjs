import {useEffect, useState} from "react";
import {BodyInit} from "undici-types";

type ErrorType = Error | null;
type Data = any;

const fetchDataWithAbort = async(url: string, controller: AbortController, options: RequestInit) => {
    try {
        const response = await fetch(url, options)

        if( !response.ok ) {
            throw new Error("An error occurred! Try again later!")
        }

        controller.abort();
        return await response.json();
    } catch (error) {
        throw error;
    }
}

const useFetchMultipleEndpoints = () => {
    const [data, setData] = useState<Data>(null);
    const [error, setError] = useState<ErrorType>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [resolved, setResolved] = useState<boolean>(false);

    const controller = new AbortController();

    const fetchData = async (
        urls: string[],
        timeout: number = 7000,
        method: 'GET' | 'POST' = 'GET',
        body: {} | null | undefined
    ) => {

        setData(null);
        setError(null);
        setIsLoading(false);
        setResolved(false);

        const requests = urls.map((url: string) => {
            const options: RequestInit = {
                method,
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }

            if( body ) {
                options.body = JSON.stringify(body);
            }

            return fetchDataWithAbort(url, controller, options)
        })

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                controller.abort();
                reject(new Error('Request timed out'))
            }, timeout)
        })

        try {
            setIsLoading(true);
            const results = await Promise.race([Promise.all(requests), timeoutPromise]);
            console.log(results)
            setResolved(true);
            setIsLoading(false);
            setData(results);
        } catch (error) {
            setResolved(true);
            setIsLoading(false);

            if( error instanceof Error ) {

                if( error.message !== 'The user aborted a request.') {
                    setError(error)
                }
            } else {
                setError(new Error('Something went wrong!'));
            }
        }
    }

    return {
        data,
        error,
        isLoading,
        resolved,
        fetchData
    }
}

export default useFetchMultipleEndpoints;