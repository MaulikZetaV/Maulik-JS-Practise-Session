// Display Name Live (Input Event)
const nameInput = document.getElementById("name");
const output = document.getElementById("output");

nameInput.addEventListener("input", () => {
    output.textContent = nameInput.value;
});

