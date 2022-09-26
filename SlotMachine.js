document.querySelector('#minBet').addEventListener('click', minBet)
document.querySelector('#maxBet').addEventListener('click', maxBet)

let n1 = 0
let n2 = 0
let n3 = 0


function getRandomNumber(){
    return Math.floor(Math.random() * 2) + 1;
}

function getElement(id){
    return document.getElementById(id);
}

function spin() {
    const firstItem = getElement('firstItem');
    const secondItem = getElement('secondItem');
    const thirdItem = getElement('thirdItem');

    n1 = Math.floor(Math.random() * 5);
    n2 = Math.floor(Math.random() * 5);
    n3 = Math.floor(Math.random() * 5);

    firstItem.innerHTML = `${n1}`;
    secondItem.innerHTML = `${n2}`;
    thirdItem.innerHTML = `${n3}`;

    total -= 5
    document.querySelector('#currentTotal').innerText = total
    if (n1 === n2 && n1 === n3) {
        showSmile();
        total += 10
        document.querySelector('#currentTotal').innerText = total
    }else {
        hideSmile();
    }
}

function spinTwo() {
    const firstItem = getElement('firstItem');
    const secondItem = getElement('secondItem');
    const thirdItem = getElement('thirdItem');

    n1 = Math.floor(Math.random() * 2);
    n2 = Math.floor(Math.random() * 2);
    n3 = Math.floor(Math.random() * 2);

    firstItem.innerHTML = `${n1}`;
    secondItem.innerHTML = `${n2}`;
    thirdItem.innerHTML = `${n3}`;

    total -= 50
    document.querySelector('#currentTotal').innerText = total
    if (n1 === n2 && n1 === n3) {
        showSmile();
        total += 100
        document.querySelector('#currentTotal').innerText = total
    }else {
        hideSmile();
    }
}

function showSmile(){
    const smile = document.getElementById('smile');
    smile.style.display = 'block';
}

function hideSmile(){
    const smile = document.getElementById('smile');
    smile.style.display = 'none';
}

let total = 1000
document.querySelector('#currentTotal').innerText = total

//function minBet (){
//    total.innerText -= 5
//    console.log(n1);
//    if (n1 === n2 && n1 === n3) {
//        showSmile();
//        total.innerText += 10
//    }else {
//        hideSmile();
//    }
//}
//
//function maxBet (){
//    total.innerText -= 50
//    if (n1 === n2 && n1 === n3) {
//        showSmile();
//        total.innerText += 100
//    }else {
//        hideSmile();
//    }
//}

