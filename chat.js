let messages;
let message_objects_array = [];

let filename = window.location.search.slice(5)


fetch(`./texts/${filename}.txt`)
.then( res => res.text())
.then(text => {
    messages = text
    let message_array = messages.split(" - NM:")
    
    for (let i = 0; i < message_array.length-1; i+=2) {
        message_objects_array.push({
            date:message_array[i],
            message:message_array[i+1].slice(8),
            sender: message_array[i+1].slice(2, 7)
        })
    }

    addMessages()

})


function addMessages(){
    for (let element of message_objects_array) {
        let msg_element = document.createElement("div")
        msg_element.classList.add("message")
        msg_element.classList.add((element.sender == "Ilaha") ? "right" : "left")
        
        let txt_element = document.createElement("span")
        txt_element.classList.add("message-text")
        txt_element.innerText = element.message

        let txt_date_element = document.createElement("span")
        txt_date_element.classList.add("message-date")
        txt_date_element.innerText = element.date

        msg_element.appendChild(txt_element)
        msg_element.appendChild(txt_date_element)

        document.querySelector(".all-messages").appendChild(msg_element)
    }
}

