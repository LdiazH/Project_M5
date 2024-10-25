// mouse enter
function* pageMaker() {
    let index = 1;
    while (index <= 5){ 
        yield index++;} 
  }
  
let gen = pageMaker();

function* pageMaker2() {
    let index = 6;
    while (index <= 11){ 
        yield index++;} 
  }
  
  
let genSecond = pageMaker2();
console.log(genSecond.next().value)

function* pageMaker3() {
    let index = 12;
    while (index <= 18){ 
        yield index++;} 
  }
  
let genThird = pageMaker3();
console.log(genThird.next().value)

  
        

async function getData(page){

    try{
        let response = await fetch ("https://swapi.dev/api/people/"+page);

        if(!response.ok){
            if(response.status ===404){
                alert("Limite de Personajes");
                throw new Error ("Recurso no encontrado");
            }else{
                throw new Error ("Error en peticion"+ response.status)
            }
        }

        const data = await response.json();
        console.log(data)
        inyectar(data, page);
    }catch(error){
        console.log(error);
    }
   
 };

 const box1 = document.getElementById('enter').addEventListener('mouseenter',()=>{
    
    let page = gen.next().value;
    getData(page);
        
});

const box2 =document.getElementById('enter2').addEventListener('mouseenter',()=>{
    
    let page2 = genSecond.next().value;
    getData(page2);
        
});
const box3 =document.getElementById('enter3').addEventListener('mouseenter',()=>{
    
    let page3 = genThird.next().value;
    getData(page3);
        
});

function inyectar(characterData, page){
    
    const {name, height, mass} = characterData;
    let inyectar1 = document.getElementById('inyectar1')
    let infoHtml1 = `
            <div class="col-3 h-100 p-3 border rounded border-light shadow p-3 mb-5 d-flex justify-content-evenly mx-2 main" >
                <div>
                    <img src="assets/style/icons/darth-vader-svgrepo-com.svg" alt="">
                </div>
                <div class="m-1">
                    <h5>Nombre: ${name}</h5>
                    <div class="d-flex justify-content-between ">
                        <p>Altura: ${height}</p>
                        <p>Peso: ${mass}</p>
                    </div>
                </div>
            </div>
            `
 
   
    let inyectar2 = document.getElementById('inyectar2');
    let infoHtml2 = `
            <div class="col-3 h-100 p-3 border rounded border-light shadow p-3 mb-5 d-flex justify-content-evenly mx-2 main" >
                <div>
                    <img src="assets/style/icons/scifi-starwars-boba-fett-svgrepo-com.svg" alt="">
                </div>
                <div class="m-1">
                    <h5>Nombre: ${name}</h5>
                    <div class="d-flex justify-content-between ">
                        <p>Altura: ${height}</p>
                        <p>Peso: ${mass}</p>
                    </div>
                </div>
            </div>
            `
           
                    

    let inyectar3 = document.getElementById('inyectar3');
    
    let infoHtml3 = `
            <div class="col-3 h-100 p-3 border rounded border-light shadow p-3 mb-5 d-flex justify-content-evenly mx-2 main" >
                <div>
                    <img src="assets/style/icons/chewbacca-svgrepo-com.svg" alt="">
                </div>
                <div class="m-1">
                    <h5>Nombre: ${name}</h5>
                    <div class="d-flex justify-content-between ">
                        <p>Altura: ${height}</p>
                        <p>Peso: ${mass}</p>
                    </div>
                </div>
            </div>
            `
            
                

        if(page <=5){
            inyectar1.insertAdjacentHTML('beforeend',infoHtml1);

        }else if (page >5 && page <=11 ){
            inyectar2.insertAdjacentHTML('beforeend',infoHtml2);

        }else if (page >11 && page <=18 ){
            inyectar3.insertAdjacentHTML('beforeend',infoHtml3);
        }
                
          
};  






