const search = [1, 2, 3, 4];
const num = 1;


function linearSearch (search, num) {
    let i = 0 

    while (i < search.length) {
        if (search[i] === num) {
            return i;
        }

        i++;
    }

    return -1
}

console.log(linearSearch(search, num))
