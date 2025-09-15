const search = [1, 1, 3, 4, 5];
const num = 1;

function linearSearch (search, num) {
    let popolnenie = [];
    let i = 0;
    let a = 0;
    
    while (i < search.length) {
        if (search[i] === num) {
            popolnenie[a] = i;
            a++;
        }

        i++;
    }

    if (popolnenie.length < 1) {
        return -1;
    } else {
        return popolnenie;
    }
}

console.log(linearSearch(search, num));
