//Listen for  form submit
let app = axios.create({
    baseURL: 'https://maildata.herokuapp.com'    
})
document.getElementById("contactForm").addEventListener("submit",submitForm);

async function send (nombre,email,mensaje,telefono) {
    try {
        let response = await app.post('/send',{
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        telefono: telefono
        })
        console.log(response)
    } catch(err){
      console.log('error al enviar peticion')
    }

}
//function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function submitForm(e){
  e.preventDefault();
  
  var nombre = getInputVal("nombre");
  var mensaje = getInputVal("mensaje");
  var email = getInputVal("email");
  var  telefono = getInputVal("telefono");
  console.log('testing')
  send(nombre,email,mensaje,telefono)

  document.querySelector(".alert").style.display ="block";
  //hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display ="none";
  },3000);
  //clear form
  document.getElementById("contactForm").reset();
}