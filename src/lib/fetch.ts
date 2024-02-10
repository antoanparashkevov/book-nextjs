function fetchDataWithAbort(url: string, controller: AbortController, body: {}) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body),
            signal: controller.signal
        })
            .then((response) => {
                if( !response.ok ) {
                    throw new Error("Възникна грешка при изпращането на формата! Опитайте отново!")
                }

                return response.json();
            })
            .then((data) => {
                controller.abort();
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function fetchDataFromMultipleEndpoints(urls: string[], body: {}, timeout: number) {
    const controller = new AbortController();

    const requests = urls.map((url: string) => {
        return fetchDataWithAbort(url, controller, body)
    });

    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error("Request timed out"));
        }, timeout)
    });

    return Promise.race([Promise.all(requests), timeoutPromise])
        .then(results => {
            console.log(results)
        })
}