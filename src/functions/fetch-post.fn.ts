type FetchMethod = "GET" | "POST" | "PATCH"; // add other which will be used

/**
 *
 * @param url
 * @param method
 * @param body
 */
export async function fetchFn<T>(url: string, method: FetchMethod = "GET", body?: unknown): Promise<T | null> {
    const res = await fetch(url, {
       method: method,
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(body),
    });

    if (!res.ok) {
        console.log('Fetch failed:', res.status);
        return null;
    }

    return await res.json();
}