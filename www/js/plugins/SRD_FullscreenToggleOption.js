/*:
 * @plugindesc Adds a Fullscreen Toggle to the Options Window
 * @author SumRndmDde
 *
 * @param Option Name
 * @desc The name used by the Fullscreen Toggle option.
 * @default Fullscreen
 *
 * @param Position
 * @desc The position of the option in the Options Window.
 * Choices are: Top, Middle, Bottom
 * @default Middle
 *
 * @param Default Value
 * @desc The default value of the option first time playing.
 * true = on    false = off
 * @default false
 *
 * @param Persist Default?
 * @desc If set to true, then the game will always start with the Default Value.  (Choices are: true, false)
 * @default false
 *
 * @param LQV Option Name
 * @desc Field name for Low Quality Video
 * @default Low Quality Video
 *
 * @param LQV Variable Id
 * @desc ID of Variable to use
 * @default 20
 *
 * @help
 *
 * Fullscreen Toggle Option
 * Version 1.00.1
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * All functions are aliased.
 *
 *
 * How to Use:
 *
 * Adds a Fullscreen Toggle to the Options Window.
 *
 * 
 * Plugin Commands:
 *
 * ToggleScreenType
 * Switches between fullscreen mode and windowed mode.
 *
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {
    // SET UP PLUGIN NAME/file
	var parameters = PluginManager.parameters('SRD_FullscreenToggleOption');

    // SET UP PLUGIN PARAMETERS
	var optionName = String(parameters['Option Name']);
	var defaultValue = String(parameters['Default Value']).trim().toLowerCase() === 'true';
	var position = String(parameters['Position']).toLowerCase();
	var persist = String(parameters['Persist Default?']).trim().toLowerCase() === 'true';
    var lqvOptionName = String(parameters['LQV Option Name']);
    var lqvVariableId = String(parameters['LQV Variable Id']);
	
    
    // CREATE ConfigManager variable
	ConfigManager.fullscreen = defaultValue;
    ConfigManager.lqv = false;

    // DEFINE ConfigManager.fullscreen functions
	Object.defineProperty(ConfigManager, 'fullscreen', {
	    get: function() {
	        return !Graphics._isFullScreen();
	    },
	    set: function(value) {
	        if (value) {
		        Graphics._requestFullScreen();
		    } else {
		        Graphics._cancelFullScreen();
		    }
	    },
	    configurable: true
	});
    
    // DEFINE ConfigManager.lqv functions
    Object.defineProperty(ConfigManager, 'lqv', {
	    get: function() {
	        return Graphics._lqv;
	    },
	    set: function(value) {
	        if (value) {
                Graphics._lqv = true;
		    } else {
                Graphics._lqv = false;
		    }
	    },
	    configurable: true
	});
    

	var _ConfigManager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function() {
	    var config = _ConfigManager_makeData.call(this);
	    config.fullscreen = this.fullscreen;
        config.lqv = this.lqv;
	    return config;
	};

	var _ConfigManager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function(config) {
	    _ConfigManager_applyData.call(this, config);
	    this.fullscreen = this.readFullscreen(config, 'fullscreen');
        this.lqv = this.readLqv(config, 'lqv');
	};

	ConfigManager.readFullscreen = function(config, name) {
	    var value = config[name];
	    if(!persist) {
		    if (value !== undefined) {
		        return value;
		    } else {
		        return defaultValue;
		    }
		} else {
			return defaultValue;
		}
	};
    
    ConfigManager.readLqv = function(config, name) {
	    var value = config[name];
        if (value !== undefined) {
            return value;
        } else {
            return defaultValue;
        }
	};
    
    // ????????????????????????????????
    
    

    // ADD OPTIONS BASED ON POSITION
	var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
	Window_Options.prototype.addGeneralOptions = function() {
	    _Window_Options_addGeneralOptions.call(this);
        if(typeof(lqvOptionName) !== 'undefined') lqvOptionName = '低画质视频';
	    if(position === 'middle') {
	    	this.addCommand(optionName, 'fullscreen');
            this.addCommand(lqvOptionName, 'lqv');
	    }
	};
	var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function() {
        if(typeof(lqvOptionName) !== 'undefined') lqvOptionName = 'Low Quality Video';
	    
		if(position === 'top') {
	    	this.addCommand(optionName, 'fullscreen');
            this.addCommand(lqvOptionName, 'lqv');
	    }
	    _Window_Options_makeCommandList.call(this);
	};
	var _Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
	Window_Options.prototype.addVolumeOptions = function() {
	    _Window_Options_addVolumeOptions.call(this);
        if(typeof(lqvOptionName) !== 'undefined') lqvOptionName = 'Low Quality Video';
	    
	    if(position === 'bottom') {
	    	this.addCommand(optionName, 'fullscreen');
            this.addCommand(lqvOptionName, 'lqv');
	    }
	};


    // ADD COMMANDS TO BE USED FOR IN-GAME EVENTS
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);

	    if(command.toLowerCase() === 'togglescreentype') {
	    	Graphics._switchFullScreen();
	    }
	};

})();