import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion-section',
  templateUrl: './opinion-section.component.html',
  styleUrls: ['./opinion-section.component.css']
})
export class OpinionSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comments = {
    img: ["/assets/images/gentleman_90_90.png"],
    opinion: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis ante, consectetur eget luctus id, vulputate vitae nunc. Maecenas sed turpis quis dolor tristique suscipit. Morbi consequat purus id tellus tempus, vel pulvinar lacus molestie. Aenean pellentesque lorem quis nibh suscipit, quis ornare lorem porttitor. Proin velit massa, placerat ac tristique faucibus, ullamcorper a ex. Vivamus maximus varius eros quis sollicitudin. Cras suscipit ante dolor, ac posuere leo ullamcorper eu."]
  
  }
  
}
