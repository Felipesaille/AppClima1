import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IpInformationService} from '../app/ip-information.service'

@Injectable({
  providedIn: 'root'
})
export class ClimaIpService {

  constructor(private http:HttpClient, private ipInfo:IpInformationService) { }

  obtenerClimaGeo(){
    let latitud;
    let longitud;

    this.ipInfo.obtenerIP().subscribe(
      res=>{
        latitud=res['latitude'];
        longitud=res['longitude']
      })
    
    return this.http.get(`http://www.7timer.info/bin/api.pl?lon=${longitud}&lat=${latitud}
            &product=civillight&output=json`)
  }

}
