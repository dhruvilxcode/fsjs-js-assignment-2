const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', function() {
    // get input value
    const value = input.value;

    if(value !== '') {
        copyToClipboard(value);
        document.getElementById("message").innerHTML = "Copied!";
    } else {
        alert("Write something to copy!!!");
    }
});

// copy to clipboard
async function copyToClipboard(str) {
    await navigator.clipboard.writeText(str);
}