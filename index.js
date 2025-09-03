let search = [1, 2, 3, 4];
const num = 2;
let i = 0;

function linearSearch (search, num) {
    while (i < search.length) {
        if (search[i] === num) {
            return i;
        }

        i++;
    }

    return i = -1
}

linearSearch(search, num);

console.log(i);
