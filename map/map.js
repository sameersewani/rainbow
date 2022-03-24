var map = L.map('map').setView([0,0],5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FtZWVyMTQiLCJhIjoiY2wwbWI2Ym5hMG82NTNqbzBkNXVlbzE3MCJ9.x2TQ2X3dWmBSsJgdwFOULg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FtZWVyMTQiLCJhIjoiY2wwbWI2Ym5hMG82NTNqbzBkNXVlbzE3MCJ9.x2TQ2X3dWmBSsJgdwFOULg'
}).addTo(map);

var myHeaders = new Headers();
myHeaders.append("Host", "api.traveltimeapp.com");
myHeaders.append("Accept", "application/json");
myHeaders.append("X-Application-Id", "7b4b4a96");
myHeaders.append("X-Api-Key", "d6357f4bbfeccd2fa60f13dabdef4441");
myHeaders.append("Accept-Language", "en-US");

let markers = [];

var requestOptions = 
{
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function function1()
{
  var s=document.getElementById("Search").value;
  var arr=s.split(",");
  var counter = 0;
  for(i=0;i<arr.length;i++)
  {
      fetch(`http://api.traveltimeapp.com/v4/geocoding/search?query=${arr[i]}`,requestOptions)
    .then(response=>
      {
        return response.json();
      }).then(data=>
        {
            let marker;
            counter++;

            if(counter == 1)
            {
              // console.log(data);
              marker = L.marker([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[0]]).addTo(map);
            } 
            else if(counter == 2) 
            {
              marker = L.marker([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[0]],{icon: greenIcon}).addTo(map);
            }
             else if(counter == 3)
            {
              marker = L.marker([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[0]],{icon: redIcon}).addTo(map);
            } 
            else 
            {
              marker = L.marker([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[0]],{icon: yellowIcon}).addTo(map);
            }
            markers.push(marker);
      })
      
  }

}

function function2()
{
    markers.forEach(marker => 
    {
    map.removeLayer(marker);
    })
}
     
