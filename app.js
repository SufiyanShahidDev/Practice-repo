// 1. Match first letter of first element in array with first letter of each element in array
// 2. If match, save this letter and then check if the next letter of first element in array matches with next letter of each element in array

var longestCommonPrefix = function (strs) {

    if (strs.length === 1) return strs[0];

    let prefix = "";
    let currentLetter = "";

    for (let i = 0; i < strs[0].length; i++) {

        currentLetter = strs[0][i];

        for (let j = 1; j < strs.length; j++) {

            if (currentLetter !== strs[j][i]) {
                return prefix;
            }
        }

        prefix += currentLetter;
    }

    return prefix;
};

// const arr = [""];

let longestCommonPrefixVar = longestCommonPrefix(arr);

console.log("longestCommonPrefixVar: ", longestCommonPrefixVar);