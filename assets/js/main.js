const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  


//stampa i risultati in console
    
for (let i = 0; i < team.length; i++){

    let info = team[i];

    console.log("_______________________");

    console.log(info.name);
    console.log(info.role);
    console.log(info.image);

}


for (let i = 0; i < team.length; i++){

    //seleziono la posizione degli elementi presenti nell'array
    let info = team[i];

    //seleziono l'elemento della dom
    let listGroup = document.querySelector(".listgroup");
    
    //creo una sottolista per ogni oggetto dell'array


    //creo il list item
    let listItem = document.createElement("li");
    listItem.innerHTML = `${info.name}<br>\n ${info.role}<br>\n ${info.image}`;

    //passo i list item nel listgroup
    listGroup.append(listItem);

}




