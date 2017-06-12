import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userc',
  templateUrl: './userc.component.html',
  styleUrls: ['./userc.component.css']
})
export class UsercComponent implements OnInit {

  myName = "My Name value";
  innerHtmlValue = "<h2>Hello</h2>";

  property;
  constructor() { }

  ngOnInit() {
  }
 
  submit() {
    alert("Submit");
  }
}
