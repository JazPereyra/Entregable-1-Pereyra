const personajes = []
const prendasPersonaje = []

function crearPersonaje() {
    let nuevoPersonaje = prompt("Ingrese el nombre de su personaje")
    alert(`Su nuevo personaje principal es: ${nuevoPersonaje}`)
    personajes.unshift(nuevoPersonaje)
    let vestirPersonaje = prompt(`Desea darle un estilo personalizado a ${nuevoPersonaje}? (si o no)`)
        if (vestirPersonaje === "si") {
            agregarPrendas()
        } else {
            alert("Entonces comience con la historia.")
            comienzaHistoria()
        }
}

function agregarPrendas() {
    let loop = true
    while(loop){
    let prendas = prompt("Ingrese una por una las prendas que su personaje está vistiendo.") 
    prendasPersonaje.push(prendas)
    mostrarPrendas()
    let resultado = confirm("¿Desea seguir añadiendo prendas?");
        if (resultado) {
            agregarPrendas()
        } else {
          alert("Entonces comience con la historia.")   
        } 
    loop = comienzaHistoria()
  }
}

function mostrarPrendas(){
    let listaPrendas = (`Su personaje está usando:`)
    let i = 0
    for(prendas of prendasPersonaje){ 
      i++
      listaPrendas += `\n ${i} - ${prendas}`
    }
    alert(listaPrendas)
  }


function comienzaHistoria() {
    alert(`En un día soleado, ${personajes} se encontraba frente a la entrada de un misterioso bosque. Las historias sobre el lugar decían que estaba lleno de magia y aventuras, pero también de peligros ocultos. Con el corazón latiendo de emoción y un poco de temor, decidió entrar.`)
    alert("Después de caminar entre árboles altos y sombras danzantes, llegó a un claro iluminado. Allí, ante ella, se abrían tres caminos distintos:")
    let primerDecisión = parseInt(prompt("¿Qué camino eliges? (1, 2 o 3) \n 1 - El camino de las flores brillantes. \n 2- El sendero de los árboles susurrantes.\n 3 - La senda de la niebla misteriosa. "))
    switch(primerDecisión) {
        case 1:
            alert(`${personajes} tomó una decisión y eligió el camino de las flores brillantes.`)
           alert(`Mientras avanzaba, las flores comenzaron a hablarle, revelando secretos del bosque. Una de ellas le ofreció un néctar mágico que le concedió el poder de comunicarse con los animales. Desde ese día, ${personajes} se convirtió en guardabosques, protegiendo a sus criaturas y aprendiendo de sus sabidurías.`)
           break;
        case 2:
            alert(`${personajes} eligió el sendero de los árboles susurrantes.`)
            alert(`Los árboles, al notar su presencia, comenzaron a contarle antiguas historias. Un árbol anciano le entregó un amuleto que le protegería en todas sus aventuras. Con su nuevo poder, ${personajes} viajó por el mundo, viviendo aventuras extraordinarias.`)
            break;
        case 3:
            alert(`${personajes} eligió la senda de la niebla misteriosa.`)
            alert(`La niebla le envolvió y le llevó a un lago encantado. Al asomarse al agua, vio reflejos de un futuro brillante y lleno de posibilidades. Sin embargo, la niebla le hizo perderse, llevándole a un mundo paralelo donde la magia era parte de la vida cotidiana. Allí, ${personajes} descubrió su verdadero potencial y decidió quedarse para siempre, viviendo aventuras mágicas.`)
            break;
    }
}

function seleccionarOpcion(opcion){
  switch(opcion){
    case 1:
      crearPersonaje()
      break;
    case 2:
      comienzaHistoria();
      break;
    case 3:
      alert("Entonces no podrás elegir tu historia..")
  }
}

function historia() {
    let loop = true
    alert("¿Listo para comenzar tu historia?")
    while (loop) {
        let opcion = parseInt(prompt("Elija que quiere hacer \n 1 - Crear personaje \n 2 - Comenzar historia \n 3 - Nada"))
        seleccionarOpcion(opcion)
        loop = confirm("¿Desea continuar?")
    }
    alert("Hasta luego")
}

historia()



// const pacientes = []  // 1

// function mostrarPacientes(){
//   let listaPacientes = "Los turnos son:"
//   let i = 0
//   for(paciente of pacientes){           // 4
//     i++
//     listaPacientes += `\n ${i} - ${paciente}`
//   }
//   alert(listaPacientes)
// }

// function agregarPaciente(){
//   let nombre = prompt("Ingrese el nombre del paciente que llego recien:")  // 2
//   pacientes.push(nombre)
//   mostrarPacientes()
// }

// function dejarPasarPaciente(){
//   let primerPaciente = pacientes.shift()
//   if(pacientes.length === 0){
//     alert(`Por favor, que pase el paciente ${primerPaciente}`)  // 3
//   } else {
//     alert(`Por favor, que pase el paciente ${primerPaciente} y que se valla preparando ${pacientes[0]}`)
//     mostrarPacientes
//   }
// }

// const encontrarPaciente = (nombre)=>{
//   const indicePaciente = pacientes.indexOf(nombre)
//   alert(`Encontramos su nombre en el orden ${indicePaciente+1} en la lista`)  // 5
// }

// function seleccionarOpcion(opcion){
//   switch(opcion){
//     case 1:
//       agregarPaciente()
//       break;
//     case 2:
//       dejarPasarPaciente();
//       break;
//     case 3:
//       const nombrePaciente = prompt("Ingrese el nombre del paciente (cuidado con mayúsculas, tildes y espacio)")
//       encontrarPaciente(nombrePaciente);
//       break
//     case 4:
//       alert("No se realzio nada")
//     default:
//       alert("Se ingreso un dato no válido")
//   }
// }


// function app(){
//   let loop = true
//   alert("Buenos días")
//   while(loop){
//     let opcion = parseInt(prompt("Operaciones a realizar: \n 1 - Agregar Paciente \n 2 - Dejar Pasar Paciente \n 3- Buscar en la lista al paciente \n 4- Nada"))
//     seleccionarOpcion(opcion)
//     loop = confirm("¿Desea seguir realizando operaciones?")
//   }
//   alert("Que tenga un buen día")
// }

// app()



