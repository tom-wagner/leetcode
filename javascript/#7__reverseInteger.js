
const reverse = (x) => {
    let str;
    if (x < 0) {
        str = x.toString().slice(1);
    } else {
        str = x.toString();
    }

    const reversed = str.split('').reverse().join('');
    const num = Number(reversed);
    
    if (num > 2147483647 || num < -2147483647) {
        return 0;
    }
    return x > 0 ? num : -num;
};
