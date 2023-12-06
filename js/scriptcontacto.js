


const checkoutForm = document.getElementById('Contac_id');
checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const dni= document.getElementById('dni').value;
    const fecnac=document.getElementById('fecnac').value;
    const comentarios = document.getElementById('comentarios').value;
    
     emailMessage = ` ${firstName} ${lastName} ${email} ${dni} ${fecnac} ${comentarios},\n\n Yupiii:) \n`;

    

    

    
    console.log('Mensaje del correo electrónico:');
    console.log(emailMessage)
    alert('Pedido realizado. Se ha enviado un correo electrónico de confirmación.');

    
   
    checkoutForm.reset();
} );

