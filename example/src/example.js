var React = require('react');
var Renderics = require('react-renderics');

//INPUT
var siteScopeDevices = [
	genSiteScopeDevice("VALENCIA01:CPU:OK"),
	genSiteScopeDevice("VALENCIA01:PING:WARNING"),
	genSiteScopeDevice("VALENCIA01:JBOSS:OK"),
	genSiteScopeDevice("BENICIA01:CPU:OK"),
	genSiteScopeDevice("BARCELONA01:PING:WARNING"),
	genSiteScopeDevice("LONDON01:TOMCAT:OK"),
	genSiteScopeDevice("MANCHESTER01:CPU:BAD"),
	genSiteScopeDevice("MANCHESTER01:PING:BAD"),
	genSiteScopeDevice("MANCHESTER01:TOMCAT:WARNING")
];

function genSiteScopeDevice(siteScopeLineLog) {
	var device = siteScopeLineLog.split(":");
	var deviceName = device[0];
	var deviceType = device[1];

	//TODO Melhorar este tratamento e quebrar em outra função
	var deviceStatus = "";
	if (device[2] == "OK") deviceStatus += "ic-ok.png";
	else if (device[2] == "WARNING") deviceStatus += "ic-warning.png";
	else deviceStatus += "ic-error.png";

	return {
		name: deviceName,
		imageSrc: deviceStatus,
		type: deviceType
	};
};

var App = React.createClass({
	render () {
		return (
			<div>
				<Renderics devices={siteScopeDevices} />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
