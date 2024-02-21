function romanToInt(s: string): number {
    const romanNumerals: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && romanNumerals[s[i]] > romanNumerals[s[i - 1]]) {
            result += romanNumerals[s[i]] - 2 * romanNumerals[s[i - 1]];
        } else {
            result += romanNumerals[s[i]];
        }
    }

    return result;
}

// Обработчик кнопки
document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');
    const romanInput = document.getElementById('romanInput') as HTMLInputElement;
    const result2 = document.getElementById('result2');

    if (convertButton && romanInput && result2) {
        convertButton.addEventListener('click', function () {
            const romanNumber = romanInput.value.toUpperCase();
            const isValidRoman = /^[IVXLCDM]*$/.test(romanNumber);

            if (isValidRoman) {
                const arabicNumber = romanToInt(romanNumber);
                result2.textContent = `Результат: ${arabicNumber}`;
            } else {
                result2.textContent = `Ошибка: Неправильный формат римского числа`;
            }
        });
    }
});