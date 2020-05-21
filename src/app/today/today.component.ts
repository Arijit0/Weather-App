import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  lat;
  lon;
  weather;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
   this.getLocation();
  }

  getLocation() {
      if("geolocation" in navigator) {
        navigator.geolocation.watchPosition((success:any) => {
          this.lat = success.coords.latitude;
          this.lon = success.coords.longitude;

          this.weatherService.getWeatherDateByCoOrd(this.lat, this.lon).subscribe((result:any) => {
            // console.log(result);
            this.weather = result;
          //  this.ferheniteData = this.weather.main.temp;
          // this.ferheniteValue = (this.ferheniteData - 32) * 5/9;

          })
        })
      }
  }

  getCity(city) {
    this.weatherService.getWeatherDataByCityName(city).subscribe((result:any) => {
      this.weather = result;

      this.lat = result.coord.lat;
      this.lon = result.coord.lon;
    })
  }

}
