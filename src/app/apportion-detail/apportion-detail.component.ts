import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apportion-detail',
  templateUrl: './apportion-detail.component.html',
  styleUrls: ['./apportion-detail.component.css']
})
export class ApportionDetailComponent implements OnInit {

  data= ['A', 'B', 'C'];

  constructor() { }

  ngOnInit() {
  }

}
