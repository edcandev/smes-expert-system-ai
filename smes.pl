% HECHOS

es_un(profe1,doctor).
es_un(profe2,maestro).
es_un(profe3,ingeniero).
es_un(profe4,maestro).
es_un(profe5, doctor).

calificacion(profe1, 9).
calificacion(profe2, 8).
calificacion(profe3, 7).
calificacion(profe4, 9).
calificacion(profe5, 8).

imparte(profe1, proOri, vespertino).
imparte(profe1, intart, vespertino).
imparte(profe2, proOri, matutino).
imparte(profe2, talBdd, matutino).
imparte(profe2, intArt, matutino).
imparte(profe3, talBdd, vespertino).
imparte(profe3, matDis, vespertino).
imparte(profe3, redCom, vespertino).
imparte(profe4, matDis, matutino).
imparte(profe4, ingSof, matutino).
imparte(profe4, ingSof, vespertino).
imparte(profe5, talSis, matutino).
imparte(profe5, talSis, vespertino).
imparte(profe5, redCom, matutino).

%REGLAS

da_en_turno(X,Y) :- imparte(X,_,Y); !.
es_dada_por_un(X,Y) :- imparte(A,X,_), es_un(A,Y).
es_buen_profesor(X) :- calificacion(X,Y), Y > 7.









