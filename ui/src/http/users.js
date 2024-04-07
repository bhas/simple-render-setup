
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getUsers() {
    const response = await fetch(`${baseUrl}/users`);
    return response.json();
}