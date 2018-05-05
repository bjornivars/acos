




function showPlace(place){


    var opening = "Samma det";
    var priceing = "Masse";
    var priceArray = [];

    if (place.operations[0]) {
        var operations = JSON.parse(place.operations[0]);
        var opening = operations.opens + " - " + operations.closes;

        for (dag of place.operations){
            dag = JSON.parse(dag);
            priceArray.push(dag.cover_charge);
        }
        var minP = Math.min(...priceArray);

        var priceing = minP;

    }



    var box = document.createElement("div");
    box.classList.add("col-md-3");

    var placeContainer = document.createElement("div"); // Creates a div called placeContainer
    placeContainer.classList.add("places"); // Adds class "place-container" to placeContainer div

    var img = document.createElement("img"); // Creates an element called img
    img.classList.add("img-fluid");
    if (place.logo === null){
        img.src = "https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png";
    } else {
        img.src = place.logo; // Makes variable img.src = place.imageUrl. The url of the image depends on which place displaye
    }
    img.alt = "visningsbilde for" + place.name;
   // img.style.width = "100%"; // Sets image style width to 100%
   // img.style.height = "150px";

    var placeName = document.createElement("h2"); // Creates a h4 element called h4
    placeName.classList.add("h2-style");
    var placeNameText = document.createTextNode(place.name); // Makes a text node out of the result of place.name
    placeName.appendChild(placeNameText); // Puts the h4TextNode inside the h4 tag to display name of the place

    var open = document.createElement("p");
    var openIcon = document.createElement("i");
    openIcon.classList.add("far");
    openIcon.classList.add("fa-clock");
    var openText = document.createTextNode(" Åpningstider: " + opening);

    var price = document.createElement("p");
    var priceIcon = document.createElement("i");
    priceIcon.classList.add("fas");
    priceIcon.classList.add("fa-dollar-sign");
    var priceText = document.createTextNode(" Pris per time fra: " + priceing + " kr");


    var attribute = document.createElement("a"); // Creates an a element called attribute
    attribute.classList.add("btn"); // Adds class "btn" to attribute
    attribute.classList.add("btn-success"); // Adds class "btn-success" to attribute
    var attributeTextNode = document.createTextNode("View More"); // Creates a text node which sais: "View More"
    attribute.appendChild(attributeTextNode); // Puts the attributeTextNode ("View More") into the attribute (a) element
    attribute.href = "product-info.html?id=" + place.id; // Gives the attribute an href that should contain "place-specific.html?id=" and the selected place´s id.




    placeContainer.appendChild(img);
    placeContainer.appendChild(placeName);
    placeContainer.appendChild(open);
    open.appendChild(openIcon);
    open.appendChild(openText);

    placeContainer.appendChild(price);
    price.appendChild(priceIcon);
    price.appendChild(priceText);

    placeContainer.appendChild(attribute);
    box.appendChild(placeContainer);
    myPlaces.appendChild(box);


}



function removePlaces() {
    while (myPlaces.firstChild){
        myPlaces.removeChild(myPlaces.firstChild);
    }
}




function filterVenues(type) {
    console.log(type);
    removePlaces();
    list = JSON.parse(window.localStorage.getItem("liste"));
    //console.dir(list);
    for (place of list){
        //var tid = operations.opens;
        //console.log(tid);
        if (type === place.display){

            showPlace(place);
       //     console.log("match");

        } else {
         //   console.log("not match");
        }
    }
}


$(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    hash = e.target.hash;
    // console.log(hash)
    if (hash === "#lokaler"){
        // showPlace(place);
        console.log("Lokaler");
        filterVenues(0)
    } else if (hash === "#idrettshaller") {
        console.log("Idrettshaller");
        filterVenues(1)
    } else if (hash === "#badetilbud"){
        console.log("Badetilbud");
        filterVenues(2)
    } else if (hash === "#saksbehandler"){
      console.log("Saksbehandler");
        filterVenues(3)
    }
});





//alert("Boom it works! "); //just a test to see if script is executing

var myPlaces = document.getElementById("places"); // variable "myPlaces" blir her knyttet til objektet (tag´en) som har id="places"

fetch("https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/") // Fetches the API
    .then(function(response){ //
         return response.json(); // Define resonse as json
    })
    .then(function(list) { // Put json response in variable list, and create function
   // console.dir(list);
    window.localStorage.setItem("liste",JSON.stringify(list));
    document.getElementsById("valgIndex");
    });
