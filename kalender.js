/*
  fetch('Bookings.json')
.then(result=> result.json())
.then((res) => {
	Jsonloop(res.Bookings);
})
	function Jsonloop(list){
		for (var key in list){
			for(datebox in grid){
				console.log("how many?");
			}
						
		}
	}*/

  	

	var tmp = new Date();
  	var currentmonth = tmp.getMonth()
  	var currentyear = tmp.getFullYear()
  	var months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
  	var displayMonth = document.getElementById('valgtMåned');
  	

  function currentMonth(){

  	var displayMonth = document.getElementById('valgtMåned'); 	
  	displayMonth.innerHTML = months[currentmonth] + " " + currentyear;
  	buildMonth();
  }

var monthindex = currentmonth
function nextMonth(){	 
	 if (monthindex>10) {
	 	return
	 };
	 monthindex = monthindex + 1;
	var displayMonth = document.getElementById('valgtMåned');
		displayMonth.innerHTML = months[monthindex] + " " + currentyear;
		buildMonth();
		//console.log(monthindex);
		
}

function prevMonth(){
	var displayMonth = document.getElementById('valgtMåned');
	if (monthindex<=currentmonth) {
		return
	}
	monthindex = monthindex - 1;
	displayMonth.innerHTML = months[monthindex] + " " + currentyear;
	buildMonth();

	//console.log(monthindex);
}

var weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]

//var testdate = new Date()
//testdate.setMonth(11);


function buildMonth(){

	var lastDay = new Date(currentyear, monthindex +1, 0);
	var firstOfMonth = new Date(currentyear, monthindex, 1);
	var firstday = firstOfMonth.getDay();
	var totalDays = lastDay.getDate();
	//console.log(weekdays[firstday]);
	//console.log(totalDays);
	var grid = document.getElementById('datogrid')
	grid.innerHTML = "";

	if (firstday == 1) {
		//console.log("Mandag, lag ingen bokser!");
	}
	if (firstday == 0){
		//console.log("Søndag, lag 6 bokser!");
		for (i=0; i < 6; i++){
		var datebox = document.createElement('div');
		datebox.setAttribute("class", "unclickable");
		grid.appendChild(datebox);
		}
		
	}
	for (i = 2; i <= firstday; i++) {		
		//console.log("something");
		var datebox = document.createElement('div');
		datebox.setAttribute("class", "unclickable");
		grid.appendChild(datebox);
		
	}
	var count = 0;
	for (i=0; i < totalDays; i++){
		
		var count = count + 1;
		var datenumber = document.createElement('p')
		var datebox = document.createElement('div');
		datebox.setAttribute("class", "datobox");
		if (monthindex == currentmonth){
			if (count == tmp.getDate()){
				datebox.setAttribute("class", "today");
			}
		}
		datebox.setAttribute("onclick", "buildTable(this.id)");
		datebox.id = "0" + count + "" + months[monthindex];
		if (count > 9) {
			datebox.id = count + "" + months[monthindex];
		};
		
		datenumber.innerHTML = count;
		datebox.appendChild(datenumber);
		grid.appendChild(datebox);

	}
	
	
	
	
	var children = grid.childNodes;
	var maxChilds = 42;


	//console.log(children.length);
	var remainingchilds = maxChilds - children.length;

	//console.log(remainingchilds);
	if (remainingchilds == 7){
		//console.log("its 7, do nothing");
	}
	if (remainingchilds > 7){		
		for (i=0; i < remainingchilds - 7; i++){
			var datebox = document.createElement('div');
			datebox.setAttribute("class", "unclickable");
			grid.appendChild(datebox);
		}
		//console.log("set maxChilds to 35, then createRemaining");
	}
	if (remainingchilds < 7){
		for (i=0; i < remainingchilds; i++){
			var datebox = document.createElement('div');
			//datebox.setAttribute("class", "datobox");
			datebox.setAttribute("class", "unclickable");			
			grid.appendChild(datebox);
		}
	}

	fetch('Bookings.json')
.then(result=> result.json())
.then((res) => {
	Jsonloop(res.Bookings);
})
	function Jsonloop(list){
		
		for (var key in list){				
			//console.log(list[key].bookingdate);
			
			for (var x in grid.childNodes){
				//console.log(grid.childNodes[x].id);
				if (list[key].bookingdate == grid.childNodes[x].id){
					grid.childNodes[x].childNodes[0].innerHTML += "<br> *";

				}

			}				
		}

	}

}


function buildTable(clicked_id){
	body = document.body;
	var clicked = clicked_id;
	var tabellboks = document.getElementById("bookingcontain");
	var chosenDate = document.createElement("h2");	
	chosenDate.setAttribute("id", "superdate")
	//console.log(clicked);
	var count2 = 0;	
	var tabcount = 0;
	var button1 = document.getElementById("changetabbutton3");
	var button2 = document.getElementById("changetabbutton4");
	var button3 = document.getElementById("changetabbutton5");
	var button4 = document.getElementById("changetabbutton6");
	if(!body.hasChildNodes(button1)){
		body.appendChild(button1)};
	if(!body.hasChildNodes(button2)){
		body.appendChild(button2)};
	if(!body.hasChildNodes(button3)){
		body.appendChild(button3)};
	if(!body.hasChildNodes(button4)){
		body.appendChild(button4)};

	tabellboks.innerHTML="";
	tabellboks.appendChild(chosenDate);
	chosenDate.innerHTML= clicked;
	for (i=0; i < 4; i++){
		
		var lomme = document.createElement("div");
		var time = document.createElement("div");
		var status = document.createElement("div");
		var button = document.createElement("div");

		var timeTekst = document.createElement("p");
		//var buttonTekst = document.createElement("p");
		var statusTekst = document.createElement("p");
		statusTekst.innerHTML = "Ledig";
		//buttonTekst.innerHTML = "Book";
		timeTekst.innerHTML = 10 + count2 + ":00<br>-<br>" + (11 + count2) + ":00";
		var count2 = count2 + 1;
		var tabcount = tabcount + 1;
		lomme.setAttribute("class", "bookinglomme");
		time.setAttribute("class", "time");
		status.setAttribute("class", "status");
		button.setAttribute("class", "ledig");
		//button.setAttribute("onclick", "supertest()");
		button.setAttribute("id", "tabber" + tabcount);
		timeTekst.setAttribute("class", "timeTekst");
		//buttonTekst.setAttribute("class", "bookknapp");
		statusTekst.setAttribute("class", "tilgjengelig");
		time.appendChild(timeTekst);
		status.appendChild(statusTekst);
		//button.appendChild(buttonTekst);
		lomme.appendChild(time);
		lomme.appendChild(status);
		lomme.appendChild(button);
		tabellboks.appendChild(lomme);
		

	}
	var buttoncont1 = document.getElementById("tabber1");
	var buttoncont2 = document.getElementById("tabber2");
	var buttoncont3 = document.getElementById("tabber3");
	var buttoncont4 = document.getElementById("tabber4");
	button1.style.display = "block";
	button2.style.display = "block";
	button3.style.display = "block";
	button4.style.display = "block";
	
	buttoncont1.appendChild(button1);	
	buttoncont2.appendChild(button2);	
	buttoncont3.appendChild(button3);	
	buttoncont4.appendChild(button4);

}

function supertest(clicked_id){
	var chosenDate = document.getElementById("superdate");
	var whatsClicked = clicked_id;
	var ghostDato = document.getElementById("ghostDate");
	var ghostTid = document.getElementById("ghostTime");
	var tmpTid = "";
	if (whatsClicked == "changetabbutton3") {
		tmpTid = "10 - 11"
	};
	if (whatsClicked == "changetabbutton4") {
		tmpTid = "11 - 12"
	};
	if (whatsClicked == "changetabbutton5") {
		tmpTid = "12 - 13"
	};
	if (whatsClicked == "changetabbutton6") {
		tmpTid = "13 - 14"
	};
	ghostDato.value = chosenDate.innerHTML;
	ghostTid.value = tmpTid;
	var spanDate = document.getElementById("datoOrder");
	var spanTime = document.getElementById("tidOrder");
	spanDate.innerHTML = "Dato: " + chosenDate.innerHTML;
	spanTime.innerHTML = "Klokken: " + tmpTid;
	nextStep(3);
}

