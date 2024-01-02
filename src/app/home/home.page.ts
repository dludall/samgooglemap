import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  constructor() {}
  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'service-app-unid-id',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {

          lat: 37.5666103,
          lng: 126.9783882
        },
        zoom: 8,
        disableDefaultUI:true,
      },
    });
    // await this.newMap.destroy();
  }
  
}
