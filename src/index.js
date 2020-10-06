module.exports = function check(str, bracketsConfig) {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let firstBracket = str[i] === bracketsConfig[j][0];
            let secondBracket = str[i + 1] === bracketsConfig[j][1];
            if (firstBracket && secondBracket) {
                str.splice(i, 2);
                i = -1;
            }
        }
    }
    if (str.length === 0) {
        return true;
    }
    return false;
};
