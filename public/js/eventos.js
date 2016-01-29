$(document).on('click', '#registrar', function (e) {
    e.preventDefault();
    if (!confirm("¿Está seguro de crear éste registro?")){
        return;
    }
    var nombre=$("#nombre").val();
    var apellido=$("#apellido").val();
    var cedula=$("#cedula").val();
    var route='/usuarios';
    var token=$("#token").val();
    $.ajax({
        url:route,
        type:'POST',
        headers:{'X-CSRF-TONEK':token},
        dataType:'json',
        data:{nombre:nombre,apellido:apellido,cedula:cedula},
        error   : function(resp){
            if (resp.status==422){
                alert("Ocurrió un error de validación!");
                strHtml="";
                $.each(resp.responseJSON, function (k, v) {
                    strHtml+="<li>"+v+"</li>";
                });
                $("#errores").html(strHtml);
                return;
            }
            alert("!Ha ocurrido un error!");
            console.log(resp);
        },
        success:function(response){
            if (response.mensaje=='creado'){
                alert("Usuario Creado!");
                location.reload();
            }else{
                alert("Ocurrió un error en el registro!");
            }
        }
    });
});
$(document).on("click", ".eliminar", function () {
    if (!confirm("¿Está seguro de eliminar éste registro?")){
        return;
    }
    var id=$(this).data("id");
    var route='/usuarios/'+id;
    var token=$("#token").val();
    $.ajax({
        url:route,
        type:'DELETE',
        headers:{'X-CSRF-TONEK':token},
        dataType:'json',
        data:{id:id},
        error   : function(resp){
            alert("!Ha ocurrido un error!");
            console.log(resp);
        },
        success:function(response){
            if (response.mensaje=='eliminado'){
                alert("Usuario Eliminado!");
                location.reload();
            }else{
                alert("Ocurrió un error en el registro!");
                console.log(response);
            }
        }
    });
});
$(document).on("click", ".editar", function () {
    var id=$(this).data("id");
    $("#contRegistrar").slideUp();
    $("#contModificar").slideDown();
    $("#id").val(id);
    $("#nombre").val($(this).data("nombre"));
    $("#apellido").val($(this).data("apellido"));
    $("#cedula").val($(this).data("cedula"));
});
$(document).on("click", "#guardar", function (e) {
    e.preventDefault();
    if(!confirm("¿Está seguro de modificar éste registro?")){
        return;
    }
    id=$("#id").val();
    var route="/usuarios/"+id;
    var token=$("#token").val();
    var nombre=$("#nombre").val();
    var apellido=$("#apellido").val();
    var cedula=$("#cedula").val();
    $.ajax({
        url:route,
        type:'PUT',
        dataType:'json',
        headers:{'X-CSRF-TOKEN':token},
        data:{nombre:nombre,apellido:apellido,cedula:cedula},
        error: function (res) {
            alert("Ocurrió un error en la petición AJAX!");
            console.log(res);
        },
        success: function (res) {
            alert("Registro modificado!");
            location.reload();
        }
    });
});
$(document).on("click", "#cancelar", function (e) {
    e.preventDefault();
    $("#contModificar").slideUp();
    $("#contRegistrar").slideDown();
    limpiarInputs();
});
function limpiarInputs(){
    $("input").val("");
}