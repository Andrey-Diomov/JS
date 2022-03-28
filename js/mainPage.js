let tags = ['relax', 'film', 'sport', 'beauty', 'funny']
let names = ['Thai spa', 'Marriott cinema', 'Gym 24', 'Piccadilly', 'Evening with comedians']
let descriptions = ['5 hour complex of services', 'One Flew Over the Nest of Cuckoo', 'Unlimited gym visiting for 1 month',
    'Haircut and manicure, depilation as a gift', 'These successful showmen from the US, UK and Ireland will prove that everyone understands humor.'
]

const flexContainer = document.querySelector('.flex_container')

window.onload = load;

function load() {
    for (let i = 0; i < 10; i++) {
        createContainer();
    }
}

function createContainer() {
    let name = names[Math.floor(Math.random() * names.length)];
    let position = names.indexOf(name);
    let description = descriptions[position];
    let price = Math.floor(Math.random() * 1000);

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML =
        `<img src="img/${position}.jpg" alt="picture">
        
    <table class="table">
        <tr>
            <td class="name"><b>${name}</b></td>
            <td class="icons"> 
                <span class="material-icons">favorite</span>                
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


flexContainer.addEventListener('scroll', function() {
    if (flexContainer.scrollTop + flexContainer.clientHeight >= flexContainer.scrollHeight) {
        load();
    }
});