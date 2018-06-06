import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor() { }

  javaCourse = {
    imgHeader: '/assets/images/java_logo_150_150.png',
    title: 'Programowanie w języku Java od podstaw.',
    subTitle: '26 modułów opracowanych na potrzeby praktycznego projektu.',
    imgCard: '/assets/images/java_developer_400x400.jpeg',
    contentP1: 'Szkolenie zostało podzielone na 26 modułów. W trakcie szkolenia poznasz niezbędne narzędzia programisty, poznasz podstawy Javy oraz stworzysz praktyczny projekt.',
    contentP2: 'Kurs przeznaczony jest dla osób w każdym wieku. Ważne, abyś miał dużo chęci do nauki i swobodnie obsługiwał komputer.',
    contentP3: 'Każdy moduł kończy się egzaminem praktycznym, abyś mógł zweryfikować swoją wiedzę.',
    contentP4: 'Zajęcia prowadzone są w formie praktycznych korepetycji w niewielkiej grupie.',
    buttonDetails:'Sprawdź szczegóły',
    buttonSignUp:'Zapisz się na ten kurs',  
  }
}


