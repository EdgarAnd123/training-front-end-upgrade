export default async function api(url) {
    if(url) {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
}