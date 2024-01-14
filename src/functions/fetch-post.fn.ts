export async function fetchPost<T>(url: string, body: unknown) {
    const res = await fetch(url, {
       method: "POST",
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(body), // ?
    });
    return res.json();
}