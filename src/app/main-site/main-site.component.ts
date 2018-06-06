import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent implements OnInit {

  constructor() { }

  button= "Wybierz ścieżkę rozwoju";
  title = "Postaw swoje pierwsze kroki w branży IT";
  img = "/assets/images/code-2620118_960_720.jpg"; //not use

  ngOnInit() {
  }

}
