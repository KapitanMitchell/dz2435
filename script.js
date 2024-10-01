fetch("./student.json")
.then(response => {
    if (!response.ok) {
      throw new Error('Помилка завантаження файлу');
    }
    return response.json();
  })


  .then(data =>{
    let jsonNew = JSON.stringify(data)
    try{
        let parceNew = JSON.parse(jsonNew)
        let newElement = document.createElement("img")
        newElement.src = parceNew.studensPhoto
        document.body.appendChild(newElement)

        let man = document.createElement("p")
        man.textContent = parceNew.studentsName
        document.body.appendChild(man)
    }

    catch(error){
        console.error("Помилка")
    }
  })

