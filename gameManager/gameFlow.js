import { mainMenu } from "../menus/menus.js";
import { signUp, logIn } from "./playerM.js";

// Start the game flow
export async function startGame() {
    console.log("Welcome to the Riddle Game!");
    let player = await logIn();
    if (!player) {
        player = await signUp();
    }
    await mainMenu(player);
}
