//
// Object destructuring
//



// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees F in ${city}.`)
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); //Penguin or Self-Published (default)

//
// Array destructuring
//
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [,city , state = 'New York'] = address; 

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium_price] = item;
console.log(`A medium ${itemName} costs ${medium_price}`)