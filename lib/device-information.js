"use trict";

const config = require("./config");
const db = require("./db");

function getAllInformationDevices(details) {
 /* if (details.rpc) {
    if(details.rpc.cpeRequest) {
     // console.log(details.rpc.cpeRequest.parameterList);
      return details.rpc.cpeRequest.parameterList;
    }
  }*/
  var deviceInfo;
  if (details.rpc) {
    if(details.rpc.cpeRequest) {
      var params = details.rpc.cpeRequest.parameterList;
      for(param in params) {
        deviceInfo += params[param][0] + ": " + params[param][1] + "\n";
      }
      return deviceInfo;
    }
  }
}

function getAllInformationDbDevices() {
	/*db.connect(function(err, db) {
		if(err) throw err;
		db.collection('devices').find({}).toArray(function(err, data) {
			if(err) throw err;
			console.log(data);
		});
		db.close();
	});*/
	db.connect.devicesCollection.find({}).toArray(function(err, data) {
		if(err) throw err;
		console.log(data);
		});
		db.close();
	}
//}


function getOneInformationDevice(details, device) {
  var deviceInfo;
  if (details.rpc) {
    if (details.rpc.cpeRequest) {
      var params = details.rpc.cpeRequest.parameterList
      for (param in params) {
        if (params[param][0] === device) {
          deviceInfo = params[param][0] + ": " + params[param][1];
          break;
        }
      }
    }
  }
	return deviceInfo;
}

exports.getAllInformationDevices = getAllInformationDevices;
exports.getAllInformationDbDevices = getAllInformationDbDevices;
exports.getOneInformationDevice = getOneInformationDevice;
