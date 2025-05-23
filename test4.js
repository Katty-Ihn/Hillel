
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= count; i++) {
        let number = random(100, 1000);
        if (number % 2 === 0) {
            evenCount++;
            console.log(`Number ${number} - even`);
        } else {
            oddCount++;
            console.log(`Number ${number} — odd`);
        }
    }

    let evenPercent = (evenCount / count * 100).toFixed(2);
    let oddPercent = (oddCount / count * 100).toFixed(2);

    console.log(`\nAll numbers: ${count}`);
    console.log(`Even: ${evenCount} (${evenPercent}%)`);
    console.log(`Odd: ${oddCount} (${oddPercent}%)`);

    if (Math.abs(evenPercent - 50) < 5) {
        console.log("The percantage ratio is close to 50% / 50%.");
    } else {
        console.log("The percantage ratio isn't close to 50% / 50%.");
    }
}

checkProbabilityTheory(10);