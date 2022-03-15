class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const id = new Dictionary();
id.add('Sakib', '75');
id.add('Rahim', '101');
id.add('Rarim', '42');
console.log(id.dictionary);
const Sakib = id.get("Sakib")
console.log(Sakib);