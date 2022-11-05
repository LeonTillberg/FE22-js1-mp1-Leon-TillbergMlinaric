//Top halvan av uppgifter. 
//Array, For-loop med if-statements.
const rader = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5'];

for (let i = 0; i < rader.length; i++) {
    const el = document.createElement('p');
    document.body.appendChild(el);
    el.innerText = rader[i];
    el.style.textAlign = "center";
    
    const colour = i * 160 / (rader.length - 10);

    el.style.backgroundColor = `hsl(${80-colour}, 100%, 80%)`;
    el.style.fontSize = i+1+"1px";

    console.log(`Det här är en uträkning ${i+20} mitt i en string` );

}

//Nedre halvan av uppgiften.

//Skapar en centrerad div med border som ska hålla i mina listor.
const divElement = document.createElement('div');
document.body.appendChild(divElement);
divElement.style.border = "2px solid black"
divElement.style.display = "flex";
divElement.style.justifyContent = "space-around";


//ol nr.1
const olElement = document.createElement('ol');

olElement.style.margin = "0px";
olElement.style.textAlign = "left";
olElement.style.listStyle = "none";
olElement.style.padding = "20px";
olElement.style.width = "100px";
olElement.style.backgroundColor = "hsl(245, 100%, 83%)";

for (let i = 0; i < 10; i++) {
    const liElement = document.createElement('li');
    olElement.appendChild(liElement);
    divElement.appendChild(olElement);
    liElement.innerText = i;
    
    if (i == 4) {
        liElement.style.backgroundColor = "hsl(245, 100%, 83%)";
    }
    else if (i % 2 == 0) {
        liElement.style.backgroundColor = "black";
        liElement.style.color = "white";
    }
    else if (i % 2 == 1) {
        liElement.style.backgroundColor = "white";
        liElement.style.color = "black";
    }
}


//ol nr.2
const olElement1 = document.createElement('ol');

olElement1.style.margin = "0px";
olElement1.style.textAlign = "center";
olElement1.style.listStyle = "none";
olElement1.style.padding = "20px";
olElement1.style.width = "100px";
olElement1.style.backgroundColor = "hsl(245, 100%, 83%)";

for (let i = 9; i > 0; i--) {
    const liElement1 = document.createElement('li');
    olElement1.appendChild(liElement1);
    divElement.appendChild(olElement1);
    liElement1.innerText = i;

    if (i == 8) {
        liElement1.style.backgroundColor = "hsl(245, 100%, 83%)";
    }
    else if (i % 2 == 0) {
        liElement1.style.backgroundColor = "black";
        liElement1.style.color = "white";
    }
    else if (i % 2 == 1) {
        liElement1.style.backgroundColor = "white";
        liElement1.style.color = "black";
    }
}


//ol nr.3 (array)
const ord = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

const olElement2 = document.createElement('ol');
divElement.appendChild(olElement2);

olElement2.style.margin = "0px";
olElement2.style.textAlign = "right";
olElement2.style.listStyle = "none";
olElement2.style.padding = "20px";
olElement2.style.width = "100px";
olElement2.style.backgroundColor = "hsl(245, 100%, 83%)";

for (let i = 0; i < ord.length; i++) {
    const liElement2 = document.createElement('li');
    olElement2.appendChild(liElement2);
    liElement2.innerText = ord[i];
    if (i == 5) {
        liElement2.style.backgroundColor = "hsl(245, 100%, 83%)";
    }
    else if (i % 2 == 0) {
        liElement2.style.backgroundColor = "black";
        liElement2.style.color = "white";
    }
    else if (i % 2 == 1) {
        liElement2.style.backgroundColor = "white";
        liElement2.style.color = "black";
    }
}