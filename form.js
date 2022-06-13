function submitData (){
    let inputNama = document.getElementById("input-name").value
    let inputEmail = document.getElementById("input-email").value
    let inputPhone = document.getElementById("input-phone").value
    let inputSubject = document.getElementById("input-subject").value
    let inputMessage = document.getElementById("input-message").value

    if(inputNama == ''){
        return alert("Nama wajib diisi")
    } else if(inputEmail == ''){
        return alert("Email wajib diisi")
    } else if(inputPhone == ''){
        return alert("Phone wajib diisi")
    } else if(inputSubject == ''){
        return alert("Subject wajib diisi")
    } else if(inputMessage == ''){
        return alert("Pesan wajib diisi")
    }

    console.log(inputNama);
    console.log(inputEmail);
    console.log(inputPhone);
    console.log(inputSubject);
    console.log(inputMessage);

    let emailReceiver = "jamiludin.ihsan02@gmail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${inputSubject}&body=Hallo nama saya ${inputNama} ${inputMessage} silahkan hubungi ${inputPhone} Email: ${inputEmail}`
    a.click()

    let dataObject = {
        inputNama,
        inputEmail,
        inputPhone,
        inputSubject,
        inputMessage
    }
}

function clearButton() {
    document.getElementById("form-contact").reset();
 }