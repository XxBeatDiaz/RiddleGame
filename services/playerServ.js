import { getPlayerByName, createPlayer, updatePlayerTimes } from "../API/playerApi.js";
import { Player } from "../classes/Player.js";

// Load a player by name
export async function loadPlayer(playerName) {
    const player = await getPlayerByName(playerName);
    return new Player(player);
}

// Add a new player
export async function addPlayer(username, pass) {
    const obj = {name: username, password: pass, times: []};
    const newPlayer = await createPlayer(obj);
    
    console.log(`New player created: ${newPlayer}`);
    
    return new Player(newPlayer);
}

// Update player times
export async function updateTimesPlayer(player) {
    const response = await updatePlayerTimes(player);
    return;
}