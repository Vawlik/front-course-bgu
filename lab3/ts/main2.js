function romanToInt(s) {
    var romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (i > 0 && romanNumerals[s[i]] > romanNumerals[s[i - 1]]) {
            result += romanNumerals[s[i]] - 2 * romanNumerals[s[i - 1]];
        }
        else {
            result += romanNumerals[s[i]];
        }
    }
    return result;
}
// Обработчик кнопки
document.addEventListener('DOMContentLoaded', function () {
    var convertButton = document.getElementById('convertButton');
    var romanInput = document.getElementById('romanInput');
    var result2 = document.getElementById('result2');
    if (convertButton && romanInput && result2) {
        convertButton.addEventListener('click', function () {
            var romanNumber = romanInput.value.toUpperCase();
            var isValidRoman = /^[IVXLCDM]*$/.test(romanNumber);
            if (isValidRoman) {
                var arabicNumber = romanToInt(romanNumber);
                result2.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(arabicNumber);
            }
            else {
                result2.textContent = "\u041E\u0448\u0438\u0431\u043A\u0430: \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0438\u043C\u0441\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430";
            }
        });
    }
});
