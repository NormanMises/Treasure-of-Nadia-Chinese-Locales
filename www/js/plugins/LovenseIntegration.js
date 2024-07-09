//=============================================================================
// LovenseIntegration.js
//=============================================================================

/*:
 * @plugindesc Enables interaction with Lovense devices
 * @author Wes Townsend
 * 
 * @param Option Menu Text
 * @desc Text that appears in the title menu. Make blank to not show in title menu.
 * @default Lovense Remote
 *
 * @param Option Menu Shop Text
 * @desc Text that appears in the title menu. Make blank to not show in title menu.
 * @default Shop at Lovense
 *
 * @param Affiliate URL
 * @desc Text that appears in the title menu. Make blank to not show in title menu.
 * @default https://www.lovense.com/r/j6i8i3
 *
 * @help This plugin does not provide plugin commands. Probably will soon
 * 
 * V.0.0.2a
 *
 * To use, TODO
 */
 
var SR = SR || {};                            // Futureproofing
SR.LovenseIntegration = SR.LovenseIntegration || {};        // This object
 
(function() {
	SR.LovenseIntegration._lovenseIntensity = 100;
	
	Object.defineProperty(ConfigManager, 'lovenseIntensity', {
		get: function() {
			return SR.LovenseIntegration.lovenseIntensity;
		},
		set: function(value) {
			SR.LovenseIntegration.lovenseIntensity = value;
		},
		configurable: true
	});
	ConfigManager.makeData = function() {
		var config = {};
		config.alwaysDash = this.alwaysDash;
		config.commandRemember = this.commandRemember;
		config.bgmVolume = this.bgmVolume;
		config.bgsVolume = this.bgsVolume;
		config.meVolume = this.meVolume;
		config.seVolume = this.seVolume;
		config.lovenseIntensity = this.lovenseIntensity;
		return config;
	};


	ConfigManager.applyData = function(config) {
		this.alwaysDash = this.readFlag(config, 'alwaysDash');
		this.commandRemember = this.readFlag(config, 'commandRemember');
		this.bgmVolume = this.readVolume(config, 'bgmVolume');
		this.bgsVolume = this.readVolume(config, 'bgsVolume');
		this.meVolume = this.readVolume(config, 'meVolume');
		this.seVolume = this.readVolume(config, 'seVolume');
		this.lovenseIntensity = this.readVolume(config, 'lovenseIntensity');
	};
    SR.LovenseIntegration.optionText = PluginManager.parameters('LovenseIntegration')["Option Menu Text"];
	if(typeof PluginManager.parameters('LovenseIntegration')["Option Menu Shop Text"] !== "undefined") {
		SR.LovenseIntegration.optionStoreText = PluginManager.parameters('LovenseIntegration')["Option Menu Shop Text"];
	} else {
		SR.LovenseIntegration.optionStoreText = "购买 Lovense 装置";
	}
	
	if(typeof PluginManager.parameters('LovenseIntegration')["Affiliate URL"] !== "undefined") {
		SR.LovenseIntegration.affiliateUrl = PluginManager.parameters('LovenseIntegration')["Affiliate URL"];
	} else {
		SR.LovenseIntegration.affiliateUrl = "https://www.lovense.com/r/j6i8i3";
	}
	SR.LovenseIntegration.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function() {
		SR.LovenseIntegration.Window_Options_makeCommandList.call(this);
		this.addCommand(SR.LovenseIntegration.optionText, 'lovense');
		this.addCommand("爱感强度", 'lovenseIntensity');
		this.addCommand(SR.LovenseIntegration.optionStoreText, 'lovenseStore');
    };
	
	SR.LovenseIntegration.Window_Options_drawItem = Window_Options.prototype.drawItem;
	Window_Options.prototype.drawItem = function(index) {
		if(this.commandSymbol(index) == "lovense" || this.commandSymbol(index) == "lovenseStore") { 
			var rect = this.itemRectForText(index);
			var titleWidth = rect.width;
			this.resetTextColor();
			this.changePaintOpacity(this.isCommandEnabled(index));
			this.drawText(this.commandName(index), rect.x, rect.y, titleWidth, 'left');
		} else {
			var rect = this.itemRectForText(index);
			var statusWidth = this.statusWidth();
			var titleWidth = rect.width - statusWidth;
			this.resetTextColor();
			this.changePaintOpacity(this.isCommandEnabled(index));
			this.drawText(this.commandName(index), rect.x, rect.y, titleWidth, 'left');
			this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right');
		}
	};

	SR.LovenseIntegration.Window_Options_drawItem = Window_Options.prototype.drawItem;


	Window_Options.prototype.isVolumeSymbol = function(symbol) {
		return symbol.contains('Volume') || symbol.contains('Intensity');
	};

	Window_Options.prototype.processOk = function() {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		if(this.commandSymbol(index) == "lovense") {
			var toys = lovense.getToys();
			if(toys.length == 0) {
				SceneManager.goto(LovenseAdd);
			} else {
				SceneManager.goto(LovenseMenu);
			}
		} else if(this.commandSymbol(index) == "lovenseStore") {
			lovense.shopAtLovense();
		} else {
			var value = this.getConfigValue(symbol);
			if (this.isVolumeSymbol(symbol)) {
				value += this.volumeOffset();
				if (value > 100) {
					value = 0;
				}
				value = value.clamp(0, 100);
				this.changeValue(symbol, value);
			} else {
				this.changeValue(symbol, !value);
			}
		}
	};


//-----------------------------------------------------------------------------
    // LovenseMenuParent
    //

    function LovenseMenuParent() {
        this.initialize.apply(this, arguments);
    }
	
    LovenseMenuParent.prototype = Object.create(Scene_MenuBase.prototype);
    LovenseMenuParent.prototype.constructor = LovenseMenuParent;

    LovenseMenuParent.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    LovenseMenuParent.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
		lovense.connectionResume();
		this.createHelpWindow();
        this.createListWindow();
    };

    LovenseMenuParent.prototype.start = function()	{
		Scene_MenuBase.prototype.start.call(this);
		this._listWindow.refresh();
    };

    LovenseMenuParent.prototype.savedDeviceId = function() {
        return this._listWindow.index() + 1;
    };

    LovenseMenuParent.prototype.createHelpWindow = function() {
        this._helpWindow = new Window_Help(1);
        this._helpWindow.setText("Manage Lovense Devices");
        this.addWindow(this._helpWindow);
    };

    LovenseMenuParent.prototype.createListWindow = function() {
        var x = 0;
        var y = this._helpWindow.height;
        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight - y;
		var toys = lovense.getToys();
		var dirPath = StorageManager.localFileDirectoryPath() + "devices/";
		this._listWindow = new Window_DeviceList(x, y, width, height, toys.length, toys.length);
		this._listWindow.setHandler('ok',     this.onSavefileOk.bind(this));
		this._listWindow.setHandler('cancel', this.onEsc.bind(this));
		this._listWindow.setMode(this.mode());
		this._listWindow.refresh();
		this.addWindow(this._listWindow);
		listWindowInterval = setInterval(this._listWindow.refresh(), 5000);
    };
	
	LovenseMenuParent.prototype.mode = function() {
        return null;
    };

    LovenseMenuParent.prototype.activateListWindow = function() {
        this._listWindow.activate();
    };
    
    //-----------------------------------------------------------------------------
    // LovenseMenu

    function LovenseMenu() {
        this.initialize.apply(this, arguments);
    }

    LovenseMenu.prototype = Object.create(LovenseMenuParent.prototype);
    LovenseMenu.prototype.constructor = LovenseMenu;

    LovenseMenu.prototype.initialize = function() {
        LovenseMenuParent.prototype.initialize.call(this);
		this._loadSuccess = false;
    };

    LovenseMenu.prototype.terminate = function() {
        LovenseMenuParent.prototype.terminate.call(this);
        if (this._loadSuccess) {
            $gameSystem.onAfterLoad();
        }
    };

    LovenseMenu.prototype.mode = function() {
        return 'load';
    };

    LovenseMenu.prototype.helpWindowText = function() {
        return TextManager.loadMessage;
    };

    LovenseMenu.prototype.onSavefileOk = function() {
		if(this._listWindow.index() + 1 == this._listWindow.numOfDevices) {
			SceneManager.goto(LovenseAdd);
		} else {
			this.startFadeOut(this.slowFadeSpeed());
			SceneManager.goto(LovenseMenu);
		}
		
    };
	
	LovenseMenu.prototype.onEsc = function() {
			SceneManager.goto(Scene_Options);
    };

    LovenseMenu.prototype.onLoadSuccess = function() {
        SoundManager.playLoad();
        this.fadeOutAll();
        this.reloadMapIfUpdated();
        SceneManager.goto(Scene_Map);
        this._loadSuccess = true;
    };

    LovenseMenu.prototype.onLoadFailure = function() {
        SoundManager.playBuzzer();
        this.activateListWindow();
    };
	
//-----------------------------------------------------------------------------
    // LovenseAddParent

    function LovenseAddParent() {
        this.initialize.apply(this, arguments);
    }
	LovenseAddParent.requestId = 0;
	LovenseAddParent.uid = 0;
	LovenseAddParent.utoken = "";
	
    LovenseAddParent.prototype = Object.create(Scene_MenuBase.prototype);
    LovenseAddParent.prototype.constructor = LovenseAddParent;

    LovenseAddParent.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    LovenseAddParent.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
    };

    LovenseAddParent.prototype.start = function()	{
		Scene_MenuBase.prototype.start.call(this);
		this.isConnected();
		this.createHelpWindowConnecting();
    };

	LovenseAddParent.prototype.createHelpWindowConnecting = function() {
        this._helpWindow = new Window_Help(1);
        this._helpWindow.setText("检查网络连接中，请稍等。");
        this.addWindow(this._helpWindow);
    };

	LovenseAddParent.prototype.createHelpWindowNoConnection = function() {
        this._helpWindow = new Window_Help(1);
        this._helpWindow.setText("没有互联网连接。");
        this.addWindow(this._helpWindow);
    };

    LovenseAddParent.prototype.createHelpWindow = function() {
        this._helpWindow = new Window_Help(3);
        this._helpWindow.setText("请在Lovense Remote App中，点击右上角的(+)，然后选择\“扫描QR\”。扫描后，设备列表将很快出现。");
        this.addWindow(this._helpWindow);
    };

    LovenseAddParent.prototype.createQRWindow = function() {
        var x = 0;
        var y = this._helpWindow.height;
        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight - y;
        this._listWindow = new Window_QRCode(x, y, width, height, this.uid);
        this._listWindow.setHandler('ok',     console.log("clicked"));
        this._listWindow.setHandler('cancel',  this.onEsc.bind(this));
        this._listWindow.setMode(this.mode());
        this._listWindow.refresh();
        this.addWindow(this._listWindow);
    };

    LovenseAddParent.prototype.mode = function() {
        return null;
    };

    LovenseAddParent.prototype.activateListWindow = function() {
        this._listWindow.activate();
    };

    LovenseAddParent.prototype.helpWindowText = function() {
        return '';
    };

	LovenseAddParent.prototype.isConnected = function() {
		this.uid = Math.floor((Math.random() * 90000000) + 10000000);
		var utoken1 = Math.floor((Math.random() * 999999999998) + 1);
		var utoken2 = Math.floor((Math.random() * 999999999998) + 1);
		this.utoken = utoken1.toString() + "" + utoken2.toString();
		var xhr = new XMLHttpRequest();
		xhr.LAP = this;
		xhr.open("GET", "http://www.nlt-media.net/lovenseConnect/newtest.php?uid=" + this.uid.toString() + "&utoken=" +  this.utoken, true);
		xhr.setRequestHeader("Cache-Control", "no-cache");
		xhr.onload = function (e) {
		  if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				if(xhr.responseText.indexOf(',') != -1) {
					const fs = require("fs");
					
					var savePath = "www/img/pictures/";
					if(Utils.isOptionValid('test')) {
						savePath = "img/pictures/";
					}
					StorageManager.unlinkDeviceFile();
					lovense.resetToys();
					fs.readdir(savePath, (err, files) => {
						if (err) throw err;
						for (const file of files) {
							if(file.substring(0,2) == 'qr') {
								fs.unlink(savePath + file, err => {
									if (err) throw err;
								});
							}
						}
					});
					
					
					img.save("https://www.nlt-media.net/lovenseConnect/pngify.php?imageurl="+encodeURIComponent(xhr.responseText.substring(xhr.responseText.indexOf(',') + 1)),savePath+"qr"+this.LAP.uid+".png");
					this.LAP.createHelpWindow();
					this.LAP.createQRWindow();
					this.LAP._listWindow.refresh();
					this.LAP.requestId = xhr.responseText.substring(0, xhr.responseText.indexOf(',')); 
					
					const webInterval = setInterval(function(LAP) {
						var xhr2 = new XMLHttpRequest();
						xhr2.open("GET", "http://www.nlt-media.net/lovenseConnect/check.php?requestid=" + LAP.requestId + "&uid=" + LAP.uid.toString() + "&utoken=" +  LAP.utoken, true);
						xhr2.setRequestHeader("Cache-Control", "no-cache");
						xhr2.onload = function (e) {
						  if (xhr2.readyState === 4) {
							if (xhr2.status === 200) {
								if(xhr2.responseText != "没有响应") {
									var jsonLovense = JSON.parse(xhr2.responseText);
									StorageManager.saveDeviceToLocalFile(xhr2.responseText);
									lovense.setConnectCallbackData(jsonLovense);
									clearInterval(webInterval);
									SceneManager.goto(LovenseMenu);
								} else {
									console.log(xhr2.responseText);
								}
							} else {
								console.error(xhr2.statusText);
							}
						  }
						};
						xhr2.onerror = function (e) {
							console.error(xhr2.statusText);
						};
						xhr2.send(null);
					}, 5000, this.LAP);
				} else {
					this.LAP.isConnected();
				}
			} else {
				this.LAP.createHelpWindowNoConnection();
				this.LAP.createQRWindow();
				this.LAP._listWindow.refresh();
			}
		  }
		};
		xhr.onerror = function (e) {
			this.LAP.createHelpWindowNoConnection();
			this.LAP.createQRWindow();
			this.LAP._listWindow.refresh();
		};
		xhr.send(null);
	}
	
    //-----------------------------------------------------------------------------
    // LovenseAdd

    function LovenseAdd() {
        this.initialize.apply(this, arguments);
    }

    LovenseAdd.prototype = Object.create(LovenseAddParent.prototype);
    LovenseAdd.prototype.constructor = LovenseAdd;

    LovenseAdd.prototype.initialize = function() {
        LovenseAddParent.prototype.initialize.call(this);
        this._loadSuccess = false;
    };

    LovenseAdd.prototype.terminate = function() {
        LovenseAddParent.prototype.terminate.call(this);
        if (this._loadSuccess) {
            $gameSystem.onAfterLoad();
        }
    };

    LovenseAdd.prototype.mode = function() {
        return 'load';
    };

    LovenseAdd.prototype.helpWindowText = function() {
        return TextManager.loadMessage;
    };

    LovenseAdd.prototype.firstSavefileIndex = function() {
        return DataManager.latestsavedDeviceId() - 1;
    };

    LovenseAdd.prototype.onSavefileOk = function() {
    };
	
	LovenseAdd.prototype.onEsc = function() {
			SceneManager.goto(Scene_Options);
    };

    LovenseAdd.prototype.onLoadSuccess = function() {
        this._loadSuccess = true;
    };

    LovenseAdd.prototype.onLoadFailure = function() {
        SoundManager.playBuzzer();
        this.activateListWindow();
    };

 //-----------------------------------------------------------------------------
    // Window_DeviceList

	Window_DeviceList.prototype.secondDevice = "";
    function Window_DeviceList() {
        this.initialize.apply(this, arguments);
    }

    Window_DeviceList.prototype = Object.create(Window_Selectable.prototype);
    Window_DeviceList.prototype.constructor = Window_DeviceList;

    Window_DeviceList.prototype.initialize = function(x, y, width, height, numOfDevices, devicesPerPage) {
		this.numOfDevices = numOfDevices; 
		this.devicesPerPage = devicesPerPage;
		if(lovense.connectionType() != "PC")  {
			this.numOfDevices++;
			this.devicesPerPage++;
		}
		if(this.numOfDevices == 1 && lovense.hasLocalJson) {
			this.numOfDevices = 2;
			this.devicesPerPage = 2;
			this.secondDevice = "Warning";
		} else {
			this.secondDevice = "";
		}
		Window_Selectable.prototype.initialize.call(this, x, y, width, height, this.numOfDevices, this.devicesPerPage);
        this.activate();
        this._mode = null;
    };

    Window_DeviceList.prototype.setMode = function(mode) {
        this._mode = mode;
    };

    Window_DeviceList.prototype.maxItems = function() {
		return this.numOfDevices;
    };

    Window_DeviceList.prototype.maxVisibleItems = function() {
        if(parseInt(this.devicesPerPage) > parseInt(this.numOfDevices)) {
			return this.numOfDevices;
        } else {
            return this.devicesPerPage;
        }
            
    };

    Window_DeviceList.prototype.itemHeight = function() {
		var innerHeight = this.height - this.padding * 2;
        return Math.floor(innerHeight / this.maxVisibleItems());
    };

    Window_DeviceList.prototype.drawItem = function(index) {
		var id = index + 1;
		var rect = this.itemRectForText(index);
		toys = lovense.getToys();
		if(id == this.numOfDevices && lovense.connectionType() != 'PC') {
			if(this.numOfDevices > 1) {
				this.drawText("重新连接帐户或连接新帐户。", rect.x, rect.y+(rect.height/2)-15, rect.width, "center");
			} else {
				this.drawText("连接帐户", rect.x, rect.y+50, rect.width, "center");
			}
		} else {
			if(this.secondDevice=="Warning" && toys.length == 0) {
				this.drawText("找不到玩具。", rect.x, rect.y+(rect.height/2)-30, rect.width, "center");
				this.drawText("确保app是活跃的，玩具是连接的。", rect.x, rect.y+(rect.height/2), rect.width, "center");
				this.drawText("然后点击这里重新同步。", rect.x, rect.y+(rect.height/2)+30, rect.width, "center");
			} else {
				this.drawText(toys[index].name[0].toUpperCase() + toys[index].name.substring(1), rect.x+260, rect.y+20, rect.width - 160);
				this.drawText(toys[index].nickName, rect.x+360, rect.y+20, rect.width - 160);
				this.drawText("连接类型:" + lovense.connectionType(), rect.x-160, rect.y+60, rect.width, 'right');
				if(lovense.connectionType() != "Web") {
					if(toys[index].status == 0) {
						this.drawText("没有连接", rect.x+260, rect.y+60, rect.width);
					} else {
						this.drawText("连接", rect.x+260, rect.y+60, rect.width);
					}
				}
				var fs = require ("fs");
				if(fs.existsSync("./img/pictures/lovense." + toys[index].name.toLowerCase() + ".png") || fs.existsSync("./www/img/pictures/lovense." + toys[index].name.toLowerCase() + ".png")) {
					const imgRect = this.itemRect(index)
					const image = ImageManager.loadPicture("lovense." + toys[index].name);
					const spr = new Sprite(image)
					this.addChild(spr)
					spr.move(imgRect.x + 110, imgRect.y + 5)
				}
			}
		}
    }; 

 //-----------------------------------------------------------------------------
    // Window_QRCode

    function Window_QRCode() {
        this.initialize.apply(this, arguments);
    }
	Window_QRCode.prototype = Object.create(Window_Selectable.prototype);
    Window_QRCode.prototype.constructor = Window_QRCode;

    Window_QRCode.prototype.initialize = function(x, y, width, height, uid) {
		Window_Selectable.prototype.initialize.call(this, x, y, width, height, uid);
		this.uid = uid;
		this.activate();
        this._mode = null;
    };

    Window_QRCode.prototype.setMode = function(mode) {
		this._mode = mode;
    };
    Window_QRCode.prototype.maxItems = function() {
		return 1;
    };
	
	Window_QRCode.prototype.maxVisibleItems = function() {
        return 1;
    };
	
	Window_QRCode.prototype.maxPageItems = function() {
        return 1;
    };

    Window_QRCode.prototype.itemHeight = function() {
		var innerHeight = (this.height - this.padding * 2);
        return innerHeight;
    };

	Window_QRCode.prototype.drawItem = function(index) {
		const rect = this.itemRect(index)
		Decrypter._ignoreList.push("img/pictures/qr"+this.uid+".png");
		const image = ImageManager.loadPicture("qr"+this.uid);
		const spr = new Sprite(image)
		this.addChild(spr)
		spr.move((rect.width/2)-125, (rect.height/2)-125)
		this.drawText(this.uid, (rect.width/2)-75, (rect.height/2)+120, "center")
	};

// Misc necessary functions    
    DataManager.getLocalDeviceJson = function() {
		const fs = require("fs");
		var dirPath = StorageManager.localFileDirectoryPath() + "devices/";
		if (!fs.existsSync(dirPath)){
			fs.mkdirSync(dirPath);
		}
		var files = fs.readdirSync(dirPath);
		if(files.length == 0) return {};
		
		var fileContent = fs.readFileSync(dirPath + "lovense.dat", 'utf8');
		var decodedContent = LZString.decompressFromBase64(fileContent);
		try {
			return JSON.parse(decodedContent);
		} catch(e) {
			return {};
		}
		return {};
	}

    DataManager.maxDevices = function() {
		return LovenseMenuParent.numOfDevices;
    };

	StorageManager.unlinkDeviceFile = function() {
		var fs = require('fs');
		var dirPath = this.localFileDirectoryPath() + "devices/";
		var filePath = dirPath +  "lovense.dat";
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		fs.unlink(filePath);
	};	

	StorageManager.saveDeviceToLocalFile = function(json) {
		var data = LZString.compressToBase64(json);
		var fs = require('fs');
		var dirPath = this.localFileDirectoryPath() + "devices/";
		var filePath = dirPath +  "lovense.dat";
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		
		fs.writeFileSync(filePath, data);
	};	
})();

// Non plug-in functions
class img {
	static save(url, dest) {
		function toDataUrl(url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.onload = function() {
				var reader = new FileReader();
				reader.onloadend = function() {
					callback(reader.result);
				}
				reader.readAsDataURL(xhr.response);
			};
			xhr.open('GET', url);
			xhr.responseType = 'blob';
			xhr.send();
		}
		toDataUrl(url, function(data64) {
			var fs = require('fs');
			var img = data64;
			var data = img.replace(/^data:image\/\w+;base64,/, "");
			var buf = new Buffer(data, 'base64');
			fs.writeFileSync(dest, buf);
		});
	}
}


function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}


// Lovense JS (Modified)
;(function() {
	window.lovense = window.Lovense = window.lovense || window.Lovense || {}
	var lovense = window.lovense
	var localConnectionRetries = 0;
	var qrConnectionRetries = 0;
	var isWebConnect = false;
	var hasLocalJson = false;
	var isLocalConnect = false
	var localConnectPort = 30010
	var isQrcodeConnect = false
	var toyMap = {}
	var mobileData = {}
	var checkLocalConnectInterval = 0;
	var checkQrcodeConnectInterval = 0;
	var mobileData = null
	var serverCommandCallback = null
	var uid;
	
	var formatParams = function(data) {
		var arr = []
		for (var name in data) {
			arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
		}
		arr.push(('vrandom=' + Math.random()).replace('.', ''))
		return arr.join('&')
	}

	var ajax = function(options) {
		options = options || {}
		options.type = (options.type || 'GET').toUpperCase()
		options.dataType = options.dataType || 'json'
		options.timeout = options.timeout || 10000
		var params = formatParams(options.data)
		var xhr
		var xmlHttp_timeout = null
		xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				clearTimeout(xmlHttp_timeout)
				var status = xhr.status
				if (status >= 200 && status < 300) {
					options.success && options.success(xhr.responseText, xhr.responseXML)
				} else {
					options.error && options.error(status)
				}
			}
		}
		if (options.type == 'GET') {
			xhr.open('GET', options.url + '?' + params, true)
			xhr.send(null)
		} else if (options.type == 'POST') {
			xhr.open('POST', options.url, true)
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			xhr.send(params)
		}
		xmlHttp_timeout = setTimeout(function() {
			xhr.abort()
		}, options.timeout)
	}

	function checkLocalConnect() {
		localConnectionRetries++;
		if(localConnectionRetries > 20) {
			clearInterval(checkLocalConnectInterval);
		} else {
			var xhr = new XMLHttpRequest()
			var xmlHttp_timeout = null
			data='{"command":"GetToys","apiVer":1}';
			var url = 'https://127-0-0-1.lovense.club:' + localConnectPort + '/command';
			xhr.open("POST", url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (typeof xhr.response === 'string') {
						try {
							data = JSON.parse(xhr.response);
						} catch (e) {
							return false;
						}
					}
					if (data.data) {
						toyMap = JSON.parse(data.data.toys);
						isLocalConnect = true
						clearInterval(checkLocalConnectInterval);
						clearInterval(checkQrcodeConnectInterval);
					}
				}};
			xhr.send(data);
		}
	}

	var checkLocalConnectInterval = setInterval(checkLocalConnect, 10 * 1000)
	checkLocalConnect()


	function checkQrcodeConnect() {
		qrConnectionRetries++;
		if(qrConnectionRetries > 20 || !mobileData.httpsPort || mobileData.httpsPort.length == 0 || isLocalConnect) {
			clearInterval(checkQrcodeConnectInterval);
		} else {
			var xhr = new XMLHttpRequest()
			var xmlHttp_timeout = null
			data='{"command":"GetToys","apiVer":1}';
			var url = 'https://' + mobileData.domain + ':' + mobileData.httpsPort + '/command';
			if(isValidHttpUrl(url)) {
				xhr.open("POST", url);
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("Content-Type", "application/json");
				xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
				xhr.onerror = function () {
					if((qrConnectionRetries < 3 && mobileData.httpsPort != 30010) || mobileData.httpsPort === 34568) {
						mobileData.httpsPort = 30010
					} else {
						if (mobileData.httpsPort < 30015) {
							mobileData.httpsPort++
						} else {
							mobileData.httpsPort = 34568
							clearInterval(checkLocalConnectInterval);
							checkLocalConnectInterval = setInterval(checkLocalConnect, 10 * 1000)
						}
					}
					checkQrcodeConnect();
				}
				xhr.ontimeout = function () {
					if((qrConnectionRetries < 3 && mobileData.httpsPort != 30010) || mobileData.httpsPort === 34568) {
						mobileData.httpsPort = 30010
					} else {
						if (mobileData.httpsPort < 30015) {
							mobileData.httpsPort++
						} else {
							mobileData.httpsPort = 34568
							clearInterval(checkLocalConnectInterval);
							checkLocalConnectInterval = setInterval(checkLocalConnect, 10 * 1000)
						}
					}
					checkQrcodeConnect();
				}
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if(!isLocalConnect) {
							if (typeof xhr.response === 'string') {
								try {
									data = JSON.parse(xhr.response);
								} catch (e) {
									return false;
								}
							}
							if (data.data) {
								toyMap = JSON.parse(data.data.toys);
								isQrcodeConnect = true
								clearInterval(checkLocalConnectInterval);
								clearInterval(checkQrcodeConnectInterval);
							}
						}
					}};
				xhr.send(data);
			} else {
				clearInterval(checkQrcodeConnectInterval);
			}
		}
	}
	
	lovense.connectionType = function() {
		if(isLocalConnect) return "PC";
		if(isQrcodeConnect) return "LAN";
		if(isWebConnect) return "Web";
		return "Not Connected";
	}
  
	lovense.connectionResume = function() {
		localConnectionRetries = 0;
		qrConnectionRetries = 0;
		checkQrcodeConnectInterval = setInterval(checkQrcodeConnect, 10 * 1000);
		checkQrcodeConnect();
		checkLocalConnectInterval = setInterval(checkLocalConnect, 10 * 1000);
		checkLocalConnect();
	}

	lovense.setConnectCallbackData = function(mobileCallbackData) {
		mobileData = mobileCallbackData
		if (mobileCallbackData && mobileCallbackData.toys) {
			toyMap = mobileCallbackData.toys
			checkQrcodeConnect();
		}
	}

	lovense.setInitialCallbackData = function(mobileCallbackData) {
		if(!isLocalConnect) {
			isWebConnect = true;
			mobileData = mobileCallbackData
			if (mobileCallbackData && mobileCallbackData.toys) {
				toyMap = mobileCallbackData.toys
				Object.keys(toyMap).forEach(key => {
					toyMap[key].status = 0;
				});
				checkQrcodeConnect();
			}
		}
	}

	lovense.setServerCommandListener = function(callback) {
		serverCommandCallback = callback
	}

	lovense.getToys = function() {
		return Object.values(toyMap)
	}
	
	lovense.resetToys = function() {
		toyMap = {};
	}

	lovense.getOnlineToys = function() {
		return Object.values(toyMap).filter(item => item.status)
	}

	lovense.isToyOnline = function() {
		return lovense.getOnlineToys().length > 0
	}
  
	lovense.sendNewCommand = function(data) {
		let xhr = new XMLHttpRequest();
		var url = "";
		if(isLocalConnect) {
			url = 'https://127-0-0-1.lovense.club:' + localConnectPort + '/command';
			xhr.open("POST", url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
		} else if(isQrcodeConnect && mobileData.domain && mobileData.domain.length > 0) {
			url = 'https://' + mobileData.domain + ':' + mobileData.httpsPort + '/command';
			xhr.open("POST", url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
		} else {
			url = 'https://www.nlt-media.net/lovenseConnect/sendCommand.php?uid=' + mobileData.uid;
			commandData = JSON.parse(data);
			url+="&command=" + commandData.command;
			url+="&action=" + commandData.action;
			url+="&timeSec=" + commandData.timeSec;
			if('loopRunningSec' in commandData) {
				url+="&loopRunningSec=" + commandData.loopRunningSec;
			}
			if('loopPauseSec' in commandData) {
				url+="&loopPauseSec=" + commandData.loopPauseSec;
			}
			if('toy' in commandData) {
				url+="&toy=" + commandData.toy;
			}
			url+="&apiVer=1";
			xhr.open("GET", url);
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");			
		}	  
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
			}
		};
		xhr.send(data);
	}
  
	lovenseCommand = function(intensity) {
		var sendIntensity = Math.round(intensity * 6.66 * (ConfigManager.lovenseIntensity / 100));
		if(sendIntensity > 20) sendIntensity = 20;
		var standardCommand = '{"command":"Function","action":"Vibrate:';
		standardCommand += "" + sendIntensity;
		standardCommand += ",Rotate:" + sendIntensity;
		standardCommand += ",Pump:" + intensity;
		standardCommand += '","timeSec":600,"apiVer":1}';
		lovense.sendNewCommand(standardCommand);
	}
	lovenseStop = function() {
		var standardCommand = '{"command":"Function","action":"Vibrate:';
		standardCommand += "0";
		standardCommand += '","timeSec":1,"apiVer":1}';
		lovense.sendNewCommand(standardCommand);
	}
	
	lovense.runAtStart = function(callback) {
		jsonContent = DataManager.getLocalDeviceJson();
		if(Object.keys(jsonContent).length > 0) {
			this.hasLocalJson = true;
		}
		this.setInitialCallbackData(jsonContent);
	}
	
	lovense.shopAtLovense = function() {
		require('nw.gui').Shell.openExternal(SR.LovenseIntegration.affiliateUrl);
	}

	lovense.runAtStart();
})()