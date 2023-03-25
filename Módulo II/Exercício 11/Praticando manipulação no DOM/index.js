function addContact(){
    const section = document.querySelector("#contacts-list")
    const h3 = document.createElement("h3")
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const input = document.createElement("input")
    const phoneLi = document.createElement("li") 
    const phoneInput = document.createElement("input")
    const addressLi = document.createElement("li")
    const addressInput = document.createElement("input")

    h3.innerText = "Contato"
    //li.innerText = "Nome: "
    li.innerHTML = "<label for='fullname'>Nome: </label>"
    input.type = "text"
    input.name = "fullname"
    input.id = 'fullname'

    //phoneLi.innerText = "Telefone: "
    phoneLi.innerHTML = "<label for='phone'>Telefone: </label>"
    phoneInput.type = "number"
    phoneInput.name = "phone"
    phoneInput.id = "phone"

    //addressLi.innerText = "Endereço: "
    addressLi.innerHTML = "<label for='address'>Endereço: </label>"
    addressInput.type = "text"
    addressInput.name = "address"
    addressInput.id = "address"

    li.appendChild(input)
    ul.appendChild(li)

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    section.append(h3, ul)
}

function removeContact() {
    const contactSection = document.querySelector("#contacts-list")
    const titles = document.getElementsByTagName("h3")
    const contacts = document.getElementsByTagName("ul")

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}