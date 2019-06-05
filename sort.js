var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'SuzanneCollins', libraryID: 3245 }
];

// console.log(JSON.stringify(library[0]));

var inOrder = ''

const ordered = () => {

    for (let i = 0; i > 0; i++) {

        let order = Object.keys(library[i]).sort();

        order.push(inOrder);
    }
}



ordered();

console.log(inOrder);