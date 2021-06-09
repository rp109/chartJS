function initMap(lat, long) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: 23.0731,
            lng: 72.5133
        }
    });
    var geocoder = new google.maps.Geocoder;
    let latlng = {
        lat: lat,
        lng: long
    };
    geocoder.geocode({
        'location': latlng
    }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                map.setZoom(11);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                tempAddress = results[0].formatted_address;
                console.log("tempAddress: ", tempAddress)
                // const tempObj = {

                // }
                return getAddress(tempAddress);
            } else {
                window.alert('No results found');
                return true;
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
            return true;
        }
    });
}

// function geocodeLatLng(geocoder, map, lat, long) {
//     let tempAddress = '';

//     var a =
//         return true;

// }





// var browserData;
// function initMap(lat, long) {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 8,
//         center: { lat: 23.0731, lng: 72.5133 }
//     });
//     var geocoder = new google.maps.Geocoder;
//     let returnAddress = geocodeLatLng(geocoder, map, lat, long);
//     if (returnAddress) {
//         return returnAddress;
//     }
// }
// function geocodeLatLng(geocoder, map, lat, long) {
//     let tempAddress = '';
//     let latlng = { lat: lat, lng: long };
//     var a = geocoder.geocode({ 'location': latlng }, function (results, status) {
//         if (status === 'OK') {
//             if (results[0]) {
//                 map.setZoom(11);
//                 var marker = new google.maps.Marker({
//                     position: latlng,
//                     map: map
//                 });
//                 tempAddress = results[0].formatted_address;
//                 // const tempObj = {

//                 // }
//                 return getAddress(tempAddress);
//             } else {
//                 window.alert('No results found');
//                 return true;
//             }
//         } else {
//             window.alert('Geocoder failed due to: ' + status);
//             return true;
//         }
//     });
//     return true;

// }