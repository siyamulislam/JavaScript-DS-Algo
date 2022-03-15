class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const player = new Queue();
player.enqueue('Sakib');
player.enqueue('Rahim');
player.enqueue('Karim');
console.log(player.queue);
const winner = player.dequeue();
console.log(winner);
console.log(player.queue)