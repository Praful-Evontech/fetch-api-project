function getData() {
    fetch('../todos/brad.json').then((resource) => {
        console.log('resolved', resource);
        return resource.json();
    }).then((data) => {
        console.log(data);
        data.forEach(datas => {
            const cardData = document.createElement('div');
            cardData.innerHTML = "Name :" + " " + datas.name + ", " + "Age :" + " " + datas.age + ", " + "Mail :" + " " + datas.email + ", " + "Position:" + " " + datas.position;
            document.querySelector('#feed').appendChild(cardData);
        })

    }).catch((err) => {
        console.log('rejected', err);
    });
}