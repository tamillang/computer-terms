async function getData() {
    return fetch("word-formatted.json")
        .then(response => response.json());
}
const data  = await getData();
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
    const inputKey = e.target.value.toLowerCase(); 
    var string = "";
    if (inputKey.length >= 2) {
        Object.keys(data).forEach(key => {
            if(key.toLowerCase().match(inputKey) != null) {
                string += key+" --- "+data[key] + "<br>";
            }
        });
        log.innerHTML = string;
    } else {
        log.innerHTML = "";
    }
}

