//JQuery
import React from "react";
import $ from "jquery";

let streetAddress,city,state,zipcode,lotAreaValue,lotAreaUnit,homeType,homeStatus,bathroom,bedrooms,price;
function getApartment(zipCode){
	const settings = {
		"async": true,
		"crossDomain": true,
		//"url": "https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx"
		"url": "https://zillow56.p.rapidapi.com/search?location="+zipCode,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "fdf37857e7msh4f6ba154cd26974p107aefjsne430cd0fd394",
			"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
		
		}
		
	};

	$.ajax(settings).done(function (response) {
		const data=JSON.stringify(response);
		const{streetAddress,city,state,zipcode,lotAreaValue,lotAreaUnit,homeType,homeStatus,bathroom,bedrooms,price}=data;
		console.log(response);
		console.log(city)
		return(			
			<div>
				<p>
					Bedrooms:<span id="bedrooms"></span><br/>
					Bathrooms:<span id="bathrooms"></span><br/>
					Price:<span id="price"></span><br/>
					Address:<span id="StreetAddress"></span><br/>
					Home Type:<span id="homeType"></span><br/>
					Home Status:<span id="homeStatus"></span><br/>
					Area:<span id="Area"></span><br/>
				</p>
			</div>
		)
	});

}

export default getApartment
	
/*
						//Full address
		document.getElementById("StreetAddress").textContent=streetAddress+city+state+zipcode;
		document.getElementById("city").textContent=city;
		document.getElementById("state").textContent=state;
		document.getElementById("zipcode").textContent=zipcode;
						//Area size
		document.getElementById("Area").textContent=lotAreaValue+lotAreaUnit;
		document.getElementById("lotAreaValue").textContent=lotAreaValue;
		document.getElementById("lotAreaUnit").textContent=lotAreaUnit;
						//Independent
		document.getElementById("homeType").textContent=homeType;
		document.getElementById("homeStatus").textContent=homeStatus;
		document.getElementById("bathroom").textContent=bathroom;
		document.getElementById("bedrooms").textContent=bedrooms;
		document.getElementById("price").textContent=price;
*/

/**data example given for JQuery
 
bathrooms: 4
bedrooms: 3
city: "Houston"
country: "USA"
currency: "USD"
datePriceChanged: 1664607600000
daysOnZillow: -1
homeStatus: "FOR_SALE"
homeStatusForHDP: "FOR_SALE"
homeType: "SINGLE_FAMILY"
isFeatured: false
isNonOwnerOccupied: true
isPreforeclosureAuction: false
isPremierBuilder: false
isUnmappable: false
isZillowOwned: false
latitude: 29.745394
listing_sub_type: {is_FSBA: true, is_openHouse: true}
livingArea: 2759
longitude: -95.39548
lotAreaUnit: "sqft"
lotAreaValue: 1524.6
openHouse: "Sun. 3-5pm"
open_house_info: {open_house_showing: Array(1)}
price: 599000
priceChange: -9000
priceForHDP: 599000
priceReduction: "$9,000 (Oct 1)"
rentZestimate: 3851
shouldHighlight: false
state: "TX"
streetAddress: "1505 Missouri St"
taxAssessedValue: 538200
zestimate: 588216
zipcode: "77006"
zpid: 126260205

*/



/*
*Fetch

import fetch from "node-fetch";

var location;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fdf37857e7msh4f6ba154cd26974p107aefjsne430cd0fd394',
		'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
	}
};
//remove 11214 for location variable
fetch('https://zillow56.p.rapidapi.com/search?location=11214', options)
	.then(response =>{
		if(response.ok){
			console.log('Great')
		}else{
			console.log('Data Error')
		} 
	response.json()
	})
	.then(response => console.log(response))
	.catch(err => console.error(err));
	*/