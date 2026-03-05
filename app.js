// 1. Match first letter of first element in array with first letter of each element in array
// 2. If match, save this letter and then check if the next letter of first element in array matches with next letter of each element in array

var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0][0];
