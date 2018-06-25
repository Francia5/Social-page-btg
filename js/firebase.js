var provider = new firebase.auth.GoogleAuthProvider();
var fichero;
// var storageRef = firebase.storage().ref();


// Obtenemos la Data del Usuario por medio del provedor (google)
$("#login").click(function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (data) {
            var user = data.user;
            console.log(user);
            $(".inicio").hide();
            $(".usuario").show();
            $(".user-image").attr("src", user.photoURL);
            $("#name").text("Nombre: " + user.displayName);
            $("#email").text(user.email);


        }).catch(function (error) {
            console.log(error);

        });
});

// Mostramos o no la información del usuario de acuerdo a su status
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Si el usuario esta logeado
        $(".inicio").hide();
        $(".usuario").show();
        $(".user-image").attr("src", user.photoURL);
        $("#name").text("Nombre: " + user.displayName);
        $("#email").text(user.email);
    } else {
        // Si no esta logeado
        $(".inicio").show();
        $(".usuario").hide();
    }
});


$("#close").click(function () {
    firebase.auth().signOut().then(function () {
        $(".inicio").show();
        $(".usuario").hide();
    })
});




// function ju () {



//     // console.log(storageRef);


// };





// function subirImagenAFirebase() {
//     var photoUserAdd = fichero.files[0];
//     // storageRef = firebase.storage().ref();

//     // var uploadTask = storageRef.child("images/" + photoUserAdd.name).put(photoUserAdd);



// };


// Obtener Imagen para publicar

var tablaBaseDatos = firebase.database().ref("imagenes");
$("#card-image").change(function () {
    if (this.files && this.files[0]) {
        console.log(this.files[0].name);

        var newFile = new FileReader();
        // // console.log(newFile, newFile.result);
        newFile.onload = function (e) {
            tablaBaseDatos.push({
                url: e.target.result
            });

            $("#fotousuario").attr("src", e.target.result);



        }
        newFile.readAsDataURL(this.files[0]);
    }
});

