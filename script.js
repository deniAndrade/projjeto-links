function toggLeMode() {
 const html= document.documentElement

//  if (html.classList.contains("light")){
//   html.classList.remove("light")
//  }else{

//   html.classList.add("light")
//  }



/*fuciona semelhante ao codigo de cima porem simplificado */

html.classList.toggle("light")




// pegar a tag img
const img = document.querySelector("#profile img")

// substituindo imagem
if (html.classList.contains("light")){
  img.setAttribute("src", "./assets/sol.farol.png")
}else{
  // se tiver sem light mode , manter a imagem normal
  img.setAttribute("src","./assets/moon.stars2.png")
}









}