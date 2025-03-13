document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('pound');
    const result = document.getElementById('result');
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', () => {
        const pound = parseFloat(input.value);

        if (isNaN(pound) || pound <= 0) {
            result.innerText = "Please enter a valid weight in pounds.";
            return;
        }

        const kilogram = (pound * 0.453592).toFixed(2);
        result.innerText = `${pound} lbs = ${kilogram} kg`;
    });
});


