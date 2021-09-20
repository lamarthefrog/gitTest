const output = document.getElementById("output");

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        output.innerHTML = data.ItemOne;
    });