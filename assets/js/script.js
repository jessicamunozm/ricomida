$(document).ready(function() {

// ENABLE TOOLTIPS DE BOOTSTRAP.COM
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
});


$("#ingredientes").dblclick(function () { 
    $(this).css("color","red") 
    
})

$("#preparacion").dblclick(function () { 
    $(this).css("color","red") 
    
})

// NOTA: NO ENCONTRÉ CÓMO EDITAR LA VENTANA ALERT
$(document).ready(function () {
$("#button1").click(function () { 
alert('El correo ha sido enviado correctamente');
});
})

$(".card-text").click(function () { 
$(".cardtext").hide();
    })
 })
  