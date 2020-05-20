import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpInformationService {
  
  aKey='5c47f4ccf44ebf11389759a970f1ec04';
  ipURL='http://api.ipstack.com/check?access_key=';

  constructor(private http:HttpClient) { }

  obtenerIP(){
    return this.http.get(`${this.ipURL}${this.aKey}`)
  }

}
