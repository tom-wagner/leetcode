const hash = {
    ')': '(',
    '}': '{',
    ']': '[',
};

const isValid = (s) => {
    const hash = { ')': '(', '}': '{', ']': '[' };

    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
            continue;
        }
        
        if (stack.pop() !== hash[char])  {
            return false;
        }
    }
    
    return stack.length === 0;
};