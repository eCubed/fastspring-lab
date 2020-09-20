import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var fastspring: any;

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  @ViewChild('scriptContainer', { read: ElementRef}) scriptContainer: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    // this.setupFastSpringScriptTag();
  }

  popupStoreFront(itemIdentifier: string): void {
    fastspring.builder.push({
      reset: true,
      products: [
        { path: itemIdentifier, quantity: 1 }
      ],
      checkout: true,
      account: 'wFz_sebkSbq1E0TEtNCiFQ'
    });
  }
}
