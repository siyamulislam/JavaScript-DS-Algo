class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const player = new Stack();
player.add("Rahim")
player.add("Sakib")
player.add("Karim")
console.log(player.stack)
const winner = player.remove()
console.log(winner)
console.log(player.stack)