// get player by name
export async function getPlayerByName(name) {
    try {
        const response = await fetch(`http://localhost:3000/Players/${name}`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching player:', error);
        return;
    }
}

// Create a new player
export async function createPlayer(player) {
    try {
        const response = await fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        });
        const data = await response.json();
        return data.player;
    } catch (error) {
        console.error('Error creating player:', error);
        return;
    }
}

// Update player times
export async function updatePlayerTimes(player) {
    try {
        const response = await fetch(`http://localhost:3000/players`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player), 
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating player times:', error);
        return;
    }
}