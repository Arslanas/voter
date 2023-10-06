
export const POST = (url, body) => {
    fetch(url, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
}