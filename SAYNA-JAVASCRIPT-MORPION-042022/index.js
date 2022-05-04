// Message 
let M1 = document.querySelector("h2")
let M2 = document.querySelector("h5")
let M3 = document.getElementById("Lose")
let M4 = document.getElementById("equa")
let j1 = 1
let j2 = 1
let j3 = 1

let playu = true
let playeur = "X"
let ticTac = ["", "", "", "", "", "", "", "", ""]
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
// win & turn & equality
      const winl = () => `le joueur ${playeur} a gagne.`
      const equality = () => `égalité`
      const turn = () => `C'est au tour du joueur ${playeur}`
      

M1.innerHTML = turn()

const casse = document.querySelectorAll(".case")
casse.forEach(salu => salu.addEventListener("click", function() {
      let loki = parseInt(this.dataset.index)

      if( ticTac[loki] !== "" || false  ){
       return
         }
         ticTac[loki] = playeur
         console.log(ticTac)
      this.innerHTML = playeur

     winv()
}))

function winv(){
const cd1 =  ticTac[0] === playeur && ticTac[1] === playeur && ticTac[2] === playeur
const cd2 =  ticTac[3] === playeur && ticTac[4] === playeur && ticTac[5] === playeur
const cd3 =  ticTac[6] === playeur && ticTac[7] === playeur && ticTac[8] === playeur
const cd4 =  ticTac[0] === playeur && ticTac[3] === playeur && ticTac[6] === playeur
const cd5 =  ticTac[1] === playeur && ticTac[4] === playeur && ticTac[7] === playeur
const cd6 =  ticTac[2] === playeur && ticTac[5] === playeur && ticTac[8] === playeur
const cd7 =  ticTac[0] === playeur && ticTac[4] === playeur && ticTac[8] === playeur
const cd8 =  ticTac[2] === playeur && ticTac[4] === playeur && ticTac[6] === playeur

let wint = cd1 || cd2 || cd3 || cd4 || cd5 || cd6 || cd7 || cd8 

      if(wint){
         if(playeur === "X"){
         M1.innerHTML = winl()
         M2.innerHTML = j1++
         playu = false 
         return
          }
          if(playeur === "O"){
           M1.innerHTML = winl()
           M3.innerHTML = j2++
           playu = false 
           return
          }
         return
      }
      
      const btn = document.querySelector(".lol")
      btn.addEventListener("click" , () => {
       })
   
      if(!ticTac.includes("")){
         M1.innerHTML = equality()
         M4.innerHTML = j3++
         playu = false
         return
      }
      playeur = playeur === "X" ? "O" : "X"
      M1.innerHTML = turn()
      document.querySelector(".lol").addEventListener("click", () => { 
          casse.forEach(salu  => salu.innerHTML = "")
          playu = true
          playeur = "X"
          M1.innerHTML = turn()
          ticTac = ["", "", "", "", "", "", "", "", ""]
      })
      /*  
      function golden(){
         document.querySelectorAll(".case").forEach(salu => salu.innerHTML = "")
      }
      */
}
 console.log(M2)