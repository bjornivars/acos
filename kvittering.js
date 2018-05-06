


var url = new URL(window.location.href); // Creates variable url. new URL window.location.href returns the href (URL) of the current page
var c = url.toString();
//console.log(c);





var pattern = c.match(/\?(.*)#/)[1];
var array = pattern.split("&");


var box = document.getElementById("infoKvitt");

for (param of array){
    var val = param.split("=");
    var str = "";
    var verdi = decodeURIComponent(val[1]).replace(/\+/g," ");

    switch(val[0]){
        case "Lokale":
            str = "Lokale: " + verdi
            break;
        case "Dato":
            str = "Dato: " + verdi
            break;
        case "Klokkeslett":
            str = "Klokkeslett: " + verdi
            break;
        case "firstName":
            str = "Fornavn: " + verdi
            break;
        case "lastName":
            str = "Etternavn: " + verdi
            break;
        case "email":
            str = "Epost: " + verdi
            break;
        case "phone":
            str = "Telefon: " + verdi
            break;
        case "address":
            str = "Adresse: " + verdi
            break;
        case "post":
            str = "Postnummer: " + verdi
            break;


    }

    if (str) {
        var li = document.createElement("li");
        var tn = document.createTextNode(str);
        li.appendChild(tn);

        box.appendChild(li);
    }
}



