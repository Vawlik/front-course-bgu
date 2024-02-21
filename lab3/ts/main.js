var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function concatArrays(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var concatButton = document.getElementById('concatButton');
function handleConcatClick() {
    var array1 = [1, 10, 3];
    var array2 = [4, 5, 6];
    var resultArray = concatArrays(array1, array2);
    var resultContainer = document.getElementById('result1');
    if (resultContainer) {
        resultContainer.innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(resultArray);
    }
}
if (concatButton) {
    concatButton.addEventListener('click', handleConcatClick);
}
