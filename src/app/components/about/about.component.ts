import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 public title: string;
 public subtitle: string;
 public email: string;
 public web: string;

  constructor(){
   this.title = "Aldana Delgado";
   this.subtitle = "Desarrollador web";
   this.email = "aldana@aldana.com";
  }

  ngOnInit(): void {
  }

}
