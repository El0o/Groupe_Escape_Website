function continueConctact() {
    var full_info = true;
    var fields = document.querySelectorAll("#personnal-info .required input, #personnal-info .required select");
    fields.forEach(function (field) { 
        if (field.value == "" || field.value == null){
            full_info = false;
        }
    });
    if (!full_info){
        window.alert("Please fill in all the required fields.");
        return;
    }
    else {
        document.getElementById("continue").style.display = "none";
        document.getElementById("personnal-info").disabled = "disabled";
        document.getElementById("message-info").style.display = "flex"
    }
}

window.onload = () => {
    let messageTypeRadio = document.getElementsByName("raison-contact");
    messageTypeRadio[0].addEventListener("click", addMessageBox);
    messageTypeRadio[1].addEventListener("click", addMessageBox);
    messageTypeRadio[2].addEventListener("click", addMessageBox);
}

function addMessageBox() {
    let messageTypeRadio = document.getElementsByName("raison-contact");
    var messageBox = document.getElementById("message-area");
    let labelTxt = "Ecris ici :";

    messageBox.style.display = "block";

    if(messageTypeRadio[0].checked) {
        labelTxt = "Donnes nous tes disponibilés et le nombre de gens avec qui tu voudrais participer :"
    }

    else if(messageTypeRadio[1].checked) {
        labelTxt = "Pose ta question :"
    }

    else if(messageTypeRadio[2].checked) {
        labelTxt = "Dis nous tout :"
    }
    messageBox.textContent = labelTxt;
    

}