import { Component } from '@angular/core';

@Component({
  selector: 'headertag',
  template: `<h3 class="text-center">Check-in Yourself</h3>
    <style>.map-responsive{
    overflow:hidden;
    padding-bottom:30%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}</style>
         <div class="map-responsive" width="600px" >
           <iframe src="app/map.html" height="450px" frameborder="0" style="border:0" allowfullscreen></iframe>
         </div>`,
})
export class HeaderComponent  {
  constructor(){
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem('lat', position.coords.latitude.toString() )
      localStorage.setItem('lon', position.coords.longitude.toString() )
    })
  }
}
