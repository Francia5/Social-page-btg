$(document).ready(function () {
    /*******BARRA LATERIAL DE USUARIO*******/
    $('.sidenav').sidenav();

    /******MENU DE INTERESES DE USUARIO********/
    $('.collapsible').collapsible();

    /***MANEJANDO DOM PARA CREAR CARDS******/
    $('#btn-send').click(createCards);
    $('#btn-share').click(createCards);

    var getImage = firebase.database().ref("imagenes");



    function createCards() {
        var comment = $("#comment").val();

        /*clean input */
        var commentUser = $('#comment').val();
        // var imgUser = imagenes.url;
            // console.log(imgUser);

        var template =
            '<div id="card-user" class="row">' +
            '<div class="col s10 offset-s1">' +
            '<div class="card row grey lighten-4">' +
            '<div class="col s12 card-content">' +
            '<img id="img-1"  alt="upload" class="col s10 offset-s2">'+
            '<p class="col s10 offset-s1 express-yourself" >_prueba_</p>' +
            '<div class="row">' +
            '<div class="col s8 offset-s3 card-action">' +
            '<a id="heart" href="#"><i class="tiny material-icons iconos-card icon-heart grey-text right">favorite</i></a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        /* limpiar template **/
        var finalTemplate = "";
        console.log("prueba");
        
        /* Remplazar la plantilla: el valor de cada comentario***/
        finalTemplate = template.replace('_prueba_', commentUser);
        

        /**Se le asigna donde se coloca la plantilla nueva**/
        $('main').append(finalTemplate);
        $("#img-1").attr("src", getImage);

        /**Limpiar el comentario por cada CARD creado**/
        $('#comment').val('');

        /*******TOOGLE PARA DAR "ME GUSTA"*********/
        $('#heart').click(like);

        function like() {
            console.log('holi');
        }

    }

});

// .replace('__url__', imgUser)

