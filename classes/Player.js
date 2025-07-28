export class Player {
    constructor(objPlayer) {
        this._id = objPlayer._id;
        this.name = objPlayer.name;
        this.password = objPlayer.password;
        this.times = objPlayer.times;
    }

    // Take start and end time and return the amount of time taken and save 
    recordTime(start, end) {
        const timeTaken = (end - start) / 1000;
        this.times.push(timeTaken)
        return timeTaken;
    }

    // Show stats of player
    showStats() {
        if (this.times.length === 0) {
            console.log(`${this.name} has no recorded times.`);
            return;
        }
        const numbers = this.times;        
        let sum = 0;
        for (const num of numbers) {            
            sum += num;
        }
        const avg = sum / numbers.length;
        console.log(`${this.name}.\nTotal: ${sum.toFixed(3)}\nAvg: ${avg.toFixed(3)}`);
    }
}