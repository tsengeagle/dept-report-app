import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '科報系統';
  apportionMasterItem = ['Cost01', 'Cost02', 'Cost03'];
  apportionMaster: ApportionMaster[] =
  [
    { 'CostID': '000001', 'CostName': 'Cost01' },
    { 'CostID': '000002', 'CostName': 'Cost02' },
    { 'CostID': '000003', 'CostName': 'Cost03' },
    { 'CostID': '000004', 'CostName': 'Cost04' },
  ];
}

export class ApportionMaster {
  CostID: string;
  CostName: string;
}
