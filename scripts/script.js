document.querySelector("#send").addEventListener("click", function() {
    document.querySelector("#main-memory-bank").value = document.querySelector("#text-input").value;
})

document.querySelector("#erase").addEventListener("click", function() {
    document.querySelector("#text-input").value = "";
})
