
const baseUrl = 'http://localhost:3000';
// const baseUrl = '/api';

export async function getUsers() {
    const response = await fetch(`${baseUrl}/users`);
    return response.json();
}