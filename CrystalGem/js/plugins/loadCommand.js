{

const Alias = {}

Alias.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow
Scene_Menu.prototype.createCommandWindow = function() {
    Alias.Scene_Menu_createCommandWindow.call(this)
    this._commandWindow.setHandler('load',      this.commandLoad.bind(this))
}

Scene_Menu.prototype.commandLoad = function() {
    SceneManager.push(Scene_Load)
}

Alias.Window_MenuCommand_addSaveCommand = Window_MenuCommand.prototype.addSaveCommand
Window_MenuCommand.prototype.addSaveCommand = function() {
    Alias.Window_MenuCommand_addSaveCommand.call(this)
    this.addCommand(TextManager.continue_, 'load', true)
}

}