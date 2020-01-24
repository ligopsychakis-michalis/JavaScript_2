const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

function createListItems(hobbies){
    //append to body the ul element
    const body = document.getElementById("all")
    let unList = document.createElement("ul");
    body.appendChild(unList);

    //append to ul the list items
    hobbies.forEach((hobbie) => {
        let listItem = document.createElement("li");
        unList.appendChild(listItem);
        document.querySelector("ul li:last-child").innerText = hobbie;
    });
}

createListItems(myHobbies);