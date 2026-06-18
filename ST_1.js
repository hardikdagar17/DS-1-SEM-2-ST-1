function findLargest() {
    let inputs = document.querySelectorAll("input");
    let numbers = [];
    for (let i = 0; i < inputs.length; i++) {
        let value = parseFloat(inputs[i].value);

        if (isNaN(value)) {
            alert("Please enter valid numbers in all fields!");
            return;
        }

        numbers.push(value);
    }
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    alert("Largest number is: " + largest);
}