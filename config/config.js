/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8000,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
			{
			module: "currentweather",
			position: "top_left",
			config: {
				showSun: true,
				location: "Yogyakarta",
				locationID: "1621176", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "120e5b15ab4bb7f79a6277a15fd05d2c",
				type: "current",
				
			}
		},
		
		/**
		{
			module: "weatherforecast",
			position: "top_left",
			config: {
				showRainAmount: true,
				location: "Yogyakarta",
				maxNumberOfDays: "7",
				locationID: "1621176", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "120e5b15ab4bb7f79a6277a15fd05d2c"
			}
		}, **/
	
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		
		{
			module: "clock",
			position: "top_right",
			config: {
				displaySeconds: false,
				},
		},
		{
			//upcoming event
			module: "MMM-MyCalendar",
			header: "Events",
			position: "lower_third",
			config: {
				maximumEntries: "4",
				colored: true,
				animationSpeed: "1000",
				defaultSymbol: "calendar",
				dateFormat: "MMM Do",
				showEnd: true,
				calendars: [
					{
						symbol: "MyCalendar",
						
						url: "https://www.google.com",
						color: "#ed1c80",
						
					},
				],			
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
