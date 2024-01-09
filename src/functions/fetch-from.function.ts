/**
 * Fetch function
 * @param url URL
 * @param customHeaders Headers for fetch request. Overwrite default headers.
 * @return Parsed JSON data in Promise
 */
export function fetchFrom<T>(url: string, customHeaders?: HeadersInit): Promise<T> {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");

    return fetch(url, {
        mode: "cors",
        headers: customHeaders ?? headers
    }).then((res) => res.json());
}