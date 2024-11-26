function toggleMode() {
  //identifica o documento html que vai sofrer a alteração
  const html = document.documentElement
  //faz a troca para light / dark mode
  html.classList.toggle("light")

  //pega a imagem do avatar
  const img = document.querySelector("#profile img")

  //se tiver light mode, troca de imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png") //trabalha o atributo 'src'
    img.setAttribute(
      //trabalha o atributo 'alt'
      "alt",
      "'Foto de Mayk Brito sorrindo, usando óculos escuros preto, jaqueta cinza escuro e fundo degradê de rosa e azul'"
    )

    //se não tiver light mode, mantem a imagem padrao
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
