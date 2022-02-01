/*:
-------------------------------------------------------------------------
@title SVActor Enemies
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.2
@date Dec 5, 2015
@filename HIME_SideviewActorEnemies.js
@url http://himeworks.com/2015/11/sideview-enemy-actors/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------
@plugindesc v1.2 - Allows you to use side-view actors as enemies.
@help 
-------------------------------------------------------------------------
== Description ==

Do you want to use side-view actors as enemies?

For example, maybe one of your actors decides to join the enemies, but
you still want them to appear the same as they did when they were in
your party!

With this plugin, you can easily set up enemies to use side-view actor
sprites.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Contact me for commercial use

== Change Log ==

1.2 - Dec 5, 2015
  * enemy actors do not collapse if knocked out by event
1.1 - Nov 22, 2015
  * fixed state overlays being mirrored on enemies
1.0 - Nov 21, 2015
  * initial release

== Required ==

* Enemy Equips
  http://himeworks.com/2015/11/enemy-equips/

== Usage ==

Note-tag enemies with

  <sv actor name: NAME />
  
Where the NAME is the filename of the SV Actor sprite that
you want to use. The image must be placed inside the sv_actors folder.

Everything else will remain the same for the enemy: you would set their
positions in the troop editor as usual and the enemy will appear there,
except using SV Actor sprites.

You can take one of the sprites from the SV Actor spritesheet and use
that as the enemy sprite in the database.

-------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.SideviewActorEnemies = 1;
TH.SideviewActorEnemies = TH.SideviewActorEnemies || {};

function Sprite_EnemyActor() {
  this.initialize.apply(this, arguments);
}

(function ($) {

  Sprite_EnemyActor.prototype = Object.create(Sprite_Actor.prototype);
  Sprite_EnemyActor.prototype.constructor = Sprite_EnemyActor;

  Sprite_EnemyActor.prototype.initialize = function(battler) {
    Sprite_Actor.prototype.initialize.call(this, battler);
  };
  
  Sprite_EnemyActor.prototype.moveToStartPosition = function() {
     this.startMove(-150, 0, 0);
  };
  
  Sprite_EnemyActor.prototype.startEntryMotion = function() {    
    if (this._actor && this._actor.canMove()) {
        this.startMotion('walk');
        this.startMove(0, 0, 300);
    } else if (!this.isMoving()) {
        this.refreshMotion();
        this.startMove(0, 0, 0);
    }
  };

  Sprite_EnemyActor.prototype.stepForward = function() {
      this.startMove(48, 0, 12);
  };

  Sprite_EnemyActor.prototype.stepBack = function() {
      this.startMove(0, 0, 12);
  };

  /* Doesn't actually work */
  Sprite_EnemyActor.prototype.retreat = function() {
      this.startMove(-300, 0, 30);
  };  
  
  Sprite_EnemyActor.prototype.setActorHome = function(index) {
    // No
  };  
  
  Sprite_EnemyActor.prototype.updateBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var name = this._actor.svActorName();
    if (this._battlerName !== name) {
      this._battlerName = name;
      this._mainSprite.bitmap = ImageManager.loadSvActor(name);      
      this.scale.x = -1;
      // this._mainSprite.scale.x = -1
      this._stateSprite.scale.x = -1
    }
  };
  
  Sprite_EnemyActor.prototype.motionSpeed = function() {
    return 12;
  };
  
  Sprite_EnemyActor.prototype.updateVisibility = function() {
    Sprite_Actor.prototype.updateVisibility.call(this);
    if (!this._battler || !this._battler.useSVActorSprite()) {
      this.visible = false;
    }
  };
  Sprite_Actor.prototype.updateMotion = function() {
    this.setupMotion();
    this.setupWeaponAnimation();
    if (this._actor.isMotionRefreshRequested()) {
        this.refreshMotion();
        this._actor.clearMotion();
    }
    this.updateMotionCount();
};
  
  /***************************************************************************/
  
  var TH_SpriteEnemy_setBattler = Sprite_Enemy.prototype.setBattler;
  Sprite_Enemy.prototype.setBattler = function(battler) {
    TH_SpriteEnemy_setBattler.call(this, battler);    
    this._useSVActorSprite = battler.useSVActorSprite();   
    if (this._useSVActorSprite) {      
      this._svActorSprite = new Sprite_EnemyActor(battler);
      this._svActorSprite.setBattler(battler);
      this.addChild(this._svActorSprite);
    }
  };
  
  var TH_SpriteEnemy_update = Sprite_Enemy.prototype.update
  Sprite_Enemy.prototype.update = function() {
    this.updateSpriteType();
    if (this._useSVActorSprite) {
      Sprite_Battler.prototype.update.call(this);
      // this._battlerName = "";
      this._stateIconSprite.visible = false
      this.bitmap = ImageManager.loadBitmap("", 0);
      this._svActorSprite.update();      
    }
    else {
      this._stateIconSprite.visible = true
      TH_SpriteEnemy_update.call(this);
    }
  };
  
  Sprite_Enemy.prototype.updateSpriteType = function() {    
    this._useSVActorSprite = this._enemy.useSVActorSprite();
  };
  
  /***************************************************************************/
  
  $.Regex = /<sv[-_ ]actor[-_ ]name:\s*(.+?)\s*\/>/i
  $.loadSVActorName = function(enemy) {
    if (enemy.svActorName === undefined) {
      enemy.svActorName = "";
      var res = $.Regex.exec(enemy.note)
      if (res) {
        enemy.svActorName = res[1];
      }      
    }
    return enemy.svActorName;
  };

  var TH_SideviewActorEnemies_GameEnemy_initMembers = Game_Enemy.prototype.initMembers
  Game_Enemy.prototype.initMembers = function() {
    TH_SideviewActorEnemies_GameEnemy_initMembers.call(this);
    this._svActorName = '';
  };
  
  var TH_SideviewActorEnemies_GameEnemy_setup = Game_Enemy.prototype.setup
  Game_Enemy.prototype.setup = function(enemyId, x, y) {
    TH_SideviewActorEnemies_GameEnemy_setup.call(this, enemyId, x, y);
    this.refreshSVActorName();
  };
  
  Game_Enemy.prototype.refreshSVActorName = function() {    
    this._svActorName = $.loadSVActorName(this.enemy());
  };
  
  Game_Enemy.prototype.svActorName = function() {
    return this._svActorName;
  };
  
  Game_Enemy.prototype.useSVActorSprite = function() {  
    return this._svActorName !== "";
  };
  
  Game_Enemy.prototype.performCounter = function() {
    Game_Battler.prototype.performCounter.call(this);
    this.performAttack();
  };
    
  /* TO-DO: Doesn't support transform yet */
  var TH_GameEnemy_transform = Game_Enemy.prototype.transform;
  Game_Enemy.prototype.transform = function(enemyId) {
    TH_GameEnemy_transform.call(this, enemyId);
    this.refreshSVActorName();    
  };
  
  /* Copied from Game_Actor */
  var TH_GameEnemy_performAction = Game_Enemy.prototype.performAction;
  Game_Enemy.prototype.performAction = function(action) {
    TH_GameEnemy_performAction.call(this, action);
    if (action.isAttack()) {
        this.performAttack();
    } else if (action.isGuard()) {
        this.requestMotion('guard');
    } else if (action.isMagicSkill()) {
        this.requestMotion('spell');
    } else if (action.isSkill()) {
        this.requestMotion('skill');
    } else if (action.isItem()) {
        this.requestMotion('item');
    }
  };
  
  Game_Enemy.prototype.performAttack = function() { 
    // Nothing
  }; 
  
  var TH_BattleManager_updateEventMain = BattleManager.updateEventMain;
  BattleManager.updateEventMain = function() {    
    $gameTroop.requestMotionRefresh();
    return TH_BattleManager_updateEventMain.call(this);    
  };
  
  Game_Troop.prototype.requestMotionRefresh = function() {
    this.members().forEach(function(enemy) {
      enemy.requestMotionRefresh();
    });
  };
})(TH.SideviewActorEnemies);