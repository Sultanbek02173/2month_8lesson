let date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let cont = document.getElementById('cont-coments');
let date_time = document.getElementById('date');

date_time.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
 
btn.onclick = () => {
    let div = document.createElement('div');
    div.setAttribute('class', 'comments')
    let p = document.createElement('p');
    let timing = document.createElement('p');
    p.setAttribute('class', 'comment');
    p.textContent = `${inp.value}`;
    timing.textContent = `время: ${date.getHours()}:${date.getMinutes()}`
    timing.setAttribute('class', 'timing');
    div.append(p);
    div.append(timing);
    cont.append(div);
}