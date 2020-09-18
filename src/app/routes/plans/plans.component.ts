import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit, AfterViewInit {

  @ViewChild('scriptContainer', { read: ElementRef}) scriptContainer: ElementRef;

  constructor(@Inject(DOCUMENT) private document,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
              }

  ngOnInit(): void {
    // this.setupFastSpringScriptTag();
  }

  ngAfterViewInit(): void {
  }

  setupFastSpringScriptTag(): void {
    /* <script id="fsc-api" src="https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.3/fastspring-builder.min.js"
  type="text/javascript" data-storefront="idfco.test.onfastspring.com/popup-idfco">
  </script>
    */
    const scriptElement = this.renderer.createElement('script');
    scriptElement.src = 'https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.3/fastspring-builder.min.js';
    scriptElement.type = 'text/javascript';
    scriptElement.setAttribute('data-storefront', 'idfco.test.onfastspring.com/popup-idfco');
    this.renderer.appendChild(this.document.head, scriptElement);
  }

}
