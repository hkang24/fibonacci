function fibonacci() {
    let i1 = 0;
    let i2 = 1;
    console.log("The First 10 Fibonacci Numbers are...")
    console.log(i1);
    console.log(i2);
    for (let i = 0; i < 8; i++) {
        console.log(i1 + i2);
        let i11 = i1;
        i1 = i2
        i2 = i11 + i2;
    }
}