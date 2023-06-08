/*:
 *
 * @plugindesc A simple plugin allow to helping exclude unused files.
 * @author RageOfFire
 * @pluginname ROF_SelectExFiles
 *
 * @help When exclude some files from plugins don't get load in while 
 * excludes unused files, this plugin will help you add those "unused files"
 * from plugin not support files added
 * 
 * 
 * @param Image
 * 
 * @param AlphaNetZ
 * @default []
 * @desc Add image you want to avoid exclude here
 * @require 1
 * @parent Image
 * @dir img/Alpha
 * @type file[]
 * 
 * @param MobileInput
 * @default []
 * @desc Add image you want to avoid exclude here
 * @require 1
 * @parent Image
 * @dir img/screen_controls
 * @type file[]
 * 
 * @param Other
 * @default []
 * @desc Add image you want to avoid exclude here
 * @require 1
 * @parent Image
 * @dir img/
 * @type file[]
 *
 * @param Audio
 * @default []
 * @desc Add audio you want to avoid exclude here
 * @require 1
 * @dir audio/
 * @type file[]
 *
 */