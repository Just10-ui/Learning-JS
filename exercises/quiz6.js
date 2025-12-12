//! hard

const char = '*';
const count = 5;

for (let x = 0; x < count; x++) {
    console.log(' '.repeat(count - x) + char.repeat((x * 2) + 1) + ' '.repeat(count - x));   
}