function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}
//generator object based
const sequence = fibonacci(1,1);
sequence.next();
//Multiple times
/*for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}*/