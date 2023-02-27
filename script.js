const mostrar = document.getElementById("mostrar")
const ocultar = document.getElementById("ocultar")
const obj = document.getElementById("obj")

const botmostrar = () => {
    obj.style.display = "grid"
}

const botocultar = () => {
    obj.style.display = "none"
}

mostrar.addEventListener("click", () =>{

    botmostrar()
})

ocultar.addEventListener("click", () =>{

    botocultar()
})