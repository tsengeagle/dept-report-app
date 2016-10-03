import { Component, OnInit } from '@angular/core';
import { ApportionService } from '../apportion.service';
@Component({
  selector: 'app-apportion-detail',
  templateUrl: './apportion-detail.component.html',
  styleUrls: ['./apportion-detail.component.css']
})
export class ApportionDetailComponent implements OnInit {

  // data= ['A', 'B', 'C'];
  data;
  service: ApportionService;
  constructor(service: ApportionService) {
    this.service = service;
  }

  ngOnInit() {
    this.data = this.service.GetData();
  }

}
