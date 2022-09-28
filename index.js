let spans = document.querySelectorAll("main .container section article span");


console.log(spans.keys())
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => spans.forEach(function callback(span,i) {
        span.innerHTML = json[i].day
    }));