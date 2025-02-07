function toggleMode() {
  const html = document.documentElement

  /* 
  // Verifica se o elemento 'html' possui a classe 'light'
  if (html.classList.contains("light")) {
  // Se a classe 'light' estiver presente, ela é removida
    html.classList.remove("light")
  } else {
   // Se a classe 'light' não estiver presente, ela é adicionada
    html.classList.add("light")
  } */

  /*codigo pronto do botao*/
  html.classList.toggle("light")

  /*pega a imagem que está dentro do elemento com o id profile*/
  const img = document.querySelector("#profile img")
  /*ele verifica se o site está no "modo claro"*/
  if (html.classList.contains("light")) {
    /*Se o modo claro estiver ativado, o código muda a imagem do perfil*/
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
