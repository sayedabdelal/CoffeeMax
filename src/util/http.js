import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();



export async function NewUser(data) {
    return fetch("https://coffeemax-559fd-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
}

export async function fetchUsers({ email, password }) {
    return fetch("https://coffeemax-559fd-default-rtdb.firebaseio.com/users.json")
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                if (data[key].email === email && data[key].password === password) {
                    return { message: "Login successful!", user: data[key] };
                }
            }
            throw new Error("Invalid email or password");
        });
}
