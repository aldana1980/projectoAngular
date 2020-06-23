import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#logo").click(function(e){
      e.preventDefault();
     $("header").css("background","green")
                     .css("height", "50px");
    });

   }

  }


