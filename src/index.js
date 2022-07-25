module.exports = function check(str, bracketsConfig) {
    const confDict = {};
    const stackBr = [];
    bracketsConfig.forEach(([open, close]) => confDict[open] = close);
    for (let i = 0; i < str.length; i++) {
        if (stackBr.length) {
            if (confDict[stackBr[stackBr.length - 1]] === str[i]) {
                stackBr.pop();
                continue;
            }
        }
        if (confDict[str[i]]){
            stackBr.push(str[i]);
            continue;
        }
        return false;
    }
    return !stackBr.length;
}
