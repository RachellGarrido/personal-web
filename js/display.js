function alertSize() { 
    let myWidth = 0, myHeight = 0; 
    if( typeof( window.innerWidth ) == 'number' ) { 
      //No-IE 
      myWidth = window.innerWidth; 
      myHeight = window.innerHeight; 
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
      //IE 6+ 
      myWidth = document.documentElement.clientWidth; 
      myHeight = document.documentElement.clientHeight; 
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
      //IE 4 compatible 
      myWidth = document.body.clientWidth; 
      myHeight = document.body.clientHeight; 
    } 
    /* window.alert( 'Width = ' + myWidth ); 
    window.alert( 'Height = ' + myHeight ); 
    document.getElementById("resultado").innerHTML="El ancho de la pagina es de "+ myWidth +"px y el alto es de "+ myHeight +"px";   
    */ 
   let display;
   let cardMenu = document.getElementById("cardMenu")
   display = cardMenu.style.display;
   if(myWidth < 767){

    cardMenu.style.display = "none"
   }
   else{
    cardMenu.style.display = "block"
   }
} 

alertSize();

function displayMenu(){
    let display;
    let cardMenu = document.getElementById("cardMenu")
    display = cardMenu.style.display;

    if (display == "none"){
        cardMenu.style.display = "block"
    }
    else{
        cardMenu.style.display = "none"
    }

}

function displayPageButton(nav){
  var page = new Array(3)
  page[0] = "home"
  page[1] = "aboutMe"
  page[2] = "whatImDoingNow"

  var search
  var show

  for(var i =0;i<3;i++){
      
      search = document.getElementById(page[i])
      show = search.style.display;

      if (search.style.display == "block"){

          search.style.display = "none";
          if (nav == "next"){
            i++; 
            if (i > 2 ) i = 0;
          }  
          if (nav == "prev"){
            i--; 
            if (i < 0) i = 2;
          } 
          search = document.getElementById(page[i]);
          search.style.display = "block";  
          break;
        }
      }
}


function displayPageMenu(nav){
  var page = new Array(3)
  page[0] = "home"
  page[1] = "aboutMe"
  page[2] = "whatImDoingNow"

  var search
  var show
  let cardMenu = document.getElementById("cardMenu")
  let display 
  display = cardMenu.style.display;

  for(var i = 0; i<3; i++){
      search = document.getElementById(page[i])
      search.style.display = "none";

      if (page[i] == nav){
        search.style.display = "block";
      }
      alertSize()
   }
}