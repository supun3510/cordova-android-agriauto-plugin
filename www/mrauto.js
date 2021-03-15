 var exec = require('cordova/exec');
 function Mrauto() { 
	        this.ACCESS_COARSE_LOCATION = 'android.permission.ACCESS_COARSE_LOCATION';
            this.ACCESS_FINE_LOCATION = 'android.permission.ACCESS_FINE_LOCATION';
            this.ACCESS_LOCATION_EXTRA_COMMANDS = 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS';
            this.ACCESS_NETWORK_STATE = 'android.permission.ACCESS_NETWORK_STATE';
            this.CAMERA = 'android.permission.CAMERA'; 
 }
   
 Mrauto.prototype = { 
    RequestPermission: function(arg0, success, error) {	 
        exec(success, error, 'Mrauto', 'RequestPermission', [arg0]);
    },
	CheckPermission: function(arg0, success, error) { 
        exec(success, error, 'Mrauto', 'CheckPermission', [arg0]);
    },
	CheckConnectivity: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'CheckConnectivity',[""]);
    },
	GetGPSStatus: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'GetGPSStatus',[""]);
    },
	turnGPSOn: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'turnGPSOn',[""]);
    },
	turnGPSOff: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'turnGPSOff',[""]);
    },
	GetGpsLocation: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'GetGpsLocation',[""]);
    },
	startLocationService: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'startLocationService',[""]);
    },
	stopLocationService: function(success, error) { 	    
        exec(success, error, 'Mrauto', 'stopLocationService',[""]);
    }
}; 
 
module.exports = new Mrauto();
 