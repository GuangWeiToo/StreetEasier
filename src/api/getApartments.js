//Fetch
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

/*JQuery

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "fdf37857e7msh4f6ba154cd26974p107aefjsne430cd0fd394",
			"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
*/