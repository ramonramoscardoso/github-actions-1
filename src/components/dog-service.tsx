export async function fetchDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json())

    return response.message;
}