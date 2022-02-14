/*=============================================================================7
 * CTB ExitCommand
 * By CT_Bolt
 * CTB_ExitCommand.js
 * Version: 1.20
 * Terms of Use:
 *  Free for commercial  or non-commercial use
 *
/*=============================================================================*/
var CTB = CTB || {}; CTB.ExitCommand  = CTB.ExitCommand || {};
var Imported = Imported || {}; Imported["CT_Bolt ExitCommand"] = 1.20;
//=============================================================================
/*:
 * @plugindesc v1.20 CT_Bolt's ExitCommand Plugin
 * @author CT_Bolt
 *
 * @param Exit Game Text
 * @desc Exit Game Text
 * Default: Exit Game
 * @default Exit Game
 *
 * @param Add To Title Screen
 * @type boolean
 * @on Yes
 * @off No
 * @desc Add Exit To Title Screen?
 * @default true
 *
 * @param Add To GameEnd Screen
 * @type boolean
 * @on Yes
 * @off No
 * @desc Add Exit To GameEnd Screen?
 * @default true
 *
 * @param titlePos
 * @text Title Position
 * @desc Index of the Exit Command in the Title Command Window.
 * Starting at 0 being the top
 * @default 
 *
 * @param gameEndPos
 * @text Game End Position
 * @desc Index of the Exit Command in the GameEnd Command Window.
 * Starting at 0 being the top
 * @default 
 *
 * @help
 * CT_Bolt's ExitCommand
 * Version 1.20
 * CT_Bolt
 *
 * ***************** Description **********************
 * Adds Exit Command to Scene_GameEnd
 *
 * ****************************************************
 *
 * History Log:
 *   v1.00 Initial Release (03/16/2020)
 *   v1.10 Add Features (03/16/2020)
 *   v1.20 Add Features (03/17/2020)
 *
 */
//=============================================================================
//=============================================================================

"use strict";
(function ($) {
    function getPluginParameters() {var a = document.currentScript || (function() { var b = document.getElementsByTagName('script'); return b[b.length - 1]; })(); return PluginManager.parameters(a.src.substring((a.src.lastIndexOf('/') + 1), a.src.indexOf('.js')));} $ = getPluginParameters();
	$.titlePos = String($.titlePos);
	
	/*
	var _wc_drawItem_ctb = Window_Command.prototype.drawItem
	Window_Command.prototype.drawItem = function(index) {
		if (this instanceof Window_GameEnd || this instanceof Window_TitleCommand){
			var rect = this.itemRectForText(index);
			var align = this.itemTextAlign();
			this.resetTextColor();
			this.changePaintOpacity(this.isCommandEnabled(index));
			this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
		}else{
			_wc_drawItem_ctb.apply(this, arguments);
		}
	}
	*/
	
	$.winCommand_addCommand = Window_Command.prototype.addCommand;
	Window_Command.prototype.addCommand = function(name, symbol, enabled, ext, pos) {
		if (!pos){
			$.winCommand_addCommand.apply(this, arguments);
		}else{
			if (enabled === undefined) {enabled = true;}
			if (ext === undefined) {ext = null;}
			var data = { name: name, symbol: symbol, enabled: enabled, ext: ext};
			this._list.splice(eval(pos), 0, data);
		}
};
	
	// Alias
	// Window_TitleCommand: makeCommandList
	var _win_tc_mcl = Window_TitleCommand.prototype.makeCommandList; Window_TitleCommand.prototype.makeCommandList = function() {
        _win_tc_mcl.apply(this, arguments); 		
		
		if (eval($['Add To Title Screen'])) this.addCommand($['Exit Game Text'] || "Exit Game", 'exitGame', true, null, $.titlePos);
    };

	// Alias
	// Scene_Title: createCommandWindow
	var _scene_title_ccw = Scene_Title.prototype.createCommandWindow; Scene_Title.prototype.createCommandWindow = function () {
		_scene_title_ccw.apply(this, arguments); this._commandWindow.setHandler('exitGame', this.commandExit.bind(this));
	};
    
	// New
	// Scene_Title: commandExit
    Scene_Title.prototype.commandExit = function() {
        this._commandWindow.close(); this.fadeOutAll(); SceneManager.exit();
    };
	
	// Alias
	// Window_GameEnd: makeCommandList
	var _win_ge_mcl = Window_GameEnd.prototype.makeCommandList; Window_GameEnd.prototype.makeCommandList = function() {
		_win_ge_mcl.apply(this, arguments); 		
		if (eval($['Add To Title Screen'])) this.addCommand($['Exit Game Text'] || "Exit Game", 'exitGame', true, null, $.gameEndPos);
	};
	
	// Alias
	// Scene_GameEnd: createCommandWindow
	var _scene_ge_ccw = Scene_GameEnd.prototype.createCommandWindow; Scene_GameEnd.prototype.createCommandWindow = function() {
		_scene_ge_ccw.apply(this, arguments); this._commandWindow.setHandler('exitGame', this.commandExit.bind(this));
	};

    
	// New
	// Scene_GameEnd: commandExit
    Scene_GameEnd.prototype.commandExit = function() {
		this.fadeOutAll();SceneManager.exit();
	}	
})(CTB.ExitCommand);