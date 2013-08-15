/*
	Get latitude/longitude for a verified address.
	
	Assuming:
	var liveaddress = $.LiveAddress(...);
*/

liveaddress.on("AddressAccepted", function(event, data, previousHandler)
{
	if (data.response.chosen)
		console.log(data.response.chosen.metadata.latitude, data.response.chosen.metadata.longitude);
	previousHandler(event, data);
});

/*
	Get Countyfips for a verified address.
	
	Assuming:
	var liveaddress = $.LiveAddress(...);
*/

liveaddress.on("AddressAccepted", function(event, data, previousHandler)
{
	if (data.response.chosen)
		$('#Countyfips').val(data.response.chosen.metadata.county_fips);
	previousHandler(event, data);
});
