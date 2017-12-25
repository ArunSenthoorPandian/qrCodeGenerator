import { Component, OnInit, Inject } from '@angular/core';
import { QRCodeComponent } from 'angular2-qrcode';
import { DOCUMENT } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { log } from 'util';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent implements OnInit {

  document: Document;
  url: string;

  constructor( @Inject(DOCUMENT) document: any) {
    this.document = document;
  }
  ngOnInit() {
    console.log(this.document.location.href);
    // Retreive the location of the current page and returns it to the QR Generator Tag
    // QR generator consumes the url and generates a QR CODE
    this.url = this.document.location.href;
  }


}
