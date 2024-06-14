//^^ Selectors 

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//^ Hesap Tablosu




//^ variables

let gelirler = 0

//? Ekle Formu

ekleFormu.addEventListener("submit", (e)=>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    // gelirInput.value = ""
    ekleFormu.reset()
    localStorage.setItem("gelirler",gelirler)
})

window.addEventListener("load",()=>{
    gelirler = Number(localStorage.getItem("gelirler"))
})