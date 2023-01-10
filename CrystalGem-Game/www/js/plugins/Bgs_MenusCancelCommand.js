
//=============================================================================
// Bgs_MenusCancelCommand.js
//=============================================================================

/*:
 * @plugindesc Add a cancel command to menus of your choice
 * @author BallgameStudios.com
 *
 * @help This plugin adds a cancel command to menus, including in shops, so the user
 * will never have to press Esc / mouse right-click / two-finger-tap.
 * 
 * The cancel command name is configurable. You may call it "Cancel", "Back",
 * "Exit", or anything else. The menus in which the command appears can also
 * be selected.
 * 
 * Bonus: You can also change the menus behavior to select items upon a single
 * click instead of two clicks.
 * 
 * Terms of use:
 * ------------
 *   Free for non-commercial and commercial use. 
 *   Please credit BallgameStudios
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Update log:
 *   1.0: Initial release.
 *   1.1: Support plugins with vertical menus (YEP_ItemCore and YEP_EquipCore)
 * 
 * @param Cancel Command Name
 * @text Cancel Command Name
 * @type text
 * @desc The name you wish to call the cancel command in menus.
 * Leave blank to keep hidden.
 * @default Back
 * 
 * @param Single Click Menus
 * @text Single-click Menus
 * @type boolean
 * @desc Select true to change menus behavior to select an item in a single click instead of two.
 * @default false
 * 
 * @param Vertical Menus
 * @text Vertical Menus
 * @type boolean
 * @desc Select true if you are using a plugin that changes the item and equipment category menus to vertical ones.
 * @default false
 *  
 * @param Include in Main Menu
 * @text Include in Main Menu
 * @type boolean
 * @desc Select true to include the cancel command in the main menu.
 * @default true
 *  
 * @param Include in Item
 * @text Include in Item
 * @type boolean
 * @desc Select true to include the cancel command in item related menus (in the main menu as well as shops)
 * @default true
 * 
 * @param Include in Skill
 * @text Include in Skill
 * @type boolean
 * @desc Select true to include the cancel command in skill menus
 * @default true
 * 
 * @param Include in Equip
 * @text Include in Equip
 * @type boolean
 * @desc Select true to include the cancel command in equip menus
 * @default true
 * 
 * @param Include in Status
 * @text Include in Status
 * @type boolean
 * @desc Select true to include the cancel command in the Status window of the main menu
 * @default true
 * 
 * @param Include in Options
 * @text Include in Options
 * @type boolean
 * @desc Select true to include the cancel command in the Options menu.
 * @default true
 *
 * @param Include in Save
 * @text Include in Save
 * @type boolean
 * @desc Select true to include the cancel command in the Save and Load menus.
 * @default true
 * 
 * @param Include in Party
 * @text Include in party selection
 * @type boolean
 * @desc Select true to include the cancel command in menus that allow selecting a party member
 * @default true
 * 
 * @param Include in Shop
 * @text Include in Shop
 * @type boolean
 * @desc Select true to include the cancel command in shop Buy menus
 * @default true
 *
 */

var Imported = Imported || {};
Imported.Bgs_MenusCancelCommand = 1.1;

var BGS = BGS || {};
BGS.MenusCancelCommand = BGS.MenusCancelCommand || {};

(function (_) {

    'use strict';

    // Process user parameters
    _.params = PluginManager.parameters('Bgs_MenusCancelCommand');
    _.CancelCommandName = String(_.params['Cancel Command Name'] || '');
    _.SingleClickMenus = String(_.params['Single Click Menus'] || "false");
    _.VerticalMenus = String(_.params['Vertical Menus'] || "false");
    _.IncludeInMainMenu = String(_.params['Include in Main Menu'] || "true");
    _.IncludeInItem = String(_.params['Include in Item'] || "true");
    _.IncludeInSkill = String(_.params['Include in Skill'] || "true");
    _.IncludeInEquip = String(_.params['Include in Equip'] || "true");
    _.IncludeInStatus = String(_.params['Include in Status'] || "true");
    _.IncludeInOptions = String(_.params['Include in Options'] || "true");    
    _.IncludeInSave = String(_.params['Include in Save'] || "true");
    _.IncludeInParty = String(_.params['Include in Party'] || "true");
    _.IncludeInShop = String(_.params['Include in Shop'] || "true");
    

    //-----------------------------------------------------------------------------
    // Single-click menus
    //
    // The window for selecting a command on the main menu screen.
    
    _.Window_Selectable_onTouch = Window_Selectable.prototype.onTouch;
    Window_Selectable.prototype.onTouch = function (triggered) {
        if (_.SingleClickMenus != "true")
            _.Window_Selectable_onTouch.call(this, triggered);
        else {
            var lastIndex = this.index();
            var x = this.canvasToLocalX(TouchInput.x);
            var y = this.canvasToLocalY(TouchInput.y);
            var hitIndex = this.hitTest(x, y);
            if (hitIndex >= 0) {
                if (hitIndex === this.index()) {
                    if (triggered && this.isTouchOkEnabled()) {
                        this.processOk();
                    }
                } else if (this.isCursorMovable()) {
                    this.select(hitIndex);
                    if (this.isTouchOkEnabled())    // BGS addition to original function
                        this.processOk();           // BGS addition to original function
                }
            } else if (this._stayCount >= 10) {
                if (y < this.padding) {
                    this.cursorUp();
                } else if (y >= this.height - this.padding) {
                    this.cursorDown();
                }
            }
            if (this.index() !== lastIndex) {
                //SoundManager.playCursor();    // BGS commented out
            }
        }        
    };


    //-----------------------------------------------------------------------------
    // Window_MenuCommand
    //
    // The window for selecting a command on the main menu screen.

    _.Window_MenuCommand_makeCommandList = Window_MenuCommand.prototype.makeCommandList;
    Window_MenuCommand.prototype.makeCommandList = function () {
        if (_.IncludeInMainMenu == "true")
            this.addCommand(_.CancelCommandName, _.CancelCommandName);
        _.Window_MenuCommand_makeCommandList.call(this);
    };

    _.Window_MenuCommand_processOk = Window_MenuCommand.prototype.processOk;
    Window_MenuCommand.prototype.processOk = function () {
        if (this.currentSymbol() == _.CancelCommandName) {
            this.processCancel();
        }
        else {
            _.Window_MenuCommand_processOk.call(this);
        }        
    };

       
    //-----------------------------------------------------------------------------
    // Window_ItemCategory
    //
    // The window for selecting a category of items on the item and shop screens.

    _.Window_ItemCategory_maxCols = Window_ItemCategory.prototype.maxCols;
    Window_ItemCategory.prototype.maxCols = function () {
        let cols = _.Window_ItemCategory_maxCols.call(this);
        cols += (_.IncludeInItem == "true" && _.VerticalMenus == "false")? 1 : 0;
        return cols;
    };
        
    _.Window_ItemCategory_makeCommandList = Window_ItemCategory.prototype.makeCommandList;
    Window_ItemCategory.prototype.makeCommandList = function () {
        _.Window_ItemCategory_makeCommandList.call(this);
        if (_.IncludeInItem == "true")
            this.addCommand(_.CancelCommandName, _.CancelCommandName);
    };

    _.Window_ItemCategory_processOk = Window_ItemCategory.prototype.processOk
    Window_ItemCategory.prototype.processOk = function () {
        if (this.currentSymbol() == _.CancelCommandName) {
            this.processCancel();
        }
        else {
            _.Window_ItemCategory_processOk.call(this);
        }
    };


    //-----------------------------------------------------------------------------
    // Window_ItemList
    //
    // The window for selecting an item on the item screen.

    _.Window_ItemList_makeItemList = Window_ItemList.prototype.makeItemList;
    Window_ItemList.prototype.makeItemList = function () {
        _.Window_ItemList_makeItemList.call(this);
        if (_.IncludeInItem == "true")
            this._data.push({ name: _.CancelCommandName, infoTextTop: '', infoTextBottom: '' });
    };

    _.Window_ItemList_drawItem = Window_ItemList.prototype.drawItem;
    Window_ItemList.prototype.drawItem = function (index) {
        var item = this._data[index];
        var rect = this.itemRect(index);
        var priceWidth = 96;
        rect.width -= this.textPadding();
        if (item != null && item.name == _.CancelCommandName) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawText(_.CancelCommandName, rect.x + iconBoxWidth, rect.y, rect.width - iconBoxWidth);
        }
        else
            _.Window_ItemList_drawItem.call(this, index);
    };

    _.Window_ItemList_processOk = Window_ItemList.prototype.processOk;
    Window_ItemList.prototype.processOk = function () {
        if (this.item() != null && this.item().name == _.CancelCommandName) {
            this.processCancel();
        }
        else {
            _.Window_ItemList_processOk.call(this);
        }
    };


    //-----------------------------------------------------------------------------
    // Window_SkillType
    //
    // The window for selecting a skill type on the skill screen.
    
    _.Window_SkillType_makeCommandList = Window_SkillType.prototype.makeCommandList;
    Window_SkillType.prototype.makeCommandList = function () {
        _.Window_SkillType_makeCommandList.call(this);
        if (_.IncludeInSkill == "true")
            this.addCommand(_.CancelCommandName, _.CancelCommandName);
    };
    
    _.Window_SkillType_processOk = Window_SkillType.prototype.processOk;
    Window_SkillType.prototype.processOk = function () {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        if (symbol.contains(_.CancelCommandName))
            this.processCancel();
        else
            _.Window_SkillType_processOk.call(this);
    };


    //-----------------------------------------------------------------------------
    // Window_SkillList
    //
    // The window for selecting a skill on the skill screen.

    _.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
    Window_SkillList.prototype.makeItemList = function () {
        _.Window_SkillList_makeItemList.call(this);
        if (_.IncludeInSkill == "true")
            this._data.push(_.CancelCommandName);
    };

    _.Window_SkillList_drawItem = Window_SkillList.prototype.drawItem;
    Window_SkillList.prototype.drawItem = function (index) {
        var skill = this._data[index];
        if (skill == _.CancelCommandName) {
            var costWidth = this.costWidth();
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            this.changePaintOpacity(true);
            this.resetTextColor();
            this.drawText(_.CancelCommandName, rect.x, rect.y, rect.width - costWidth);
        }
        else
            _.Window_SkillList_drawItem.call(this, index);
    };

    _.Window_SkillList_processOk = Window_SkillList.prototype.processOk;
    Window_SkillList.prototype.processOk = function () {
        if (this.item() != null && this.item() == _.CancelCommandName) {
            this.processCancel();
        }
        else {
            _.Window_SkillList_processOk.call(this);
        }
    };
        
    _.Window_MenuActor_processOk = Window_MenuActor.prototype.processOk;
    Window_MenuActor.prototype.processOk = function () {
        if ($gameParty.members()[this._index]) {
            _.Window_MenuActor_processOk.call(this);
        }
        else {
            this.processCancel();
        }
    };


    //-----------------------------------------------------------------------------
    // Window_EquipCommand
    //
    // The window for selecting a command on the equipment screen.

    _.Window_EquipCommand_maxCols = Window_EquipCommand.prototype.maxCols;
    Window_EquipCommand.prototype.maxCols = function () {
        let cols = _.Window_EquipCommand_maxCols.call(this);
        cols += (_.IncludeInEquip == "true" && _.VerticalMenus == "false")? 1 : 0;
        return cols;
    };

    _.Window_EquipCommand_makeCommandList = Window_EquipCommand.prototype.makeCommandList;
    Window_EquipCommand.prototype.makeCommandList = function () {
        _.Window_EquipCommand_makeCommandList.call(this);
        if (_.IncludeInEquip == "true")
            this.addCommand(_.CancelCommandName, _.CancelCommandName);
    };

    _.Window_EquipCommand_processOk = Window_EquipCommand.prototype.processOk;
    Window_EquipCommand.prototype.processOk = function () {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        if (symbol.contains(_.CancelCommandName))
            this.processCancel();        
        else {
            _.Window_EquipCommand_processOk.call(this);
        }
    };


    //-----------------------------------------------------------------------------
    // Window_EquipSlot
    //
    // The window for selecting an equipment slot on the equipment screen.
    
    _.Window_EquipSlot_maxItems = Window_EquipSlot.prototype.maxItems;
    Window_EquipSlot.prototype.maxItems = function () {
        let max = _.Window_EquipSlot_maxItems.call(this);
        max += _.IncludeInEquip == "true" ? 1 : 0;
        return max;
    };

    _.Window_EquipSlot_drawItem = Window_EquipSlot.prototype.drawItem;
    Window_EquipSlot.prototype.drawItem = function (index) {
        if (this._actor && index == this._actor.equipSlots().length) {
            var rect = this.itemRectForText(index);
            this.changeTextColor(this.textColor(0));
            this.changePaintOpacity(true);
            this.drawText(_.CancelCommandName, rect.x, rect.y, 138, this.lineHeight());
        }
        else
            _.Window_EquipSlot_drawItem.call(this, index);
    };

    _.Window_EquipSlot_processOk = Window_EquipSlot.prototype.processOk;
    Window_EquipSlot.prototype.processOk = function () {
        if (!this.slotName(this.index())) {
            this.processCancel();
        }
        else {
            _.Window_EquipSlot_processOk.call(this);
        }
    };


    //-----------------------------------------------------------------------------
    // Window_Status
    //
    // The window for displaying full status on the status screen.

    _.Window_Status_initialize = Window_Status.prototype.initialize;
    Window_Status.prototype.initialize = function () {
        _.Window_Status_initialize.call(this);
        if (_.IncludeInStatus == "true")
            this.setHandler('ok', this.processCancel.bind(this));
    };

    _.Window_Status_refresh = Window_Status.prototype.refresh;
    Window_Status.prototype.refresh = function () {        
        if (this._actor && _.IncludeInStatus == "true") {
            var lineHeight = this.lineHeight();
            this.drawText(_.CancelCommandName, 6, lineHeight * 0);
            this.drawHorzLine(lineHeight * 1);            
            this.drawBlock1(lineHeight * 2);
            this.drawHorzLine(lineHeight * 3);
            this.drawBlock2(lineHeight * 4);
            this.drawHorzLine(lineHeight * 8);
            this.drawBlock3(lineHeight * 9);
            this.drawHorzLine(lineHeight * 15);
            this.drawBlock4(lineHeight * 16);
            this.select(0);
        }
        else
            _.Window_Status_refresh.call(this);
    };

    _.Window_Status_numVisibleRows = Window_Status.prototype.numVisibleRows;
    Window_Status.prototype.numVisibleRows = function () {
        let max = _.Window_Status_numVisibleRows.call(this);
        max += _.IncludeInStatus == "true" ? 1 : 0;
        return max;
    };

    _.Window_Status_maxItems = Window_Status.prototype.maxItems;
    Window_Status.prototype.maxItems = function () {
        let max = _.Window_Status_maxItems.call(this);
        max += _.IncludeInStatus == "true" ? 1 : 0;
        return max;        
    };

    Window_Status.prototype.processOk = function () {
        this.callOkHandler();
    };        
    

    //-----------------------------------------------------------------------------
    // Window_Options
    //
    // The window for changing various settings on the options screen.
            
    _.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function () {        
        if (_.IncludeInOptions == "true")
            this.addCommand(_.CancelCommandName, 'cancel');
        _.Window_Options_makeCommandList.call(this);
    };
        
    _.Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function (index) {
        var symbol = this.commandSymbol(index);
        if (symbol.contains("cancel"))
            return "";
        return _.Window_Options_statusText.call(this, index);        
    };
        
    _.Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function () {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        if (symbol.contains("cancel"))
            this.processCancel();
        else
            _.Window_Options_processOk.call(this);
    };


    //-----------------------------------------------------------------------------
    // Window_SavefileList
    //
    // The window for selecting a save file on the save and load screens.

    _.Window_SavefileList_maxItems = Window_SavefileList.prototype.maxItems;
    Window_SavefileList.prototype.maxItems = function () {
        let max = _.Window_SavefileList_maxItems.call(this);
        max += _.IncludeInSave == "true"? 1 : 0;
        return max;
    };

    _.Window_SavefileList_drawItem = Window_SavefileList.prototype.drawItem;
    Window_SavefileList.prototype.drawItem = function (index) {       
        if (_.IncludeInSave == "true" && index == this.maxItems() - 1) {
            var rect = this.itemRectForText(index);
            this.changeTextColor(this.textColor(0));
            this.changePaintOpacity(true);
            this.drawText(_.CancelCommandName, rect.x, rect.y, 180);
        }
        else
            _.Window_SavefileList_drawItem.call(this, index);        
    };

    _.Scene_Save_onSavefileOk = Scene_Save.prototype.onSavefileOk;
    Scene_Save.prototype.onSavefileOk = function () {
        if (_.IncludeInSave == "true" && this._listWindow.index() == this._listWindow.maxItems() - 1) {
            SoundManager.playCancel();
            this.popScene();
        }
        else
            _.Scene_Save_onSavefileOk.call(this);
    };

    
    _.Scene_Load_onSavefileOk = Scene_Load.prototype.onSavefileOk;
    Scene_Load.prototype.onSavefileOk = function () {
        if (_.IncludeInSave == "true" && this._listWindow.index() == this._listWindow.maxItems() - 1) {
            SoundManager.playCancel();
            this.popScene();
        }
        else
            _.Scene_Load_onSavefileOk.call(this);
    };


    //-----------------------------------------------------------------------------
    // Window_MenuStatus
    //
    // The window for displaying party member status on the menu screen.
    
    _.Window_MenuStatus_maxItems = Window_MenuStatus.prototype.maxItems;
    Window_MenuStatus.prototype.maxItems = function () {
        if (_.IncludeInParty == "true") {
            return $gameParty.size() + 1;
        }
        return _.Window_MenuStatus_maxItems.call(this);
    };
    
    _.Window_MenuStatus_drawItem = Window_MenuStatus.prototype.drawItem;
    Window_MenuStatus.prototype.drawItem = function (index) {
        if ($gameParty.members()[index]) {
            _.Window_MenuStatus_drawItem.call(this, index);
        }
        else {
            var rect = this.itemRect(index);
            var x = rect.x + 162;
            var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
            this.drawText(_.CancelCommandName, x, y, rect.width, 'left');
        }
    };
        
    _.Window_MenuStatus_processOk = Window_MenuStatus.prototype.processOk;
    Window_MenuStatus.prototype.processOk = function () {
        if ($gameParty.members()[this._index]) {
            _.Window_MenuStatus_processOk.call(this);
        }
        else {
            this.processCancel();
        }        
    };
          

    //-----------------------------------------------------------------------------
    // Window_ShopBuy
    //
    // The window for selecting an item to buy on the shop screen.

    _.Window_ShopBuy_makeItemList = Window_ShopBuy.prototype.makeItemList;
    Window_ShopBuy.prototype.makeItemList = function () {
        _.Window_ShopBuy_makeItemList.call(this);
        if (_.IncludeInShop == "true")
            this._data.push(_.CancelCommandName);
    };

    _.Window_ShopBuy_drawItem = Window_ShopBuy.prototype.drawItem;
    Window_ShopBuy.prototype.drawItem = function (index) {
        var item = this._data[index];
        var rect = this.itemRect(index);
        var priceWidth = 96;
        rect.width -= this.textPadding();
        if (item == _.CancelCommandName) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawText(_.CancelCommandName, rect.x + iconBoxWidth, rect.y, rect.width - iconBoxWidth);
        }
        else
            _.Window_ShopBuy_drawItem.call(this, index);        
    };
        
    _.Window_ShopBuy_processOk = Window_ShopBuy.prototype.processOk;
    Window_ShopBuy.prototype.processOk = function () {
        if (this.item() != null && this.item() == _.CancelCommandName) {
            this.processCancel();
        }
        else {
            _.Window_ShopBuy_processOk.call(this);
        }       
    };

})(BGS.MenusCancelCommand);
