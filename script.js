window.onload = function(event) {
    //funciones a ejecutar
    console.log("es valido.");
   
    this.cargar();
  };




function cargar() {
    

    let datos = JSON.parse(localStorage.getItem('https://www.datos.gov.co/resource/gt2j-8ykr.json'));
 let tableC=document.querySelector("#cargar-tabla");
 tableC.innerHTML="";
        
        let aux = "";
        for (let elemento in datos) {
            let prueba = datos[elemento];
            aux += "<tr>";
           
            for (let item in prueba) {
                
                    aux += "<td>" + prueba[item] + "</td>";
                
              
            }
            aux += "</tr>";
    
        }
       tableC.innerHTML=aux;
    }
