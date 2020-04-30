import {Component, OnInit} from '@angular/core';

import ace from '../assets/scripts/ace';
import * as xtext from '../assets/scripts/xtext-ace';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // trying to access this one causes errors about missing modules (which are actually defined in this file)
    console.log(ace);
    // trying to access this one causes errors about missing modules from ace.js file
    console.log(xtext);
  }
}
