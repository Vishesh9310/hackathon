const form = document.getElementById("copyCheckForm");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show result box
    resultBox.style.display = "block";
    resultText.textContent = "Checking your copy with AI...";

    // Simulate AI Processing (fake delay)
    setTimeout(() => {
        resultText.textContent = "Analysis Complete ✅: Your copy seems original with 92% uniqueness. Well done!";
    }, 2000);
});