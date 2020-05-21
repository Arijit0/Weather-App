import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  ApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  ApiKey = "c3ee99a42306d656cf41c8a54bac3644";

  constructor(private http:HttpClient) { }

  getWeatherDateByCoOrd(lat, lon) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.ApiKey)

    return this.http.get(this.ApiUrl, { params });
  }

  getWeatherDataByCityName(city:string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.ApiKey)

    return this.http.get(this.ApiUrl, { params });
  }
}
