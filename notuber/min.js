var map,image="car.png",vehicle_list=[{vehicle_id:"mXfkjrFw",pos:{lat:42.3453,lng:-71.0464}},{vehicle_id:"nZXB8ZHz",pos:{lat:42.3662,lng:-71.0621}},{vehicle_id:"Tkwu74WC",pos:{lat:42.3603,lng:-71.0547}},{vehicle_id:"5KWpnAJN",pos:{lat:42.3472,lng:-71.0802}},{vehicle_id:"uf5ZrXYw",pos:{lat:42.3663,lng:-71.0544}},{vehicle_id:"VMerzMH8",pos:{lat:42.3542,lng:-71.0704}}];function initMap(){for(var e in map=new google.maps.Map(document.getElementById("map"),{center:{lat:42.352271,lng:-71.055242},zoom:12}),vehicle_list)new google.maps.Marker({position:vehicle_list[e].pos,map:map,icon:image})}