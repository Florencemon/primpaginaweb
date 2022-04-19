const API_URL = "https://spapi.dev/api"

const xhr = new XMLHttpRequest();

function onRequestHandler() {
       if (this.readyState == 4 && this.status == 200) {
              const data = JSON.parse ( this.response);
              const HTMLResponse = document.querySelector("#app");

              const tpl = data.map((characters) =>'<li>${characters.name  📧  ${characters.age}</li>');

              HTMLResponse.innerHTML = '<ul>${tpl}</ul>' 
       }

}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET','https://spapi.dev/api/characters');
xhr.send();