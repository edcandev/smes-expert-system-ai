
const materias = {
    sem1: ["Fundamentos de Programación","Matemáticas Discretas"],
    sem2: ["Programación Orientada a Objetos","Estructura de Datos"],
    sem3: ["Programación Web","Probabilidad y Estadística"],
    sem4: ["Tópicos Avanzados de Programación","Taller de Sistemas Operativos"],
    sem5: ["Taller de Base de Datos","Lenguajes y Autómatas I"],
    sem6: ["Ingeniería de Software","Inteligencia Artificial"]
}

const listaMateria = document.querySelector(".container__select--semestre");
const listaTurno = document.querySelector(".container__select--materia");
const textArea = document.querySelector(".container__text-area");
const button = document.querySelector(".container__but");


var pl = {
    consult : function(prog){},
    query : function(consul){},
    answer : function(res){} 
};

var materiaSel = "";
var turnoSel = "";
var palabraClave;

var selecciono = false;
listaMateria.addEventListener("click",(ev)=>{
    
    materiaSel = ev.target.value;
    
    if(materiaSel != "Seleccione su materia") { // ESTABLECE LAS MATERIAS SEGUN SU SEMESTRE
        
        //console.log(materiaSel);
        listaTurno.disabled = false;

    }

});

listaTurno.addEventListener("click",(ev)=>{

    turnoSel = ev.target.value;

    if(turnoSel != "Seleccione su turno") { // ACTIVA EL TEXTAREA Y BOTÓN CUANDO SELECIONA MATERIA
        turnoSel = listaTurno.value;
        //console.log(turnoSel);
        selecciono = true;
    }

    if(selecciono) {
        textArea.disabled = false;
        button.disabled = false;
        textArea.placeholder = "Ingrese alguna palabra clave:";

    }
});

button.addEventListener("click",()=>{ // ENVÍA LA CONSULTA
    palabraClave = textArea.value;
    textArea.value = null;

    iniciarConsulta(materiaSel, turnoSel, palabraClave);

});


function iniciarConsulta (materia, turno, palClave) {
    
    var programa  = `
    es_un(profe1,doctor).
    es_un(profe2,maestro).
    es_un(profe3,ingeniero).

    calificacion(profe1, 9).
    calificacion(profe2, 8).
    calificacion(profe3, 7).
    calificacion(profe4, 9).

    imparte(profe1, proOri, vespertino).
    imparte(profe1, intart, vespertino).
    imparte(profe2, proOri, matutino).
    imparte(profe2, talBdd, matutino).
    imparte(profe2, intArt, matutino).
    imparte(profe3, talBdd, vespertino).
    imparte(profe3, matDis, vespertino).
    imparte(profe4, matDis, matutino).
    imparte(profe4, ingSof, matutino).
    imparte(profe4, ingSof, vespertino).

    %REGLAS
    da_en_turno(X,Y) :- imparte(X,_,Y); !.
    es_dada_por_un(X,Y) :- imparte(A,X,_), es_un(A,Y).
    es_buen_profesor(X) :- calificacion(X,Y), Y > 7.
    `;
    
    var consulta = `imparte(X,${materia},${turno})`;

    var respuesta = 'profe';

    var session = pl;
    session.consult(programa,
        {
	    success: function () {
	    },
        error: function (err) {

        },
    });

    session.query(consulta, { // CONSULTA AQUI
	    success: function (goal) {

        },
	    error: function (err) {

        }
    });

    session.answer({
	    success: function (answer){
		    session.answer(
                {
			    success: function (answer) {
				    console.log(answer);
			    },
		    });
	    },
	    error: function () {
            console.log("query_err");
	    },
	    fail: function () {
	    },
	    limit: function () {
	    },
    });

    var show = function (answer) { // IMPRESIÓN DE LA CONSULTA
    };
    session.answer({
	    success: function (answer) {
            show(answer);
            session.answer({
			    success: function (answer) {
				    show(answer);
			    },
		    });
	    },
    });




















































    switch(materia) {
        case 'proOri':
            if(turno === 'matutino') {
                if (palClave == '' || palClave == 'maestro') {
                    respuesta += '2';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }else {
                if(palClave == '' || palClave == 'doctor') {
                    respuesta += '1';
                } else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }
            break;

        case 'talBdd':
            if(turno === 'matutino') {
                if (palClave == '' || palClave == 'maestro') {
                    respuesta += '2';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }else {
                if (palClave == '' || palClave == 'ingeniero') {
                    respuesta += '3';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }
            break;

        case 'ingSof':
            if(palClave == '' || palClave == 'maestro') {
                respuesta += '4';
            }else {
                respuesta = 'No se ha encontrado un profe con esas caracteríticas';
            }
            break;

        case 'intArt':
            if(turno === 'matutino') {
                if (palClave == '' || palClave == 'maestro') {
                    respuesta += '2';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }else {
                if(palClave == '' || palClave == 'doctor') {
                    respuesta += '1';
                } else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }
            break;

        case 'matDis':
            if(turno === 'matutino') {
                if(palClave == '' || palClave == 'maestro') {
                    respuesta += '4';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }else {
                if(palClave == '' || palClave == 'ingeniero') {
                    respuesta += '3';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }
            break;

        case 'talSis':
            if(palClave == '' || palClave == 'doctor') {
                respuesta += '5';
            }else {
                respuesta = 'No se ha encontrado un profe con esas características';
            }
            
            break;

        case 'redCom':
            if(turno === 'matutino') {
                if(palClave == '' || palClave == 'doctor') {
                    respuesta += '5';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }else {
                if(palClave == '' || palClave == 'ingeniero') {
                    respuesta += '3';
                }else {
                    respuesta = 'No se ha encontrado un profe con esas características';
                }
            }
            break;
    }
    
    alert(`Profesores recomendados:\n -> ${respuesta} <-`);
}




