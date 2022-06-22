/*:
 * Made by request.
 * @plugindesc Ver.2015-11-29-1930. Gives an option for the player to disable battle animations.
 * <Ellye_DAO>
 * @author https://ellyeblog.wordpress.com/ || http://steamcommunity.com/id/Ellye
 * 
 * @param Options Menu Text
 * @desc Text to display on Options Menu
 * @default 
 */

var Imported = Imported || {};
Imported.Ellye_DAO = true;

(function() {

    var parameters = $plugins.filter(function(p) {
        return p.description.contains('<Ellye_DAO>');
    })[0].parameters; //Thanks to Iavra

    var opt_menu_text = String(parameters['Options Menu Text'] || "Disable Battle VFX");


    //Add the option in the option screen:
    _window_options_addgeneraloptions_alias = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function()
    {
        _window_options_addgeneraloptions_alias.call(this);
        this.addCommand(opt_menu_text, 'disableAnimations');
    };

    //Set the inial configuration value:
    ConfigManager.disableAnimations = false;

    //Unfortunatelly, we need to fully overwrite .makeData due to the way it is setup.
    ConfigManager.makeData = function()
    {
        var config = {};
        config.alwaysDash = this.alwaysDash;
        config.commandRemember = this.commandRemember;
        config.disableAnimations = this.disableAnimations;
        config.bgmVolume = this.bgmVolume;
        config.bgsVolume = this.bgsVolume;
        config.meVolume = this.meVolume;
        config.seVolume = this.seVolume;
        return config;
    };

    //Apply data can be aliased though, not that it's much easy with the above being overwritten.
    _configmanager_applydata_alias = ConfigManager.applyData;
    ConfigManager.applyData = function(config)
    {
        _configmanager_applydata_alias.call(this, config);
        this.disableAnimations = this.readFlag(config, 'disableAnimations');
    };

    //Now to actually disable animations when the option is on:
    _gamebattler_disable_animation_alias = Game_Battler.prototype.startAnimation;
    Game_Battler.prototype.startAnimation = function(animationId, mirror, delay)
    {
        if (ConfigManager.disableAnimations)
        {
            return;
        }
        _gamebattler_disable_animation_alias.call(this, animationId, mirror, delay);
    };

    _gamebattler_startweaponanimation_alias = Game_Battler.prototype.startWeaponAnimation;
    Game_Battler.prototype.startWeaponAnimation = function(weaponImageId)
    {
        if (ConfigManager.disableAnimations)
        {
            return;
        }
        _gamebattler_startweaponanimation_alias.call(this, weaponImageId);
    };

    _game_characterbase_requestanimation_alias = Game_CharacterBase.prototype.requestAnimation;
    Game_CharacterBase.prototype.requestAnimation = function(animationId) 
    {
        if (ConfigManager.disableAnimations)
        {
            return;
        }
        _game_characterbase_requestanimation_alias.call(this, animationId);
    };

})();