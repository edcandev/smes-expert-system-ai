ver:- hipotesis(Animal),
    write('El profesor recomendado es: '),
    write(Animal),
    nl,
    undo.
/* Probar hipotesis */

hipotesis(profe1)	:- profe1, !.
hipotesis(profe2)	:- profe2, !.
hipotesis(profe3)	:- profe3, !.
hipotesis(profe4)	:- profe4, !.


/* Reglas de identificación de animales*/
chita :- mamifero, carnivoro, verify(tiene_color_leonado), verify(tiene_manchas_negras).
tigre :- mamifero, carnivoro, verify(tiene_color_leonado), verify(tiene_rayas_negras).
jirafa:- ungulado, verify(tiene_cuello_largo),verify(tiene_patas_largas).
zebra :- ungulado, verify(tiene_rayas_negras).
avestruz:- ave, verify(no_vuela), verify(tiene_cuello_largo).
pinguino:- ave, verify(no_vuela), verify(nada), verify(es_blanco_negro).
albatros:- ave, verify(aparece_en_historias_antiguas), verify(vuela_bien).

%% AQUÍ COMIENZAN MIS ANIMALES.
cocodrilo :- carnivoro, reptil, acuatico. %% ANIMAL TERRESTRE
ballena :- acuatico, mamifero. %% ANIMAL ACUÁTICO
halcon :- ave, carnivoro, verify(vuela_bien). %% ANIMAL AÉREO

/* reglas de clasificación
mamifero	:- verify(tiene_pelo), !.
mamifero	:- verify(produce_leche).
ave			:- verify(tiene_plumas), !.
ave			:- verify(vuela), verify(pone_huevos).
carnivoro	:- verify(come_carne),!.
carnivoro	:- verify(tiene_dientes_puntiagudos), verify(tiene_garras), verify(tiene_ojos_hacia_adelante).
ungulado	:- mamifero, verify(tiene_pezunas), !.
ungulado	:- mamifero, verify(rumia).
%% MIS PREGUNTAS
acuatico :- verify(vive_en_el_agua).
reptil :- verify(pone_huevos), verify(se_arrastra).
*/

materia(verify('de_que_materia_se_trata?')).



/* Cómo hacer las preguntas*/
preguntar(Pregunta)	:- 
    write(Pregunta),
    write('? '), read(Respuesta), nl,
    (   (   Respuesta== si; Respuesta==s)->  assert(si(Pregunta));
    assert(no(Pregunta)), fail).
:-dynamic si/1, no/1.
/* Cómo verificar algo */
verify(S)	:-
    (   si(S)->  true;
    (   no(S)->  fail; preguntar(S))).

/* deshacer todos las aseveraciones si/no  */
undo	:- retract(si(_)), fail.
undo	:- retract(no(_)), fail.
undo.