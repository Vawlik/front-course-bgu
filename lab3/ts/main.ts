type Concat<T extends any[], U extends any[]> = [...T, ...U];


function concatArrays<T extends any[], U extends any[]>(arr1: T, arr2: U): Concat<T, U> {
    return [...arr1, ...arr2];
}


const concatButton = document.getElementById('concatButton') as HTMLButtonElement;

function handleConcatClick() {

    const array1: number[] = [1, 10, 3];
    const array2: number[] = [4, 5, 6];


    const resultArray = concatArrays(array1, array2);


    const resultContainer = document.getElementById('result1');
    if (resultContainer) {
        resultContainer.innerText = `Результат: ${resultArray}`;
    }
}


if (concatButton) {
    concatButton.addEventListener('click', handleConcatClick);
}