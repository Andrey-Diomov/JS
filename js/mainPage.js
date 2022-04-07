let tags = ['relax', 'film', 'sport', 'beauty', 'funny']
let names = ['Thai spa', 'Marriott cinema', 'Gym 24', 'Piccadilly', 'Evening with comedians']
let descriptions = ['5 hour complex of services', 'One Flew Over the Nest of Cuckoo', 'Unlimited gym visiting for 1 month',
    'Haircut and manicure, depilation as a gift', 'These successful showmen from the US, UK and Ireland .'
]

const flexContainer = document.querySelector('.flex_container')

const upButton = document.querySelector(".upButton");
const lastPositionButton = document.querySelector(".lastPositionButton");

let scrollPosition = 0;

window.onload = load;

function load() {
    for (let i = 0; i < 9; i++) {
        createContainer();
    }
}

function createContainer() {
    let name = names[Math.floor(Math.random() * names.length)];
    let position = names.indexOf(name);
    let description = descriptions[position];
    let price = Math.floor(Math.random() * 1000);
    let tag = tags[position];

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML =
        `<img src="img/${position}.jpg" alt="picture">
        
    <table class="table">
        <tr>
            <td class="name"><b>${name}</b></td>
            <td class="icons"> 
                <span class="material-icons">favorite</span>   
                <div class="tag">${tag}</div>             
            </td>
        </tr>
        <tr class="trMarkBottomLine">
            <td class="description">${description}</td>            
        </tr>
        <tr>
            <td class="price">$${price} </td>
            <td>
                <input class="card" type="submit"  name="Card" value="Add to Card">
            </td>
        </tr>
    </table>`;

    flexContainer.appendChild(container);
}


window.addEventListener('scroll', function() {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        load();
    }
});

window.onscroll = function() {
    visibilityButtonFunction()
};

function visibilityButtonFunction() {
    if (document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }

    if (scrollPosition != 0) {
        lastPositionButton.style.display = "block";
    } else {
        lastPositionButton.style.display = "none";
    }
}

function backFunction() {
    lastPositionButton.style.display = "none";
    window.scrollTo(0, scrollPosition);
    scrollPosition = 0;
}

function upFunction() {
    scrollPosition = window.scrollY;
    window.scrollTo(0, 0);
}

let selectTag = "all";

function filterSelection(selectTag) {
    if (selectTag === "all") selectTag = "";
    let container = document.getElementsByClassName("container");

    let tag;
    for (let i = 0; i < container.length; i++) {
        tag = container[i].getElementsByClassName('tag');

        if (!(tag[0].innerHTML.toLowerCase().includes(selectTag))) {
            container[i].style.display = "none";
        } else {
            container[i].style.display = "";
        }
    }
    document.getElementById('searchbar').value = '';
}

function inputSearch() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let container = document.getElementsByClassName("container");

    let name, desc, tag;
    for (let i = 0; i < container.length; i++) {

        tag = container[i].getElementsByClassName('tag');
        name = container[i].getElementsByClassName('name');
        desc = container[i].getElementsByClassName('description');


        if (!(tag[0].innerHTML.toLowerCase().includes(input) || desc[0].innerHTML.toLowerCase().includes(input) ||
                name[0].innerHTML.toLowerCase().includes(input))) {
            container[i].style.display = "none";
        } else {
            container[i].style.display = "";
        }
    }
}