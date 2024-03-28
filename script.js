function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (hmtl.classList.contains("light")) {
    // se tiver light mode, adicionar img light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter img normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  // substituir o alt
  if (hmtl.classList.contains("light")) {
    // se tiver light mode, adicionar alt light
    img.setAttribute("alt", "Levi Ackerman - LightMode")
  } else {
    // se tiver sem light mode, manter alt normal
    img.setAttribute("alt", "Levi Ackerman - DarkMode")
  }
}
