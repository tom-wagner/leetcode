const isPalindrome = (x) => {
    let backwards = x.toString().split('').reverse().join('');
    return backwards === x.toString();
};
