import {Injectable} from "@angular/core";
@Injectable()

export class Location {
  lat: number;
  lng: number;
}
export class LocationHandler {
  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof navigator.geolocation === 'undefined') {
        return reject();
      }
      navigator.geolocation.getCurrentPosition(function (position) {
        let point: Location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        resolve(point);
      }, function () {
        reject();
      });
    });
  }
}
