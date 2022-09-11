// DEFINICION DE VARIABLES → CANCIONES

// creo el objeto 
class Cancion {
    constructor (titulo,artista, genero)
    {
        this.titulo = titulo;
        this.artista =artista;
        this.genero = genero;
    }

    // para mostrar la info de la cancion en los menues
    mostrarInfoCancion(){
        return `${this.titulo} - ${this.artista}`;
    }
}

// creo cada cancion
const cancionPop1 = new Cancion("As it was", "Harry Styles", "Pop");
const cancionPop2 = new Cancion("Bam Bam", "Camila Cabello", "Pop");
const cancionPop3 = new Cancion("Angels like you", "Miley Cyrus", "Pop");

const cancionRock1 = new Cancion("Tan solo", "Los Piojos", "Rock");
const cancionRock2 = new Cancion("El favor", "Las Pastillas del Abuelo", "Rock");
const cancionRock3 = new Cancion("Tu encanto", "Conociendo Rusia", "Rock");

// Creo usuarios ya registrados → ARRAY DE OBJETOS
const usuarios = [
    {nombre: "Vicki", contraseña: 1234},
    {nombre: "Pepe", contraseña: 5678},
    {nombre: "Coder", contraseña: 91011}
]

//FUNCIONES

// Funcion para pedir usuario y contraseña para que puedan ingresar
function usuarioContra (){
    let registro= prompt (`Usted ya esta registrado: 
    1) Si
    2) No`);

    
    if (registro == "1")
    {   
        const usuario_ingresado = prompt("Ingrese su usuario: ");
        const contraseña_ingresado  = prompt ("Contraseña: ");
        
        // recorro el array de usuarios para encontrar el que ingresa el usuario
        usuarios.forEach((usuario) => {
            if (usuario.nombre == usuario_ingresado && usuario.contraseña == contraseña_ingresado)
            {
                alert("Ingresando al sistema")
                //si ingresa ya me lleva directo a la funcion de menu
                menuInicio()
                
            }
        });

        //si llegue aca es porque no entro en la funcion de menu → no esta registrado
        alert("Usuario y/o contraseña incorrecto/s")
        usuarioContra()

    } 
    if (registro == "2")
    {
        const usuario_ingresado = prompt("Ingrese un nuevo usuario: ");
        const contraseña_ingresado = prompt ("Contraseña: ");
        if (contraseña_ingresado == "" || usuario_ingresado =="")
        { // Si no ingresa nada:
            alert("Usuario o contraseña invalida")
            usuarioContra()
        }
        else{
            // funciona el push pero si vuelvo a correr la funcion UsuarioContra() no registra los nuevos
            usuarios.push(usuario_ingresado,contraseña_ingresado);
            
            menuInicio() 

        }
    }
   
   
}


//TO DO: se deberia poder constatar que el usuario y contraseña esten registrados


// MENU INICIAL
function menuInicio(){
    let opcion= prompt (`Elija una cancion por: 
    1) Genero musical 
    2) Artista
    3) Salir`);

    //con la opcion elegida me lleva a un segundo menu
    menuFiltrar(opcion);
    
    
}


// MENU PARA FILTRAR POR GENERO O ARTISTA
function menuFiltrar ( opcion){
    switch (opcion) {
        case "1":
            let genero= prompt (`Elija genero: 
            1) Pop
            2) Rock nacional
            3) Volver`);
            if (genero !== "3"){
                xGenero(genero);
            }
            else{
            // si se elige la opcion 3 (VOLVER) te lleva al menu de inicio
                menuInicio()
            }
            
            break;
        
         case "2":
            alert("Por el momento contamos con una sola cancion por artista, por lo que al elegir el artista se reproducira la cancion")
            let artista= prompt (`Ingrese un/a artista: 
            Harry Styles
            Camila Cabello
            Miley Cyrus
            Los piojos
            Las pastillas del abuelo
            Conociendo Rusia`);
            
            xArtista (artista);
            
            break;
         case "3":
            //si quiere salir → lo lleva a volver a ingresar con usuario y contra
            usuarioContra();
                
            break;
        default:
            alert("No se ingreso una opcion valida, vuelva a elegir")
            menuInicio();
            break;
    }
}

// funcion para elegir cancion segun el genero
function xGenero (genero){
    // OPCION 1 → POP
    if (genero == "1")
    {   let cancion= prompt (`Elija una cancion: 
        1) ${cancionPop1.mostrarInfoCancion()}
        2) ${cancionPop2.mostrarInfoCancion()}
        3) ${cancionPop3.mostrarInfoCancion()}`);

        switch(cancion){
            case "1":
                alert(`Reproduciendo ${cancionPop1.mostrarInfoCancion()}`)
                menuInicio()
                break;
            case "2":
                alert(`Reproduciendo ${cancionPop2.mostrarInfoCancion()}`)
                menuInicio()
                break;
            case "3":
                alert(`Reproduciendo ${cancionPop3.mostrarInfoCancion()}`)
                menuInicio()
                break;
            default:
                alert("No se ingreso una cancion valida, vuelva a elegir")
                xGenero(genero);
                break;
        }
       
    }
    // OPCION 2 → ROCK
    else if (genero == "2")
    {   let cancion= prompt (`Elija una cancion: 
        1) ${cancionRock1.mostrarInfoCancion()}
        2) ${cancionRock2.mostrarInfoCancion()}
        3) ${cancionRock3.mostrarInfoCancion()}`);

        switch(cancion){
            case "1":
                alert(`Reproduciendo ${cancionRock1.mostrarInfoCancion()}`)
                menuInicio()
                break;
            case "2":
                alert(`Reproduciendo ${cancionRock2.mostrarInfoCancion()}`)
                menuInicio()
                break;
            case "3":
                alert(`Reproduciendo ${cancionRock3.mostrarInfoCancion()}`)
                menuInicio()
                break;
            default:
                alert("No se ingreso una cancion valida, vuelva a elegir")
                xGenero(genero);
                break;
        }
    }
    else {
        alert("No se ingreso un genero valido, vuelva a elegir")
        menuFiltrar("1");

    }
    
}

// Funcion para que reproduzca la cancion de un artista puntual
function xArtista(artista){
    // llevo todo a mayus para comparar asi evito el case sensitive
    if (artista.toUpperCase() === (cancionPop1.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionPop1.mostrarInfoCancion()}`)
        menuInicio()
    }
    else if (artista.toUpperCase() === (cancionPop2.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionPop2.mostrarInfoCancion()}`)
        menuInicio()
    }
    else if (artista.toUpperCase() === (cancionPop3.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionPop3.mostrarInfoCancion()}`)
        menuInicio()
    }
    else if (artista.toUpperCase() === (cancionRock1.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionRock1.mostrarInfoCancion()}`)
        menuInicio()
    }
    else if (artista.toUpperCase() === (cancionRock2.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionRock2.mostrarInfoCancion()}`)
        menuInicio()
    }
    else if (artista.toUpperCase() === (cancionRock3.artista).toUpperCase())
    {
        alert(`Reproduciendo ${cancionRock3.mostrarInfoCancion()}`)
        menuInicio()
    }
    else{
        alert("No se ingreso una cancion valida, vuelva a elegir")
        menuFiltrar("2");
    }
}


// Ingreso
usuarioContra()
