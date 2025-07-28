import readline from "readline-sync";
import { addPlayer,loadPlayer } from "../services/playerServ.js";

// Sign up a new player
export async function signUp() {
    console.log(`create new user`);
    const username = readline.question(`Enter name> `);
    const password = readline.question(`Enter password> `);
    const player = await addPlayer(username, password);
    return player;
}

// Log in an existing player
export async function logIn() {
    const username = readline.question(`Enter your name> `);
    // const password = readline.question(`Enter your password> `);
    const player = await loadPlayer(username);
    if (!player.name) {
        console.log(`Player with name ${username.toUpperCase()} does not exist.`);
        return false;
    } else {
        console.log(`You connect with: ${player.name}`);
    }
    return player;
}
