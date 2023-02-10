let Preguntas = []
let tiempo_prueba = []
let indice_pregunta = 0

class Crear_pregunta{
    constructor({
        contenido_pregunta_escrita,
        respuestas,
        indice
      
    }){
        this.contenido_pregunta_escrita = contenido_pregunta_escrita,
        this.respuestas = respuestas,
        this.indice = indice
    }
}


let cantidad_respuestas_buenas = 0



//hacemos el guardado inicial de las preguntas
localStorage.setItem("Preguntas", JSON.stringify(Preguntas))

//guardamos el array del tiempo de la prueba 
localStorage.setItem("Tiempo_prueba", JSON.stringify(tiempo_prueba))

//guardamos el indice de la pregunta a responder
localStorage.setItem("Indice_pregunta", JSON.stringify(indice_pregunta))

//guardamos la cantidad de respuestas buenas
localStorage.setItem("Respuestas_Buenas", cantidad_respuestas_buenas)

//guardamos si queremos que el contenido después de que se acabe el tiempo se muestre
localStorage.setItem("Acabado_tiempo", JSON.stringify(false))

function Finalizar_prueba(){
                    const respuestas_buenas_contestadas = JSON.parse(localStorage.getItem("Respuestas_Buenas")) 
                    const cantidad_preguntas_contestar = JSON.parse(localStorage.getItem("Preguntas"))
                    
                    let pregunta_preguntas_respuestas = "pregunta"
                    let buena_buenas_respuestas = "buena"

                    let pregunta_preguntas_cantidad_pregunta = "pregunta"
    

                    

                    //decimos si es pregunta o preguntas y decimos si es buena o buenas pregunta
                    if (cantidad_preguntas_contestar.length > 1){
                        pregunta_preguntas_cantidad_pregunta = "preguntas"
                    }

                    if(respuestas_buenas_contestadas == 0 || respuestas_buenas_contestadas > 1){

                        pregunta_preguntas_respuestas = "preguntas"
                        buena_buenas_respuestas = "buenas"
                    }


                    const contenedor_tiempo = document.querySelector(".cuadro-examen-tiempo")
                    contenedor_tiempo.remove()
                    
                    
                    const contenedor = document.querySelector(".contenedor")
                    const contenedor_resultados = document.createElement("div")
                    contenedor_resultados.classList.add("cuadro-crear-preguntas")

                    contenedor.append(contenedor_resultados)

                    //texto de la prueba
                    const texto_prueba_terminada = document.createElement("p")
                    texto_prueba_terminada.innerText = "Prueba finalizada"
                    texto_prueba_terminada.classList.add("texto-prueba-finalizada")

                    contenedor_resultados.append(texto_prueba_terminada)
                    contenedor.append(contenedor_resultados)


                    //resultados
                    const texto_ingresado = document.createElement("div")


                    texto_ingresado.innerText = respuestas_buenas_contestadas + " " + pregunta_preguntas_respuestas + " " + buena_buenas_respuestas + " de " + cantidad_preguntas_contestar.length + " " + pregunta_preguntas_cantidad_pregunta + " en total"
                    texto_ingresado.classList.add("texto-resultados")
                    contenedor_resultados.append(texto_ingresado)
                    contenedor.append(contenedor_resultados)




                //boton volver menú
                    const boton_volver_menu = document.createElement("div")
                    boton_volver_menu.innerText = "Volver al menú"
                    boton_volver_menu.classList.add("boton-bienvenida")


                    boton_volver_menu.addEventListener("click", ()=>{
                        contenedor_resultados.remove()
                        Menu_Bienvenida()
                    })

                    contenedor_resultados.append(boton_volver_menu)
                    contenedor.append(contenedor_resultados)



                    let respuesta_buenas_actualizada = 0
                    localStorage.setItem("Respuestas_Buenas", JSON.stringify(respuesta_buenas_actualizada))

                    
                    let indice_inicial = 0
                    localStorage.setItem("Indice_pregunta", JSON.stringify(indice_inicial))

                    localStorage.setItem("Acabado_tiempo", JSON.stringify(true))
}


function Crear_preguntas(
    UNIDAD_TIEMPO = "",
    TIEMPO = "",
    COTENIDO_PREGUNTA_ESCRITA = "",
    respuestas = [],
    GUARDAR_CREAR_PREGUNTA = "Crear pregunta nueva",
    boton_preguntas_creadas = "",
    permitir_actualizar_pregunta_creada = false,
    BOTONES_RESPUESTA_SELECCIONADO_PARA_ACTUALIZAR = false,
    indice = 0,
    boton_preguntas_creadas_indice = ""

){
  
    
    

    const contenedor = document.querySelector(".contenedor")
    const cuadro_crear_preguntas = document.createElement("div")
    cuadro_crear_preguntas.classList.add("cuadro-crear-preguntas")


    //contenido cuadro crear preguntas

    //indice pero no se va a msotrar al usuario esto es para saber la ubicacion de la pregunta
    //eliminar y actualizarla
    const indice_escondido = document.createElement("div")
    indice_escondido.classList.add("no-mostrar")
    indice_escondido.value = indice
    
    console.log(indice_escondido.value)

    cuadro_crear_preguntas.append(indice_escondido)
    contenedor.append(cuadro_crear_preguntas)

    //vamos a sumarle al útlimo indice de las preguntas 1
    //ejemplo el útlimo indice del último elemento del array Preguntas es 4 entonces a eso le sumaremos 1
    //para dar otro indice que sería 5
    if(JSON.parse(localStorage.getItem("Preguntas")).length > 0){
        indice_escondido.innerText = Number(JSON.parse(localStorage.getItem("Preguntas"))[JSON.parse(localStorage.getItem("Preguntas")).length - 1].indice) + 1
    }

   

    
    
    // agregamos la primera parte a cuadro-crear-preguntas

    
    contenedor.append(cuadro_crear_preguntas)

   
    //asignar tiempo
    const contenedor_escribir_tiempo = document.createElement("div")
    contenedor_escribir_tiempo.classList.add("contenedor-escribir-tiempo")
        
        //contenido dentro de contenedor-escribir-tiempo
        const texto_asigne_tiempo = document.createElement("div")
        texto_asigne_tiempo.innerText = "Asigne un tiempo para la prueba"
        const escribir_tiempo = document.createElement("input")
        escribir_tiempo.classList.add("escribir-tiempo")

        if (JSON.parse(localStorage.getItem("Tiempo_prueba")).length > 0){
            escribir_tiempo.value = JSON.parse(localStorage.getItem("Tiempo_prueba"))[0] 

        }

        else{
            escribir_tiempo.value = TIEMPO
        }
        
        
        contenedor_escribir_tiempo.append(texto_asigne_tiempo, escribir_tiempo)


    cuadro_crear_preguntas.append(contenedor_escribir_tiempo)
    contenedor.append(cuadro_crear_preguntas)
    
    
    //botones asginar tiempo

    const botones_asignar_tiempo = document.createElement("div")
        const boton_asignar_tiempo_segundos = document.createElement("button")
        boton_asignar_tiempo_segundos.innerText = "segundos"
        boton_asignar_tiempo_segundos.classList.add("boton-asignar-tiempo")

        console.log(JSON.parse(localStorage.getItem("Tiempo_prueba"))[1])

        //al dar click en segundos elige la unidad de tiempo que quiere
        boton_asignar_tiempo_segundos.addEventListener("click", ()=>{
            UNIDAD_TIEMPO = boton_asignar_tiempo_segundos.innerText

            if(boton_asignar_tiempo_segundos.classList.contains("seleccionado-tiempo-unidad") == false){
                boton_asignar_tiempo_segundos.classList.add("seleccionado-tiempo-unidad")
                boton_asignar_tiempo_minutos.classList.remove("seleccionado-tiempo-unidad")
            }

        })

        const boton_asignar_tiempo_minutos = document.createElement("button")
        boton_asignar_tiempo_minutos.innerText = "minutos"
        boton_asignar_tiempo_minutos.classList.add("boton-asignar-tiempo")
        boton_asignar_tiempo_minutos.addEventListener("click", ()=>{
            UNIDAD_TIEMPO = boton_asignar_tiempo_minutos.innerText

            if(boton_asignar_tiempo_minutos.classList.contains("seleccionado-tiempo-unidad") == false){
                boton_asignar_tiempo_minutos.classList.add("seleccionado-tiempo-unidad")
                boton_asignar_tiempo_segundos.classList.remove("seleccionado-tiempo-unidad")
            }
        })

        

        //al crear otra pregunta aparecerá la unidad tiempo por defecto

        if(JSON.parse(localStorage.getItem("Tiempo_prueba")).length > 0){

            if(JSON.parse(localStorage.getItem("Tiempo_prueba"))[1] == "segundos"){
                boton_asignar_tiempo_segundos.classList.add("seleccionado-tiempo-unidad")
                boton_asignar_tiempo_minutos.classList.remove("seleccionado-tiempo-unidad")
                UNIDAD_TIEMPO = boton_asignar_tiempo_segundos.innerText
            }

            else if(JSON.parse(localStorage.getItem("Tiempo_prueba"))[1] == "minutos"){
                boton_asignar_tiempo_minutos.classList.add("seleccionado-tiempo-unidad")
                boton_asignar_tiempo_segundos.classList.remove("seleccionado-tiempo-unidad")
                UNIDAD_TIEMPO = boton_asignar_tiempo_minutos.innerText
            }

            

        }
        

        //para mostrar la unidad de tiempo asignada de la pregunta guardad
        //al seleccionar una pregunta creada
        if(UNIDAD_TIEMPO == "segundos"){
            boton_asignar_tiempo_segundos.classList.add("seleccionado-tiempo-unidad")
            
        }

        else if (UNIDAD_TIEMPO == "minutos"){
            boton_asignar_tiempo_minutos.classList.add("seleccionado-tiempo-unidad")
            
        }


    
    botones_asignar_tiempo.append(boton_asignar_tiempo_segundos, boton_asignar_tiempo_minutos)
    cuadro_crear_preguntas.append(botones_asignar_tiempo)
    contenedor.append(cuadro_crear_preguntas)
    



     //ver preguntas creadas
     const div_ver_preguntas = document.createElement("div")
     div_ver_preguntas.innerText = "Preguntas creadas"
     div_ver_preguntas.classList.add("ver-preguntas-creadas")   

     cuadro_crear_preguntas.append(div_ver_preguntas)
     contenedor.append(cuadro_crear_preguntas)
     


     if (JSON.parse(localStorage.getItem("Preguntas")).length > 0){

        
        
        JSON.parse(localStorage.getItem("Preguntas")).forEach((una_pregunta)=>{

        

        
        const div_contenedor_preguntas_creadas_eliminar = document.createElement("div")
        div_contenedor_preguntas_creadas_eliminar.classList.add("contenedor-pregunta-creada-y-eliminar")    
        
        const boton_preguntas_creadas = document.createElement("div")
        boton_preguntas_creadas.classList.add("preguntas_creadas")
        boton_preguntas_creadas.innerText = una_pregunta.contenido_pregunta_escrita
        boton_preguntas_creadas.value = una_pregunta.indice 

         

        const div_eliminar_pregunta = document.createElement("div")
        div_eliminar_pregunta.classList.add("eliminar-pregunta") 
        const span_icono_eliminar_pregunta = document.createElement("span")
        span_icono_eliminar_pregunta.classList.add("material-symbols-outlined")
        span_icono_eliminar_pregunta.innerText = "delete"
        div_eliminar_pregunta.append(span_icono_eliminar_pregunta)    

        //agregamos todo el contenido de la pregunta ver al contenedor
        
        div_contenedor_preguntas_creadas_eliminar.append(boton_preguntas_creadas, div_eliminar_pregunta)
        
        div_ver_preguntas.append(div_contenedor_preguntas_creadas_eliminar)    
        cuadro_crear_preguntas.append(div_ver_preguntas)
        contenedor.append(cuadro_crear_preguntas)

        
        
        
        //al seleccionar un boton de la pregunta buscamos el valor de este en el array Preguntas
        boton_preguntas_creadas.addEventListener("click", ()=>{

        
            JSON.parse(localStorage.getItem("Preguntas")).forEach((una_pregunta)=>{

                

                if (una_pregunta.indice == boton_preguntas_creadas.value){
                    
                  

                    cuadro_crear_preguntas.remove()
                    
                    console.log(div_contenedor_preguntas_creadas_eliminar)

                    Crear_preguntas(

                        //unidad tiempo de la prueba
                        JSON.parse(localStorage.getItem("Tiempo_prueba"))[1],

                        //tiempo de la prueba
                        JSON.parse(localStorage.getItem("Tiempo_prueba"))[0],

                        una_pregunta.contenido_pregunta_escrita,
                        una_pregunta.respuestas,
                        "Actualizar Pregunta",
                        boton_preguntas_creadas.innerText,
                        true,
                        true,
                        una_pregunta.indice,
                        boton_preguntas_creadas.value

                    )

                    

                    
                    
                }

            })

            console.log("se debe eliminar la pregunta")
            
            

        })

        //eliminar pregunta creada
        div_eliminar_pregunta.addEventListener("click", ()=>{
            
            
            //eliminamos la pregunta del array Preguntas
            JSON.parse(localStorage.getItem("Preguntas")).forEach((pregunta, index)=>{
                
                div_contenedor_preguntas_creadas_eliminar.remove()

                if(pregunta.indice == boton_preguntas_creadas.value){
    
         
                 let guardar_pregunta = JSON.parse(localStorage.getItem("Preguntas")) 
                 
                 //sobreescribimos la pregunta para actualizarla
                 guardar_pregunta.splice(index, 1)
                 
                 localStorage.setItem("Preguntas", JSON.stringify(guardar_pregunta))
         
                 console.log(JSON.parse(localStorage.getItem("Preguntas")))

                 
 
                } 
                 
             })

             cuadro_crear_preguntas.remove()
             Crear_preguntas()       

        })

     })


     }



    //Escribir la pregunta
    const contenedor_escribir_pregunta = document.createElement("div")
    contenedor_escribir_pregunta.classList.add("contenedor-escribir-pregunta")
        const texto_escriba_una_pregunta = document.createElement("div")
        texto_escriba_una_pregunta.innerText = "Escriba una pregunta"
        const contenido_pregunta_escrita = document.createElement("textarea")
        contenido_pregunta_escrita.classList.add("texto-crear-pregunta")
        
        contenido_pregunta_escrita.value = COTENIDO_PREGUNTA_ESCRITA
    
    contenedor_escribir_pregunta.append(texto_escriba_una_pregunta, contenido_pregunta_escrita)
    cuadro_crear_preguntas.append(contenedor_escribir_pregunta)
    contenedor.append(cuadro_crear_preguntas)    

    //agregar las respuestas

    const contenedor_crear_respuesta = document.createElement("div")
    contenedor_crear_respuesta.classList.add("contenedor-crear-respuesta")
        const texto_crear_respuesta = document.createElement("textarea")
        texto_crear_respuesta.classList.add("texto-crear-respuesta")
        const crear_nueva_respuesta = document.createElement("button")
        crear_nueva_respuesta.innerText = "Crear una nueva respuesta"
        crear_nueva_respuesta.classList.add("crear-nueva-respuesta") 
    
    contenedor_crear_respuesta.append(texto_crear_respuesta, crear_nueva_respuesta)
    cuadro_crear_preguntas.append(contenedor_crear_respuesta)
    contenedor.append(cuadro_crear_preguntas)    
    
    //botones para las respuestas
    const contenedor_respuestas = document.createElement("div")
    contenedor_respuestas.classList.add("contenedor-respuestas")
    

    //esto es para tener una lista de los botones y poder colocarlos en verde y no en verde
    //al seleccionarlos está en verde
    let ARRAAY_BOTONES_RESPUESTAS = []

    //esto es para no tener problemas al querer actualizar las respuestas de una pregunta
    //y agregar respuestas de más al array respuestas o duplicarlo
    let permitir_crear_respuesta_actualizacion = false

    if (permitir_actualizar_pregunta_creada == true){
        permitir_crear_respuesta_actualizacion = false
    }

    else{
        permitir_crear_respuesta_actualizacion = true
    }
    

    //mostrar los botones creados al seleccionar una pregunta

    function mostrar_respuestas(texto_respuesta_boton = texto_crear_respuesta.value, tipo_respuesta = "incorrecta"){
        
        const boton_respuesta = document.createElement("button")
        boton_respuesta.classList.add("boton-respuesta")
        boton_respuesta.classList.add(tipo_respuesta)
        boton_respuesta.innerText = texto_respuesta_boton
        boton_respuesta.value = texto_respuesta_boton
        contenedor_respuestas.append(boton_respuesta)


        const boton_seleccionar_respuesta_buena = document.createElement("button")
        boton_seleccionar_respuesta_buena.classList.add("boton-seleccionar-respuesta-buena")
        boton_seleccionar_respuesta_buena.innerText = "Seleccionar cómo respuesta buena"
        boton_seleccionar_respuesta_buena.classList.add("no-mostrar")


         const div_eliminar_respuesta = document.createElement("div")
         div_eliminar_respuesta.classList.add("eliminar-respuesta") 
         div_eliminar_respuesta.classList.add("no-mostrar")
         const span_icono_eliminar_respuesta = document.createElement("span")
         span_icono_eliminar_respuesta.classList.add("material-symbols-outlined")
         span_icono_eliminar_respuesta.innerText = "delete"

         div_eliminar_respuesta.append(span_icono_eliminar_respuesta)
        
         
         
        //agregar contenido al boton respuesta
        boton_respuesta.append(boton_seleccionar_respuesta_buena, div_eliminar_respuesta)
        
        //al principio todas las respuestas están mal pero hay que decir cuál es la verdadera
        

        //al presionar crear nueva respuesta agregamos la respuesta al array respuestas
        if(permitir_crear_respuesta_actualizacion == true){
            respuestas.push([texto_respuesta_boton])
        }
        
        

        //tenemos un array de cada boton para poderle agregar clases como para colocarlo en verde
        ARRAAY_BOTONES_RESPUESTAS.push(boton_respuesta)
    




        //cuando se quiera ver el contenido de un boton para actualizar su respuesta
        //aparece la respuesta correcta seleccionada
        if(boton_respuesta.classList.contains("correcta")){
            boton_respuesta.classList.add("seleccionado-respuesta-correcta")
        }


        
       

        //eliminar respuesta
        div_eliminar_respuesta.addEventListener("click", ()=>{
            
            
            

            respuestas.forEach((respuesta)=>{

                if(respuesta[0] == boton_respuesta.value){
                    respuestas.splice(respuestas.indexOf(respuesta), 1)
                }

            })
           
         
            
            boton_respuesta.remove()

            console.log(respuestas)
            
            ARRAAY_BOTONES_RESPUESTAS.splice(ARRAAY_BOTONES_RESPUESTAS.indexOf(boton_respuesta), 1)
            
        })



        //para seleccionar cómo respuesta correcta
        boton_seleccionar_respuesta_buena.addEventListener("click", ()=>{

            console.log("respuesta seleccionada: " + boton_respuesta.value)
         
            //quitamos el color verde que selecciona la respuesta correcta
            ARRAAY_BOTONES_RESPUESTAS.forEach((boton)=>{
                boton.classList.remove("seleccionado-respuesta-correcta")
            }) 
           
            //agregamos la el color a la respuesta correcta
            boton_respuesta.classList.add("seleccionado-respuesta-correcta")


           

           //le asignamos al array respuestas la respuesta correcta seleccionada   
           respuestas.forEach((respuesta)=>{
            
                respuesta.splice(1, 1) 

                //comprobamos la respuesta en el array es la seleccionada con el click y que
                //en la respuesta buena no esté incluida esa respuesta seleccionada
                //es decir que no haya más de un elemento que en caso contrario tendría la respuesta correcta el segundo elemento
                if (respuesta == boton_respuesta.value)  {
                    
                    respuesta.push("correcta")             
                    console.log(respuestas)
                    
                }

            }) 
                

        })






        //cuando hacemos click al boton respuesta nos aparece la opción de elegirla cómo respuesta correcta
        //y también eliminar
        boton_respuesta.addEventListener("click", ()=>{
            if (boton_seleccionar_respuesta_buena.classList.contains("no-mostrar")){
                boton_seleccionar_respuesta_buena.classList.remove("no-mostrar")
                div_eliminar_respuesta.classList.remove("no-mostrar")
            }

            else{
                boton_seleccionar_respuesta_buena.classList.add("no-mostrar")
                div_eliminar_respuesta.classList.add("no-mostrar") 
            }
        })

        
    }
    
    console.log("observar respuestas")
    console.log(respuestas)

   //vemos cada boton con la respuesta creada al seleccionar la pregunta creada
    if(respuestas.length > 0){
        
        respuestas.forEach((respuesta)=>{

            //a la respuesta que sea correcta se le agrega a tipo de respuesta que será la clase
            //del boton respuesta se agrega la clase correcta
            if(respuesta.length == 2){
                mostrar_respuestas(respuesta[0], respuesta[1])
            }

            else{
                mostrar_respuestas(respuesta[0])
            }



        })

        permitir_crear_respuesta_actualizacion = true

        console.log("respuestas para actualizar: ")
        console.log(respuestas)

    }

    console.log("respuestas actualizadas: ")
    console.log(respuestas)


    crear_nueva_respuesta.addEventListener("click", ()=>{

        //pedimos que se escriba contenido para crear la respuesta
        if(texto_crear_respuesta.value.length == 0){
            alert("Escriba contenido para crear una respuesta")
        }

        else if(texto_crear_respuesta.value.length > 0){

            //esto es para ver la cantidad de veces que se crean una respuesta
            //y mostrar un aviso que no se pueden crear más de 4 respuestas
            let veces_crear_respuestas = respuestas.length
            
            veces_crear_respuestas += 1  

            console.log("veces respuestas creadas: " + veces_crear_respuestas)
            
            //solo se permiten máximo cuatro respuestas creadas
            if(respuestas.length < 4){
                
                mostrar_respuestas()

            }
            
            if(veces_crear_respuestas > 4){
                alert("Máximo 4 respuestas se pueden crear")
            }
        }
        
        
    })

    

    cuadro_crear_preguntas.append(contenedor_respuestas)
    contenedor.append(cuadro_crear_preguntas)

    //Boton crear pregunta
    const boton_crear_pregunta = document.createElement("button")
    boton_crear_pregunta.classList.add("boton-crear-pregunta")
    boton_crear_pregunta.innerText = GUARDAR_CREAR_PREGUNTA

    cuadro_crear_preguntas.append(boton_crear_pregunta)
    contenedor.append(cuadro_crear_preguntas)

    
    
    boton_crear_pregunta.addEventListener("click", ()=>{

        
        //cuando se vaya a actualizar la pregunta 
        if (permitir_actualizar_pregunta_creada){

            JSON.parse(localStorage.getItem("Preguntas")).forEach((pregunta, index)=>{
               
               
                
               if(pregunta.indice == Number(boton_preguntas_creadas_indice)){

                    let hay_respuesta_correcta = ""


                    respuestas.forEach((respuesta)=>{
                        if(respuesta.length == 2){
                            hay_respuesta_correcta = respuesta[1]
                        }
                    })

        
                    if(escribir_tiempo.value.length < 1){
                        alert("Escriba un tiempo para el examen")
                    }
        
                    else if(UNIDAD_TIEMPO.length == 0){
                        alert("Seleccione alguna unidad de tiempo segundos o minutos")
                    }
        
                    else if((contenido_pregunta_escrita.value).length == 0){
        
                        alert("Escriba una pregunta")
        
                    }
                    
                    else if(ARRAAY_BOTONES_RESPUESTAS.length < 2){
                        alert("Agregue almenos dos respuestas para elegir")
                    }
        
                    
                    else if (hay_respuesta_correcta != "correcta"){
                        alert("Seleccione una respuesta correcta")
                    }

                    else{
                        let pregunta_actualizada = new Crear_pregunta({
                            contenido_pregunta_escrita: contenido_pregunta_escrita.value,
                            respuestas: respuestas,
                            indice: Number(indice_escondido.innerText)
                        })   
                        
                        let guardar_pregunta = JSON.parse(localStorage.getItem("Preguntas")) 
                    
                        guardar_pregunta.splice(index, 1 , pregunta_actualizada)
        
                        localStorage.setItem("Preguntas", JSON.stringify(guardar_pregunta))
                        
                        console.log(JSON.parse(localStorage.getItem("Preguntas")))
    
                    
                        //guardamos lo valores del tiempo y su unidad actualizado
                        let nuevo_valor_tiempo_prueba = JSON.parse(localStorage.getItem("Tiempo_prueba"))
    
                        nuevo_valor_tiempo_prueba.pop()
                        nuevo_valor_tiempo_prueba.pop()
    
                        nuevo_valor_tiempo_prueba.push(Number(escribir_tiempo.value))
                        nuevo_valor_tiempo_prueba.push(UNIDAD_TIEMPO)
    
                        localStorage.setItem("Tiempo_prueba", JSON.stringify(nuevo_valor_tiempo_prueba))
    
                        console.log(JSON.parse(localStorage.getItem("Tiempo_prueba")))

                        boton_preguntas_creadas_indice = ""
                        cuadro_crear_preguntas.remove()
                            
                        Crear_preguntas()
                    }

                    


               } 
                
            })

            

           
            
        }


        //cuando se vaya a crear una nueva pregunta
        else if (permitir_actualizar_pregunta_creada == false){

         
            //solo se permiten crear máximo 5 preguntas

            let hay_respuesta_correcta = ""


            respuestas.forEach((respuesta)=>{
                if(respuesta.length == 2){
                    hay_respuesta_correcta = respuesta[1]
                }
            })

            if(escribir_tiempo.value.length < 1){
                alert("Escriba un tiempo para el examen")
            }

            else if(UNIDAD_TIEMPO.length == 0){
                alert("Seleccione alguna unidad de tiempo segundos o minutos")
            }

            else if((contenido_pregunta_escrita.value).length == 0){

                alert("Escriba una pregunta")

            }
            
            else if(ARRAAY_BOTONES_RESPUESTAS.length < 2){
                alert("Agregue almenos dos respuestas para elegir")
            }

            
            else if (hay_respuesta_correcta != "correcta"){
                alert("Seleccione una respuesta correcta")
            }


            else if((JSON.parse((localStorage.getItem("Preguntas"))).length < 5)){

                let pregunta_creada = new Crear_pregunta({
                    contenido_pregunta_escrita: contenido_pregunta_escrita.value,
                    respuestas: respuestas,
                    indice: Number(indice_escondido.innerText)
                    
                })   
    
                let guardar_pregunta = JSON.parse(localStorage.getItem("Preguntas")) 
                
                guardar_pregunta.push(pregunta_creada)
    
                localStorage.setItem("Preguntas", JSON.stringify(guardar_pregunta))
    
                console.log(JSON.parse(localStorage.getItem("Preguntas")))
                

                //guardamos lo valores del tiempo y su unidad
                let nuevo_valor_tiempo_prueba = JSON.parse(localStorage.getItem("Tiempo_prueba"))

                nuevo_valor_tiempo_prueba.pop()
                nuevo_valor_tiempo_prueba.pop()

                nuevo_valor_tiempo_prueba.push(Number(escribir_tiempo.value))
                nuevo_valor_tiempo_prueba.push(UNIDAD_TIEMPO)

                localStorage.setItem("Tiempo_prueba", JSON.stringify(nuevo_valor_tiempo_prueba))

                console.log(JSON.parse(localStorage.getItem("Tiempo_prueba")))
    
                
                //eliminamos el contenido actual para mostrar uno nuevo
                cuadro_crear_preguntas.remove()
                
                Crear_preguntas()

                
    
            }
        }



        
    })

    
    //Boton cancelar actualización pregunta
    const cancelar_actualizacion = document.createElement("div")
    cancelar_actualizacion.classList.add("cancelar-actualizar-pregunta")
    cancelar_actualizacion.classList.add("no-mostrar")
    cancelar_actualizacion.innerText = "Cancelar actualización"

    if(permitir_actualizar_pregunta_creada == true){
        cancelar_actualizacion.classList.remove("no-mostrar")
    }

    cancelar_actualizacion.addEventListener("click", ()=>{
        cuadro_crear_preguntas.remove()
        Crear_preguntas()
    })

    cuadro_crear_preguntas.append(cancelar_actualizacion)
    contenedor.append(cuadro_crear_preguntas)
    

    //Boton volver menú

    const boton_volver_menu = document.createElement("button")
    boton_volver_menu.classList.add("boton-volver-menu")
    boton_volver_menu.innerText = "Volver al menú"

    boton_volver_menu.addEventListener("click", ()=>{

        cuadro_crear_preguntas.remove()
        Menu_Bienvenida()
    })

    cuadro_crear_preguntas.append(boton_volver_menu)
    contenedor.append(cuadro_crear_preguntas)

    



}



function Presentar_Examen(

    contenido_pregunta_escrita,
    respuestas


){

    const contenedor = document.querySelector(".contenedor")
    const cuadro_presentar_examen = document.createElement("div")
    cuadro_presentar_examen.classList.add("cuadro-presentar-examen")

    contenedor.append(cuadro_presentar_examen)





    //mostrar la pregunta al presentar prueba
    const pregunta_presentar_prueba = document.createElement("div")
    pregunta_presentar_prueba.innerText = contenido_pregunta_escrita
    pregunta_presentar_prueba.classList.add("texto-de-pregunta")

    cuadro_presentar_examen.append(pregunta_presentar_prueba)
    contenedor.append(cuadro_presentar_examen)


 
    //mostrar las posibles respuestas

    const contenedor_respuestas = document.createElement("div")
    contenedor_respuestas.classList.add("contenedor-respuestas")

    respuestas.forEach((posibles_respuesta)=>{

        const boton_posible_respuesta = document.createElement("button")
        boton_posible_respuesta.classList.add("boton-respuesta")
        boton_posible_respuesta.innerText = posibles_respuesta[0]

        if(posibles_respuesta.length == 2){
            boton_posible_respuesta.value = posibles_respuesta[1]
            contenedor_respuestas.append(boton_posible_respuesta)
        }

        else if (posibles_respuesta.length == 1){
            contenedor_respuestas.append(boton_posible_respuesta)
            boton_posible_respuesta.value = "no-correcta"
        }
        

        const boton_seleccionar_posible_respueta = document.createElement("button")
        boton_seleccionar_posible_respueta.classList.add("boton-seleccionar-respuesta-buena")
        boton_seleccionar_posible_respueta.innerText = "Seleccionar cómo respuesta buena"
        boton_seleccionar_posible_respueta.classList.add("no-mostrar")
        boton_posible_respuesta.append(boton_seleccionar_posible_respueta)

        cuadro_presentar_examen.append(contenedor_respuestas)
        contenedor.append(cuadro_presentar_examen)

        boton_posible_respuesta.addEventListener("click", ()=>{


            if (boton_seleccionar_posible_respueta.classList.contains("no-mostrar")){
                boton_seleccionar_posible_respueta.classList.remove("no-mostrar")    
            }

            else{
                boton_seleccionar_posible_respueta.classList.add("no-mostrar") 
            }

        })




        boton_seleccionar_posible_respueta.addEventListener("click", ()=>{
            
            
                                                         
            if (boton_posible_respuesta.value == "correcta"){
                
              let respuesta_buenas_actualizada = Number(localStorage.getItem("Respuestas_Buenas")) + 1

              localStorage.setItem("Respuestas_Buenas", respuesta_buenas_actualizada)

              cuadro_presentar_examen.remove()
              
              let indice_guardado_pregunta = Number(JSON.parse(localStorage.getItem("Indice_pregunta"))) + 1
              localStorage.setItem("Indice_pregunta", indice_guardado_pregunta)
              
              let actual_indice_pregunta = Number(JSON.parse(localStorage.getItem("Indice_pregunta")))
              
                
              const PREGUNTAS = JSON.parse(localStorage.getItem("Preguntas"))[actual_indice_pregunta]

              if (actual_indice_pregunta != JSON.parse(localStorage.getItem("Preguntas")).length){
                Presentar_Examen(
                    PREGUNTAS.contenido_pregunta_escrita,
                    PREGUNTAS.respuestas
                )  
              }

              else if(actual_indice_pregunta == JSON.parse(localStorage.getItem("Preguntas")).length){
                
                Finalizar_prueba()

              }

             

            }

            else{

                cuadro_presentar_examen.remove()

                let indice_guardado_pregunta = Number(JSON.parse(localStorage.getItem("Indice_pregunta"))) + 1
                localStorage.setItem("Indice_pregunta", indice_guardado_pregunta)
                
                let actual_indice_pregunta = Number(JSON.parse(localStorage.getItem("Indice_pregunta")))
                
                const PREGUNTAS = JSON.parse(localStorage.getItem("Preguntas"))[actual_indice_pregunta]

                if (actual_indice_pregunta != JSON.parse(localStorage.getItem("Preguntas")).length){
                    Presentar_Examen(
                        PREGUNTAS.contenido_pregunta_escrita,
                        PREGUNTAS.respuestas
                      )  
                  }
    
                else if(actual_indice_pregunta == JSON.parse(localStorage.getItem("Preguntas")).length){
                     
                    Finalizar_prueba()
                    
                        
                }

            }

            
        })

    })
    

}




function Menu_Bienvenida(){


    const contenedor = document.querySelector(".contenedor")

    

    const cuadro_bienvenida = document.createElement("div")
    cuadro_bienvenida.classList.add("cuadro-bienvenida")

    const texto_bienvenida = document.createElement("p")
    texto_bienvenida.innerText = "Bienvenido seleccione una opción" 

    const Boton_crear_una_pregunta = document.createElement("div")
    Boton_crear_una_pregunta.innerText = "Crear pregunta"
    Boton_crear_una_pregunta.classList.add("boton-bienvenida")

    //dirigir a crear pregunta
    Boton_crear_una_pregunta.addEventListener("click", ()=>{
        cuadro_bienvenida.remove()
        Crear_preguntas()
    })

    const Boton_presentar_examen = document.createElement("div")
    Boton_presentar_examen.innerText = "Presentar examen"
    Boton_presentar_examen.classList.add("boton-bienvenida")


    //dirigir presentar examen
    Boton_presentar_examen.addEventListener("click", ()=>{
        
        cuadro_bienvenida.remove()

        const contenedor = document.querySelector(".contenedor")
        const cuadro_presentar_examen = document.createElement("div")
        cuadro_presentar_examen.classList.add("cuadro-examen-tiempo")
    
        contenedor.append(cuadro_presentar_examen)  

        //Barra de carga tiempo
        const div_contenedor_barra_carga = document.createElement("div")
        div_contenedor_barra_carga.classList.add("contenedor-barra-carga")

        const barra_carga = document.createElement("div")
        barra_carga.classList.add("barra-carga")

        div_contenedor_barra_carga.append(barra_carga)
        cuadro_presentar_examen.append(div_contenedor_barra_carga)
        contenedor.append(cuadro_presentar_examen)


       let tiempo_indicado = JSON.parse(localStorage.getItem("Tiempo_prueba"))

       console.log("tiempo indicado")
       console.log(tiempo_indicado)

        //Animacion barra-carga
        

        let segundos_ingresados = Number(tiempo_indicado[0])

        if (tiempo_indicado[1] == "minutos"){
            segundos_ingresados = segundos_ingresados * 60
        }

        
        console.log("segundos ingresados: "+ segundos_ingresados)

        let segundos_verdaderos = segundos_ingresados * 100

        let contar = 0

        let porcentaje_base = 100 / segundos_verdaderos
        let porcentaje_agregado = porcentaje_base 

        console.log()

        let carga = setInterval(()=>{
        
        barra_carga.style.width = porcentaje_agregado + "%"
        porcentaje_agregado += porcentaje_base 
        contar++
        
        if (contar == segundos_verdaderos){
            clearInterval(carga)
            console.log("Terminado")
         

        }
        
        }, 10)


        const indice_guardado_pregunta = Number(JSON.parse(localStorage.getItem("Indice_pregunta")))
        const Preguntas = JSON.parse(localStorage.getItem("Preguntas"))[indice_guardado_pregunta]
        
        //aquí van las preguntas y las posibles respuestas
        
        Presentar_Examen(
            Preguntas.contenido_pregunta_escrita,
            Preguntas.respuestas


        )

        let tiempo_acabado = JSON.parse(localStorage.getItem("Tiempo_prueba"))[0]
        let unidades_tiempos = JSON.parse(localStorage.getItem("Tiempo_prueba"))[1]

        
        if(unidades_tiempos == "minutos"){
            tiempo_acabado = tiempo_acabado * 60
        }


        let acabar_tiempo = setTimeout(() => {
           
            const cuadro_presentar_examen = document.querySelector(".cuadro-presentar-examen")
            cuadro_presentar_examen.remove()
            Finalizar_prueba()
            

        }, tiempo_acabado * 1000);




       let para_detener_acabar_tiempo = setInterval(() => {

            console.log("revisando...")
            if(localStorage.getItem("Acabado_tiempo") == "true"){
                clearTimeout(acabar_tiempo)
                clearInterval(para_detener_acabar_tiempo)
                clearInterval(carga)
                console.log("Terminado")
                localStorage.setItem("Acabado_tiempo", JSON.stringify(false))
            }

        }, 1);
            
        
        





    })

    cuadro_bienvenida.append(texto_bienvenida, Boton_crear_una_pregunta, Boton_presentar_examen)
    contenedor.append(cuadro_bienvenida)




}


//unidad tiempo de la prueba
JSON.parse(localStorage.getItem("Tiempo_prueba"))[1]

//tiempo de la prueba
JSON.parse(localStorage.getItem("Tiempo_prueba"))[0]












Menu_Bienvenida()




