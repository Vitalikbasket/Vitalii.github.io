// Skrypt do obliczeń
function calculate() {
    const inputElement = document.getElementById('inputVariable');
    const inputValue = parseFloat(inputElement.value); // Pobranie wartości z pola tekstowego

    if (!isNaN(inputValue)) {
        // Przykładowe obliczenie (pomnożenie przez 2)
        const result = inputValue * 2;

        // Wyświetlenie wyniku w divie
        const resultElement = document.getElementById('result');
        resultElement.innerText = `Wynik: ${result}`;
    } else {
        alert('Wprowadź poprawną liczbę!');
    }
}
