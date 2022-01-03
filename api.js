export default async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=94');
    const data = await response.json();

    return data;
}