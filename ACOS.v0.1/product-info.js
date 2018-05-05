

var url = new URL(window.location.href); // Creates variable url. new URL window.location.href returns the href (URL) of the current page
var id = url.searchParams.get("id"); // returns the first value associated to the given search parameter.

if (id) { // if there is an id, display the following information

    fetch("https://api.urbanapp.no/v1/venue/" + id) // Fetches the API + id
        .then(function(response){
            return response.json(); // Define resonse as json
            // console.log(response.json());
        })
        .then(function(response) { // Put json response in variable list, and create function
            document.getElementById("hovednavn").innerText = response.name;
            document.getElementById("valgtTjeneste").innerText = response.name;
            document.getElementById("typeOrder").innerText = response.name;
            document.getElementById("ghostName").placeholder = response.name;



            var img = document.getElementById("logoImg");
            if (response.logo === null){
                img.src = "https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png";
            } else {
                img.src = response.logo; // Makes variable img.src = place.imageUrl. The url of the image depends on which place displaye
            }


            document.getElementById("adresse").innerText = response.address;
            document.getElementById("innledning").innerText = response.description;
            document.getElementById("navn").innerText = response.twitter;
            document.getElementById("telefon").innerText = response.phone;
            document.getElementById("epost").innerText = response.email;
            document.getElementById("info").innerText = response.info;

            var openss = "";
            var pris = [];
           // document.getElementById("opening").innerHTML = response.operations;

           // var operations = JSON.parse(response.operations);
           // console.dir(operations);
            for (dag of response.operations){
                dag = JSON.parse(dag);
                openss += dag.day + ": " + dag.opens + " - " + dag.closes + "<br>";
                pris.push(dag.cover_charge);
            }
            document.getElementById("opening").innerHTML = openss;
            var minP = Math.min(...pris);
            var maxP = Math.max(...pris);
            if (minP === maxP){
                document.getElementById("pris").innerText = maxP;
            } else {
                document.getElementById("pris").innerText = minP + " - " + maxP;

            }



            var lng = response.location.split(",")[1];
            console.log(lng);
            var lat = response.location.split(",")[0];
            var pos = {lat: Number(lat), lng: Number(lng)};
            myMap.setCenter(pos);
            var marker = new google.maps.Marker({
                position: pos,
                map: myMap,
                title: response.name
            });

            // console.dir({lat: Number(lat), lng: Number(lng)})
        }) // Fetch .then end


} // if id end




