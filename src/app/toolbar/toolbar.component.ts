import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  texts = {
    title: "DevLab",
    login: "panel użytkownika",
    loginToolTip: "jeszcze nie dostępne",
    infoBox1: "Uczymy od podstaw jak rozumieć i programować ze zrozumieniem.",
    infoBox2: "Najlepsi kursanci z edycji otrzymują ofertę pracy.",
    infoBox3: "Najlepsza na rynku forma finansowania szkolenia - ty decydujesz!",   
  }
}
