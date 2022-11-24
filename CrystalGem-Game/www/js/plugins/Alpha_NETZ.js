/*:
 * @plugindesc (v.0.8)[PRO] Multiplayer for RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z plugin is still in development
 *
 * WebPage: https://kdworkshop.net/plugins/alpha-net-z/
 * Documentation: https://github.com/KageDesu/Alpha-NET-Z/wiki
 *
 * Required content:
 *  - file css\anet.css
 *  - file css\anet_chat.css
 *  - folder img\Alpha\*all files*
 *
 *

 * @param ANETZ @text @desc
 * 
 * @param connection:s
 * @text Connection
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Connection to server configuration
 * 
 * @param isCustomGameId:b
 * @parent connection:s
 * @type boolean
 * @text Use Custom Game ID?
 * @default false
 * @desc You can specify own (unique) GameId for your game. Only players with the games with same gameId can join each other.
 * 
 * @param customGameId
 * @parent isCustomGameId:b
 * @text Custom Game ID
 * @default
 * @desc CAN'T be Empty. Should be UNIQUE for your game. Example: SuperGame1000FromJohnDoe
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Multiplayer Settings
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Wait Map Transfer?
 * @default false
 * @desc When player transferred to the new map he will wait until all players not transfered on same map.
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text New Game Allowed?
 * @default true
 * @desc If false, the menu item "New Game" will not be displayed in title menu
 * 
 * @param isReadyStatusCheck:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is Check Ready?
 * @default false
 * @desc If true, each player should set Ready status before host can start game room
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Rooms Filter?
 * @on ON
 * @off OFF
 * @default false
 * @desc [PRO] If filter is ON, you can see only this (same) game rooms in lobby
 * 
 * @param lobbyChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Lobby Chat
 * @on YES
 * @off NO
 * @default true
 * @desc Show lobby chat? (chat between players on server, in network menu)
 * 
 * @param lobbyChatIsGlobal:b
 * @parent lobbyChat:b
 * @text Is Global?
 * @type boolean
 * @on Global
 * @off Game Only
 * @default false
 * @desc If Global - you can chat with all player on server. Game Only - only with player with EXACT game
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join to Game Allowed?
 * @default false
 * @desc If true, player can join in rooms with already started game
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Join to Loaded Game?
 * @default true
 * @desc If true, player can join in rooms with started and loaded from savefile game
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text On Player Joined CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when player joined game. CE called ONLY for this player.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join Random Room Option
 * @default true
 * @desc Show the Join Random Room option?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Save and Load Allowed?
 * @on YES
 * @off NO
 * @default true
 * @desc Can player save and load network game?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is show network icons?
 * @on YES
 * @off NO
 * @default true
 * @desc Network current state icons above players (menu, event, battle, etc...)
 * 
 * @param isMapEncountersGlobal:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is Encounters is Global?
 * @on YES, for all
 * @off NO, for player
 * @default false
 * @desc Is Map Encounters are for all players on map?
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Chat?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] In-Game chat on Map Scene? (More chat settings will be in next update...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Start Message
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Message when New Game started. Leave empty if not need any start message.
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Chat Key
 * @default t
 * @desc Key to open (close) chat window in game.
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Say Key
 * @default t
 * @desc Key to open input message scene. Only when chat visible. Can be same with Chat Key.
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Is click to Say?
 * @on YES
 * @off NO
 * @default true
 * @desc Click in chat window to open input message scene. Only when chat visible.
 * 
 * @param chatAutoOpen:b
 * @parent inGameChat:b
 * @type boolean
 * @text Is auto open?
 * @on YES
 * @off NO
 * @default false
 * @desc Show (open) chat window if new message is received? (If chat windows is closed)
 * 
 * @param chatMessagesSettings:struct
 * @parent inGameChat:b
 * @text Messages Settings
 * @type struct<str42>
 * @default {"maxlength:i":"32","forbiddenEscapeCodes:str":"V","iconsSize:i":"18","allowEmotions:b":"true"}
 * @desc
 * 
 * @param chatInputSceneVisualSettings:struct
 * @parent inGameChat:b
 * @text Input Text Scene
 * @type struct<str41>
 * @default {"mapChannelButtonPosition:s":"{\"x:e\":\"4\",\"y:e\":\"6\"}","allChannelButtonPosition:s":"{\"x:e\":\"104\",\"y:e\":\"6\"}","inputSceneOkButtonPosition:s":"{\"x:e\":\"356\",\"y:e\":\"284\"}"}
 * @desc Chat message input scene visual settings
 * 
 * @param inGameChatWindowVisualSettings:struct
 * @parent inGameChat:b
 * @text Chat Window
 * @type struct<InGameChatWindowSettings>
 * @default {"size:s":"{\"w:int\":\"312\",\"h:int\":\"192\"}","position:s":"{\"x:e\":\"1\",\"y:e\":\"Graphics.height - 193\"}","notActiveOpacity:i":"140","maxMessages:i":"9","firstChatMessageMargin:s":"{\"x:int\":\"3\",\"y:int\":\"145\"}"}
 * @desc Chat window visual settings
 * 
 * @param inGameChatTextLineSettings:struct
 * @parent inGameChatWindowVisualSettings:struct
 * @text Text Line
 * @type struct<ChatTextLineSettings>
 * @default {"size:s":"{\"w:int\":\"306\",\"h:int\":\"18\"}","backgroundA:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"40\"}","backgroundB:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"70\"}","textLine:s":"{\"visible:bool\":\"true\",\"size:struct\":\"{\\\"w:int\\\":\\\"520\\\",\\\"h:int\\\":\\\"20\\\"}\",\"font:struct\":\"{\\\"face:str\\\":\\\"\\\",\\\"size:int\\\":\\\"14\\\",\\\"italic:bool\\\":\\\"false\\\"}\",\"margins:struct\":\"{\\\"x:int\\\":\\\"4\\\",\\\"y:int\\\":\\\"-3\\\"}\"}","textFormat:str":"\\}\\}\\C[3][ *3","animationSpeedInPx:i":"18","channelAll:str":"ALL","channelMap:str":"MAP"}
 * @desc Chat line (message) visual settings
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Player Menu?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] In-Game player menu? (Right mouse click on another player to open menu)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Default Commands
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Trade
 * @type struct<LPlayerMenuOption> 
 * @desc Send trade request for another player
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Status
 * @type struct<LPlayerMenuOption> 
 * @desc Show another player character status screen
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Follow
 * @type struct<LPlayerMenuOption> 
 * @desc Start following another player character on map
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Custom Commands
 * @type struct<LPlayerMenuOption>[]
 * @desc Your commands for player menu
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Trade Settings
 * @desc [PRO] Trade between players
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Is need trade confirm window?
 * @on YES
 * @off NO
 * @default true
 * @desc If false - trade will start immedently for paleyr when someone sent trade request for him
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Confirm window SE
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE when trade confirm window is pop up
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Trade request text
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Trade confirm window text. %1 - another player name (who requested trade with you).
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for Yes
 * @default y
 * @desc Hotkey for answer "Yes" (case sensetive)
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for No
 * @default n
 * @desc Hotkey for answer "No" (case sensetive)
 * 
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Players Settings
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Actors
 * @default ["1","2","3","4"]
 * @desc Available actors for network game players.
 * 
 * @param maxPlayersInRoom:int
 * @text Players per Room
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Maximum players in one Room. Should be <= Actors count. Max 2 for BASIC version.
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Actor selection?
 * @type boolean
 * @default true
 * @desc Can player select actor in lobby?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text One player start?
 * @type boolean
 * @default true
 * @desc If in room only 1 player (host), he can start game alone?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Player Name for Actor
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Show network player name instead of his Actor name (or nickname)
 * 
 * @param isUseNameplates:b
 * @parent playersSettingsGroup
 * @text Is show Nameplates?
 * @type boolean
 * @default true
 * @desc Show nameplate with player name above head?
 * 
 * @param isShowActorNameInNameplate:b
 * @parent isUseNameplates:b
 * @text Actor name?
 * @type boolean
 * @on Actor Name
 * @off Player Name
 * @default true
 * @desc Actor or Player name on nameplate
 * 
 * @param isShowMyNameplate:b
 * @parent isUseNameplates:b
 * @text My namaplate?
 * @type boolean
 * @on Show
 * @off No, only for other
 * @default false
 * @desc If TRUE player will see nameplate above own character as well
 * 
 * @param nameplatesDB:structA
 * @parent isUseNameplates:b
 * @text Styles
 * @type struct<NameplateStyle>[]
 * @default ["{\"id:str\":\"default\",\"margins:s\":\"{\\\"x:int\\\":\\\"-27\\\",\\\"y:int\\\":\\\"-20\\\"}\",\"backImage:s\":\"{\\\"visible:b\\\":\\\"false\\\",\\\"image:str\\\":\\\"\\\"}\",\"backImageMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"backRect:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"fillColor:str\\\":\\\"#000000\\\",\\\"fillOpacity:i\\\":\\\"120\\\",\\\"borderColor:str\\\":\\\"#000000\\\",\\\"borderThickness:i\\\":\\\"1\\\",\\\"borderOpacity:i\\\":\\\"255\\\"}\",\"backRectMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"text:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"12\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"}"]
 * @desc [PRO] Default and custom nameplate styles
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text On Player Disconnect CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when somebody leave (disconnect) game. 0 - nothing
 * 
 * @param globalData:s
 * @text Global Data
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc All this data will be automatically synchronized between all players
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Other Settings
 * 
 * @param textInputMaxLength:i
 * @text Input Max Length
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Input field (room or player name) max characters count
 * 
 * @param localeDB:struct
 * @text Localization
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome,  *1"}
 * @desc You can translate or change embedded plugin text
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Event Options
 * @desc Event network start options
 * 
 * @arg whoSelector
 * @text Who can start
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Select who can start this event
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg lockMode
 * @text Lock Event?
 * @type boolean
 * @default false
 * @desc If true - event will be locked while executed. Nobody can't start locked event
 * 
 * @arg sharedMode
 * @text Shared Mode
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Shared event - starts for all players simultaneously, synchronized commands execution
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Command Options
 * @desc Next Event Command network start options
 * 
 * @arg whoSelector
 * @text Execute for
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Select for who this event command will be executed
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg scope
 * @text Scope
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc For which players will the virtual command be executed?
 * 
 * @arg executeMode
 * @text Execute Mode
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc How this command will be exectuted for other players. Read Wiki for more info
 * 
 * @command SharedBattle
 * @text Set Shared Battle
 * @desc Make next Battle Processing command shared between all players
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Unique battle ID. Empty - not shared battle (by default)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */
 /*:ru
 * @plugindesc (v.0.8)[PRO] Мультиплеер для RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z плагин всё ещё находится в активной разработке
 *
 * Сайт: https://kdworkshop.net/plugins/alpha-net-z/
 * Документация: https://github.com/KageDesu/Alpha-NET-Z/wiki
 * (пока только на английском)
 *
 * Необходимые плагину файлы:
 *  - файл css\anet.css
 *  - файл css\anet_chat.css
 *  - папка img\Alpha\*все картинки*
 *
 *


 * @param ANETZ @text @desc
 * 
 * @param connection:s
 * @text Соединение
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Настройки подключения к серверу
 * 
 * @param isCustomGameId:b
 * @parent connection:s
 * @type boolean
 * @text Свой Game ID ?
 * @default false
 * @desc Использовать свой уникальный ID для игры? Только игроки у которых одинаковый ID игры могут присоединятся друг к другу.
 * 
 * @param customGameId
 * @parent isCustomGameId:b
 * @text Мой ID для игры
 * @default
 * @desc НЕЛЬЗЯ пустой. Должен быть уникальный для Вашей игры. Пример: SuperGame1000FromJohnDoe
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Мультиплеер
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Ждать игроков при смене карты?
 * @default false
 * @desc Когда игрок перемещается на другую карту, он будет ждать пока все остальные не перейдут на данную карту вместе с ним
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Одиночная игра?
 * @default true
 * @desc Если ВЫКЛ., то пункт "Новая игра" (одиночная) не появится в главном меню
 * 
 * @param isReadyStatusCheck:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Проверка готовности?
 * @default false
 * @desc Если ВКЛ., то каждый игрок должен нажать Готов, перед тем как хост сможет запустить игру
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Фильтр комнат
 * @on ВКЛ
 * @off ВЫКЛ
 * @default false
 * @desc [PRO] Если фильтр ВКЛ., то игрок будет видеть все комнаты только данной (аналогичной) игры
 * 
 * @param lobbyChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Чат в лобби
 * @on YES
 * @off NO
 * @default true
 * @desc Показывать чат в  лобби? (чат между игроками на сервере, находится в сетевом меню)
 * 
 * @param lobbyChatIsGlobal:b
 * @parent lobbyChat:b
 * @text Режим чата
 * @on Глобальный
 * @off Только игра
 * @default false
 * @desc Если Глобальный - игроки в любой игре с Alpha NET Z могут общаться в чате с другими игроками на данном севрере
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Присоединение к игре
 * @default false
 * @desc Если ВКЛ., игрок сможет подключаться к комнатам с уже запущенной игрой
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Присоединение к загруженной игре
 * @default true
 * @desc Если ВКЛ., игрок сможет подключаться к запущенной игре, которая была загруженная из файла сохранения
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text Общее событие
 * @type common_event
 * @default 0
 * @desc Общее событие для ТЕКУЩЕГО игрока, когда он присоединился к игре.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Случайная комната
 * @default true
 * @desc Показывать опцию присоединиться к случайной комнате в сетевом меню?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Сохранение и загрузка
 * @on YES
 * @off NO
 * @default true
 * @desc Может ли игрок сохранять и загружать сетевую игру?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Иконки-статусы
 * @on YES
 * @off NO
 * @default true
 * @desc Показывать иконки-статусы над головой другого игрока? (меню, событие, битва, ...)
 * 
 * @param isMapEncountersGlobal:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Нападения на карте общие?
 * @on Да, для всех
 * @off Нет
 * @default false
 * @desc Напандение на карте (Map Encounters) общее для всех игроков на данной карте?
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Чат?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] Включить чат в игре? (Больше настроек чата будет добавлено позже...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Начальное сообщение
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Сообщение приветствие в чате
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Открыть чат
 * @default t
 * @desc Кнопка чтобы открыть \ закрыть окно чата в игре
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Сказать в чат
 * @default t
 * @desc Кнопка чтобы открыть сцену ввода сообщения (только когда чат открыт) Может быть одинаковой с кнопкой открыть чат
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Нажать что сказать?
 * @on YES
 * @off NO
 * @default true
 * @desc Можно ли нажать мышкой на оконо чата чтобы открыть сцену ввода? (только когда чат открыт)
 * 
 * @param chatAutoOpen:b
 * @parent inGameChat:b
 * @type boolean
 * @text Авто. показ?
 * @on ДА
 * @off НЕТ
 * @default false
 * @desc Открывать окно чата если пришло новое сообщение? (Если чат был закрыт при этом)
 * 
 * @param chatMessagesSettings:struct
 * @parent inGameChat:b
 * @text Настройки сообщений
 * @type struct<str42>
 * @default {"maxlength:i":"32","forbiddenEscapeCodes:str":"V","iconsSize:i":"18","allowEmotions:b":"true"}
 * @desc
 * 
 * @param chatInputSceneVisualSettings:struct
 * @parent inGameChat:b
 * @text Сцена ввода сообещния
 * @type struct<str41>
 * @default {"mapChannelButtonPosition:s":"{\"x:e\":\"4\",\"y:e\":\"6\"}","allChannelButtonPosition:s":"{\"x:e\":\"104\",\"y:e\":\"6\"}","inputSceneOkButtonPosition:s":"{\"x:e\":\"356\",\"y:e\":\"284\"}"}
 * @desc
 * 
 * @param inGameChatWindowVisualSettings:struct
 * @parent inGameChat:b
 * @text Настройки окна чата
 * @type struct<InGameChatWindowSettings>
 * @default {"size:s":"{\"w:int\":\"312\",\"h:int\":\"192\"}","position:s":"{\"x:e\":\"1\",\"y:e\":\"Graphics.height - 193\"}","notActiveOpacity:i":"140","maxMessages:i":"9","firstChatMessageMargin:s":"{\"x:int\":\"3\",\"y:int\":\"145\"}"}
 * @desc
 * 
 * @param inGameChatTextLineSettings:struct
 * @parent inGameChatWindowVisualSettings:struct
 * @text Сообщение в чате
 * @type struct<ChatTextLineSettings>
 * @default {"size:s":"{\"w:int\":\"306\",\"h:int\":\"18\"}","backgroundA:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"40\"}","backgroundB:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"70\"}","textLine:s":"{\"visible:bool\":\"true\",\"size:struct\":\"{\\\"w:int\\\":\\\"520\\\",\\\"h:int\\\":\\\"20\\\"}\",\"font:struct\":\"{\\\"face:str\\\":\\\"\\\",\\\"size:int\\\":\\\"14\\\",\\\"italic:bool\\\":\\\"false\\\"}\",\"margins:struct\":\"{\\\"x:int\\\":\\\"4\\\",\\\"y:int\\\":\\\"-3\\\"}\"}","textFormat:str":"\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3","textFormatForPlayer:str":"\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3","textFormatForSystem:str":"\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3","animationSpeedInPx:i":"18","channelAll:str":"ALL","channelMap:str":"MAP"}
 * @desc Визуальные настройки сообщения в чате
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Меню игрока
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] Меню игрока будет работать в игре? (Открыть меню - нажать правой кнопкой по другому игроку)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Стандартные пункты меню
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Торговать
 * @type struct<LPlayerMenuOption> 
 * @desc Отправить запрос торговли другому игроку
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Статус
 * @type struct<LPlayerMenuOption> 
 * @desc Посмотреть окно статуса другого игрока
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Следовать
 * @type struct<LPlayerMenuOption> 
 * @desc Начать следовать за другим игроком (только текущая карта)
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Пользовательские пункты меню
 * @type struct<LPlayerMenuOption>[]
 * @desc Вы можете добавить в меню свои комманды
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Настройки обмена
 * @desc [PRO] Торговля (обмен) между игроками
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Потверждение?
 * @on YES
 * @off NO
 * @default true
 * @desc Нужно ли потверждение торговли другим игроком?
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Звук
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE звук когда окно потверждения появляется на экране
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Текст
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Текст окна потверждения. %1 - имя другого игрока, который запрашивает обмен с текущим игроком
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Кнопка ДА
 * @default y
 * @desc Кнопка на клавиатуре для быстрого ответа Да
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Кнопка НЕТ
 * @default n
 * @desc Кнопка на клавиатуре для быстрого ответа Нет
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Настройки игроков
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Персонажи
 * @default ["1","2","3","4"]
 * @desc Персонажи которые будут доступны в сетевой игре
 * 
 * @param maxPlayersInRoom:int
 * @text Кол-во игроков
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Макс. кол-во игроков в комнате. 2 - для базовой версии. Число не должно превыщать кол-во персонажей (Персонажи)
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Выбор персонажа?
 * @type boolean
 * @default true
 * @desc Может ли игрок выбирать персонажа перед началом игры?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text Один игрок
 * @type boolean
 * @default true
 * @desc Можно ли стартовать сетевую игру если только один игрок в комнате (хост)?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Имя игрока
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Как будет отображаться имя игрока в игре
 * 
 * 
 * @param isUseNameplates:b
 * @parent playersSettingsGroup
 * @text Имена над игроками?
 * @type boolean
 * @default true
 * @desc Показывать таблички (текст) с именами над сетевыми персонажами?
 * 
 * @param isShowActorNameInNameplate:b
 * @parent isUseNameplates:b
 * @text Какое имя?
 * @type boolean
 * @on Имя персонажа
 * @off Имя игрока
 * @default true
 * @desc Показывать имя персонажа или игрока?
 * 
 * @param isShowMyNameplate:b
 * @parent isUseNameplates:b
 * @text Своё имя
 * @type boolean
 * @on Показывать
 * @off Нет, только других
 * @default false
 * @desc Показывать также имя над своим персонажем? (текущего игрока)
 * 
 * @param nameplatesDB:structA
 * @parent isUseNameplates:b
 * @text Стили
 * @type struct<NameplateStyle>[]
 * @default ["{\"id:str\":\"default\",\"margins:s\":\"{\\\"x:int\\\":\\\"-27\\\",\\\"y:int\\\":\\\"-20\\\"}\",\"backImage:s\":\"{\\\"visible:b\\\":\\\"false\\\",\\\"image:str\\\":\\\"\\\"}\",\"backImageMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"backRect:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"fillColor:str\\\":\\\"#000000\\\",\\\"fillOpacity:i\\\":\\\"120\\\",\\\"borderColor:str\\\":\\\"#000000\\\",\\\"borderThickness:i\\\":\\\"1\\\",\\\"borderOpacity:i\\\":\\\"255\\\"}\",\"backRectMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"text:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"12\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"}"]
 * @desc [PRO] Настройка различных стилей табличек с именами
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text Покинул игру
 * @type common_event
 * @default 0
 * @desc Общее событие, которое будет вызвано у всех, когда кто-то покидает игру (выходит)
 * 
 * @param globalData:s
 * @text Глобальные данные
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc Эти данные будут автоматически синхронизироваться между всеми игроками
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Другое
 * 
 * @param textInputMaxLength:i
 * @text Макс. длина текста
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Макс. допустимая длина текста для названия комнаты или имени игрока
 * 
 * @param localeDB:struct
 * @text Локализация
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome, %1","playersCount":"Players on server: %1"}
 * @desc Изменение и перевод служебного текста плагина
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Правила запуска события
 * @desc Задать правила запуска события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Кто может запустить данное событие
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg lockMode
 * @text Блокировка события?
 * @type boolean
 * @default false
 * @desc Если Да - событие будет заблокировано при запуске. Никто другой не может запустить такое событие.
 * 
 * @arg sharedMode
 * @text Общий режим
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Общее событие - запускается для всех игроков на карте сразу, команды будут выполняться синхронизировано одинаково для всех
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Правила запуска команды
 * @desc Задать правила запуска следующей команды события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Кто может запустить следующую команду события
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg scope
 * @text Область
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc Для всех игроков (All world) или только на текущей карте будет выполняться команда?
 * 
 * @arg executeMode
 * @text Режим
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc Как именно данная команда будет выполнена для других игроков. Читайте документацию.
 * 
 * @command SharedBattle
 * @text Общ. битва
 * @desc Сделать следующую битву общей - другой игрок сможет присоединиться к битве
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Уникальный идентификатор битвы. Пусто - битва НЕ будет общей (только локальной)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */
/*~struct~str0:
 * @param w:int
 * @text Width
 * @type number
 * @default 100
 * @min 0
 *
 * @param h:int
 * @text Height
 * @type number
 * @default 100
 * @min 0
*/

/*~struct~str0:ru
 * @param w:int
 * @text Высота
 * @type number
 * @default 100
 * @min 0
 *
 * @param h:int
 * @text Ширина
 * @type number
 * @default 100
 * @min 0
*/

/*~struct~str1:

 * @param face:str
 * @text Face
 * @type string
 * @default
 *
 * @param size:int
 * @text Size
 * @type number
 * @default 24
 * @min 1
 * 
 * @param italic:bool
 * @text IsItalic
 * @type boolean
 * @default false

*/

/*~struct~str1:ru

 * @param face:str
 * @text Название
 * @type string
 * @default
 *
 * @param size:int
 * @text Размер
 * @type number
 * @default 24
 * @min 1
 * 
 * @param italic:bool
 * @text Курсив?
 * @type boolean
 * @default false

*/

/*~struct~str2:

 * @param x:int
 * @text X
 * @type number
 * @default 0
 * @min -1000
 *
 * @param y:int
 * @text Y
 * @type number
 * @default 0
 * @min -1000

*/
/*~struct~str2:ru

 * @param x:int
 * @text X
 * @type number
 * @default 0
 * @min -1000
 *
 * @param y:int
 * @text Y
 * @type number
 * @default 0
 * @min -1000

*/
/*~struct~str3:

 * @param color
 * @text Color
 * @type text
 * @default #000000
 * @desc Outline color in HEX (#000000) or empty "" (black)
 *
 * @param width:int
 * @text Width
 * @type number
 * @default 3
 * @min 0
 * @desc Outline stroke width in px

*/
/*~struct~str3:ru

 * @param color
 * @text Цвет
 * @type text
 * @default #000000
 * @desc Цвет обводки в HEX формате (#000000) или пусто "" (чёрный)
 *
 * @param width:int
 * @text Ширина
 * @type number
 * @default 3
 * @min 0
 * @desc Ширина обводки в пикселях

*/

/*~struct~str4:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this element visible? 


 * @param size:struct
 * @text Size
 * @type struct<str0>
 * @default
 * @desc Size of element


 * @param alignment:str
 * @text Alignment
 * @type combo
 * @option center
 * @option right
 * @option left
 * @default center
 * @desc Text alignment


 * @param font:struct
 * @type struct<str1>
 * @text Font Settings
 * @default
 * @desc Text font settings


 * @param margins:struct
 * @text Margins
 * @type struct<str2>
 * @default
 * @desc Position of element, relative parent


 * @param outline:struct
 * @text Text Outline
 * @type struct<str3>
 * @default
 * @desc Text outline settings


 * @param textColor:str
 * @type string
 * @text Text Color
 * @default #FFFFFF
 * @desc Text color in HEX format (#000000)

*/

/*~struct~str4:ru

 * @param visible:bool
 * @text Активен?
 * @type boolean
 * @default true
 * @desc Будет ли этот элемент видно в игре?


 * @param size:struct
 * @text Размер
 * @type struct<str0>
 * @default
 * @desc


 * @param alignment:str
 * @text Положение
 * @type combo
 * @option center
 * @option right
 * @option left
 * @default center
 * @desc Положение текста


 * @param font:struct
 * @type struct<str1>
 * @text Шрифт
 * @default
 * @desc Настройки шрифта


 * @param margins:struct
 * @text Отступы
 * @type struct<str2>
 * @default
 * @desc Позиция элемента, относительно элемента родителя


 * @param outline:struct
 * @text Обводка
 * @type struct<str3>
 * @default
 * @desc Настройки обводки текста


 * @param textColor:str
 * @type string
 * @text Цвет
 * @default #FFFFFF
 * @desc Цвет текста в HEX формате (#000000)

*/

/*~struct~str5:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this element visible? 


 * @param size:struct
 * @text Size
 * @type struct<str0>
 * @default
 * @desc Size of element


 @param fillColor:str
 @text Fill Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #000000 


 @param fillOpacity:i
 @text Fill Opacity
 @type number 
 @min 0
 @max 255
 @desc From 0 to 255, 0 - transparent, 255 - opaque
 @default 220 


 @param borderColor:str
 @text Borders Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #000000 


 @param borderThickness:i
 @text Borders thickness
 @type number 
 @min 0
 @desc Thickness of borders in PX. 0 - no borders
 @default 0 


 @param borderOpacity:i
 @text Borders Opacity
 @type number 
 @min 0
 @max 255
 @desc From 0 to 255, 0 - transparent, 255 - opaque
 @default 255 

*/


/*~struct~str5:ru

 * @param visible:bool
 * @text Активен?
 * @type boolean
 * @default true
 * @desc Будет ли этот элемент видно в игре? 


 * @param size:struct
 * @text Размер
 * @type struct<str0>
 * @default
 * @desc


 @param fillColor:str
 @text Цвет заливки
 @type text 
 @desc Цвет в HEX формате (#000000)
 @default #000000 


 @param fillOpacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc От 0 (прозрачен) до 255 (виден)
 @default 220 


 @param borderColor:str
 @text Цвет границ
 @type text 
 @desc Цвет в HEX формате (#000000)
 @default #000000 


 @param borderThickness:i
 @text Толщина границ
 @type number 
 @min 0
 @desc Толщина границ в пикселях. 0 - нет границ
 @default 0 


 @param borderOpacity:i
 @text Прозрачность границ
 @type number 
 @min 0
 @max 255
 @desc От 0 (прозрачен) до 255 (виден)
 @default 255 

*/

/*~struct~str9:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this text visible?


 * @param size:struct
 * @text TextBox Size
 * @type struct<str0>
 * @default
 * @desc Size of the text zone


 * @param font:struct
 * @type struct<str1>
 * @text Font Settings
 * @default
 * @desc Text font settings


 * @param margins:struct
 * @text Margins
 * @type struct<str2>
 * @default
 * @desc Text position relative parent

*/

/*~struct~XY2:

 * @param x:e
 * @text X
 * @default 0
 * @desc Number or script (example: Graphics.width / 2)
 *
 * @param y:e
 * @text Y
 * @default 0
 * @desc Number or script (example: Graphics.width / 2)

*/
/*~struct~XY2:ru

 * @param x:e
 * @text X
 * @default 0
 * @desc Число или скрипт (пример: Graphics.width / 2)
 *
 * @param y:e
 * @text Y
 * @default 0
 * @desc Число или скрипт (пример: Graphics.width / 2)

*/

/*~struct~LConnectionSettings:
    @param serverIp
    @text IP
    @type combo
    @option localhost
    @option anetzglobal.ru
    @desc Server IP address (ip4) or domain name
    @default anetzglobal.ru

    @param serverPort
    @text Port
    @default 3034

    @param isHttpsConnection:b
    @text Is HTTPS (SSL) ?
    @type boolean
    @on Yes, https
    @off No, http
    @default false
    @desc Is use secure connection via https protocol? anetzglobal.ru uses port 3035 for secure connection.
*/

/*~struct~LConnectionSettings:ru
    @param serverIp
    @text IP
    @type combo
    @option localhost
    @option anetzglobal.ru
    @desc Сервер IP адрес (ip4) или имя домена
    @default anetzglobal.ru

    @param serverPort
    @text Порт
    @default 3034

    @param isHttpsConnection:b
    @text Исп. HTTPS (SSL) ?
    @type boolean
    @on Да, https
    @off Нет, http
    @default false
    @desc Использовать защищённое соединение через https протокол? anetzglobal.ru исп. порт 3035 для SSL.
*/

/*~struct~LGlobalData:
    @param globalVariablesIds:intA
    @type variable[]
    @text Variables
    @default []
    @desc Variables for auto synchronizaton

    @param globalSwitchesIds:intA
    @type switch[]
    @text Switches
    @default []
    @desc Switches for auto synchronizaton
*/

/*~struct~LGlobalData:ru
    @param globalVariablesIds:intA
    @type variable[]
    @text Переменные
    @default []
    @desc Список переменных которые будут автоматически синхронизированы между всеми игроками

    @param globalSwitchesIds:intA
    @type switch[]
    @text Переключатели
    @default []
    @desc Список переключателей которые будут автоматически синхронизированы между всеми игроками
*/

/*~struct~LLocaleDB:
    @param network
    @default Network

    @param createRoom
    @default Create Room

    @param joinRoom
    @default Join Room

    @param joinRandomRoom
    @default Join Random Room

    @param settings
    @default Settings

    @param start
    @default Start

    @param leave
    @default Leave

    @param joinGame
    @default Join Game

    @param ready
    @default Ready

    @param character
    @default Character

    @param close
    @default Close

    @param welcome
    @default Welcome, %1
    @desc %1 will be replaced by Player Name

    @param playersCount
    @default Players on server: %1
    @desc %1 will be replaced by players count (number)
*/

/*~struct~LLocaleDB:ru
    @param network
    @default Мультиплеер

    @param createRoom
    @default Создать комнату

    @param joinRoom
    @default Присоединиться

    @param joinRandomRoom
    @default Слуйчайная комната

    @param settings
    @default Настройки

    @param start
    @default Начать

    @param leave
    @default Покинуть

    @param joinGame
    @default Вступить

    @param ready
    @default Готов

    @param character
    @default Персонаж

    @param close
    @default Закрыть

    @param welcome
    @default Привет, %1
    @desc %1 будет заменён на имя игрока

    @param playersCount
    @default Игроков на сервере: %1
    @desc %1 будет заменён на количество игроков (число)
*/

/*~struct~LPlayerMenuOption:
 @param text:str
 @text Title
 @type text 
 @desc Option title. Supports control-characters, like \C[x] for color
 @default Option 

 @param visible:b
 @text Is Visible?
 @type boolean 
 @on Yes
 @off No
 @desc Is this option visible in Player Menu? If false - not appears in menu at all
 @default true 

 @param switchId:i
 @text Switch ID
 @type switch 
 @desc Switch ID for enable this option. 0 - always enabled, no any switch
 @default 0 

 @param minDist:i
 @text Active distance
 @type number 
 @min 0
 @max 100
 @desc Minimum distance between players for enable this option. 0 - any distance, no limit
 @default 0

 @param value:i
 @text Common Event
 @type common_event
 @desc Common event ID for this command
 @default 0
*/

/*~struct~LPlayerMenuOption:ru
 @param text:str
 @text Заголовок
 @type text 
 @desc Заголовок пунтка меню. Поддерживает символы управления как и сообщения, например \C[x] для смены цвета
 @default Моя опция 

 @param visible:b
 @text Видимость
 @type boolean 
 @on Да
 @off Нет
 @desc Эту опцию будет видно в меню игрока? Если НЕТ - вообще не появится в меню
 @default true 

 @param switchId:i
 @text Переключатель
 @type switch 
 @desc Переключатель для активации этой опции. 0 - всегда активна
 @default 0 

 @param minDist:i
 @text Дистанция
 @type number 
 @min 0
 @max 100
 @desc Минимальная дистанция между игроками для активации этой опции. 0 - всегда активна
 @default 0

 @param value:i
 @text Событие
 @type common_event
 @desc Общее событие, которое будет вызвано при выборе этой опции меню
 @default 0
*/

/*~struct~InGameChatWindowSettings:

 @param size:s
 @text Size
 @type struct<str0> 
 @desc Chat Window Size
 @default {} 


 @param position:s
 @text Position
 @type struct<XY2> 
 @desc Default position on screen
 @default {} 


 @param notActiveOpacity:i
 @text Opacity
 @type number 
 @min 0
 @max 255
 @desc Chat window opacity when window not active (not under mouse cursor)
 @default 140 


 @param maxMessages:i
 @text Lines Count
 @type number 
 @min 1
 @desc Max visible messages lines at same time
 @default 9 


 @param firstChatMessageMargin:s
 @text Start Pos
 @type struct<str2> 
 @desc Messages initial position (pos of first chat message) in chat window
 @default {} 

*/

/*~struct~InGameChatWindowSettings:ru

 @param size:s
 @text Размер
 @type struct<str0> 
 @desc Размер окна чата
 @default {} 


 @param position:s
 @text Позиция
 @type struct<XY2> 
 @desc Позиция окна чата на экране (по умолчанию)
 @default {} 


 @param notActiveOpacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc Прозрачность окна чата, когда оно НЕ активно (курсор мыши вне окна)
 @default 140 


 @param maxMessages:i
 @text Строки
 @type number 
 @min 1
 @desc Макс. количество строк чата (сообщеий) до исчезнования первой
 @default 9 


 @param firstChatMessageMargin:s
 @text Позиция сообщения
 @type struct<str2> 
 @desc Позиция первой строки (сообщения) в чате (остальные будут следовать ниже)
 @default {} 

*/

/*~struct~str39:

 @param color:str
 @text Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #59a3d9 


 @param opacity:i
 @text Opacity
 @type number 
 @min 0
 @max 255
 @desc
 @default 40 

*/

/*~struct~str39:ru

 @param color:str
 @text Цвет
 @type text 
 @desc Цвет в 16 формате (#000000)
 @default #59a3d9 


 @param opacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc
 @default 40 

*/

/*~struct~ChatTextLineSettings:

 @param size:s
 @text Size
 @type struct<str0> 
 @desc Size per one chat line (one message)
 @default {} 


 @param backgroundA:s
 @text Background A
 @type struct<str39> 
 @desc 
 @default {} 


 @param backgroundB:s
 @text Background B
 @type struct<str39> 
 @desc 
 @default {} 


 @param textLine:s
 @text Text Line
 @type struct<str9> 
 @desc Text line (message text) settings
 @default {} 


 @param textFormat:str
 @text Text Format
 @type text 
 @desc Message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1] \{\{\C[2]%2 \C[0]%3 


 @param textFormatForPlayer:str
 @text Player TF
 @type text 
 @desc Own message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1]\C[1][ME]\{\{ \C[0]%3 


 @param textFormatForSystem:str
 @text System TF
 @type text 
 @desc System message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1]\{\{ \C[6]%3 


 @param animationSpeedInPx:i
 @text Animation Speed
 @type number 
 @min 1
 @desc Message animation slide speed in PX per frame
 @default 18 


 @param channelAll:str
 @text Channel All name
 @type text 
 @desc 
 @default ALL 


 @param channelMap:str
 @text Channel Map name
 @type text 
 @desc 
 @default MAP 

*/

/*~struct~str41:

 @param mapChannelButtonPosition:s
 @text Button MAP
 @type struct<XY2> 
 @desc Position of button for Map channel
 @default {} 


 @param allChannelButtonPosition:s
 @text Button ALL
 @type struct<XY2> 
 @desc Position of button for All channel
 @default {} 


 @param inputSceneOkButtonPosition:s
 @text Button OK
 @type struct<XY2> 
 @desc 
 @default {} 

*/


/*~struct~str42:

 @param maxlength:i
 @text Max Length
 @type number 
 @min 10
 @desc Max chat message text length
 @default 32 


 @param forbiddenEscapeCodes:str
 @text Forbidden CC
 @type text 
 @desc Forbidden control characters (I, V, {, ...) for input. Separated by comma.
 @default V


 @param iconsSize:i
 @text Icon Size
 @type number 
 @min 8
 @desc [MZ only] Default icon size if player use \I control character in message
 @default 18 


 @param allowEmotions:b
 @text Emotions
 @type boolean 
 @on Yes
 @off No
 @desc Allow play balloons animations (emotions)? (like :!, :?, :..., :love, ...)
 @default true 

*/

/*~struct~str42:ru

 @param maxlength:i
 @text Длина
 @type number 
 @min 10
 @desc Максимальная длина (кол-во символов) сообщения в чате
 @default 32 


 @param forbiddenEscapeCodes:str
 @text Фильтр
 @type text 
 @desc Запрещённые для ввода управляющие символы (I, V, {, ...) через запятую
 @default V

 @param iconsSize:i
 @text Иконки
 @type number 
 @min 8
 @desc [MZ только] Стандартный размер иконок для сообщений с символом \I 
 @default 18


 @param allowEmotions:b
 @text Эмоции?
 @type boolean 
 @on Да
 @off Нет
 @desc Вкл. воспр. эмоций над персонажем? (пример :!, :?, :..., :love, ...)
 @default true 

*/

/*~struct~str48:

 @param visible:b
 @text Is Visible?
 @type boolean
 @default false
 @desc Will be this element visible?

 @param image:str
 @text Image
 @type file
 @dir img/Alpha
 @require 1
 @desc
 @default

*/

/*~struct~str48:ru

 @param visible:b
 @text Видимый?
 @type boolean
 @default false
 @desc Будет ли этот элемент видно в игре?

 @param image:str
 @text Изображение
 @type file
 @dir img/Alpha
 @require 1
 @desc
 @default

*/

/*~struct~NameplateStyle:

 @param id:str
 @text Style ID
 @type text
 @desc Unique style ID. Using in script call: nAPI.setNameplateStyle
 @default default

 @param margins:s
 @text Margins
 @type struct<str2> 
 @desc Nameplate offset relative charcter sprite
 @default {} 

 @param backImage:s
 @text Image
 @type struct<str48> 
 @desc Background image
 @default {} 


 @param backImageMargins:s
 @parent backImage:s
 @text Margins
 @type struct<str2> 
 @desc Background image offset relative nameplate
 @default {}


 @param backRect:s
 @text Fill
 @type struct<str5> 
 @desc Background fill and frame
 @default {} 


 @param backRectMargins:s
 @parent backRect:s
 @text Margins
 @type struct<str2> 
 @desc Background fill offset relative nameplate
 @default {} 


 @param text:s
 @text Text
 @type struct<str4>
 @desc Text settings
 @default {} 

*/

/*~struct~NameplateStyle:ru

 @param id:str
 @text Стиль
 @type text
 @desc Уникальное название стиля (ID). Исп. в скрипте: nAPI.setNameplateStyle
 @default default

 @param margins:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение относительно персонажа
 @default {} 

 @param backImage:s
 @text Фон
 @type struct<str48> 
 @desc Картинка для фона
 @default {} 


 @param backImageMargins:s
 @parent backImage:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение картинки фона относительно таблички с имененм
 @default {}


 @param backRect:s
 @text Заливка
 @type struct<str5> 
 @desc Заливка фона цветом (рамкой)
 @default {} 


 @param backRectMargins:s
 @parent backRect:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение заливки фона относительно таблички с имененм
 @default {} 


 @param text:s
 @text Текст
 @type struct<str4> 
 @desc Настройки текстового поля
 @default {} 

*/


// * INITIAL S FILE

var Imported = Imported || {};
Imported.Alpha_NETZ = true;

var ANET = {};
ANET.Version = 80; // 0.8

ANET.MinServerRev = 115; // * Необходимая ревизия сервера

// * Данный символ переопределяется в 1_DevSymbol_TEST как dev
ANET._define = 'build'; // * По умолчанию -> сборка

ANET.link = function (library) {
    this[library.name] = library;
};

ANET.isDEV = function () {
    return ANET._define == 'dev';
};

ANET.w = (e) => KDCore.warning('', e);


/*
# ==========================================================================
# ==========================================================================
#
#   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
#   (This plugin may not use the entire code of this library)
#
# ==========================================================================
# ==========================================================================
 * 
 * 
 */



// Generated by CoffeeScript 2.6.1
// ==========================================================================
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * LIBRARY WITH MZ AND MZ SUPPORT
//! {OUTER FILE}

//?rev 21.06.22
var KDCore;

window.Imported = window.Imported || {};

Imported.KDCore = true;

KDCore = KDCore || {};

// * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
//%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
KDCore._fileVersion = '2.9.2';

// * Методы и библиотеки данной версии
KDCore._loader = 'loader_' + KDCore._fileVersion;

KDCore[KDCore._loader] = [];

// * Добавить библиотеку на загрузку
KDCore.registerLibraryToLoad = function(lib) {
  return KDCore[KDCore._loader].push(lib);
};

if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
  // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
  console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
  KDCore._requireLoadLibrary = false;
} else {
  KDCore.Version = KDCore._fileVersion;
  KDCore.LIBS = KDCore.LIBS || {};
  KDCore.register = function(library) {
    return this.LIBS[library.name] = library;
  };
  window.KDCore = KDCore;
  // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
  KDCore._requireLoadLibrary = true;
}


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[KDCore.SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = KDCore.SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  // * Ищет элемент, у которого поле ID == id
  Array.prototype.getById = function(id) {
    return this.getByField('id', id);
  };
  // * Ищет элемент, у которого поле FIELD (имя поля) == value
  return Array.prototype.getByField = function(field, value) {
    var e;
    try {
      return this.find(function(item) {
        return item[field] === value;
      });
    } catch (error) {
      e = error;
      console.warn(e);
      return null;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Number.prototype.do = function(method) {
    return KDCore.SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  return Number.prototype.any = function(number) {
    return (number != null) && number > 0;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  String.prototype.toCss = function() {
    return KDCore.Color.FromHex(this).CSS;
  };
  String.prototype.toCSS = function() {
    return this.toCss();
  };
  String.prototype.isEmpty = function() {
    return this.length === 0 || !this.trim();
  };
  String.isNullOrEmpty = function(str) {
    if (str != null) {
      return str.toString().isEmpty();
    } else {
      return true;
    }
  };
  String.any = function(str) {
    return !String.isNullOrEmpty(str);
  };
  return String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.isMV = function() {
    return Utils.RPGMAKER_NAME.contains("MV");
  };
  KDCore.isMZ = function() {
    return !KDCore.isMV();
  };
  KDCore.warning = function(msg, error) {
    if (msg != null) {
      console.warn(msg);
    }
    if (error != null) {
      console.warn(error);
    }
  };
  KDCore.makeid = function(length) {
    var characters, charactersLength, i, result;
    result = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    charactersLength = characters.length;
    i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i++;
    }
    return result;
  };
  return KDCore.makeId = function() {
    return KDCore.makeid(...arguments);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var SDK;
  //?[DEPRECATED]
  // * SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.canvasToLocalX = function(layer, x) {
    while (layer) {
      x -= layer.x;
      layer = layer.parent;
    }
    return x;
  };
  SDK.canvasToLocalY = function(layer, y) {
    while (layer) {
      y -= layer.y;
      layer = layer.parent;
    }
    return y;
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  SDK.isString = function(value) {
    return typeof value === "string";
  };
  SDK.isArray = function(value) {
    return Array.isArray(value);
  };
  //@[EXTEND]
  return KDCore.SDK = SDK;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
  //@[ALIAS]
  __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll_kdCore.call(this, color);
    }
  };
  //@[ALIAS]
  __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (this._needModBltDWH > 0) {
      dh = dw = this._needModBltDWH;
      __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      this._needModBltDWH = null;
    } else {
      __alias_Bitmap_blt_kdCore.call(this, ...arguments);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    return this.drawOnMe(bitmap, x, y, size, size);
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  //TODO: Не работает?
  Bitmap.prototype.drawInMe = function(bitmap) {
    return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
  };
  return Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
});


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
  _.kdInDiagonalPointRelativeTo = function(char) {
    var e, x, y;
    try {
      if (char == null) {
        return false;
      }
      ({x, y} = char);
      if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
        return true; // * left up or down
      }
      if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
        return true; // * right up or down
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  
  //@[ALIAS]
  _input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    _input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  //@[ALIAS]
  _input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    _input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  //?NEW
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      return this._currentState[symbol] = state;
    }
  };
  //?NEW
  Input.isCancel = function() {
    return Input.isTriggered('cancel') || TouchInput.isCancelled();
  };
  //?NEW
  return TouchInput.toPoint = function() {
    return new KDCore.Point(TouchInput.x, TouchInput.y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  return PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] != null;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ___Sprite_alias_Move_KDCORE_2;
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX = 1, floatY = 1) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
    } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
    } else if ((x != null) && (x._x != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
    } else {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
    }
  };
  Sprite.prototype.isContainsPoint = function(point) {
    var rect, rx, ry;
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = this._getProperFullRect(rx, ry);
    return rect.contains(point.x, point.y);
  };
  // * Возвращает Rect с учётом Scale и Anchor спрайта
  Sprite.prototype._getProperFullRect = function(rx, ry) {
    var height, width, x, y;
    width = this.width * Math.abs(this.scale.x);
    height = this.height * Math.abs(this.scale.y);
    x = rx - this.anchor.x * width;
    y = ry - this.anchor.y * height;
    if (this.anchor.x === 0 && this.scale.x < 0) {
      x += this.width * this.scale.x;
    }
    if (this.anchor.y === 0 && this.scale.y < 0) {
      y += this.height * this.scale.y;
    }
    return new PIXI.Rectangle(x, y, width, height);
  };
  Sprite.prototype.fillAll = function(color) {
    if (color != null) {
      return this.bitmap.fillAll(color);
    } else {
      return this.fillAll(KDCore.Color.WHITE);
    }
  };
  return Sprite.prototype.removeFromParent = function() {
    if (this.parent != null) {
      return this.parent.removeChild(this);
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return TouchInput.toMapPoint = function() {
    return this.toPoint().convertToMap();
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.Utils = KDCore.Utils || {};
  return (function() {
    var _;
    _ = KDCore.Utils;
    _.getJDataById = function(id, source) {
      var d, j, len;
      for (j = 0, len = source.length; j < len; j++) {
        d = source[j];
        if (d.id === id) {
          return d;
        }
      }
      return null;
    };
    _.hasMeta = function(symbol, obj) {
      return (obj.meta != null) && (obj.meta[symbol] != null);
    };
    _.getValueFromMeta = function(symbol, obj) {
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      return obj.meta[symbol];
    };
    _.getNumberFromMeta = function(symbol, obj) {
      var value;
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      if (obj.meta[symbol] === true) {
        return 0;
      } else {
        value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
      }
      return value;
    };
    _.isSceneMap = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
      } catch (error) {
        return false;
      }
    };
    _.isSceneBattle = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
      } catch (error) {
        return false;
      }
    };
    _.getEventCommentValue = function(commentCode, list) {
      var comment, e, i, item;
      try {
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                return comment;
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    };
    _.getEventCommentValueArray = function(commentCode, list) {
      var comment, comments, e, i, item;
      try {
        comments = [];
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                comments.push(comment);
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return comments;
    };
    _.getPositionPointFromJSON = function(jsonSettings) {
      return _.convertPositionPointFromJSON(jsonSettings.position);
    };
    _.convertPositionPointFromJSON = function(position) {
      var e, x, y;
      try {
        x = position[0];
        y = position[1];
        if (!KDCore.SDK.isInt(x)) {
          x = eval(x);
        }
        if (!KDCore.SDK.isInt(y)) {
          y = eval(y);
        }
        return new KDCore.Point(x, y);
      } catch (error) {
        e = error;
        console.warn('Utils.getPositionPointFromJSON', e);
        return KDCore.Point.Empty;
      }
    };
    _.jsonPos = function(jsonPosition) {
      return _.convertPositionPointFromJSON(jsonPosition);
    };
    _.jsonPosXY = function(jsonPosition) {
      var e, x, y;
      try {
        ({x, y} = jsonPosition);
        return new KDCore.Point(eval(x), eval(y));
      } catch (error) {
        e = error;
        console.warn('Utils.jsonPosXY', e);
        return KDCore.Point.Empty;
      }
    };
    _.getVar = function(id) {
      return $gameVariables.value(id);
    };
    _.setVar = function(id, value) {
      return $gameVariables.setValue(id, value);
    };
    _.addToVar = function(id, value) {
      var prevVal;
      prevVal = _.getVar(id);
      return _.setVar(id, prevVal + value);
    };
    _.playSE = function(seFileName, pitch = 100, volume = 100) {
      var sound;
      if (seFileName == null) {
        return;
      }
      if (seFileName === "") {
        return;
      }
      sound = {
        name: seFileName,
        pan: 0,
        pitch: pitch,
        volume: volume
      };
      AudioManager.playStaticSe(sound);
    };
    _.getItemTypeId = function(item) {
      if (DataManager.isWeapon(item)) {
        return 1;
      } else if (DataManager.isArmor(item)) {
        return 2;
      }
      return 0;
    };
    _.getItemByType = function(itemId, typeId) {
      var data, e;
      try {
        if ((typeId != null) && !isFinite(typeId) && KDCore.SDK.isString(typeId) && String.any(typeId)) {
          if (typeId[0] === "w") {
            typeId = 1;
          } else if (typeId[0] === "a") {
            typeId = 2;
          } else {
            typeId = 0;
          }
        }
        data = [$dataItems, $dataWeapons, $dataArmors];
        return data[typeId][itemId];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    _.loadFont = function(name) {
      if (!KDCore.isMZ()) {
        return;
      }
      if (String.isNullOrEmpty(name)) {
        return;
      }
      if (FontManager._states[name] != null) {
        return;
      }
      FontManager.load(name, name + ".ttf");
    };
    _.convertTimeShort = function(seconds) {
      var e;
      try {
        if (seconds > 59) {
          return Math.floor(seconds / 60) + 'm';
        } else {
          return seconds;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return seconds;
      }
    };
    _.isPointInScreen = function(point, margin = 10) {
      var maxH, maxW, screenMargin, x, y;
      ({x, y} = point);
      maxW = Graphics.width;
      maxH = Graphics.height;
      // * Граница от краёв экрана
      screenMargin = margin;
      if (x < screenMargin) {
        return false;
      }
      if (y < screenMargin) {
        return false;
      }
      if (x > (maxW - screenMargin)) {
        return false;
      }
      if (y > (maxH - screenMargin)) {
        return false;
      }
      return true;
    };
    // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
    // * Пример использования loadImageAsync(a, b).then(метод)
    // в метод будет передан bitmap первым аргументом
    _.loadImageAsync = async function(folder, filename) {
      var promise;
      promise = new Promise(function(resolve, reject) {
        var b;
        b = ImageManager.loadBitmap("img/" + folder + "/", filename);
        return b.addLoadListener(function() {
          return resolve(b);
        });
      });
      return (await promise);
    };
    // * Преобразовать расширенное значение
    // * Значение может быть X -> X
    // * "X" -> X (цифра)
    // * "X,Y,Z,..." -> [X, Y, Z]
    // * "[X, Y, Z,...]" -> [X, Y, Z]
    // * "X|V" -> из переменной X
    // * [Y] -> случайное число из массива (рекурсивно)
    //@[2.8.1] since
    _.getEValue = function(value) {
      var e, items, randomValue, variableId;
      try {
        if (value == null) {
          return null;
        }
        if (KDCore.SDK.isString(value)) {
          if (isFinite(value)) { // * Число представленно строкой
            return Number(value);
          }
          // * Массив представлен строкой (может быть без квадратных скобок)
          if (value.contains(',') || (value.contains("[") && value.contains("]"))) {
            value = value.replace("[", "");
            value = value.replace("]", "");
            // * Преобразуем в число или строку (например если extended |V)
            items = value.split(",").map(function(item) {
              var itemT;
              itemT = item.trim();
              if (isFinite(itemT)) {
                return Number(itemT);
              } else {
                return itemT;
              }
            });
            // * Вызываем снова эту функцию, но уже с массивом
            return KDCore.Utils.getEValue(items);
          }
          if (value.contains("|V")) {
            variableId = parseInt(value);
            return $gameVariables.value(variableId);
          }
          return value; // * Просто значение в итоге
        } else if (KDCore.SDK.isArray(value)) {
          randomValue = value.sample();
          return KDCore.Utils.getEValue(randomValue);
        } else {
          return value;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return value;
      }
    };
    //@[2.8.2] since
    _.isChanceIsGood = function(chance) {
      var e;
      try {
        if (chance > 1) {
          chance /= 100;
        }
        return chance > Math.random();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[2.8.2] since
    //KEY:w:3:1:50 , KEY:i:10:2:1|V
    //OUTPUT: [GameItem, COUNT]
    _.parseItemFromConditionStr = function(conditionLine) {
      var amount, e, itemChance, itemId, parts, typeId;
      try {
        if (!conditionLine.contains(":")) {
          return null;
        }
        parts = conditionLine.split(":");
        typeId = parts[1];
        itemId = KDCore.Utils.getEValue(parts[2]);
        amount = KDCore.Utils.getEValue(parts[3]);
        if (amount <= 0) {
          return null;
        }
        try {
          itemChance = String.any(parts[4]) ? parts[4] : 100;
          itemChance = KDCore.Utils.getEValue(itemChance) / 100;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          itemChance = 0;
        }
        if (itemChance <= 0) {
          return null;
        }
        if (KDCore.Utils.isChanceIsGood(itemChance)) {
          return [KDCore.Utils.getItemByType(itemId, typeId), amount];
        } else {
          return null;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return Window_Base.prototype.drawFaceWithCustomSize = function(faceName, faceIndex, x, y, finalSize) {
    this.contents._needModBltDWH = finalSize;
    this.drawFace(faceName, faceIndex, x, y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    // * Input Extension: KDGamepad
    //------------------------------------------------------------------------------
    // * Поддержка расширенного управления через геймпад (свой модуль)
    var ALIAS___updateGamepadState, _;
    //@[DEFINES]
    _ = Input;
    // * Активировать работу модуля KDGamepad
    _.activateExtendedKDGamepad = function() {
      return _._kdIsGamepadExtended = true;
    };
    //@[ALIAS]
    ALIAS___updateGamepadState = _._updateGamepadState;
    _._updateGamepadState = function(gamepad) {
      if (Input._kdIsGamepadExtended === true) {
        KDGamepad.update();
      }
      if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
        return;
      }
      // * Режим перемещения без DPad
      // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
      // * например при работе с инвентарём
      if (KDGamepad.isNoDPadMoving()) {
        if (KDGamepad.isDPadAny()) {
          Input.clear();
          return;
        }
      }
      ALIAS___updateGamepadState.call(this, gamepad);
    };
    window.KDGamepad = function() {
      return new Error("This is static class");
    };
    window.addEventListener("gamepadconnected", function(event) {
      var e;
      try {
        return KDGamepad.refresh();
      } catch (error) {
        // * Можно напрямую
        //unless KDGamepad.isExists()
        //    if event.gamepad? and event.gamepad.mapping == 'standard'
        //        KDGamepad.init(event.gamepad)
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    window.addEventListener("gamepaddisconnected", function(event) {
      var e;
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
          return KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    KDGamepad.stopDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = true;
    };
    KDGamepad.resumeDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = null;
    };
    // * Ссылка на геймпад
    KDGamepad.gamepad = null;
    // * Подключён ли Gamepad ?
    KDGamepad.isExists = function() {
      return KDGamepad.gamepad != null;
    };
    // * Инициализация состояния кнопок
    // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
    KDGamepad.init = function(gamepad) {
      KDGamepad.gamepad = gamepad;
      this._isActive = true;
      this.buttonNames = [
        'A', // 0
        'B', // 1
        'X', // 2
        'Y', // 3
        'LB', // 4
        'RB', // 5
        'LTrigger', // 6
        'RTrigger', // 7
        'Back', // 8
        'Start', // 9
        'LStick', // 10
        'RStick', // 11
        'dUp', // 12
        'dDown', // 13
        'dLeft', // 14
        'dRight' // 15
      ];
      this.reset();
    };
    // * Аналог Input.clear
    KDGamepad.clear = function() {
      return KDGamepad.reset();
    };
    // * Сбросить состояние кнопок
    KDGamepad.reset = function() {
      this.leftStick = {
        x: 0,
        y: 0
      };
      this.rightStick = {
        x: 0,
        y: 0
      };
      this.buttons = {};
      this.buttonsPressed = {};
      this.prevButtons = {};
    };
    
    // * Остановить учёт геймпада
    KDGamepad.stop = function() {
      KDGamepad.reset();
      KDGamepad.gamepad = null;
    };
    // * Функция проверки что нажата кнопка на геймпаде
    KDGamepad._buttonPressed = function(gamepad, index) {
      var b, e;
      try {
        if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
          return false;
        }
        b = gamepad.buttons[index];
        if (b == null) {
          return false;
        }
        if (typeof b === 'object') {
          // * Можно упростить
          return b.pressed;
        }
        return b === 1.0;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    // * Каждый кадр (обновление состояний)
    KDGamepad.update = function() {
      var e, gp, i, isDown, j, len, name, ref;
      if (!KDGamepad.isActive()) {
        return;
      }
      KDGamepad.refresh();
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        gp = KDGamepad.gamepad;
        ref = this.buttonNames;
        // * Проверка состояний кнопок
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          name = ref[i];
          this.buttons[name] = false;
          isDown = KDGamepad._buttonPressed(gp, i);
          if (isDown === true) {
            this.prevButtons[name] = true;
          } else {
            // * Срабатываение только при нажал - отпустил
            if (this.prevButtons[name] === true) {
              this.buttons[name] = true;
              this.prevButtons[name] = false;
            }
          }
        }
        // * Проверка стиков
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Обновить и проверить состояние Gamepad
    // * Надо каждый раз это вызывать
    KDGamepad.refresh = function() {
      var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
      try {
        isGamepadRefreshed = false;
        if (navigator.getGamepads) {
          gamepads = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          gamepads = navigator.webkitGetGamepads();
        }
        if (gamepads != null) {
          for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            gp = gamepads[i];
            if ((gp != null) && gp.mapping === 'standard') {
              isGamepadRefreshed = true;
              if (KDGamepad.buttonNames != null) {
                KDGamepad.gamepad = gp;
              } else {
                KDGamepad.init(gp);
              }
              break;
            }
          }
        }
        if (!isGamepadRefreshed) {
          // * Если не был найден не один gamepad - отключаем систему
          KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Любое нажатие кнопки
    KDGamepad.isKeyAny = function(name) {
      return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
    };
    // * Нажата ли кнопка (trigger нажал - отпустил)
    KDGamepad.isKey = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.buttons[name] === true;
    };
    // * Нажата ли кнопка (continues зажата)
    KDGamepad.isKeyPressed = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.prevButtons[name] === true;
    };
    KDGamepad.isDPadAny = function() {
      return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
    };
    KDGamepad.isActive = function() {
      return this._isActive === true;
    };
    // * Временно отключить обработку KDGamepad
    KDGamepad.setActive = function(_isActive) {
      this._isActive = _isActive;
      if (KDGamepad.isActive()) {
        KDGamepad.refresh();
      } else {
        KDGamepad.stop();
      }
    };
    // * Отключить перемещение игрока на DPad
    KDGamepad.setNoDPadMovingMode = function(_noDpadMoving) {
      this._noDpadMoving = _noDpadMoving;
    };
    return KDGamepad.isNoDPadMoving = function() {
      return this._noDpadMoving === true;
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var BitmapSrc;
  BitmapSrc = (function() {
    //?[DEPRECATED]
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          if (KDCore.isMV()) {
            pw = Window_Base._iconWidth;
            ph = Window_Base._iconHeight;
          } else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //@[EXTEND]
  return KDCore.BitmapSrc = BitmapSrc;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Changer;
  // * Класс который может плавно изменять какой-либо параметр
  // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new AA.Changer(someSprite)
  //@changer.change('opacity').from(255)
  //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
  //            .start().done(() -> console.log('done'))
  //@changer.update()

    // * -------------------------------------------------------------
  Changer = class Changer {
    constructor(obj) {
      this.obj = obj;
      // * Количество кадров, в которые будет обновление
      this._field = null; // * название поля
      this._speed = 1; // * frames
      this._step = 1; // * шаг изменения значения
      this._from = 0; // * Начальное значение
      this._to = 0; // * Конечное значение
      this._thread = null;
      this._orienation = true; // * Направление + или - step (true = +)
      this._delay = 0; // * Задержка старта
      this._changer = null; // * Ссылка на следующий changer
      this._isRepeat = false; // * Надо ли поторить себя снова
      this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
      this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
    }

    start() {
      if (this._field == null) {
        return;
      }
      if (this._from === this._to) {
        return;
      }
      if (this._delay > 0) {
        this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
        this._delayThread.once();
      } else {
        this._startThread();
      }
      return this;
    }

    isStarted() {
      return (this._thread != null) || (this._delayThread != null);
    }

    from(_from) {
      this._from = _from;
      return this;
    }

    to(_to) {
      this._to = _to;
      return this;
    }

    step(_step) {
      this._step = _step;
      return this;
    }

    speed(_speed) {
      this._speed = _speed;
      return this;
    }

    change(_field) {
      this._field = _field;
      return this;
    }

    // * Снова повторить (не совместим с then)
    // * Если ничего не указать, или <= 0 -> то бескончно
    repeat(_repeatCount = 0) {
      this._repeatCount = _repeatCount;
      if (this._repeatCount <= 0) {
        this._repeatCount = null;
      }
      this._isRepeat = true;
      this._changer = null;
      return this;
    }

    // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
    reverse() {
      this._isReverse = true;
      return this;
    }

    isDone() {
      if (!this._isPrepared) {
        // * Чтобы не было выхода пока ждёт Delay
        return false;
      }
      // * Если от 255 до 0 (например)
      if (this._orienation === false) {
        // * То может быть меньше нуля (т.к. @step динамический)
        return this.value() <= this._to;
      } else {
        return this.value() >= this._to;
      }
    }

    value() {
      return this.obj[this._field];
    }

    stop() {
      this._thread = null;
      this._delayThread = null;
      if (this._changer == null) {
        // * Если есть связанный Changer, то не выполняем метод завршения
        return this._callDoneMethod();
      }
    }

    // * При ожидании, значения устанавливаются не сразу
    delay(_delay) {
      this._delay = _delay;
      return this;
    }

    // * Выполнить другой Changer после этого
    // * Не совместим с Repeat
    // * НЕЛЬЗЯ зацикливать, не будет работать
    // * Соединённый не надо обновлять вне, он обновляется в этом
    then(_changer) {
      this._changer = _changer;
      this._isRepeat = false;
      return this;
    }

    // * Этот метод будт выполнене в конце
    done(_onDoneMethod) {
      this._onDoneMethod = _onDoneMethod;
      return this;
    }

    // * Шаг можно выполнить и в ручную
    makeStep() {
      if (!this.isStarted()) {
        this._prepare();
      }
      this._makeStep();
      return this;
    }

    update() {
      var ref;
      if (this.isStarted()) {
        if (this._delay > 0) {
          if ((ref = this._delayThread) != null) {
            ref.update();
          }
        }
        if (this._thread != null) {
          this._updateMainThread();
        }
      } else {
        // * Если хоть раз был запущен
        if (this._isBeenStarted === true) {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
        }
      }
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Changer.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Changer.prototype;
    _._prepare = function() {
      if (this._field == null) {
        return;
      }
      this._orienation = this._from < this._to;
      if (!this._orienation) {
        this._step *= -1;
      }
      // * Устанавливаем начальное значение
      this.obj[this._field] = this._from;
      this._isPrepared = true;
    };
    _._makeStep = function() {
      var value;
      if (this.isDone()) {
        return;
      }
      value = this.value();
      value += this._step;
      this.obj[this._field] = value;
    };
    _._startThread = function() {
      this._prepare();
      if (this.isDone()) {
        return;
      }
      this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
      return this._isBeenStarted = true;
    };
    _._updateChainedChanger = function() {
      if (this._changer.isStarted()) {
        this._changer.update();
        if (this._changer.isDone()) {
          this._callDoneMethod();
          this._changer.stop();
          return this._changer = null;
        }
      } else {
        return this._changer.start();
      }
    };
    _._restart = function() {
      if (!this._isCanRepeatMore()) {
        return;
      }
      if (this._repeatCount == null) {
        // * Если указано! число повторений, то onDone метод не вызываем
        this._callDoneMethod();
      }
      if (this._isReverse === true) {
        this._swapFromTo();
      }
      this._prepare();
      return this.start();
    };
    _._swapFromTo = function() {
      var t;
      t = this._from;
      this._from = this._to;
      this._to = t;
      // * Инвентируем число step
      this._step *= -1;
    };
    _._callDoneMethod = function() {
      if (this._onDoneMethod != null) {
        return this._onDoneMethod();
      }
    };
    _._isCanRepeatMore = function() {
      if (this._repeatCount == null) {
        return true;
      }
      this._repeatCount--;
      if (this._repeatCount <= 0) {
        this.stop();
        return false;
      }
      return true;
    };
    _._updateMainThread = function() {
      this._thread.update();
      if (this.isDone()) {
        if (this._isRepeat === true) {
          this._restart();
        } else {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
          this.stop();
        }
      }
    };
  })();
  // ■ END Changer.coffee
  //---------------------------------------------------------------------------

  //@[EXTEND]
  return KDCore.Changer = Changer;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color;
  Color = (function() {
    class Color {
      constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
        this.r = r1;
        this.g = g1;
        this.b = b1;
        this.a = a1;
      }

      getLightestColor(lightLevel) {
        var bf, newColor, p;
        bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
        p = 0;
        newColor = [0, 0, 0, 0];
        if (bf - lightLevel >= 0) {
          if (bf >= 0) {
            p = Math.abs(bf - lightLevel) / lightLevel;
          }
          newColor = this.ARR.map(function(c) {
            return c - (p * c);
          });
        } else {
          if (bf >= 0) {
            p = (lightLevel - bf) / (255 - bf);
          }
          newColor = this.ARR.map(function(c) {
            return [(255 - c) * p + c, 255].min();
          });
        }
        return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
      }

      clone() {
        return this.reAlpha(this.a);
      }

      reAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha || 255);
      }

      static AddConstantColor(name, color) {
        color.toHex();
        color.toArray();
        color.toCSS();
        KDCore.SDK.setConstantToObject(Color, name, color);
      }

      toHex() {
        var b, g, r;
        if (this._colorHex != null) {
          return this._colorHex;
        }
        r = Math.floor(this.r).toString(16).padZero(2);
        g = Math.floor(this.g).toString(16).padZero(2);
        b = Math.floor(this.b).toString(16).padZero(2);
        return this._colorHex = '#' + r + g + b;
      }

      toArray() {
        if (this._colorArray != null) {
          return this._colorArray;
        }
        return this._colorArray = [this.r, this.g, this.b, this.a];
      }

      toCSS() {
        var na, nb, ng, nr;
        if (this._colorCss != null) {
          return this._colorCss;
        }
        nr = Math.round(this.r);
        ng = Math.round(this.g);
        nb = Math.round(this.b);
        na = this.a / 255;
        return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
      }

      toNumber() {
        return Number(this.toHex().replace("#", "0x"));
      }

      static Random() {
        var a, b, c;
        a = KDCore.SDK.rand(1, 254);
        b = KDCore.SDK.rand(1, 254);
        c = KDCore.SDK.rand(1, 254);
        return new Color(a, b, c, 255);
      }

      static FromHex(hexString) {
        var color, result;
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        color = null;
        if (result != null) {
          color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        }
        if (color != null) {
          return new Color(color.r, color.g, color.b, 255);
        } else {
          return Color.NONE;
        }
      }

    };

    Object.defineProperties(Color.prototype, {
      R: {
        get: function() {
          return this.r;
        },
        configurable: true
      },
      G: {
        get: function() {
          return this.g;
        },
        configurable: true
      },
      B: {
        get: function() {
          return this.b;
        },
        configurable: true
      },
      A: {
        get: function() {
          return this.a;
        },
        configurable: true
      },
      ARR: {
        get: function() {
          return this.toArray();
        },
        configurable: true
      },
      CSS: {
        get: function() {
          return this.toCSS();
        },
        configurable: true
      },
      HEX: {
        get: function() {
          return this.toHex();
        },
        configurable: true
      },
      OX: {
        get: function() {
          return this.toNumber();
        },
        configurable: true
      }
    });

    Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

    Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

    Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

    Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

    Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

    Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

    Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

    Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

    Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

    Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

    return Color;

  }).call(this);
  //@[EXTEND]
  return KDCore.Color = Color;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color, DevLog, __TMP_LOGS__;
  Color = KDCore.Color;
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  //@[EXTEND]
  return KDCore.DevLog = DevLog;
});


// Generated by CoffeeScript 2.6.1
// * Класс для глобального события игры (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.GEvent = class GEvent {
    constructor(name) {
      this.name = name;
      this.clear();
    }

    addListener(listener, isSingle = false) {
      if (listener == null) {
        return;
      }
      if (isSingle === true) {
        this.listeners = [listener];
      } else {
        this.listeners.push(listener);
      }
    }

    removeListener(listener) {
      if (listener == null) {
        return;
      }
      return this.listener.delete(listener);
    }

    call() {
      var i, l, len, ref;
      ref = this.listeners;
      for (i = 0, len = ref.length; i < len; i++) {
        l = ref[i];
        l();
      }
    }

    clear() {
      return this.listeners = [];
    }

  };
});


// Generated by CoffeeScript 2.6.1
// * Менеджер для управления глобальными событиями игры (GEvent) (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  var GEventsManager;
  // * Данный менеджер глобальный, т.е. с ним работают ВСЕ плагины, которые его используют!
  GEventsManager = function() {};
  (function() {
    var _;
    _ = GEventsManager;
    // * Существует ли событие с данным именем
    _.isEventExists = function(gEventName) {
      return this._getEventByName(gEventName) != null;
    };
    // * Получить список всех зарегестрированных событий (имён)
    _.getAllEvents = function() {
      if (this.events == null) {
        return [];
      }
      return this.events.map(function(ev) {
        return ev.name;
      });
    };
    // * Зарегестрировать событие (используется только имя события)
    _.register = function(gEventName) {
      if (this.events == null) {
        this.events = [];
      }
      this.events.push(new KDCore.GEvent(gEventName));
    };
    // * Подписаться на событие (имя события) и слушатель
    // * если isSingle == true - то у события может быть только один исполнитель
    _.subscribeFor = function(evName, listener, isSingle = false) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.addListener(listener, isSingle) : void 0;
    };
    // * Подписаться на событие (уникально) для объекта
    // * Т.е. при вызове этого метода ещё раз, если объект
    // * уже подписан на событие, ничего не будет (без дубликатов)
    //? ВНИМАНИЕ ! Если объект подписался через subscribeForX, то
    // выполнив clear по данному evName, он уже не подпишится!
    _.subscribeForX = function(context, evName, listener) {
      var e, key;
      try {
        key = "__kdCoreGEvent_" + evName;
        if (context[key] == null) {
          this.subscribeFor(evName, listener);
          return context[key] = true;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Вызвать событие (по имени)
    _.call = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.call() : void 0;
    };
    _.clear = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.clear() : void 0;
    };
    _._getEventByName = function(name) {
      if (!this.events) {
        return null;
      }
      return this.events.find(function(ev) {
        return ev.name === name;
      });
    };
  })();
  //@[EXTEND]
  return KDCore.GEventsManager = GEventsManager;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  //?[DEPRECATED]
  return KDCore.ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (KDCore.SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getNumberFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getNumberFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getStringFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getStringFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getBoolean(name);
      });
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getNumber(name);
      });
    }

    getStringFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getString(name);
      });
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.ParamLoader = class ParamLoader {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
      this.params = this.parseParameters(this.paramsRaw);
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    // * Проверка, загружены ли параметры плагина
    isLoaded() {
      return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      return this.params[paramName] != null;
    }

    
      // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      if (this.isHasParameter(paramName)) {
        return this.params[paramName];
      } else {
        return def;
      }
    }

    // * Данные ключи должны идти после названия параметра через :
    // * Пример: @param ShowDelay:int, @param TestBool:bool
    // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
    parseParamItem(type, item) {
      var e;
      if (type == null) {
        return item;
      }
      try {
        switch (type) {
          case "int":
          case "i":
            return Number(item);
          case "intA": // * массив чисел
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("int", e);
              });
            } else {
              return [];
            }
            break;
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            if (String.any(item)) {
              return this.parseParameters(JsonEx.parse(item));
            } else {
              return null;
            }
            break;
          case "structA": // * массив структур
            return JsonEx.parse(item).map((e) => {
              return this.parseParameters(JsonEx.parse(e));
            });
          case "str":
            return item;
          case "strA":
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("str", e);
              });
            } else {
              return [];
            }
            break;
          case "note": // * если несколько строк в тексте
            try {
              return JsonEx.parse(item);
            } catch (error) {
              e = error;
              KDCore.warning(e);
              return item;
            }
            break;
          case "css":
            return item.toCss();
          case "color":
            return KDCore.Color.FromHex(item);
          default:
            return item;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return item;
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Point;
  Point = (function() {
    class Point {
      constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
      }

      clone() {
        return new Point(this._x, this._y);
      }

      toString() {
        return "[" + this._x + " ; " + this._y + "]";
      }

      isSame(anotherPoint) {
        return this.x === anotherPoint.x && this.y === anotherPoint.y;
      }

      convertToCanvas() {
        return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
      }

      convertToMap() {
        return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
      }

      convertToScreen() {
        return new Point(this.screenX(), this.screenY());
      }

      screenX() {
        var t, tw;
        t = $gameMap.adjustX(this._x);
        tw = $gameMap.tileWidth();
        return Math.round(t * tw + tw / 2);
      }

      screenY() {
        var t, th;
        t = $gameMap.adjustY(this._y);
        th = $gameMap.tileHeight();
        return Math.round(t * th + th);
      }

      round() {
        return new Point(Math.round(this._x), Math.round(this._y));
      }

      floor() {
        return new Point(Math.floor(this._x), Math.floor(this._y));
      }

      mapPointOnScreen() {
        var nx, ny;
        nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
        ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
        return new Point(nx, ny);
      }

      multiplyBy(val) {
        return new Point(this._x * val, this._y * val);
      }

      simple() {
        return new PIXI.Point(this.x, this.y);
      }

      delta(point) {
        var dx, dy;
        dx = point.x - this._x;
        dy = point.y - this._y;
        return new KDCore.Point(dx, dy);
      }

      static _getEmpty() {
        if (Point._emptyPoint == null) {
          Point._emptyPoint = new Point(0, 0);
        }
        return Point._emptyPoint;
      }

    };

    Object.defineProperties(Point.prototype, {
      x: {
        get: function() {
          return this._x;
        },
        configurable: true
      },
      y: {
        get: function() {
          return this._y;
        },
        configurable: true
      }
    });

    Object.defineProperties(Point, {
      Empty: {
        get: function() {
          return Point._getEmpty();
        },
        configurable: false
      }
    });

    Array.prototype.toPoint = function() {
      return new Point(this[0], this[1]);
    };

    Sprite.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    Game_CharacterBase.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    return Point;

  }).call(this);
  //@[EXTEND]
  return KDCore.Point = Point;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return KDCore.Sprite = (function(superClass) {
    //@[AUTO EXTEND]
    class Sprite extends superClass {
      constructor() {
        super(...arguments);
      }

      b() {
        return this.bitmap;
      }

      clear() {
        return this.bitmap.clear();
      }

      add(child) {
        return this.addChild(child);
      }

      bNew(w, h) {
        if (h == null) {
          h = w;
        }
        return this.bitmap = new Bitmap(w, h);
      }

      bImg(filename, sourceFolder) {
        var getterFunc;
        getterFunc = function(filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function(filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        return this.bitmap = getterFunc(filename);
      }

      onReady(method) {
        if (method != null) {
          return this.bitmap.addLoadListener(method);
        }
      }

      drawText() {
        return this.bitmap.drawText(...arguments);
      }

      drawTextFull(text, position = "center") {
        if (this.textSettingsPosition != null) {
          position = this.textSettingsPosition;
        }
        return this.bitmap.drawTextFull(text, position);
      }

      //?DEPRECATED
      drawTextWithSettings(text) {
        this.clear();
        this.drawTextFull(text, this.textSettingsPosition);
      }

      //? x, y, icon, size
      drawIcon() {
        return this.bitmap.drawIcon(...arguments);
      }

      moveByJson(settings) {
        var pos;
        pos = KDCore.Utils.getPositionPointFromJSON(settings);
        return this.move(pos.x, pos.y);
      }

      applyTextSettingsByJson(sprite, settings) {
        this.applyTextSettingsByExtraSettings(sprite, settings.text);
      }

      applyTextSettingsByExtraSettings(sprite, s) {
        sprite.move(s.marginX, s.marginY);
        sprite.b().fontSize = s.fontSize;
        sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
        sprite.b().outlineWidth = s.outlineWidth;
        if (s.outlineColor != null) {
          sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
        }
        if (s.fontFace != null) {
          sprite.b().fontFace = s.fontFace;
        }
        sprite.b().fontItalic = s.fontItalic;
        sprite.visible = s.visible;
      }

      isReady() {
        var i, j, ref;
        if (this.bitmap != null) {
          if (!this.bitmap.isReady()) {
            return false;
          }
        }
        for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          if (!this.children[i].bitmap.isReady()) {
            return false;
          }
        }
        return true;
      }

      inPosition(point) {
        return this.isContainsPoint(point);
      }

      isUnderMouse() {
        return this.inPosition(TouchInput);
      }

      // * Из параметров плагина
      applyFontParam(font) {
        var b;
        if (font == null) {
          return;
        }
        b = this.b();
        if (font.size != null) {
          b.fontSize = font.size;
        }
        if (!String.isNullOrEmpty(font.face)) {
          b.fontFace = font.face;
        }
        if (font.italic != null) {
          b.fontItalic = font.italic;
        }
      }

      applyOutlineParam(outline) {
        var b;
        if (outline == null) {
          return;
        }
        b = this.b();
        if (outline.width != null) {
          b.outlineWidth = outline.width;
        }
        if (!String.isNullOrEmpty(outline.color)) {
          b.outlineColor = outline.color;
        }
      }

      static FromImg(filename, sourceFolder) {
        var s;
        s = new KDCore.Sprite();
        s.bImg(filename, sourceFolder);
        return s;
      }

      static FromBitmap(w, h) {
        var s;
        s = new KDCore.Sprite();
        s.bNew(w, h);
        return s;
      }

      static FromTextSettings(settings) {
        var s;
        s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
        s.applyTextSettingsByExtraSettings(s, settings);
        s.textSettingsPosition = settings.position;
        return s;
      }

      // * Загрузчик из параметров плагина (безопасный)
      static FromParams(pluginParams) {
        var e, margins, s, size;
        try {
          size = pluginParams.size;
          s = KDCore.Sprite.FromBitmap(size.w, size.h);
          s.textSettingsPosition = pluginParams.alignment;
          margins = pluginParams.margins;
          if (margins != null) {
            s.move(margins.x, margins.y);
          }
          s.applyFontParam(pluginParams.font);
          s.applyOutlineParam(pluginParams.outline);
          if (!String.isNullOrEmpty(pluginParams.textColor)) {
            s.b().textColor = pluginParams.textColor;
          }
          if (pluginParams.visible != null) {
            s.visible = pluginParams.visible;
          }
          return s;
        } catch (error) {
          e = error;
          console.warn('Something wrong with Text Settings!', e);
          return KDCore.Sprite.FromBitmap(60, 30);
        }
      }

    };

    return Sprite;

  }).call(this, Sprite);
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.TimedUpdate = class TimedUpdate {
    constructor(interval, method) {
      this.interval = interval;
      this.method = method;
      this._timer = 0;
      this._once = false;
    }

    update() {
      if (this.interval == null) {
        return;
      }
      if (this._timer++ >= this.interval) {
        this.call();
        this._timer = 0;
        if (this._once === true) {
          return this.stop();
        }
      }
    }

    once() {
      return this._once = true;
    }

    onUpdate(method) {
      this.method = method;
    }

    stop() {
      return this.interval = null;
    }

    isAlive() {
      return this.interval != null;
    }

    // * Рандомизировать интервал @interval (-min, +max)
    applyTimeRange(min, max) {
      var value;
      if (!this.isAlive()) {
        return;
      }
      value = KDCore.SDK.rand(min, max);
      return this.interval += value;
    }

    call() {
      if (this.method != null) {
        return this.method();
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  
    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
  //?DEPRECATED
  return KDCore.Button = class Button extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
      return;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return this.visible === true;
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isEnabled() {
      return !this.isDisabled();
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    clearClickHandlers() {
      return this._clickHandlers = [];
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    simulateClick() { //?NEW
      return this.applyClickedState();
    }

    simulateClickManual() { //?NEW
      this.simulateClick();
      return setTimeout((() => {
        try {
          return this.applyNormalState();
        } catch (error) {

        }
      }), 50);
    }

    prepare() { //?NEW
      return this.slowUpdate();
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      this.refreshEnDisState();
      return this._mouseIn = false;
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    // * In MZ TouchInput always have X,Y
    cursorInButton() {
      return this.touchInButton();
    }

    xyInButton(x, y) {
      var inRect, rect, rx, ry;
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
      inRect = rect.contains(x, y);
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(x - rx, y - ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel >= 200;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new KDCore.Point(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warn('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warn('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      if (this._images != null) {
        this._images.forEach(function(img) {
          if (img != null) {
            return img.parent.removeChild(img);
          }
        });
      }
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        this.applyDisableState();
        return this._hideText();
      } else {
        if (this._mouseIn === false) {
          return this.applyNormalState();
        }
      }
    }

    //else
    //    do @applyCoverState
    updateComplexTextVisible() {}

    applyScale(mod) {
      var i, img, len, ref;
      ref = this._images;
      for (i = 0, len = ref.length; i < len; i++) {
        img = ref[i];
        if (img != null) {
          img.scale.x = mod;
          img.scale.y = mod;
        }
      }
    }

    static FromSet(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img0, img0);
      return button;
    }

    static FromSetFull(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1, img2, img3;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      img2 = getterFunc(imgName + "_02");
      img3 = getterFunc(imgName + "_03");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img2, img3);
      return button;
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroup;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
  Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
    // buttonsArray = [
    //       {image: NAME, position: [X,Y]}, ...
    //    ]
    constructor(buttonsArray, activeIndex, clickCallback) {
      var button, i, len;
      super();
      this.clickCallback = clickCallback;
      this._buttons = [];
      for (i = 0, len = buttonsArray.length; i < len; i++) {
        button = buttonsArray[i];
        this._createButton(button);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroup.prototype;
    _._createButton = function({image, position}) {
      var btn, index, method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      index = this._buttons.length;
      btn = new KDCore.ButtonM(image, true, "Alpha");
      btn.move(position);
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this._buttons.push(btn);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback();
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad((function() {
  var Sprite_TilingFrame;
  Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
    constructor(width, height, skinBitmap) {
      super();
      this.width = width;
      this.height = height;
      this.skinBitmap = skinBitmap;
      this._createParts();
      this._refreshAll();
    }

    _createParts() {
      var i, j;
      this.backSprite = new Sprite();
      this.addChild(this.backSprite);
      this.content = new Sprite();
      this.addChild(this.content);
      this._outFrame = new Sprite();
      for (i = j = 0; j < 8; i = ++j) {
        this._outFrame.addChild(new Sprite());
      }
      return this.addChild(this._outFrame);
    }

    // * Отступ, чтобы за рамку не выходить
    _fillPadding() {
      return 2;
    }

    // * Размер частей на картинке
    _fillImagePartWidth() {
      return 96;
    }

    _fillImagePartHeight() {
      return 96;
    }

    // * Толщина рамки
    _frameThickness() {
      return 12;
    }

    _refreshAll() {
      this._refreshBack();
      return this._refreshTFrame();
    }

    _refreshBack() {
      var fh, fw, h, m, sprite, w;
      m = this._fillPadding();
      w = Math.max(0, this.width - m * 2);
      h = Math.max(0, this.height - m * 2);
      sprite = this.backSprite;
      sprite.bitmap = this.skinBitmap;
      // * Координаты фона из картинки
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      sprite.setFrame(0, 0, fw, fh);
      sprite.move(m, m);
      sprite.scale.x = w / fw;
      return sprite.scale.y = h / fh;
    }

    _refreshTFrame() {
      var drect, fh, fw, j, len, m, ref, spr, srect;
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      // * Положение назначения
      drect = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
      // * Координаты рамки на картинке
      srect = {
        x: fw,
        y: 0,
        width: fw,
        height: fh
      };
      m = this._frameThickness(); // * Толщина
      ref = this._outFrame.children;
      for (j = 0, len = ref.length; j < len; j++) {
        spr = ref[j];
        spr.bitmap = this.skinBitmap;
      }
      if (KDCore.isMZ()) {
        Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
      } else {
        this._setRectPartsGeometry(this._outFrame, srect, drect, m);
      }
    }

    // * Этот метод существует в MZ, но нет в MV
    //? From MZ
    _setRectPartsGeometry(sprite, srect, drect, m) {
      var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
      sx = srect.x;
      sy = srect.y;
      sw = srect.width;
      sh = srect.height;
      dx = drect.x;
      dy = drect.y;
      dw = drect.width;
      dh = drect.height;
      smw = sw - m * 2;
      smh = sh - m * 2;
      dmw = dw - m * 2;
      dmh = dh - m * 2;
      children = sprite.children;
      sprite.setFrame(0, 0, dw, dh);
      sprite.move(dx, dy);
      // corner
      children[0].setFrame(sx, sy, m, m);
      children[1].setFrame(sx + sw - m, sy, m, m);
      children[2].setFrame(sx, sy + sw - m, m, m);
      children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
      children[0].move(0, 0);
      children[1].move(dw - m, 0);
      children[2].move(0, dh - m);
      children[3].move(dw - m, dh - m);
      // edge
      children[4].move(m, 0);
      children[5].move(m, dh - m);
      children[6].move(0, m);
      children[7].move(dw - m, m);
      children[4].setFrame(sx + m, sy, smw, m);
      children[5].setFrame(sx + m, sy + sw - m, smw, m);
      children[6].setFrame(sx, sy + m, m, smh);
      children[7].setFrame(sx + sw - m, sy + m, m, smh);
      children[4].scale.x = dmw / smw;
      children[5].scale.x = dmw / smw;
      children[6].scale.y = dmh / smh;
      children[7].scale.y = dmh / smh;
      // center
      if (children[8] != null) {
        children[8].setFrame(sx + m, sy + m, smw, smh);
        children[8].move(m, m);
        children[8].scale.x = dmw / smw;
        children[8].scale.y = dmh / smh;
      }
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        child.visible = dw > 0 && dh > 0;
      }
    }

  };
  return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
}));


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Window_ExtTextLineBase;
  // * Данное окно используется как основа для Sprite_UITextExt
  //rev 07.10.21
  Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
    constructor(rect, fontSettings) {
      super(rect);
      this.fontSettings = fontSettings;
      this.createContents();
      // * Всегда прозрачное окно
      this.setBackgroundType(2);
    }

    // * Нет отступов
    updatePadding() {
      return this.padding = 0;
    }

    // * Нет отступов
    itemPadding() {
      return 0;
    }

    textPadding() {
      return 0;
    }

    standardPadding() {
      return 0;
    }

    contentsWidth() {
      return this.width;
    }

    contentsHeight() {
      return this.height;
    }

    // * Более гибкая настройка размера текста при { }
    makeFontBigger() {
      return this.contents.fontSize += 1;
    }

    makeFontSmaller() {
      if (this.contents.fontSize > 1) {
        return this.contents.fontSize -= 1;
      }
    }

    // * Применение своих шрифта и размера текста
    resetFontSettings() {
      super.resetFontSettings();
      if (this.fontSettings == null) {
        return;
      }
      if (String.any(this.fontSettings.face)) {
        this.contents.fontFace = this.fontSettings.face;
      }
      if (this.fontSettings.size > 0) {
        this.contents.fontSize = this.fontSettings.size;
      }
      if (this.fontSettings.italic != null) {
        this.contents.fontItalic = this.fontSettings.italic;
      }
    }

  };
  return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button M
  //------------------------------------------------------------------------------
  //@[AUTO EXTEND]
  // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
  // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
  // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    // * Если isFull - true, значит нужен _03
  KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
    constructor(filename, isFull = false, sourceFolder = null) {
      super();
      this._bitmaps = [];
      this._disabled = false;
      this._isTriggered = false;
      // * Когда произошло нажатие на кнопку
      this._handler = null;
      this._isCanBeClicked = true;
      this._isManualHoverMode = false;
      this._isManualSelected = false;
      this._loadBitmaps(filename, isFull, sourceFolder);
      this._setImageState(0);
      this._createThread();
    }

    setManualHover() {
      return this._isManualHoverMode = true;
    }

    disableManualHover() {
      return this._isManualHoverMode = false;
    }

    setManualSelected(_isManualSelected) {
      this._isManualSelected = _isManualSelected;
    }

    enableClick() {
      return this._isCanBeClicked = true;
    }

    disableClick() {
      return this._isCanBeClicked = false;
    }

    desaturate() {
      this.filters = [new PIXI.filters.ColorMatrixFilter()];
      this.filters[0].desaturate();
    }

    isMouseIn() {
      if (this._isManualHoverMode === true) {
        return this._isManualSelected;
      } else {
        return this.isUnderMouse() && this.visible === true;
      }
    }

    isActive() {
      if (this._isCanBeClicked === false) {
        return false;
      }
      if (this.parent != null) {
        return this.parent.visible === true && this.visible === true;
      } else {
        return this.visible === true;
      }
    }

    isDisabled() {
      return this._disabled === true;
    }

    addClickHandler(_handler) {
      this._handler = _handler;
    }

    clearClickHandler() {
      return this._handler = null;
    }

    // * Воспроизводит визуальный эффект нажатия
    simulateClick() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.isMouseIn()) {
        return;
      }
      this._startSimulation();
    }

    isEnabled() {
      return !this.isDisabled();
    }

    refreshState(isEnable = true) {
      if (isEnable === true) {
        if (this.isDisabled()) {
          this.enable();
        }
      } else {
        if (this.isEnabled()) {
          this.disable();
        }
      }
    }

    disable() {
      this._disabled = true;
      return this._setImageState(2);
    }

    enable() {
      this._disabled = false;
      return this._setImageState(0);
    }

    click() {
      if (this._handler != null) {
        return this._handler();
      }
    }

    update() {
      super.update();
      return this._updateMain();
    }

  };
  return (function() {    
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ButtonM Implementation
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
    //@[DEFINES]
    _ = KDCore.ButtonM.prototype;
    _._loadBitmaps = function(filename, isFull = false, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(filename + '_00'));
      this._bitmaps.push(getterFunc(filename + '_01'));
      if (isFull) {
        this._bitmaps.push(getterFunc(filename + '_03'));
      }
    };
    _._getGetter = function(sourceFolder = null) {
      var getterFunc;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder !== null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
        };
      }
      return getterFunc;
    };
    _._setImageState = function(index = 0) {
      if (this._bitmaps[index] == null) {
        index = 0;
      }
      this.bitmap = this._bitmaps[index];
      this._lastState = index;
    };
    _._createThread = function() {
      this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
      this.hoverThread.applyTimeRange(-1, 1);
      this.hoverThread.call();
    };
    //?[DYNAMIC]
    _._updateMain = function() {
      this._updateMouseLogic();
      if (!this.isActive()) {
        if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
          return $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseLogic = function() {
      this.hoverThread.update();
      return this._updateMouseClick();
    };
    _._updateHover = function() {
      if (!this.isActive()) {
        return;
      }
      // * чтобы эффект нажатия не прекратить
      if (this._isTriggered === true) {
        return;
      }
      if (this.isMouseIn()) {
        if (this._lastState !== 1) {
          if (!this.isDisabled()) {
            this._setImageState(1);
          }
          $gameTemp.kdButtonUnderMouse = this;
        }
      } else {
        if (this._lastState !== 0) {
          if (!this.isDisabled()) {
            this._setImageState(0);
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        } else if ($gameTemp.kdButtonUnderMouse === this) {
          $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseClick = function() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.isMouseIn()) {
        this._isTriggered = true;
        this._setImageState(0);
      }
      if (this._isTriggered === true) {
        if (TouchInput.isReleased()) {
          this._isTriggered = false;
          if (this.isMouseIn()) {
            this.click();
          }
        }
      }
    };
    _._startSimulation = function() {
      this._setImageState(1);
      this._simulateThread = new KDCore.TimedUpdate(10, () => {
        return this._setImageState(0);
      });
      this._simulateThread.once();
      return this._updateMain = this._updateMouseClickSimulated;
    };
    _._updateMouseClickSimulated = function() {
      this._simulateThread.update();
      if (!this._simulateThread.isAlive()) {
        this._simulateThread = null;
        this._updateMain = this._updateMouseLogic;
      }
    };
    // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

    //@[ALIAS]
    alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
      if ($gameTemp.kdButtonUnderMouse != null) {
        return true;
      } else {
        return alias_SM_isAnyButtonPressed.call(this);
      }
    };
    //TODO: Добавить доп. проверку?
    //@[ALIAS]
    alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
      $gameTemp.kdButtonUnderMouse = null;
      setTimeout((function() {
        return $gameTemp.kdButtonUnderMouse = null;
      }), 50);
      return alias_SM_onMapLoaded.call(this);
    };
  })();
});

// ■ END ButtonM Implementation
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button Mini User - класс с определением файла каждого состояния отдельно
  // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
  // ? states = { main, hover, disabled }
  return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
    constructor() {
      super(...arguments);
    }

    //$[OVER]
    _loadBitmaps(states, isFull = true, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(states.main));
      this._bitmaps.push(getterFunc(states.hover));
      // * Optional 03
      if (String.any(states.disabled)) {
        this._bitmaps.push(getterFunc(states.disabled));
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_TilingLine;
  Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
    constructor() {
      super(...arguments);
    }

    //$[OVER BASE ALL BELOW]
    _fillPadding() {
      return 0;
    }

    _refreshTFrame() {} // * EMPTY

    _fillImagePartWidth() {
      return 4;
    }

    _fillImagePartHeight() {
      return 26;
    }

  };
  return KDCore.Sprite_TilingLine = Sprite_TilingLine;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Пространство имён для всех UIElements
  KDCore.UI = KDCore.UI || {};
  (function() {    // * Общий класс для всех UI элементов
    //?rev 13.10.20
    var Sprite_UIElement;
    Sprite_UIElement = (function() {
      // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
      //@[ABSTRACT]
      class Sprite_UIElement extends KDCore.Sprite {
        constructor(params) {
          super();
          this.params = params;
          this._init();
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true
          };
        }

        // * Общий метод (есть у всех элементов)
        // * По умолчанию вызывает drawText, но потомки могут переопределить
        draw() {
          return this.drawText(...arguments);
        }

        // * Общий метод
        drawText() {} // * EMPTY

        
          // * Если изначально невидимый (из параметров), то не активный вообще
        isActive() {
          return this.params.visible === true;
        }

        rootImageFolder() {
          return Sprite_UIElement.RootImageFolder;
        }

        // * Сделать чёрно белым
        desaturate() {
          this.filters = [new PIXI.filters.ColorMatrixFilter()];
          this.filters[0].desaturate();
        }

        // * Общий метод (можно ли редактировать визуально)
        isCanBeEdited() {
          return false;
        }

        // * Общий метод (надо ли скрывать при игровом сообщнии)
        isHaveHideWithMessageFlag() {
          return false;
        }

        // * Общий метод (находится ли объект под мышкой)
        isUnderMouse() {
          var ref;
          return (ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0;
        }

        // * Параметры первого элемента (если он есть)
        realWidth() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realWidth();
            } else {
              return child.width;
            }
          }
          return 0;
        }

        realHeight() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realHeight();
            } else {
              return child.height;
            }
          }
          return 0;
        }

        // * Первый "физический" элемент (спрайт)
        zeroChild() {
          return this.children[0];
        }

        // * Метод восстановления значения на стандартные настройки
        reset(property) {
          var e;
          try {
            switch (property) {
              case "position":
                this._resetPosition();
                break;
              default:
                this[property] = this.params[property];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

      };

      // * Корневая директория для изображений
      Sprite_UIElement.RootImageFolder = "Alpha";

      return Sprite_UIElement;

    }).call(this);
    KDCore.UI.Sprite_UIElement = Sprite_UIElement;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIElement.prototype;
    _._init = function() {
      var e;
      this._prepare();
      try {
        return this._createContent();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        // * Если при создании произошла ошибка, отключаем элемент
        return this.isActive = function() {
          return false;
        };
      }
    };
    
    // * Подготовка элемента (проверка параметров)
    _._prepare = function() {
      if (this.params == null) {
        this.params = this.defaultParams();
      }
      return this.visible = this.params.visible;
    };
    // * Наследники создают свои элементы в этом методе
    _._createContent = function() {}; // * EMPTY
    
    // * Сброс позиции
    _._resetPosition = function() {
      var e, x, y;
      if (this.params.position == null) {
        return;
      }
      try {
        ({x, y} = this.params.position);
        this.move(x, y);
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIButton;
    // * Кнопка на экране, можно нажимать
    Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "Button_Inventory",
          isHaveDisabled: true,
          click: "console.log('click')" // * число или код
        };
      }

      // * Кнопка не поддерживает перерисовку
      draw() {} // * EMPTY

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.enable() : void 0;
      }

      setState(isEnabled) {
        if (isEnabled) {
          return this.enable();
        } else {
          return this.disable();
        }
      }

      
        // * Просто вызов метода
      call() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      // * Вызов метода с симуляцией нажатия
      click() {
        var ref, ref1;
        if ((ref = this.button) != null) {
          ref.click();
        }
        return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
      }

    };
    KDCore.UI.Sprite_UIButton = Sprite_UIButton;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIButton.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.image.isEmpty()) {
        KDCore.warning('You try create Button without image');
        return;
      }
      this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
      this.add(this.button);
      return this._registerClickMethod();
    };
    _._registerClickMethod = function() {
      var commonEventId, e, method, ref, script;
      if (!String.any(this.params.click)) {
        return;
      }
      method = null;
      try {
        // * Если число, то значит общее событие
        if (isFinite(this.params.click)) {
          commonEventId = parseInt(this.params.click);
          if (commonEventId > 0) {
            method = function() {
              return $gameTemp.reserveCommonEvent(commonEventId);
            };
          }
        } else {
          // * Иначе скрипт
          script = this.params.click;
          method = function() {
            return eval(script);
          };
        }
        return this.button.addClickHandler(method);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Рисует лицо персонажа (из папки Faces)
    var Sprite_UIFace;
    Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          faceName: "Actor1",
          faceIndex: 0,
          mirror: false,
          size: 144
        };
      }

      draw() {
        return this.drawFace(...arguments);
      }

      drawFace(faceName, faceIndex) {
        return this._drawFaceWhenReady(faceName, faceIndex);
      }

    };
    KDCore.UI.Sprite_UIFace = Sprite_UIFace;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIFace.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createFaceSprite();
    };
    _._createFaceSprite = function() {
      this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
      if (this.params.mirror === true) {
        this._flipFaceSpr();
      }
      this.add(this._faceSpr);
      this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
    };
    _._flipFaceSpr = function() {
      this._faceSpr.scale.x = -1;
      this._faceSpr.x = this.params.size;
    };
    _._drawFaceWhenReady = function(name, index = 0) {
      var ref;
      if ((ref = this._faceSpr) != null) {
        ref.clear();
      }
      if (!String.any(name)) {
        return;
      }
      if (index < 0) {
        return;
      }
      this._drawOnReady = {name, index};
      this._faceSourceBitmap = ImageManager.loadFace(name);
      this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
      this._drawFace();
    };
    _._drawFace = function() {
      var fh, fw, size, sx, sy;
      if (this._faceSpr == null) {
        return;
      }
      this._faceSpr.clear();
      if (!String.any(this._drawOnReady.name)) {
        return;
      }
      fw = ImageManager.faceWidth;
      fh = ImageManager.faceHeight;
      size = this.params.size;
      sx = (this._drawOnReady.index % 4) * fw;
      sy = Math.floor(this._drawOnReady.index / 4) * fh;
      this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIGauge;
    Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          fill: "",
          foreground: "",
          mask: "",
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

      draw() {
        return this.drawGauge(...arguments);
      }

      drawGauge(percent = 1) {
        this._lastValue = percent;
        return this._drawGauge(percent);
      }

      isVertical() {
        return this.params.vertical === true;
      }

    };
    KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIGauge.prototype;
    //$[OVER]
    _._createContent = function() {
      // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
      return this._loadFillImage();
    };
    _._loadFillImage = function() {
      // * Главное изображение, поэтому если не указано, то ничего
      if (this.params.fill.isEmpty()) {
        KDCore.warning('You try create Gauge without fill image');
        return;
      }
      KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
    };
    // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
    _._createParts = function(fillBitmap) {
      this.fillBitmap = fillBitmap;
      this._createBackground();
      this._createFillLayer();
      this._loadForeground();
      this._loadMask();
      return this._onReady();
    };
    _._createBackground = function() {
      this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      this.background.b().fillAll(this.params.backColor);
      this.background.opacity = this.params.backOpacity;
      return this.add(this.background);
    };
    _._createFillLayer = function() {
      this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      return this.add(this.fillLayer);
    };
    _._loadForeground = function() {
      var fore;
      if (String.isNullOrEmpty(this.params.foreground)) {
        return;
      }
      fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
      return this.add(fore);
    };
    _._loadMask = function() {
      var mask;
      if (String.isNullOrEmpty(this.params.mask)) {
        return;
      }
      mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
      this.mask = mask;
      return this.add(mask);
    };
    // * Если что-то было до готовности, нарисовать
    _._onReady = function() {
      this.drawGauge(this._lastValue);
    };
    _._drawGauge = function(percent) {
      if (this.fillLayer == null) {
        return;
      }
      this.fillLayer.clear();
      if (this.isVertical()) {
        return this._drawVerGauge(percent);
      } else {
        return this._drawHorGauge(percent);
      }
    };
    _._drawHorGauge = function(percent) {
      var w;
      w = this.fillBitmap.width * percent;
      return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
    };
    _._drawVerGauge = function(percent) {
      var h, hy;
      h = this.fillBitmap.height * percent;
      hy = this.fillBitmap.height - h;
      this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIIcon;
    Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          index: 0,
          size: 32
        };
      }

      draw() {
        return this.drawIcon(...arguments);
      }

      drawIcon(index = 0) {
        this._lastValue = index;
        return this._drawIcon(index);
      }

    };
    KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIIcon.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createIcon();
      return this._drawIcon(this.params.index);
    };
    _._createIcon = function() {
      this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
      this.add(this._icon);
      return this._onReady();
    };
    _._onReady = function() {
      return this.drawIcon(this._lastValue);
    };
    _._drawIcon = function(index) {
      this._icon.clear();
      if (KDCore.SDK.isString(index)) {
        this._drawImageIcon(index);
      } else {
        if (index <= 0) {
          return;
        }
        this._icon.drawIcon(0, 0, index, this.params.size);
      }
    };
    _._drawImageIcon = function(imageName) {
      return KDCore.Utils.loadImageAsync(this.rootImageFolder(), imageName).then((bitmap) => {
        return this._icon.drawIcon(0, 0, bitmap, this.params.size);
      });
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIImage;
    Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: ""
        };
      }

      draw() {
        return this.drawImage(...arguments);
      }

      drawImage(image) {
        return this._drawImage(image);
      }

    };
    KDCore.UI.Sprite_UIImage = Sprite_UIImage;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIImage.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._drawImage(this.params.image);
    };
    _._drawImage = function(image) {
      this._clearImage();
      if (!String.isNullOrEmpty(image)) {
        this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
        this.add(this._image);
      }
    };
    _._clearImage = function() {
      if (this._image == null) {
        return;
      }
      this._image.visible = false;
      this.removeChild(this._image);
      return this._image = null;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIRect;
    Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          fillColor: "#FFFFFF".toCss(),
          fillOpacity: 255,
          borderColor: "#000000".toCss(),
          borderThickness: 1,
          borderOpacity: 255
        };
      }

      draw() {
        return this.fill(...arguments);
      }

      fill(color, opacity = 255) {
        return this._fill(color, opacity);
      }

      drawBorder(color, thickness = 1, opacity = 255) {
        return this._drawBorder(color, thickness, opacity);
      }

    };
    KDCore.UI.Sprite_UIRect = Sprite_UIRect;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIRect.prototype;
    //$[OVER]
    _._createContent = function() {
      if (String.any(this.params.fillColor)) {
        this._createFill();
        this.fill(this.params.fillColor, this.params.fillOpacity);
      }
      if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
        this._createBorder();
        return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
      }
    };
    _._createFill = function() {
      this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._fillSpr);
    };
    _._createBorder = function() {
      this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._borderSprite);
    };
    _._fill = function(color, opacity) {
      if (this._fillSpr == null) {
        return;
      }
      this._fillSpr.fillAll(color);
      this._fillSpr.opacity = opacity;
    };
    _._drawBorder = function(color, thickness, opacity) {
      var b;
      if (this._borderSprite == null) {
        return;
      }
      this._borderSprite.clear();
      b = this._borderSprite.b();
      // * Top line
      b.fillRect(0, 0, b.width, thickness, color);
      // * Bottom line
      b.fillRect(0, b.height - thickness, b.width, thickness, color);
      // * Left line
      b.fillRect(0, 0, thickness, b.height, color);
      // * Right line
      b.fillRect(b.width - thickness, 0, thickness, b.height, color);
      return this._borderSprite.opacity = opacity;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UIText;
    Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          alignment: "center",
          font: {
            face: null,
            size: 18,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF".toCss()
        };
      }

      //?DYNAMIC
      // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
      drawText(text) {
        return this._drawTextWhenReady(text);
      }

      // * Сборка текста с учётом формата
      drawTextWithFormat(/*format string, arguments parameters... */) {
        var text;
        text = this._convertFormatedString(...arguments);
        this.drawText(text);
      }

      // * Пишет текст с определённым цветом (один раз)
      drawTextColor(text, colorCss) {
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.b().textColor = colorCss;
        this.drawText(text);
        this._textSpr.b().textColor = this.params.textColor;
      }

    };
    KDCore.UI.Sprite_UIText = Sprite_UIText;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIText.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createTextSprite();
    };
    _._createTextSprite = function() {
      this._textSpr = KDCore.Sprite.FromParams(this.params);
      this._textSpr.onReady(this._onReady.bind(this));
      return this.add(this._textSpr);
    };
    // * Выполнить по готовности
    _._onReady = function() {
      // * Переключить метод, так как уже готов
      this.drawText = this._drawText;
      // * Написать то что нужно было до готовности (если есть)
      if (this._drawOnReady == null) {
        return;
      }
      this.drawText(this._drawOnReady);
      this._drawOnReady = null;
    };
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.clear();
      if (text != null) {
        this._textSpr.drawTextFull(text);
      }
    };
    // * Написать текст когда будет готов
    _._drawTextWhenReady = function(text) {
      this._drawOnReady = text;
      return this._drawText(text);
    };
    
    // * Заменить вхождения %1, %2 на значения параметров
    _._convertFormatedString = function(/*text, args...*/) {
      var e, i, j, ref, text;
      try {
        text = arguments[0];
        for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
          try {
            if (arguments[i] == null) {
              continue;
            }
            text = text.replace("%" + i, arguments[i]);
          } catch (error) {
            e = error;
            KDCore.warning(e);
            text = "[wrong format text input]";
          }
        }
        return text;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return "[wrong format text input]";
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UITextExt;
    Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 200,
            h: 60
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          // * новые параметры (KDCore 2.7)
          //?null могут быть
          singleLine: false,
          forceCentered: false
        };
      }

      //$[OVER]
      // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
      drawTextColor() {
        return this.drawText(...arguments);
      }

    };
    KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextExt.prototype;
    //$[OVER]
    _._createTextSprite = function() {
      var rect;
      rect = new Rectangle(0, 0, this.params.size.w, this.params.size.h);
      this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font);
      this._textSpr.x = this.params.margins.x || 0;
      this._textSpr.y = this.params.margins.y || 0;
      this.add(this._textSpr);
      // * На следующий кадр, чтобы не было потери текста (опасно)
      //setTimeout (=> @_onReady() ), 10
      this._onReady(); // * Сразу
    };
    
    //$[OVER]
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.contents.clear();
      if (this.params.forceCentered === true) {
        this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
      } else {
        if (this.params.singleLine === true) {
          this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
        } else {
          // * По умолчанию
          this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
        }
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UITextWithBack;
    Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          text: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#000000".toCss()
          },
          rect: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          },
          textMargins: {
            x: 0,
            y: 0
          }
        };
      }

      draw() {
        return this.drawText(...arguments);
      }

      // * Aргументы смотри в Sprite_UIText
      drawText() {
        return this.text.draw(...arguments);
      }

      drawTextColor() {
        return this.text.drawTextColor(...arguments);
      }

      // * Аргументы смотри в Sprite_UIRect
      fill() {
        return this.rect.fill(...arguments);
      }

      drawBorder() {
        return this.rect.drawBorder(...arguments);
      }

      //$[OVER]
      isUnderMouse() {
        return this.rect.isUnderMouse();
      }

    };
    KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextWithBack.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createRect();
      return this._createText();
    };
    _._createRect = function() {
      this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
      return this.addChild(this.rect);
    };
    _._createText = function() {
      var x, y;
      this.text = new KDCore.UI.Sprite_UIText(this.params.text);
      ({x, y} = this.params.textMargins);
      this.text.move(x, y);
      return this.addChild(this.text);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIColorGauge;
    Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 100,
            h: 40
          },
          fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
          foreground: "", // картинка
          mask: "", // картинка
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

    };
    KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIColorGauge.prototype;
    //$[OVER]
    // * Заместо изображения используем простой Bitmap с заливкой цвета
    _._loadFillImage = function() {
      var fillBitmap;
      fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
      fillBitmap.fillAll(this.params.fill);
      this._createParts(fillBitmap);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__processEscapeCharacter, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case 'CHEX':
        this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
        break;
      case 'ISZ':
        this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
        break;
      case 'PSZ':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
        break;
      case 'PSB':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
        break;
      default:
        ALIAS__processEscapeCharacter.call(this, code, textState);
    }
  };
  //?NEW
  _.pObtainEscapeParamHexColor = function(textState) {
    var arr, regExp, textPart;
    regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      return arr[1];
    } else {
      return "";
    }
  };
  //?NEW
  _.pObtainEscapeParamIconArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          return parseInt(i.trim());
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pObtainEscapeParamImgArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          if (isFinite(i)) {
            return parseInt(i.trim());
          } else {
            return i;
          }
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pProcessColorChangeHex = function(colorHex) {
    var e;
    try {
      this.changeTextColor(colorHex);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.resetTextColor();
    }
  };
  //?NEW
  //?params: [INDEX, SIZE, DX, DY]
  _.pProcessDrawIconSized = function(params, textState) {
    var dx, dy, e, iconIndex, size, staticMargin, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      size = params[1];
      if (params[1] == null) {
        size = ImageManager.iconWidth;
      }
      if (params[2] == null) {
        params[2] = 0;
      }
      if (params[3] == null) {
        params[3] = 0;
      }
      iconIndex = params[0];
      dx = params[2];
      dy = params[3];
      staticMargin = 2;
      x = textState.x + staticMargin + dx;
      y = textState.y + staticMargin + dy;
      // * Только в режиме рисования
      if (textState.drawing === true) {
        this.contents.drawIcon(x, y, iconIndex, size);
      }
      textState.x += size + (staticMargin * 2) + dx;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  //?NEW
  //?params: [NAME, W, H, DX, DY]
  _.pProcessDrawPictureSized = function(params, textState, isUnderText = false) {
    var drawBitmap, drawProcess, e, height, name, source, width, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      name = params[0];
      if (!String.any(name)) {
        return;
      }
      width = params[1];
      height = params[2];
      if (params[3] == null) {
        params[3] = 0;
      }
      if (params[4] == null) {
        params[4] = 0;
      }
      x = textState.x + 2 + params[3];
      y = textState.y + 2 + params[4];
      drawBitmap = this.contents;
      source = this.pGetSourceImageForDrawPictureSized(name);
      if (textState.drawing === true) {
        drawProcess = function() {
          var e;
          try {
            if (drawBitmap == null) {
              return;
            }
            return drawBitmap.drawOnMe(source, x, y, width, height);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        source.addLoadListener(drawProcess);
      }
      if (isUnderText !== true) {
        // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
        // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
        textState.x += width + 4 + params[3];
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
  return _.pGetSourceImageForDrawPictureSized = function(name) {
    return ImageManager.loadPicture(name);
  };
});


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var FloatingWindow;
  
    // * Общий класс для всех окон на карте
  /*parameters
      {
          draggable: true,
          closeButton: true,
          moveToCenter: true,
          alwaysOnTop: true,
          header: true
      }
  */
  FloatingWindow = class FloatingWindow extends KDCore.Sprite {
    constructor(mainParent, windowW, windowH, parameters) {
      super();
      this.mainParent = mainParent;
      this.windowW = windowW;
      this.windowH = windowH;
      this.parameters = parameters;
      this._init();
      return;
    }

    static StaticSettings() {
      return {
        draggable: false,
        closeButton: false,
        moveToCenter: false,
        alwaysOnTop: false,
        header: false
      };
    }

    // * Статическое окно с дочерним
    static StaticWindow(parent, sub) {
      var p, w;
      p = KDCore.FloatingWindow.StaticSettings();
      w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
      w.setSubWindow(sub);
      w.open();
      return w;
    }

    isActive() {
      return this.visible === true;
    }

    isReady() {
      return this._isReady === true;
    }

    isMouseIn() {
      return this.inPosition(TouchInput);
    }

    isOpen() {
      return this.isActive();
    }

    // * Дочернее окно (если есть)
    sub() {
      return this._subw;
    }

    setOnReadyHandler(_readyHandler) {
      this._readyHandler = _readyHandler;
      if ((this._readyHandler != null) && this._isReady === true) {
        return this._readyHandler();
      }
    }

    isDraggable() {
      return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
    }

    setCloseHandler(_closeHandler) {
      this._closeHandler = _closeHandler;
    }

    callCloseHandler() {
      if (this._closeHandler != null) {
        return this._closeHandler();
      }
    }

    setDraggingHandler(_dragHandler) {
      this._dragHandler = _dragHandler;
    }

    setDragEndHandler(_dragEndHandler) {
      this._dragEndHandler = _dragEndHandler;
    }

    hideHeader() {} //TODO:

    hideCloseButton() {} //TODO:

    
      // * Сдвиг заголовка по X, чтобы рамку не задевал
    headerMarginX() {
      return 2;
    }

    // * Сдвиг заголовка по Y, чтобы рамку не задевал
    headerMarginY() {
      return 0;
    }

    // * Стандартная позиция кнопки "закрыть"
    closeButtonPosition() {
      return {
        x: this.width - 24,
        y: 4
      };
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      this._open();
      this._afterOpen();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      this._close();
      this._afterClose();
    }

    rootImageFolder() {
      return "Alpha/Windows";
    }

    update() {
      super.update();
      this._updateMouseCheckThread();
      this._updateDragging();
    }

    // * Добавить спрайт на специальный слой контента
    addContent(sprite) {
      return this._contentLayer.addChild(sprite);
    }

    // * Добавить дочернее окно
    setSubWindow(w) {
      this._subw = w;
      this.addContent(w);
    }

    destroy() {
      this._close();
      return Sprite.prototype.destroy.call(this);
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = FloatingWindow.prototype;
    _._init = function() {
      var ref;
      // * Окно всегда закрыто
      this.visible = false;
      // * Контент прогрузился?
      this._isReady = false;
      this._applyParameters();
      if (this._isAlwaysOnTop === false) {
        // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
        if ((ref = this.mainParent) != null) {
          ref.addChild(this);
        }
      }
      this._initFloatingSystem();
      this._createLayers();
      this._loadWindowFrame();
    };
    // * Тут ничего не создавать, не двигать, так как
    // * конент создаётся Async, см. метод _createCustomElements
    _._applyParameters = function() {
      var p;
      this._applyDefaults();
      if (this.parameters == null) {
        return;
      }
      p = this.parameters;
      if (p.draggable != null) {
        this._isDraggable = p.draggable;
      }
      if (p.moveToCenter != null) {
        this._isMoveToCenter = p.moveToCenter;
      }
      if (p.header != null) {
        this._isHeaderVisible = p.header;
      }
      if (p.closeButton != null) {
        this._isHaveCloseButton = p.closeButton;
      }
      if (p.alwaysOnTop != null) {
        this._isAlwaysOnTop = p.alwaysOnTop;
      }
    };
    _._applyDefaults = function() {
      // * Окно можно перетаскивать мышкой (по умолчанию - да)
      this._isDraggable = true;
      this._isMoveToCenter = true;
      this._isHeaderVisible = true;
      this._isHaveCloseButton = true;
      this._isAlwaysOnTop = true;
    };
    _._initFloatingSystem = function() {
      if ($gameTemp._floatingWindows == null) {
        // * Создаём массив окон, он нужен для правильного
        // закрытия окон (по очереди) и перемещения drag and drop
        // с учётом верхнего окна
        $gameTemp._floatingWindows = [];
      }
      // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
      this._mouseIn = false;
      // * Тоже вспомогательная переменная
      this._dragging = false;
    };
    _._moveToStartPosition = function() {
      if (this._isMoveToCenter === true) {
        return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
      }
    };
    _._closeButtonClick = function() {
      // * При исчезании, кнопка не успевает себя "удалить"
      $gameTemp.kdButtonUnderMouse = null;
      this.callCloseHandler();
      return this.close();
    };
    (function() {      // * DRAGGING
      // -----------------------------------------------------------------------
      _._updateDragging = function() {
        if (!this.isDraggable()) {
          return;
        }
        // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
        // * Только если мышка не в окне и не двигали ранее, то не проверяем
        if (this._mouseIn === false && this._dragging === false) {
          return;
        }
        // * Если существует объект который сейчас dragging
        if ($gameTemp.pkdDraggableInstance != null) {
          // * Если этот объект не этот объект, то выходим из метода
          if ($gameTemp.pkdDraggableInstance !== this) {
            return;
          }
        }
        if (TouchInput.isLongPressed()) {
          if (this._dragging === false) {
            this._onDragStart();
          } else {
            this._onDragging();
          }
        } else {
          this._stopDragging();
        }
      };
      _._onDragStart = function() {
        // * Проверка, в области Header или нет
        if (!this._isMouseInHeader()) {
          return;
        }
        // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
        this.opacity = 200;
        this._deltaXY = this.getDeltaXY();
        this._dragging = true;
        // * Устанавливаем глобальную ссылку на объект перемещения
        $gameTemp.pkdDraggableInstance = this;
      };
      _.getDeltaXY = function() {
        var p;
        p = new KDCore.Point(this.x, this.y);
        return p.delta(TouchInput);
      };
      _._onDragging = function() {
        // * Защита от перетаскивания за края экрана
        if (!this._isNewMousePositionOnScreen()) {
          return;
        }
        this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
        if (this._dragHandler != null) {
          return this._dragHandler();
        }
      };
      _._stopDragging = function() {
        if (this._dragging === true) {
          this._dragging = false;
          this.opacity = 255;
          this._clearDraggableGlocalInstance();
          if (this._dragEndHandler != null) {
            this._dragEndHandler();
          }
        }
      };
      // * Освобождаем глобальную ссылку
      _._clearDraggableGlocalInstance = function() {
        if ($gameTemp.pkdDraggableInstance === this) {
          return $gameTemp.pkdDraggableInstance = null;
        }
      };
      _._isMouseInHeader = function() {
        if (this._headerSpr == null) {
          return false;
        }
        return this._headerSpr.isContainsPoint(TouchInput);
      };
      _._isNewMousePositionOnScreen = function() {
        return KDCore.Utils.isPointInScreen(TouchInput, 10);
      };
    })();
    (function() {      // -----------------------------------------------------------------------

      // * CREATE ELEMENTS
      // -----------------------------------------------------------------------
      
      // * Слои нужны, так как изображения загружаються асинхронно
      _._createLayers = function() {
        this._mainLayer = new Sprite();
        this._contentLayer = new Sprite();
        this._headerLayer = new Sprite();
        this._closeButtonLayer = new Sprite();
        this.addChild(this._mainLayer);
        this.addChild(this._contentLayer);
        this.addChild(this._headerLayer);
        this.addChild(this._closeButtonLayer);
      };
      _._loadWindowFrame = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
      };
      _._createWindow = function(frameImage) {
        this.bitmap = new Bitmap(this.windowW, this.windowH);
        this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
        this._mainLayer.addChild(this.wFrame);
        this._createParts();
      };
      _._createParts = function() {
        this._loadHeader();
        if (this._isHaveCloseButton === true) {
          this._createCloseButton();
        }
        this._moveToStartPosition();
        this._createCustomElements();
        // * Окно готово
        this._isReady = true;
        if (this._readyHandler != null) {
          this._readyHandler();
        }
      };
      _._loadHeader = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
      };
      _._createHeader = function(headerLineImage) {
        var w;
        w = this.windowW - (this.headerMarginX() * 2);
        this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
        this._headerSpr.x = this.headerMarginX();
        this._headerSpr.y = this.headerMarginY();
        this._headerLayer.addChild(this._headerSpr);
        if (this._isHeaderVisible === true) {
          // * Сдвигаем контент, чтобы было начало под заголовком
          this._contentLayer.y += headerLineImage.height + this.headerMarginY();
        } else {
          this._headerSpr.visible = false;
        }
      };
      _._createCloseButton = function() {
        this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
        this._closeButtonLayer.addChild(this._closeButton);
        this._closeButton.move(this.closeButtonPosition());
        this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
      };
      // * Наследники создают свои элементы в этом методе
      // * Есть специальный метод addContent()
      _._createCustomElements = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * MOUSE
      // -----------------------------------------------------------------------
      
      // * Определение если мышка в области окна
      //TODO: Есть проблема при открытии окна сразу под курсором
      _._registerMouseInOut = function() {
        if (!this.isOpen()) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._mouseIn === false) {
            this._mouseIn = true;
            this._onMouseIn();
          }
        } else {
          if (this._mouseIn === true) {
            this._mouseIn = false;
            this._onMouseOut();
          }
        }
      };
      // * Используется похожая система что и в KDCore.ButtonM
      _._onMouseIn = function() {
        return $gameTemp.floatingWindowUnderMouse = this;
      };
      _._onMouseOut = function() {
        if ($gameTemp.floatingWindowUnderMouse === this) {
          return $gameTemp.floatingWindowUnderMouse = null;
        }
      };
      // * Будем проверять мышка ли в окне только при открытом окне
      _._createMouseCheckThread = function() {
        this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
        this._updateMouseCheckThread = () => {
          return this._mouseCheckThread.update();
        };
        return this._mouseCheckThread.call();
      };
      // * Когда окно закрывается, никаких проверок, обнуляем метод
      _._destroyMouseCheckThread = function() {
        this._mouseCheckThread = null;
        return this._updateMouseCheckThread = function() {};
      };
      //?DYNAMIC
      _._updateMouseCheckThread = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * OPEN OR CLOSE
      // -----------------------------------------------------------------------
      _._open = function() {
        var ref;
        this.visible = true;
        $gameTemp._floatingWindows.push(this);
        if (this._isAlwaysOnTop === true) {
          // * Окно, которое открывается, всегда снова выше остальных (опция)
          if ((ref = this.mainParent) != null) {
            ref.addChild(this);
          }
        }
        return this._createMouseCheckThread();
      };
      _._afterOpen = function() {}; // * EMPTY
      _._close = function() {
        this.visible = false;
        if (this._isAlwaysOnTop === true) {
          this.removeFromParent();
        }
        this._clearDraggableGlocalInstance();
        $gameTemp._floatingWindows.delete(this);
        this._onMouseOut();
        return this._destroyMouseCheckThread();
      };
      _._afterClose = function() {}; // * EMPTY
    })();
  })();
  (function() {    // ■ END PRIVATE.coffee
    //---------------------------------------------------------------------------

    // * Если окно под курсором, нельзя нажимать на карте для движения игрока
    // -----------------------------------------------------------------------
    (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;
      
      //@[DEFINES]
      _ = Scene_Map.prototype;
      if (KDCore.isMZ()) {
        //@[ALIAS]
        ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
        _.isAnyButtonPressed = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return true;
          } else {
            return ALIAS__isAnyButtonPressed.call(this);
          }
        };
      } else {
        //@[ALIAS]
        ALIAS__processMapTouch = _.processMapTouch;
        _.processMapTouch = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return;
          }
          return ALIAS__processMapTouch.call(this);
        };
      }
    })();
  })();
  //@[EXTEND]
  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------
  return KDCore.FloatingWindow = FloatingWindow;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var HUI;
  // * Html UI Manager
  // * Набор инструментов для работы с HTML элементами интерфейса
  HUI = function() {};
  (function() {
    var _;
    //@[DEFINES]
    _ = HUI;
    _.init = function() {
      // * Данный набор инструментов могут использовать многие плагины, поэтому проверка
      if (this.isInited()) {
        return;
      }
      this._createMainParentInHtml();
      this._extendGraphicsClass();
      this.refresh();
    };
    // * Был ли создан (инициализирован) основной элемент
    _.isInited = function() {
      return this.parent() != null;
    };
    // * Основной элемент родитель для всех элементов UI
    _.parent = function() {
      return this._parent;
    };
    _.refresh = function() {
      if (!this.isInited()) {
        return;
      }
      Graphics._centerElement(this._parent);
      this._parent.style.zIndex = 2;
      this._parent.style.width = Graphics._canvas.style.width;
      this._parent.style.height = Graphics._canvas.style.height;
    };
    _.addCSS = function(name, folder = "css") {
      var head;
      if (!this.isInited()) {
        this.init();
      }
      head = document.getElementsByTagName("head")[0];
      if (head != null) {
        head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"$0/$1.css\" />".replace("$0", folder).replace("$1", name));
      }
    };
    _.addElement = function(id, html, classes = null) {
      var cls, element, i, len;
      if (!this.isInited()) {
        this.init();
      }
      element = document.createElement("div");
      element.id = id;
      element.innerHTML = html;
      if (classes != null) {
        for (i = 0, len = classes.length; i < len; i++) {
          cls = classes[i];
          element.classList.add(cls);
        }
      }
      this._parent.appendChild(element);
      return element;
    };
    // * Может быть NULL
    _.getElement = function(id) {
      return document.getElementById(id);
    };
    _.removeElement = function(element) {
      if (element == null) {
        return;
      }
      if (KDCore.SDK.isString(element)) {
        this.removeElementById(element);
      } else {
        this.removeElementById(element.id);
      }
    };
    _.removeElementById = function(elementId) {
      var element;
      if (!this.isInited()) {
        return;
      }
      element = this.getElement(elementId);
      if (element != null) {
        this._parent.removeChild(element);
      }
    };
    // * PRIVATE ------------------------------------------------------------------
    _._createMainParentInHtml = function() {
      this._parent = document.createElement("div");
      this._parent.id = "KDCoreMain";
      document.body.appendChild(this._parent);
    };
    _._extendGraphicsClass = function() {
      var ALIAS___updateCanvas;
      //@[ALIAS]
      ALIAS___updateCanvas = Graphics._updateCanvas;
      Graphics._updateCanvas = function() {
        ALIAS___updateCanvas.call(this);
        return KDCore.HUI.refresh();
      };
    };
  })();
  //@[EXTEND]
  return KDCore.HUI = HUI;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
  // * Right mouse pressed
  // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

  //@[DEFINES]
  _ = TouchInput;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    this._kdMousePressed2 = false;
    this._kdPressedTime2 = 0;
  };
  //@[ALIAS]
  ALIAS___onRightButtonDown = _._onRightButtonDown;
  _._onRightButtonDown = function(event) {
    var check;
    ALIAS___onRightButtonDown.call(this, event);
    // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
    if (KDCore.isMZ()) {
      check = this._newState.cancelled === true;
    } else {
      check = this._events.cancelled === true;
    }
    if (check === true) {
      this._kdMousePressed2 = true;
      this._kdPressedTime2 = 0;
    }
  };
  //@[ALIAS]
  ALIAS___onMouseUp = _._onMouseUp;
  _._onMouseUp = function(event) {
    ALIAS___onMouseUp.call(this, event);
    if (event.button === 2) {
      this._kdMousePressed2 = false;
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.kdIsPressed2()) {
      return this._kdPressedTime2++;
    }
  };
  //?[NEW]
  return _.kdIsPressed2 = function() {
    return this._kdMousePressed2 === true;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Методы из RPG Maker MZ которых нет в RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Scene_Base.prototype;
    _.calcWindowHeight = function(numLines, selectable) {
      if (selectable === true) {
        return Window_Selectable.prototype.fittingHeight(numLines);
      } else {
        return Window_Base.prototype.fittingHeight(numLines);
      }
    };
  })();
  (function() {    // ■ END Scene_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    _.itemLineRect = function(index) {
      return this.itemRect(index);
    };
  })();
  (function() {    // ■ END Window_Selectable.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    // * Чтоб можно было Rectangle принимать в конструктор
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(x, y, w, h) {
      if (x instanceof PIXI.Rectangle || x instanceof Rectangle) {
        return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
      } else {
        return ALIAS__initialize.call(this, ...arguments);
      }
    };
    
    // * В MZ используется FS для изменения размера шрифта в тексте
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function(code, textState) {
      if (code === "FS") {
        this.contents.fontSize = this.obtainEscapeParam(textState);
      } else {
        ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
  })();
  (function() {    // ■ END Window_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Spriteset_Map.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Spriteset_Map.prototype;
    _.findTargetSprite = function(target) {
      return this._characterSprites.find(function(sprite) {
        return sprite.checkCharacter(target);
      });
    };
  })();
  return (function() {    // ■ END Spriteset_Map.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Sprite_Character.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Sprite_Character.prototype;
    _.checkCharacter = function(character) {
      return this._character === character;
    };
  })();
});

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_SM_processMapTouch, alias_TIOMM;
  //?SMouse better alternative
  if (KDCore.isMZ()) {
    return;
  }
  // * Для ButtonM
  //@[ALIAS]
  alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function() {
    if ($gameTemp.kdButtonUnderMouse != null) {
      if ($gameTemp.kdButtonUnderMouse.parent == null) {
        return $gameTemp.kdButtonUnderMouse = null;
      } else {

      }
    } else {
      return alias_SM_processMapTouch.call(this);
    }
  };
  //@[ALIAS]
  alias_TIOMM = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function(event) {
    var x, y;
    alias_TIOMM.call(this, event);
    x = Graphics.pageToCanvasX(event.pageX);
    y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
      return this._onHover(x, y);
    }
  };
  
  //?NEW, from MZ
  return TouchInput._onHover = function(_x, _y) {
    this._x = _x;
    this._y = _y;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__clear, ALIAS__update, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    return this._virtualButton = null;
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this._virtualButton == null) {
      return;
    }
    this._latestButton = this._virtualButton;
    this._pressedTime = 0;
    return this._virtualButton = null;
  };
  return _.virtualClick = function(buttonName) {
    return this._virtualButton = buttonName;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___startLoading, _;
  // * В версии RPG Maker MZ 1.5.0 появился баг что картинки не успевают прогрузится
  // * Данный фикс, возвращает старое поведение
  if (!KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Bitmap.prototype;
  //@[ALIAS]
  ALIAS___startLoading = _._startLoading;
  return _._startLoading = function() {
    if (Utils.hasEncryptedImages()) {
      ALIAS___startLoading.call(this, ...arguments);
    } else {
      // * Это из RPG Maker MZ до версии 1.5
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_WBDTEX_KDCore29122021;
  // * <center>, для RPG Maker MZ и если нету Visu Message Core
  if (KDCore.isMZ()) {
    alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
      var e, newText;
      try {
        if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
          if (String.any(text) && text.contains("<center>")) {
            if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
              newText = text.replace("<center>", "");
              this.drawTextExInCenter(newText, x, y, width);
              return;
            }
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      alias_WBDTEX_KDCore29122021.call(this, ...arguments);
    };
  }
  //?NEW
  Window_Base.prototype.drawTextExInCenter = function(text, x, y, width, height) {
    var e, newX, newY, textSize;
    try {
      if (KDCore.isMV()) { // * В MV нет поддержки данного метода
        this.drawTextEx(...arguments);
        return;
      }
      textSize = this.textSizeEx(text);
      newX = x + width / 2 - textSize.width / 2;
      if ((height != null) && height > 0) {
        newY = y + height / 2 - textSize.height / 2;
      } else {
        newY = y;
      }
      this.drawTextEx(text, newX, newY, width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.drawTextEx(text, x, y, width);
    }
  };
  //?NEW
  Window_Base.prototype.drawTextExWithWordWrap = function(text, x, y, width, maxLines) {
    var maxWidth, wrappedText;
    maxWidth = this.contentsWidth();
    wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
    this.drawTextEx(wrappedText, x, y, width);
  };
  //?NEW
  return Window_Message.prototype.pWordWrap = function(text, maxWidth, maxLines) {
    var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
    lines = text.split('\n');
    maxWidth = maxWidth;
    spaceWidth = this.contents.measureTextWidth(' ');
    result = '';
    newLines = 1;
    for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      spaceLeft = maxWidth;
      line = lines[i];
      words = line.split(' ');
      for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
        wordWidth = this.contents.measureTextWidth(words[j]);
        wordWidthWithSpace = wordWidth + spaceWidth;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            if (maxLines === newLines) {
              return result;
            }
            result += '\n';
            newLines++;
          }
          result += words[j];
          spaceLeft = maxWidth - wordWidth;
          if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
            spaceLeft += 200;
          }
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
});


// Generated by CoffeeScript 2.6.1
// * Последний файл (после всех классов)
// * Загружает библиотеки
var i, len, lib, ref, text;

if (KDCore._requireLoadLibrary === true) {
  ref = KDCore[KDCore._loader];
  for (i = 0, len = ref.length; i < len; i++) {
    lib = ref[i];
    lib();
  }
  KDCore[KDCore._loader] = [];
  text = "%c  KDCore is loaded " + KDCore.Version;
  console.log(text, 'background: #222; color: #82b2ff');
}

// ==========================================================================
// ==========================================================================

//   END OF PLUGINS CORE LIBRARY
//   (Next code is this plugin code)

// ==========================================================================
// ==========================================================================

//Plugin KDCore builded by PKD PluginBuilder 2.1 - 21.06.2022

(function () {

    ANET.getNetChatTimeNow = function() {
        date = new Date();

        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();

        return `${h.slice(-2)}:${m.slice(-2)}`;
    };
    

    ANET.getNetLobbyChatNewMessageCode = function (who, text, time, side) {
        return `
            <div class="msg ${side}-msg">
            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">${who}</div>
                <div class="msg-info-time">${time}</div>
                </div>
                <div class="msg-text">${text}</div>
            </div>
            </div>
        `;
    };

})();

(function(){
    
    ANET.registerMVPluginCommands = function() {
        //@[ALIAS]
        var _Game_Interpreter_pluginCommand_ANET = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand_ANET.call(this, command, args);
            if (command === 'SetSharedBattle') {
                try {
                    this.nSetSharedBattle(args[0]);
                } catch (e) {
                    console.warn(e);
                }
            }
        };
    };

})();

ANET.isPro = function() {
    return true;
};

var Notyf = function () {
    "use strict";
    var n, t, o = function () {
            return (o = Object.assign || function (t) {
                for (var i, e = 1, n = arguments.length; e < n; e++)
                    for (var o in i = arguments[e]) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
                return t
            }).apply(this, arguments)
        },
        s = (i.prototype.on = function (t, i) {
            var e = this.listeners[t] || [];
            this.listeners[t] = e.concat([i])
        }, i.prototype.triggerEvent = function (t, i) {
            var e = this;
            (this.listeners[t] || []).forEach(function (t) {
                return t({
                    target: e,
                    event: i
                })
            })
        }, i);

    function i(t) {
        this.options = t, this.listeners = {}
    }(t = n = n || {})[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove";
    var v, e, a = (r.prototype.push = function (t) {
        this.notifications.push(t), this.updateFn(t, n.Add, this.notifications)
    }, r.prototype.splice = function (t, i) {
        var e = this.notifications.splice(t, i)[0];
        return this.updateFn(e, n.Remove, this.notifications), e
    }, r.prototype.indexOf = function (t) {
        return this.notifications.indexOf(t)
    }, r.prototype.onUpdate = function (t) {
        this.updateFn = t
    }, r);

    function r() {
        this.notifications = []
    }(e = v = v || {}).Dismiss = "dismiss";
    var c = {
            types: [{
                type: "success",
                className: "notyf__toast--success",
                backgroundColor: "#3dc763",
                icon: {
                    className: "notyf__icon--success",
                    tagName: "i"
                }
            }, {
                type: "error",
                className: "notyf__toast--error",
                backgroundColor: "#ed3d3d",
                icon: {
                    className: "notyf__icon--error",
                    tagName: "i"
                }
            }],
            duration: 2e3,
            ripple: !0,
            position: {
                x: "right",
                y: "bottom"
            },
            dismissible: !(e.Click = "click")
        },
        p = (d.prototype.on = function (t, i) {
            var e;
            this.events = o(o({}, this.events), ((e = {})[t] = i, e))
        }, d.prototype.update = function (t, i) {
            i === n.Add ? this.addNotification(t) : i === n.Remove && this.removeNotification(t)
        }, d.prototype.removeNotification = function (t) {
            var i, e, n = this,
                o = this._popRenderedNotification(t);
            o && ((e = o.node).classList.add("notyf__toast--disappear"), e.addEventListener(this.animationEndEventName, i = function (t) {
                t.target === e && (e.removeEventListener(n.animationEndEventName, i), n.container.removeChild(e))
            }))
        }, d.prototype.addNotification = function (t) {
            var i = this._renderNotification(t);
            this.notifications.push({
                notification: t,
                node: i
            }), this._announce(t.options.message || "Notification")
        }, d.prototype._renderNotification = function (t) {
            var i, e = this._buildNotificationCard(t),
                n = t.options.className;
            return n && (i = e.classList).add.apply(i, n.split(" ")), this.container.appendChild(e), e
        }, d.prototype._popRenderedNotification = function (t) {
            for (var i = -1, e = 0; e < this.notifications.length && i < 0; e++) this.notifications[e].notification === t && (i = e);
            if (-1 !== i) return this.notifications.splice(i, 1)[0]
        }, d.prototype.getXPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.x) || "right"
        }, d.prototype.getYPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.y) || "bottom"
        }, d.prototype.adjustContainerAlignment = function (t) {
            var i = this.X_POSITION_FLEX_MAP[this.getXPosition(t)],
                e = this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],
                n = this.container.style;
            n.setProperty("justify-content", e), n.setProperty("align-items", i)
        }, d.prototype._buildNotificationCard = function (n) {
            var t, o = this,
                i = n.options,
                e = i.icon;
            this.adjustContainerAlignment(i);
            var s = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__toast"
                }),
                a = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__ripple"
                }),
                r = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__wrapper"
                }),
                c = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__message"
                });
            c.innerHTML = i.message || "";
            var p, d, l, u, f, h = i.background || i.backgroundColor;
            e && "object" == typeof e && (p = this._createHTLMElement({
                tagName: "div",
                className: "notyf__icon"
            }), d = this._createHTLMElement({
                tagName: e.tagName || "i",
                className: e.className,
                text: e.text
            }), (l = null !== (t = e.color) && void 0 !== t ? t : h) && (d.style.color = l), p.appendChild(d), r.appendChild(p)), r.appendChild(c), s.appendChild(r), h && (i.ripple ? (a.style.background = h, s.appendChild(a)) : s.style.background = h), i.dismissible && (u = this._createHTLMElement({
                tagName: "div",
                className: "notyf__dismiss"
            }), f = this._createHTLMElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            }), u.appendChild(f), r.appendChild(u), s.classList.add("notyf__toast--dismissible"), f.addEventListener("click", function (t) {
                var i, e;
                null !== (e = (i = o.events)[v.Dismiss]) && void 0 !== e && e.call(i, {
                    target: n,
                    event: t
                }), t.stopPropagation()
            })), s.addEventListener("click", function (t) {
                var i, e;
                return null === (e = (i = o.events)[v.Click]) || void 0 === e ? void 0 : e.call(i, {
                    target: n,
                    event: t
                })
            });
            var m = "top" === this.getYPosition(i) ? "upper" : "lower";
            return s.classList.add("notyf__toast--" + m), s
        }, d.prototype._createHTLMElement = function (t) {
            var i = t.tagName,
                e = t.className,
                n = t.text,
                o = document.createElement(i);
            return e && (o.className = e), o.textContent = n || null, o
        }, d.prototype._createA11yContainer = function () {
            var t = this._createHTLMElement({
                tagName: "div",
                className: "notyf-announcer"
            });
            t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.width = "1px", t.style.outline = "0", document.body.appendChild(t), this.a11yContainer = t
        }, d.prototype._announce = function (t) {
            var i = this;
            this.a11yContainer.textContent = "", setTimeout(function () {
                i.a11yContainer.textContent = t
            }, 100)
        }, d.prototype._getAnimationEndEventName = function () {
            var t, i = document.createElement("_fake"),
                e = {
                    MozTransition: "animationend",
                    OTransition: "oAnimationEnd",
                    WebkitTransition: "webkitAnimationEnd",
                    transition: "animationend"
                };
            for (t in e)
                if (void 0 !== i.style[t]) return e[t];
            return "animationend"
        }, d);

    function d() {
        this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        }, this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        var t = document.createDocumentFragment(),
            i = this._createHTLMElement({
                tagName: "div",
                className: "notyf"
            });
        t.appendChild(i), document.body.appendChild(t), this.container = i, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer()
    }

    function l(t) {
        var n = this;
        this.dismiss = this._removeNotification, this.notifications = new a, this.view = new p;
        var i = this.registerTypes(t);
        this.options = o(o({}, c), t), this.options.types = i, this.notifications.onUpdate(function (t, i) {
            return n.view.update(t, i)
        }), this.view.on(v.Dismiss, function (t) {
            var i = t.target,
                e = t.event;
            n._removeNotification(i), i.triggerEvent(v.Dismiss, e)
        }), this.view.on(v.Click, function (t) {
            var i = t.target,
                e = t.event;
            return i.triggerEvent(v.Click, e)
        })
    }
    return l.prototype.error = function (t) {
        var i = this.normalizeOptions("error", t);
        return this.open(i)
    }, l.prototype.success = function (t) {
        var i = this.normalizeOptions("success", t);
        return this.open(i)
    }, l.prototype.open = function (i) {
        var t = this.options.types.find(function (t) {
                return t.type === i.type
            }) || {},
            e = o(o({}, t), i);
        this.assignProps(["ripple", "position", "dismissible"], e);
        var n = new s(e);
        return this._pushNotification(n), n
    }, l.prototype.dismissAll = function () {
        for (; this.notifications.splice(0, 1););
    }, l.prototype.assignProps = function (t, i) {
        var e = this;
        t.forEach(function (t) {
            i[t] = null == i[t] ? e.options[t] : i[t]
        })
    }, l.prototype._pushNotification = function (t) {
        var i = this;
        this.notifications.push(t);
        var e = void 0 !== t.options.duration ? t.options.duration : this.options.duration;
        e && setTimeout(function () {
            return i._removeNotification(t)
        }, e)
    }, l.prototype._removeNotification = function (t) {
        var i = this.notifications.indexOf(t); - 1 !== i && this.notifications.splice(i, 1)
    }, l.prototype.normalizeOptions = function (t, i) {
        var e = {
            type: t
        };
        return "string" == typeof i ? e.message = i : "object" == typeof i && (e = o(o({}, e), i)), e
    }, l.prototype.registerTypes = function (t) {
        var i = (t && t.types || []).slice();
        return c.types.map(function (e) {
            var n = -1;
            i.forEach(function (t, i) {
                t.type === e.type && (n = i)
            });
            var t = -1 !== n ? i.splice(n, 1)[0] : {};
            return o(o({}, e), t)
        }).concat(i)
    }, l
}();







// ============================================================================
/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,p=n.id,h=n.path,u=c[p]&&h in c[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[p]||(c[p]=a(s,e)),r=c[p]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(33)},function(t,e,r){"use strict";function n(t,e){var r=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var n=r.host.indexOf(":")!==-1,i=n?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port,r.href=r.protocol+"://"+i+(e&&e.port===r.port?"":":"+r.port),r}var o=r(2);r(3)("socket.io-client:url");t.exports=n},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=p(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function p(t){try{return JSON.parse(t)}catch(t){return!1}}function h(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new h(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},h.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},h.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,h){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){n++;var u=new FileReader;u.onload=function(){h?h[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t){return n&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(33),a=r(5),c=r(4),p=r(35),h=r(36),u=(r(3)("socket.io-client:manager"),r(32)),f=r(37),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=p(r,"open",function(){n.onopen(),t&&t()}),s=p(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",h(this,"ondata"))),this.subs.push(p(t,"ping",h(this,"onping"))),this.subs.push(p(t,"pong",h(this,"onpong"))),this.subs.push(p(t,"error",h(this,"onerror"))),this.subs.push(p(t,"close",h(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){function n(t,e){return this instanceof n?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new n(t,e)}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(32)),c=r(18),p=r(2),h=r(26);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;h=h||t}h||(p.send([{type:"ping",data:"probe"}]),p.once("packet",function(t){if(!h)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",p),!p)return;n.priorWebsocketSuccess="websocket"===p.name,u.transport.pause(function(){h||"closed"!==u.readyState&&(c(),u.setTransport(p),p.send([{type:"upgrade"}]),u.emit("upgrade",p),p=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=p.name,u.emit("upgradeError",e)}}))}function r(){h||(h=!0,c(),p.close(),p=null)}function o(t){var e=new Error("probe error: "+t);e.transport=p.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){p&&t.name!==p.name&&r()}function c(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var p=this.createTransport(t,{probe:1}),h=!1,u=this;n.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",a),p.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}},function(t,e,r){function n(t){var e,r=!1,n=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),r=t.hostname!==location.hostname||p!==t.port,n=t.secure!==c}if(t.xdomain=r,t.xscheme=n,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=r(13),i=r(15),s=r(29),a=r(30);e.polling=n,e.websocket=a},function(t,e,r){var n=r(14);t.exports=function(t){var e=t.xdomain,r=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(t){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,r=location.port;r||(r=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),p=r(5),h=r(27);r(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var n in this.extraHeaders)this.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.extraHeaders[n])}}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(t){return void setTimeout(function(){r.onError(t)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,s,!1)}},function(t,e,r){function n(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(26),s=r(18),a=r(27),c=r(28);r(3)("engine.io-client:polling");t.exports=n;var p=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");
this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,h=r(19),u=r(20),f=r(21),l=r(22),d=r(23);"undefined"!=typeof ArrayBuffer&&(p=r(24));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),k={type:"error",data:"parser error"},w=r(25);e.encodePacket=function(t,e,r,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof r&&(i=r,r=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return n(t,i);var c=v[t.type];return void 0!==t.data&&(c+=r?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,r){var n="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(n+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];i=String.fromCharCode.apply(null,a)}return n+=btoa(i),r(n)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,p);if(!1===u)return}c+=i,a=""}else a+=h}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return n(k,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var h=f(o,0,c);if(a)try{h=String.fromCharCode.apply(null,new Uint8Array(h))}catch(t){var u=new Uint8Array(h);h="";for(var p=0;p<u.length;p++)h+=String.fromCharCode(u[p])}i.push(h),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,r=t.length;e<r;e++)if(n(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=n},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e){function r(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function n(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var r="";return 0==(4294965248&t)?r=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),r=d(t>>12&15|224),r+=i(t,6)):0==(4292870144&t)&&(r=d(t>>18&7|240),r+=i(t,12),r+=i(t,6)),r+=d(63&t|128)}function a(t,e){e=e||{};for(var n,o=!1!==e.strict,i=r(t),a=i.length,c=-1,p="";++c<a;)n=i[c],p+=s(n,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&u[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,r,n,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&u[l],l++,0==(128&e))return e;if(192==(224&e)){if(r=c(),s=(31&e)<<6|r,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=c(),n=c(),s=(15&e)<<12|r<<6|n,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=c(),n=c(),i=c(),s=(7&e)<<18|r<<12|n<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function h(t,e){e=e||{};var o=!1!==e.strict;u=r(t),f=u.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return n(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var u,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:h}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),u=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[p++]=n<<2|o>>4,u[p++]=(15&o)<<4|i>>2,u[p++]=(3&i)<<6|63&s;return h}}()},function(t,e){function r(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=r.buffer}return e}return t})}function n(t,e){e=e||{};var n=new i;return r(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return new Blob(r(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(n.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?n:void 0}()},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+"."+r(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var r=this;c.push(function(t){r.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var s=r(16),a=r(27);t.exports=i;var c,p=/\n/g,h=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),s.call(this,t)}var o,i,s=r(17),a=r(18),c=r(26),p=r(27),h=r(28);r(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=r(31)}catch(t){}var u=o||i;t.exports=n,p(n,s),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var n=t.length,o=0,i=n;o<i;o++)!function(t){a.encodePacket(t,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(i.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,i)}catch(t){}--n||e()})}(t[o])},n.prototype.onClose=function(){s.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(34),c=r(35),p=r(36),h=(r(3)("socket.io-client:socket"),r(26)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.slim.js.map

text = "%c  Socket.io is loaded 2.3.0";
console.log(text, 'background: #3b3b3b; color: #22ab3b');

// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер расширений (кода совместимости)

//?Данный класс заимствован из AABSZ (ревизия 26.02.2022)

//╒═════════════════════════════════════════════════════════════════════════╛
// ■ IMPLEMENTATION.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ANET;
  // * Добавить метод расширения
  _.extend = function(method) {
    if (ANET.__extenders == null) {
      ANET.__extenders = [];
    }
    ANET.__extenders.push(method);
  };
  // * Загрузить (выполнить) все методы расширения
  _.loadExtensions = function() {
    var i, len, method, ref;
    if (ANET.__extenders == null) {
      return;
    }
    ref = ANET.__extenders;
    for (i = 0, len = ref.length; i < len; i++) {
      method = ref[i];
      method();
    }
    // * Освобождение памяти
    ANET.__extenders = null;
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за подключение и хранит общие методы отправки и обработки команд

//$[ENCODE]

//@[GLOBAL]
window.ANNetwork = function() {};

//@[EXTEND]
window.NET = window.ANNetwork;

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("Network");
  LOG.setColors(KDCore.Color.GREEN, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANNetwork;
  _.isConnected = function() {
    return this.socket != null;
  };
  _.myId = function() {
    var ref;
    return (ref = this.socket) != null ? ref.id : void 0;
  };
  _.isMasterClient = function() {
    return this._isHost === true;
  };
  // * Игроки могу находится на одной карте
  _.isSameMapMode = function() {
    return ANET.PP.isOnlySameMapMode();
  };
  // * Надо ждать сеть
  _.isBusy = function() {
    return this.isConnected() && (this.isWaitServer() || ANGameManager.isShouldWaitServer());
  };
  // * Ждёт ответ от сервера
  _.isWaitServer = function() {
    return this.isConnected() && this._isWaitServer === true;
  };
  // * Включить вручную ожидание сервера
  _.setWait = function() {
    return this._isWaitServer = true;
  };
  // * Отключть вручную ожидание сервера
  _.resetWait = function() {
    return this._isWaitServer = false;
  };
  (function() {    // * MAIN NETWORK ====================================================
    _.initSystem = function() {
      this.socket = null;
      this.client = null;
      this.resetWait();
      this._isHost = false; // * Мастер клиент?
      "Network inited".p();
    };
    _.stop = function() {
      var ref;
      NetClientMethodsManager.setConnectionToMasterCallback(null);
      if ((ref = this.client) != null) {
        ref.disconnect();
      }
      this.resetWait();
      this.socket = null;
      ANGameManager.reset();
    };
    _.startConnection = function() {
      var adr, ip, options, port, protocol;
      ip = ANET.PP.serverIp();
      port = ANET.PP.serverPort();
      // * SSL (https) connection
      if (ANET.PP.isHTTPSConnection() === true) {
        console.log("Using HTTPS secure connection");
        protocol = "https://";
        options = {
          secure: true,
          reconnect: true,
          rejectUnauthorized: false
        };
        // * Возможно пользователь не внимателен и не указал порт 3035 при HTTP опции
        if (port === "3034" && (ip === "anetzglobal.ru" || "195.161.41.20")) {
          console.warn("You try connect via HTTPS connection with port 3034 (http)");
          console.warn("Port changed to 3035. Check Connection plugin parameter");
          port = 3035;
        }
      } else {
        protocol = "http://";
        options = {};
      }
      adr = protocol + ip + ":" + port;
      console.log("Connect to " + adr);
      this.socket = io(adr, options);
      this.client = new NetworkClientHandler(this.socket);
    };
    _.setConnection = function(callback) {
      NetClientMethodsManager.setConnectionToMasterCallback(callback);
      this.startConnection();
    };
    // * Просто отправить данные на сервер
    _.send = function(msg, noLog = false) {
      if (!this.isConnected()) {
        LOG.p("You try send message, but NOT connection!");
      } else {
        if (!noLog) {
          LOG.p("Send: " + msg.fullName());
        }
        msg.setFrom(this.socket.id).send();
      }
    };
    // * Отправить сообщение и ждать! результат (есть Timeout)
    // * (тут данные должен обратно отправить именно сам сервер)
    _.get = function(msg, onData, onTimeout, timeoutTime = 2000) {
      var _onData, _onTimeout, msgName;
      if (!this.isConnected()) {
        LOG.p("You try get data from Server, but NOT connection!");
      } else {
        msgName = msg.fullName();
        // * Ставим игру на паузу
        this.setWait();
        HUIManager.showLoader();
        // * Дополняем callbacks, чтобы снять игру автоматически с паузы
        _onTimeout = function(...args) {
          LOG.p("Timeout for: " + msgName);
          if (onTimeout != null) {
            onTimeout.apply(this, args);
          }
          ANNetwork.resetWait();
          return HUIManager.hideLoader();
        };
        _onData = function(...args) {
          LOG.p("Response (get) for: " + msgName);
          if (onData != null) {
            onData.apply(this, args);
          }
          ANNetwork.resetWait();
          return HUIManager.hideLoader();
        };
        LOG.p("Send, get!: " + msgName);
        msg.setFrom(this.socket.id).get(_onData, _onTimeout, timeoutTime);
      }
    };
    // * Отправить сообщение и вызвать callback, когда прийдёт ответ
    _.callback = function(msg, method) {
      var _method, msgName;
      if (!this.isConnected()) {
        LOG.p("You try send callback message, but NOT connection!");
      } else {
        msgName = msg.fullName();
        _method = function(...args) {
          LOG.p("Callback for: " + msgName);
          return method.apply(this, args);
        };
        LOG.p("Send, callback: " + msgName);
        msg.setFrom(this.socket.id).callback(_method);
      }
    };
    return _.trace = function(text) {
      return this.send(NMS.Trace(text));
    };
  })();
  (function() {    // * ROOMS ======================================================
    // * Этот метод вызывается когда создаём комнату
    _.setRoomMaster = function(room) {
      this.room = room;
      this._isHost = true;
      return LOG.p("You are Master (host) of room: " + this.room.name);
    };
    //TODO: установить флаг в NetMessage? что типо теперь send.to

    // * Когда подключаемся к комнате
    _.setRoomJoin = function(room) {
      this.room = room;
      this._isHost = false;
      return LOG.p("You are joined to room: " + this.room.name);
    };
    //TODO: установить флаг в NetMessage? что типо теперь send.to

    // * Обновить данные команты (к которой подключён)
    _.onRoomDataFromServer = function(room) {
      this.room = room;
    };
    // * Комната была закрыта
    _.onRoomClosed = function() {
      if (!this.isConnected()) {
        return;
      }
      if (this.room == null) {
        return;
      }
      this.leaveRoom();
      this._isHost = false;
      this.room = null;
    };
    // * Закрыть комнату (созданную этим клиентом)
    _.closeRoom = function() {
      if (!this.isMasterClient()) {
        return;
      }
      if (this.room == null) {
        return;
      }
      this.send(NMS.Lobby("closeRoom"));
    };
    // * Покинуть комнату (к которой этот клиент подключился)
    _.leaveRoom = function() {
      if (this.room == null) {
        return;
      }
      ANGameManager.onLeaveRoom();
      this.send(NMS.Lobby("leaveRoom", this.room.name));
    };
    
    // * Запросить данные о игроках в комнате
    return _.requestRoomRefresh = function() {
      if (!this.isConnected()) {
        return;
      }
      this.send(NMS.Lobby("getRoomData"));
    };
  })();
  // * HELPERS ====================================================

  // * Получить общие данные о игре для сети (комнаты)
  // * (используется при создании комнаты)
  _.getNetworkGameInfoData = function() {
    return {
      id: ANET.VD.getGameVersion(),
      title: $dataSystem.gameTitle,
      version: KDCore.isMZ() ? 0 : 1,
      maxPlayers: ANET.PP.maxPlayersInRoom(),
      mode: 0 //TODO: Deprecated
    };
  };
})();


// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер с основными методами системы
ANET.System = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.System;
  (function() {    // * Начальная загрузка компонентов
    // -----------------------------------------------------------------------
    //TODO: * Лог свой для сообщений версий
    _.initSystem = function() {
      "INIT ANET SYSTEM".p();
      this.registerGEvents();
      this.loadParameters();
      this.applyParameters();
      ANET.loadPluginCommands();
      ANET.loadExtensions(); // 1_ANExtensions.coffee
      HUIManager.init();
    };
    // * Регистрация всех глобальных событий
    _.registerGEvents = function() {
      var i, item, len, list;
      list = ['netzRefreshNameplate'];
      for (i = 0, len = list.length; i < len; i++) {
        item = list[i];
        KDCore.GEventsManager.register(item);
      }
    };
    _.loadParameters = function() {
      return ANET.PP = new ANET.ParamsManager();
    };
    _.applyParameters = function() {};
    //TODO: Например конфигурация классов (dinamyc методов)

    // * Очищает из памяти все события которые существуют только на карте
    _.clearSceneMapGEvents = function() {
      return KDCore.GEventsManager.clear('netzRefreshNameplate');
    };
  })();
  // -----------------------------------------------------------------------

  // * Все эти команды нельзя запускать через опции (виртуально), но
  // * их теоретически можно вызывать через общее событие у другого игрока
  _.ForbiddenVirtualCommandsList = [
    // * Message
    101,
    102,
    103,
    104,
    105,
    // * Flow Control
    111,
    112,
    113,
    115,
    118,
    119,
    108,
    // * Party
    129,
    // * Movement
    201,
    202,
    204,
    206,
    // * Character
    216,
    217,
    // * Timing
    230,
    // * Scene Control
    302,
    303,
    351,
    352,
    // * System Settings
    137,
    // * Meta
    0,
    401,
    402,
    403,
    411,
    413,
    657
  ];
  // * Список комманд которые запускаются через общее событие, а не виртуально
  _.NonVirtualCommandsList = [
    // * Flow Control
    117,
    // * Scene Control
    301
  ];
  // * Дополнительные полня для синхронизации в битве
  _.BattlerObserverFields = [
    "_tpbChargeTime",
    //"_tpbCastTime"
    //"_tpbIdleTime"
    //"_tpbTurnCount"
    //"_tpbTurnEnd"
    //"_speed"
    //"_actionState"
    //"_damagePopup"
    //"_effectType"
    //"_motionType"
    //"_weaponImageId"
    //"_motionRefresh"
    //"_selected"
    "_tpbState"
  ];
  _.ActorObserverFields = ["_name", "_nickname", "_classId", "_level", "_characterName", "_characterIndex", "_faceName", "_faceIndex", "_battlerName", "_exp", "_equips"];
  return _.EnemyObserverFields = [
    "_enemyId",
    //"_letter"
    //"_plural"
    "_screenX",
    "_screenY"
  ];
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный менедреж отвечает за различие в версиях плагина для MZ и MV
ANET.VD = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.VD;
  _.getGameVersion = function() {
    if (ANET.PP.isUseCustomGameId()) {
      return ANET.PP.getCustomGameId();
    } else {
      if (KDCore.isMZ()) {
        return $dataSystem.advanced.gameId;
      } else {
        return $dataSystem.versionId;
      }
    }
  };
  return _.getWindowBackgroundType = function() {
    if (KDCore.isMZ()) {
      return 2;
    } else {
      return 0;
    }
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за HTML элементы пользовательского интерфейса на сценах

//https://github.com/caroso1222/notyf

//TODO: load material icons? make more notifies (info, warning?)

//<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

//$[ENCODE]
window.HUIManager = function() {};

(function() {
  var _;
  //@[DEFINES]
  _ = window.HUIManager;
  _.init = function() {
    this._isMouseHoverHtmlElement = false;
    this._loadCSS();
    this._createRelativeParent();
    this._createLoadSpinner();
    this._createNotify();
    // * Отключаем контекстное меню у новых элементов
    Graphics._disableContextMenu();
  };
  _.isUnderMouse = function() {
    return this._isMouseHoverHtmlElement === true;
  };
  // * Когда происходит смена сцены в игре
  // * (надо убирать лишние элементы, которые не могут переходить на другую сцену)
  _.onGameSceneChanged = function() {
    return this.hideWaitingInfo();
  };
  _.showLoader = function(delay = 200) {
    var e;
    try {
      if (this.isLoaderActive()) {
        return;
      }
      this._loaderThread = setTimeout((function() {
        if (!document.getElementById("anetLoader")) {
          return document.body.appendChild(HUIManager._loader);
        }
      }), delay);
    } catch (error) {
      e = error;
      console.warn(e);
    }
  };
  _.hideLoader = function() {
    var e;
    try {
      if (!this.isLoaderActive()) {
        return;
      }
      clearTimeout(this._loaderThread);
      this._loaderThread = null;
      if (document.getElementById("anetLoader")) {
        document.body.removeChild(this._loader);
      }
    } catch (error) {
      e = error;
      console.log(e);
    }
  };
  _.isLoaderActive = function() {
    return this._loaderThread != null;
  };
  _.showWaitingInfo = function(text, text2, delay = 200) {
    var e;
    try {
      if (this.isWaitingInfoActive()) {
        return;
      }
      this._waitingInfoThread = setTimeout((function() {
        return HUIManager._createWaitPlayersAlert(text, text2);
      }), delay);
    } catch (error) {
      e = error;
      console.warn(e);
    }
  };
  _.hideWaitingInfo = function() {
    var e;
    try {
      if (!this.isWaitingInfoActive()) {
        return;
      }
      clearTimeout(this._waitingInfoThread);
      this._waitingInfoThread = null;
      if (this._waitPlayers != null) {
        document.getElementById("anetCanvasElements").removeChild(this._waitPlayers);
        this._waitPlayers = null;
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
  };
  _.isWaitingInfoActive = function() {
    return this._waitingInfoThread != null;
  };
  _.notifyError = function(msg) {
    var e;
    try {
      return this._notify.error(msg);
    } catch (error) {
      e = error;
      return console.warn(e);
    }
  };
  _.notifySucess = function(msg) {
    var e;
    try {
      return this._notify.success(msg);
    } catch (error) {
      e = error;
      return console.warn(e);
    }
  };
  _.isInputActive = function() {
    return this._input != null;
  };
  _.showInput = function(placeholder, maxlength) {
    if (this._input != null) {
      this.removeInput();
    }
    this._createInputField(placeholder, maxlength);
  };
  _.removeInput = function() {
    var e, root;
    if (this._input == null) {
      return;
    }
    // * Не всегда автоматически выключается, поэтому надо выключить флаг вручную
    HUIManager._isMouseHoverHtmlElement = false;
    try {
      root = document.getElementById("anetCanvasElements");
      this._input.style.display = 'none';
      //root?.removeChild(@_input)
      if (this._input.parentNode != null) {
        this._input.parentNode.removeChild(this._input);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    this._input = null;
  };
  _.focusInput = function() {
    var ref;
    if (this._input == null) {
      return;
    }
    if ((ref = document.getElementById("anetInputName")) != null) {
      ref.focus();
    }
  };
  _.getInputValue = function() {
    var ref;
    if (this._input == null) {
      return "";
    }
    return (ref = document.getElementById("anetInputName")) != null ? ref.value : void 0;
  };
  _.setInputValue = function(value) {
    var ref;
    if (this._input == null) {
      return;
    }
    if ((ref = document.getElementById("anetInputName")) != null) {
      ref.value = value;
    }
  };
  _.updateCanvasHtmlElements = function() {
    if (this._canvasRelativeElements == null) {
      return;
    }
    Graphics._centerElement(this._canvasRelativeElements);
    this._canvasRelativeElements.style.zIndex = 4;
    this._canvasRelativeElements.style.width = Graphics._canvas.style.width;
    this._canvasRelativeElements.style.height = Graphics._canvas.style.height;
  };
  // * Когда пришло сообщение чата от сервера
  _.onChatMessageFromServer = function(message) {
    var e;
    try {
      if (!ANET.PP.isShowLobbyChat()) {
        return;
      }
      if (this._chat != null) {
        return this._chat.onMessageFromServer(message);
      } else {
        return NETLobbyChat.AddToHistory(message);
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Отправить сообщение из чата на сервер (написать всем, добавить в чат)
  _.lobbyChatSendMessageButtonClick = function() {
    var e, ref;
    try {
      if (this._rChat == null) {
        return;
      }
      return (ref = this._chat) != null ? ref.sendMessage() : void 0;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _.showLobbyChat = function() {
    this._createLobbyChat();
    this._chat = new NETLobbyChat();
  };
  _.removeLobbyChat = function() {
    var e, root;
    try {
      if (this._rChat == null) {
        return;
      }
      root = document.getElementById("anetCanvasElements");
      //root?.removeChild(@_rChat) if @_rChat?
      this._rChat.style.display = 'none';
      if (this._rChat.parentNode != null) {
        this._rChat.parentNode.removeChild(this._rChat);
      }
      this._rChat = null;
      return this._chat = null;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * PRIVATE  ======================================================
  _._loadCSS = function() {
    var head;
    // * Подгружаем CSS стили
    head = document.getElementsByTagName("head")[0];
    // * Fontawesome
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\" integrity=\"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm\" crossorigin=\"anonymous\"/>");
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"css/anet.css\" /> <link rel=\"stylesheet\" href=\"css/anet_chat.css\" />");
  };
  _._createLoadSpinner = function() {
    this._loader = document.createElement("div");
    this._loader.id = "anetLoader";
    this._loaderThread = null;
  };
  _._createNotify = function() {
    this._notify = new Notyf({
      duration: 1400,
      position: {
        x: 'center',
        y: 'bottom'
      },
      ripple: false
    });
  };
  // * Информация при ожидании других игроков (или другая информация, ожидание сервера)
  _._createWaitPlayersAlert = function(text, extraText) {
    var htmlCode;
    this._waitPlayers = document.createElement("blockquote");
    this._waitPlayers.id = "anetWaitPlayersAlert";
    this._waitPlayers.classList.add("speech-bubble");
    htmlCode = "<p>" + text + "</p>" + "<cite>" + extraText + "</cite>";
    this._waitPlayers.insertAdjacentHTML('beforeend', htmlCode);
    this._canvasRelativeElements.appendChild(this._waitPlayers);
  };
  // * Элемент родитель, который будет изменяться вместе с размерами Canvas
  // * Это позволит сохранять фиксированные позиции HTML элементов не зависимо от размера окна игры
  _._createRelativeParent = function() {
    this._canvasRelativeElements = document.createElement("div");
    this._canvasRelativeElements.id = "anetCanvasElements";
    this._canvasRelativeElements.style.zIndex = 4;
    this.updateCanvasHtmlElements();
    document.body.appendChild(this._canvasRelativeElements);
  };
  _._createInputField = function(placeholder, maxlength) {
    var htmlCode;
    this._input = document.createElement("div");
    this._input.id = "anetInput";
    this._input.addEventListener("mouseenter", function() {
      return HUIManager._isMouseHoverHtmlElement = true;
    });
    this._input.addEventListener("mouseleave", function() {
      return HUIManager._isMouseHoverHtmlElement = false;
    });
    this._input.classList.add("form__group");
    this._input.classList.add("field");
    if (maxlength == null) {
      maxlength = ANET.PP.getTextInputMaxLength();
    }
    htmlCode = "<input type=\"input\" class=\"form__field\" placeholder=\"" + placeholder + "\" autocomplete=\"off\" maxlength=\"" + maxlength + "\" name=\"anetInputName\" id='anetInputName' required /> <label for=\"anetInputName\" class=\"form__label\">" + placeholder + "</label>";
    this._input.insertAdjacentHTML('beforeend', htmlCode);
    this._canvasRelativeElements.appendChild(this._input);
  };
  _._createLobbyChat = function() {
    var htmlCode;
    htmlCode = "<section id=\"anet-chat-sectionA\" class=\"msger-closed\"> <header class=\"msger-header\" onClick=\"HUIManager._switchChatState()\"> <div class=\"msger-header-title\"> <strong>CHAT</strong> </div> <div class=\"msger-header-options\"> <span><i class=\"fas fa-caret-square-up\"></i></span> </div> </header> </section> <section id=\"anet-chat-sectionB\" class=\"msger msger-none\"> <header class=\"msger-header\" onClick=\"HUIManager._switchChatState()\"> <div class=\"msger-header-title\"> <strong>CHAT</strong> </div> <div class=\"msger-header-options\"> <span><i class=\"fas fa-caret-square-down\"></i></span> </div> </header> <main id=\"anet-chat-main\" class=\"msger-chat\"> </main> <div class=\"msger-inputarea\"> <input id=\"anet-chat-input\" type=\"text\" class=\"msger-input\" placeholder=\"Enter your message...\"> <button onClick=\"HUIManager.lobbyChatSendMessageButtonClick()\" class=\"msger-send-btn\">Send</button> </div> </section>";
    //https://codepen.io/sajadhsm/pen/odaBdd
    //TODO: Методы отправки сообщений (через сервер тоже)
    this._rChat = document.createElement("div");
    this._rChat.id = "anetRoomChat";
    this._rChat.classList.add('msg-container');
    this._rChat.addEventListener("mouseenter", function() {
      return HUIManager._isMouseHoverHtmlElement = true;
    });
    this._rChat.addEventListener("mouseleave", function() {
      return HUIManager._isMouseHoverHtmlElement = false;
    });
    this._rChat.insertAdjacentHTML('beforeend', htmlCode);
    this._rChat.__isVisible = false;
    this._canvasRelativeElements.appendChild(this._rChat);
  };
  _._switchChatState = function() {
    var e, s, sectionA, sectionB;
    if (this._rChat == null) {
      return;
    }
    try {
      s = SceneManager._scene;
      sectionA = document.getElementById("anet-chat-sectionA");
      sectionB = document.getElementById("anet-chat-sectionB");
      if (this._rChat.__isVisible === true) {
        sectionA.classList.remove("msger-none");
        sectionB.classList.add("msger-none");
        this._rChat.__isVisible = false;
        this.showInput("Room Name...");
        this.setInputValue($gameTemp.nLastNetworkSceneInputValue);
      } else {
        sectionA.classList.add("msger-none");
        sectionB.classList.remove("msger-none");
        $gameTemp.nLastNetworkSceneInputValue = this.getInputValue();
        this.removeInput();
        this._rChat.__isVisible = true;
      }
      if (s.setInputAllowed != null) {
        s.setInputAllowed(!this._rChat.__isVisible);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_Map.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
})();

(function() {  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Input.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------

  //TODO: Временно отключил, так как пока нет HUI элементов на карте
  /*if KDCore.isMV()
      #@[ALIAS]
      ALIAS__processMapTouch = _.processMapTouch
      _.processMapTouch = ->
          return if HUIManager.isUnderMouse()
          ALIAS__processMapTouch.call(@)
          return
  else
      #@[ALIAS]
      ALIAS__onMapTouch = _.onMapTouch
      _.onMapTouch = ->
          return if HUIManager.isUnderMouse()
          ALIAS__onMapTouch.call(@)
          return */
  var ALIAS___onKeyDown, ALIAS___shouldPreventDefault, _;
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS___shouldPreventDefault = _._shouldPreventDefault;
  _._shouldPreventDefault = function() {
    // * Чтобы backspace и стрелки работали в поле ввода текста
    if (HUIManager.isInputActive()) {
      return false;
    } else {
      return ALIAS___shouldPreventDefault.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS___onKeyDown = _._onKeyDown;
  _._onKeyDown = function(event) {
    // * Чтобы игнорировать стандартные кнопки Z, X, space во время ввода
    if (HUIManager.isInputActive()) {
      if (event.keyCode === 90 || event.keyCode === 88 || event.keyCode === 32) {
        this.clear();
        return;
      }
    }
    return ALIAS___onKeyDown.call(this, event);
  };
})();

(function() {  // ■ END Input.coffee
  //---------------------------------------------------------------------------

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Graphics.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var ALIAS___updateCanvas, _;
  //@[DEFINES]
  _ = Graphics;
  //@[ALIAS]
  ALIAS___updateCanvas = _._updateCanvas;
  _._updateCanvas = function() {
    ALIAS___updateCanvas.call(this);
    return HUIManager.updateCanvasHtmlElements();
  };
})();

// ■ END Graphics.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Дополнительные расширения для KDCore

// * Расширение, чтобы без XDev работал плагин
(function() {
  var __STR_P;
  __STR_P = String.prototype.p;
  String.prototype.p = function(anotherText) {
    if (ANET.isDEV()) {
      __STR_P.call(this, anotherText);
    } else {

    }
  };
})();

// * NOTHING


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessage.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//$[ENCODE]
//@[GLOBAL]
var NetMessage;

NetMessage = (function() {
  class NetMessage {
    constructor(socket1) {
      this.socket = socket1;
      this.name = "trace";
      this.from = "";
      this.to = "";
      this.data = "";
      //@myMapId = 0
      //@myPlayerIndex = -1 # * -1 = server
      this.waited = false;
    }

    setName(name) {
      this.name = name;
      return this;
    }

    setTo(socketId) {
      this.to = socketId;
      return this;
    }

    setFrom(socketId) {
      this.from = socketId;
      return this;
    }

    setData(data) {
      this.data = data;
      return this;
    }

    fullName() {
      if ((this.data != null) && this.data.id) {
        return this.name + "_" + this.data.id;
      } else {
        return this.name;
      }
    }

    //setWait: (symbol) ->
    //    @waited = true
    //    Network.waitServerResponse @, symbol
    //    @

      //setRepeat: (symbol) ->
    //    @waited = true
    //    Network.waitServerResponseRepeated @, symbol
    //    @

      //TODO: @socket.to.emit? комната?
    send(data) {
      this.socket.emit(this.name, this._makeData(data));
      return this;
    }

    callback(method, data) {
      this.socket.emit(this.name, this._makeData(data), method);
      return this;
    }

    get(methodA, methodB, timeout, data) {
      var timeoutFunc;
      timeoutFunc = NetMessage.WithTimeout;
      this.socket.emit(this.name, this._makeData(data), timeoutFunc(methodA, methodB, timeout));
      return this;
    }

    //TODO: наверное тут не надо
    broadcast(data) {
      return this.socket.broadcast.emit(this.name, this._makeData(data));
    }

    _makeData(data = null) {
      var netData;
      netData = {};
      if (data == null) {
        data = this.data;
      } else {
        this.data = data;
      }
      netData.data = data;
      netData.from = this.from;
      netData.to = this.to;
      netData.waited = this.waited;
      return netData;
    }

    static SetOwnSocket(socket) {
      return NetMessage.Socket = socket;
    }

    static Trace(text, socket) {
      return this.EmptyMessage(socket).setName("trace").setData(text);
    }

    static EmptyMessage(socket = null) {
      var msg, targetSocket;
      targetSocket = socket;
      if (socket == null) {
        targetSocket = this.Socket;
      }
      msg = new NetMessage(targetSocket);
      if (targetSocket != null) {
        msg.setFrom(targetSocket.id);
      }
      return msg;
    }

    static EmptyMessageWithFlag(flagName, data, socket = null) {
      var msg;
      msg = this.EmptyMessage(socket);
      msg.setData({
        id: flagName,
        content: data
      });
      return msg;
    }

    static WithTimeout(onSuccess, onTimeout, timeout) {
      var called, timer;
      called = false;
      timer = setTimeout(function() {
        if (called) {
          return;
        }
        called = true;
        return onTimeout();
      }, timeout);
      return function(...args) {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(timer);
        return onSuccess.apply(this, args);
      };
    }

  };

  // * Сокет текущего клиента (по умолчанию)
  NetMessage.Socket = null;

  return NetMessage;

}).call(this);

//@[EXTENDD]
window.NMS = NetMessage;

window.NetMessage = NetMessage;

// ■ END NetMessage.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных игрока
var NetPlayerDataWrapper;

NetPlayerDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetPlayerDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetPlayerDataWrapper;
  //! НЕ ЗАБЫВАТЬ обновить PlayerData.js на сервере, если добавляется поле!
  // * Все поля структуры
  _.createLocal = function() {
    var plName;
    // * Загружаем с настроек, если нету, то случайное
    if (String.any(ConfigManager.netPlayerName)) {
      plName = ConfigManager.netPlayerName;
    } else {
      if ($gameTemp._tempPlayerNetworkName == null) {
        $gameTemp._tempPlayerNetworkName = "Player " + Math.randomInt(1000);
      }
      plName = $gameTemp._tempPlayerNetworkName;
    }
    return {
      id: ANNetwork.myId(),
      name: plName,
      mapId: 0,
      actorId: 0,
      index: 0,
      scene: "",
      characterReady: false,
      isMapMaster: false,
      onEvent: 0,
      onCommonEvent: 0,
      isReadyInRoom: false
    };
  };
  _.isHaveCharacterInGame = function(p) {
    return p.characterReady === true && p.actorId > 0;
  };
  _.isOnMapScene = function(p) {
    return this.isCharOnMap(p) && p.scene === "map";
  };
  _.isOnBattleScene = function(p) {
    return this.getRequestedNetworkState(p) === 5;
  };
  _.isFreeOnMap = function(p) {
    return !this.isOnAnyEvent(p) && this.isOnMapScene(p);
  };
  _.isCharOnMap = function(p) {
    return (p != null) && p.mapId === $gameMap.mapId() && p.characterReady === true;
  };
  _.isCurrentPlayerActor = function(actor, p) {
    return (p != null) && actor.actorId() === p.actorId;
  };
  _.isOnEvent = function(p, eventId) {
    return (p != null) && p.onEvent === eventId;
  };
  _.getRequestedNetworkState = function(p) {
    if (p.scene === "menu") {
      return 2;
    }
    if (p.scene === "trade") {
      return 3;
    }
    if (p.scene === "battle") {
      return 5;
    }
    if (p.scene === "chat") {
      return 6;
    }
    if (_.isOnAnyEvent(p)) {
      return 1;
    }
    return -1;
  };
  _.getNetCharacterForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameMap.networkCharacterById(p.id);
  };
  _.getActorForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameActors.actor(p.actorId);
  };
  _.isOnAnyEvent = function(p) {
    if (p == null) {
      return false;
    }
    return (p.onEvent > 0 || p.onCommonEvent > 0) && _.isCharOnMap(p);
  };
})();

// ■ END NetPlayerDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных комнаты
var NetRoomDataWrapper;

NetRoomDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetRoomDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetRoomDataWrapper;
  // * Все поля структуры
  _.createLocal = function() {
    return {
      name: "Room " + Math.randomInt(100),
      masterId: "",
      masterName: "",
      inGame: false,
      playersIds: [],
      readyPlayersIds: [],
      gameId: 0,
      gameTitle: "",
      rpgVersion: 0,
      maxPlayers: 0,
      gameMode: 0,
      canConnect: true,
      uniqueSaveID: null
    };
  };
  _.isRoomFull = function(r) {
    if (r == null) {
      return true;
    }
    return r.playersIds.length >= r.maxPlayers;
  };
  _.isRoomProperToJoin = function(r) {
    var e;
    if (r == null) {
      return false;
    }
    try {
      if (r.gameId !== ANET.VD.getGameVersion()) {
        // --- Общие проверки ---

        // * Нельзя подключиться если разные игры
        return false;
      }
      if (_.isRoomFull(r)) {
        // * Нельзя подключаться, если комната полная
        return false;
      }
      if (!_.isMyRPGVersion(r)) {
        // * Если разные движки
        return false;
      }
      // --- Проверки режима ---

      // * Если ЗАПРЕЩЕНО подключаться к запущенной игре
      if (ANET.PP.isJoinStartedRoomAllowed() === false) {
        if (_.isStartedGameRoom(r)) {
          // * Нельзя подключаться к уже запущенной игре
          return false;
        }
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!DataManager.nIsHaveNetworkSaveWithId(r.uniqueSaveID)) {
            // * То клиент должен иметь файл данного сохранения
            return false;
          }
        }
      } else {
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!ANET.PP.isJoinStartedAndLoadedRoom()) {
            // * Нельзя подключиться к загруженной игре (уже запущенной) если ОТКЛЮЧЁН соответсвующий параметр
            return false;
          }
        }
      }
    } catch (error) {
      
      // * Если специальный флаг
      //TODO: Пока не обрабатывается
      //if r.canConnect is false
      //    return false
      e = error;
      ANET.w(e);
    }
    return true;
  };
  _.isMyRPGVersion = function(r) {
    if (r == null) {
      return false;
    }
    if (r.rpgVersion === 0) {
      return KDCore.isMZ();
    } else {
      return KDCore.isMV();
    }
  };
  _.isLoadGameRoom = function(r) {
    return r.uniqueSaveID != null;
  };
  _.isStartedGameRoom = function(r) {
    return r.inGame === true;
  };
})();

// ■ END NetRoomDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var NetworkClientHandler;

NetworkClientHandler = class NetworkClientHandler {
  constructor(socket) {
    this.socket = socket;
    this._init();
  }

  disconnect() {
    var ref;
    return (ref = this.socket) != null ? ref.disconnect() : void 0;
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetworkClientHandler.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _, _C;
  //@[DEFINES]
  _C = null; //? ClientManager
  _ = NetworkClientHandler.prototype;
  _._init = function() {
    _C = NetClientMethodsManager;
    // * Задаём ссылку на собственный сокет в класс сообщений
    // Чтобы можно было отправлять сообщения каждый раз не передавая сокет
    NetMessage.SetOwnSocket(this.socket);
    return this._handleCommands();
  };
  _._handleCommands = function() {
    this._handleBaseSocketEvents();
    this._handleDebugEvents();
    return this._handleANETServerEvents();
  };
  _._handleBaseSocketEvents = function() {
    this.socket.on('disconnect', function() {
      return _C.onDisconnect();
    });
    this.socket.on('connect', function() {
      return _C.onConnect();
    });
    return this.socket.on('connect_error', function() {
      return _C.onConnectionError();
    });
  };
  _._handleDebugEvents = function() {
    return this.socket.on('trace', function(n) {
      return console.log("Trace: " + n);
    });
  };
  _._handleANETServerEvents = function() {
    return this.socket.on('serverPrc', (n) => {
      return this._handleServerPrcEvent(n);
    });
  };
  _._handleServerPrcEvent = function(n) {
    var content, eventHandlerMethodName, flag, id;
    ({id, flag, content} = n);
    eventHandlerMethodName = id + "_" + flag;
    if (_C.isExistPrcEvent(eventHandlerMethodName)) {
      return _C.handlePrcEvent(eventHandlerMethodName, content);
    } else {
      return console.log("Unknown Event from server " + eventHandlerMethodName);
    }
  };
})();

// ■ END NetworkClientHandler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный оперирует запросами данных и ответами от игрока к игроку

//$[ENCODE]

//@[GLOBAL]
window.ANClientResponceManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("ClientResp");
  LOG.setColors(KDCore.Color.BLUE.getLightestColor(65), KDCore.Color.BLACK.getLightestColor(65));
  LOG.on();
  //@[DEFINES]
  _ = window.ANClientResponceManager;
  // * Отправить сообщение и ждать результат
  // * Тут результат должен прийти от другого клиента
  //? Этот метод тормозит всю игру
  //%[Главный метод отправки запроса данных]
  _.sendResponce = function(msg, onResponce, onTimeout, timeoutTime, infoMessage) {
    var e;
    try {
      if (!ANNetwork.isConnected()) {
        return;
      }
      ANNetwork.setWait();
      // * Показывам с задержкой, чтобы не было мелькания, если данные пришли сразу
      if (String.any(infoMessage)) {
        setTimeout((function() {
          if (ANClientResponceManager.currentResponce != null) {
            return nAPI.showInfoMessage(infoMessage);
          }
        }), 400);
      }
      ANClientResponceManager.currentResponce = {
        id: msg.fullName(),
        timeout: setTimeout((function() {
          ANClientResponceManager._continueGameProcess();
          return onTimeout();
        }), timeoutTime),
        callback: onResponce
      };
      console.log(ANClientResponceManager.currentResponce.id);
      return ANNetwork.send(msg);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Данный метод вызывается когда приходит ответ от сервера
  // * (когда приходят данные от другого клиента)
  _.onResponceReceived = function(responceName, data) {
    var r;
    if (ANClientResponceManager.currentResponce == null) {
      return;
    }
    r = ANClientResponceManager.currentResponce;
    // * Надо проверить что этот ответ именно я жду
    if (r.id === responceName) {
      this._continueGameProcess();
      r.callback(data);
    }
  };
  // * Продолжить игровую логику (скрыть сообщение, убрать Timeout)
  _._continueGameProcess = function() {
    if (ANClientResponceManager.currentResponce == null) {
      return;
    }
    ANNetwork.resetWait();
    nAPI.hideInfoMessage();
    clearTimeout(ANClientResponceManager.currentResponce.timeout);
    ANClientResponceManager.currentResponce = null;
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс хранит сетевые методы игры

//$[ENCODE]

//@[GLOBAL]
window.ANGameManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetGame");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANGameManager;
  _.isShouldWaitServer = function() {
    return this._waitMode != null;
  };
  // * Инициализация начальных данных (при подключении надо вызывать)
  _.init = function() {
    this.reset();
    this.createMyPlayerData();
    return ANPlayersManager.sendPlayerName();
  };
  // * Когда происходит отключение от сервера
  _.reset = function() {
    // * Флаг что игра только началась и надо установить персонажа когда карта загрузится
    this.networkGameStarted = false;
    this._waitMode = null;
    this.playersData = null;
    ANBattleManager.battleData = null;
  };
  _.createMyPlayerData = function() {
    // * Данные всех игроков в игре
    this.playersData = [];
    // * Сразу добавляем себя
    this.playersData.push(NetPlayerDataWrapper.createLocal());
  };
  _.isInited = function() {
    return this.playersData != null;
  };
  _.myPlayerData = function() {
    return this.getPlayerDataById(ANNetwork.myId());
  };
  _.myActorId = function() {
    return this.myPlayerData().actorId;
  };
  _.myIndex = function() {
    return this.myPlayerData().index;
  };
  _.isMapMaster = function() {
    return this.myPlayerData().isMapMaster === true;
  };
  // * Дублируется для удобства
  _.isBattleMaster = function() {
    return ANBattleManager.isBattleMaster();
  };
  _.isPlayerDataExists = function(id) {
    var data;
    data = this.playersData.find(function(p) {
      return p.id === id;
    });
    return data != null;
  };
  _.getPlayerDataById = function(id) {
    var data;
    data = this.playersData.find(function(p) {
      return p.id === id;
    });
    if (data != null) {
      return data;
    } else {
      ANET.w("Player data for " + id + " not found!");
    }
    return null;
  };
  _.getPlayerDataByActorId = function(actorId) {
    var data;
    data = this.playersData.find(function(p) {
      return p.actorId === actorId;
    });
    if (data != null) {
      return data;
    } else {
      ANET.w("Player data for Actor with ID " + actorId + " not found!");
    }
    return null;
  };
  // * Получить данные об игроке
  //? what && byWhat: actor, actorId, netId, actorName, playerName, playerIndex, info
  _.getPlayerInfo = function(what, byWhat, value) {
    var actorWithName, actors, e, playerData;
    if (what === byWhat) {
      return value;
    }
    if (value == null) {
      return null;
    }
    playerData = null;
    try {
      switch (byWhat) {
        case "actorId":
          playerData = this.getPlayerDataByActorId(value);
          break;
        case "netId":
          playerData = this.getPlayerDataById(value);
          break;
        case "actor":
          playerData = this.getPlayerDataByActorId(value.actorId());
          break;
        case "actorName":
          actors = this.playersData.map(function(d) {
            return $gameActors.actor(d.actorId);
          });
          actorWithName = actors.find(function(a) {
            return a.name() === value;
          });
          if (actorWithName != null) {
            playerData = this.getPlayerDataByActorId(actorWithName.actorId());
          }
          break;
        case "playerName":
          playerData = this.playersData.getByField("name", value);
          break;
        case "playerIndex":
          playerData = this.playersData.getByField("index", value);
          break;
        case "info":
          playerData = value;
          break;
        default:
          ANET.w("Unknown field: " + byWhat + ", info not finded");
      }
      if (playerData == null) {
        return null;
      }
      switch (what) {
        case "actorId":
          return playerData.actorId;
        case "netId":
          return playerData.id;
        case "actorName":
          // * Можно рекурсией, через Actor, но для производительности пусть будет так
          actorWithName = $gameActors.actor(playerData.actorId);
          if (actorWithName != null) {
            return actorWithName.name();
          } else {
            return "";
          }
          break;
        case "playerName":
          return playerData.name;
        case "playerIndex":
          return playerData.index;
        case "actor":
          return $gameActors.actor(playerData.actorId); // * info
        default:
          return playerData;
      }
      return null;
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.setupNewNetworkGame = function() {
    this.networkGameStarted = true;
    return $gameParty.setupNetworkGame();
  };
  // * Когда клиент переходит на новую (другую) карту (а не на туже самую)
  _.onNewGameMapSetup = function() {
    // * На всякий случай и тут отключу
    $gameTemp._nLocalActorMode = false;
    this._shouldWaitPlayerOnSameMap = ANNetwork.isSameMapMode();
  };
  // * Когда на клиенте загрузилась карта
  _.onMapLoaded = function() {
    // * Отправляем что мы на карте (загрузились)
    ANMapManager.sendMapLoaded();
    // * Отправляем начальные данные (позиция игрока)
    ANMapManager.sendInitialMapData();
    // * Сбрасываем торговлю
    ANTradeManager.onTradeSceneEnd();
    // * Если загрузка
    if (ANET.Utils.isLoadGameRoom()) {
      // * Ждём игроков (Только при параметре)
      if (this._shouldWaitPlayerOnSameMap === true) {
        this.setWait('playersOnMap');
      } else {
        this.bindingActors(); // * Присвоение персонажей
      }
    } else {
      // * Ждём игроков (при параметре и если новая игра (чтобы начать события например))
      if (this._shouldWaitPlayerOnSameMap === true || this.networkGameStarted === true) {
        this.setWait('playersOnMap');
      } else {
        this.onRefreshGameParty();
      }
    }
  };
  _.setWait = function(_waitMode) {
    this._waitMode = _waitMode;
    return HUIManager.showLoader(500);
  };
  _.resetWait = function() {
    this.setWait(null);
    return HUIManager.hideLoader();
  };
  //  * Все ли игроки на данной карте (и сцене)
  _.isAllPlayerOnSameMap = function() {
    //TODO: проверка что на сцене отдельно
    return this.playersData.every(function(p) {
      return p.mapId === $gameMap.mapId();
    });
  };
  // * Другие игроки (кроме этого клиента)
  _.anotherPlayers = function() {
    var myIndex;
    myIndex = this.myIndex();
    return this.playersData.filter(function(p) {
      return p.index !== myIndex;
    });
  };
  // * Все игроки (кроме клиента) на текущей карте (именно на карте, не обязательно на Сцене карты)
  _.anotherPlayersOnMap = function() {
    return this.anotherPlayers().filter(function(p) {
      return NetPlayerDataWrapper.isCharOnMap(p);
    });
  };
  // * Все ли игроки настроили персонажей
  _.isAllPlayersActorsReady = function() {
    return this.playersData.every(function(p) {
      return p.characterReady === true;
    });
  };
  // * Обновить иконку состояния игроков
  _.refreshNetworkStates = function() {
    var char, i, len, p, players, stateId;
    if (!ANET.PP.isShowNetworkIcons()) {
      return;
    }
    // * Используется _, так как метод вызывается в отдельном потоке тоже
    players = this.anotherPlayersOnMap();
    for (i = 0, len = players.length; i < len; i++) {
      p = players[i];
      stateId = NetPlayerDataWrapper.getRequestedNetworkState(p);
      char = NetPlayerDataWrapper.getNetCharacterForPlayer(p);
      if (char != null) {
        char.requestNetworkStateIcon(stateId);
      }
    }
  };
  // * Задаём игрового персонажа
  _.bindingActors = function() {
    "START BINDING ACTORS".p();
    this.networkGameStarted = false;
    if (ANET.PP.isActorSelectionAllowed() || ANET.Utils.isLoadGameRoom()) {
      this.actorBingingFromSelection();
    } else {
      this.staticActorBinging();
    }
  };
  // * Персонаж, выбранный из списка
  _.actorBingingFromSelection = function() {
    // * Так как персонаж уже был выбран в лобби, то сразу отправляем готовнотсть
    ANPlayersManager.sendActorReady();
  };
  // * Статический режимм присвоения персонажа
  _.staticActorBinging = function() {
    var actorId;
    // * -1, так как myIndex начинается с 1, а массив с 0
    actorId = ANET.PP.actorsForNetwork()[this.myIndex() - 1];
    //  * Пытаемся зарезервировать персонажа
    ANPlayersManager.sendBindActorFromGame(actorId);
  };
  // * Ожидание данных (игроков) от сервера
  _.updateWaiting = function() {
    if (!this.isShouldWaitServer()) {
      return;
    }
    switch (this._waitMode) {
      case 'playersOnMap':
        if (this.isAllPlayerOnSameMap()) {
          this.resetWait();
          this._shouldWaitPlayerOnSameMap = false;
          if (this.networkGameStarted === true) {
            this.bindingActors();
          }
        }
        break;
      case 'playersActors':
        if (this.isAllPlayersActorsReady()) {
          this.resetWait();
          this.startGame();
        }
        break;
    }
  };
  // * Начать игру (когда все уже определились с персонажами)
  // * just wait manul reset
  // * Ждёт когда ожидание будет сброшено вручную
  _.startGame = function() {
    "READY TO START GAME".p();
    ANMapManager.sendInitialMapData();
    if (!ANET.Utils.isLoadGameRoom()) {
      this.showStartGameChatMessage();
    }
  };
  // * Приветственное сообщение (системное) в чат
  _.showStartGameChatMessage = function() {
    var message;
    if (!ANET.PP.isGameChatAllowed()) {
      return;
    }
    message = ANET.PP.getChatStartMessage();
    if (!String.any(message)) {
      return;
    }
    ANET.UI.addMessageToChat(ANET.Utils.buildChatMessage(0, 0, message));
  };
  // * Когда игрок покидает игру (disconnect)
  _.anotherPlayerLeaveGame = function(actorId) {
    var ceId;
    LOG.p("Player leave game");
    ceId = ANET.PP.getPlayerLeaveGameCommonEventId();
    if (ceId > 0) {
      $gameTemp.reserveCommonEvent(ceId);
    }
  };
  // * После подключения к уже запущенной игре, надо произвести
  // * корректировки данных
  _.applyJoinedDataCorrects = function() {
    var e, ev, i, len, ref, results;
    try {
      // * Убираем любое запущенное событие
      $gameMap._interpreter = new Game_Interpreter();
      // * Чистим золото и вещи
      //TODO: Может опцию сделать?
      $gameParty._gold = 0;
      $gameParty._weapons = {};
      $gameParty._armors = {};
      $gameParty._items = {};
      $gameParty._inBattle = false;
      ref = $gameMap._events;
      // * Отключаем запущенные события
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        ev = ref[i];
        if (ev == null) {
          continue;
        }
        results.push(ev._starting = false);
      }
      return results;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendSceneChanging = function() {
    var sceneType;
    sceneType = "unknown";
    // * Тут не учитывается наследовательность, определяется точный класс через ===
    // * Чтобы на всех сценах, кроме карты была иконка, сделал через unless
    // * Это лучше, чем проверять все все сцены
    if (!SceneManager.isNextScene(Scene_Map)) {
      sceneType = "menu";
    }
    if (SceneManager.isNextScene(Scene_Battle)) {
      sceneType = "battle";
    }
    if (SceneManager.isNextScene(Scene_NetChatInput)) {
      sceneType = "chat";
    }
    if (SceneManager.isNextScene(Scene_NetworkInGameTrade)) {
      sceneType = "trade";
    }
    ANNetwork.send(NMS.Game("sceneChange", sceneType));
  };
  // * Это запрос от мастер клиента на другие клиенты, что надо выполнить сохранение
  _.sendSaveDataRequest = function(savefileId) {
    var data;
    data = {
      uniqueSaveID: $gameTemp.nUniqueSaveID,
      savefileId: savefileId
    };
    ANNetwork.send(NMS.Game("saveDataRequest", data));
  };
  // * Это ответ от клиента, что он выполнил сохранение
  _.sendSaveDataCompleteFlag = function() {
    ANNetwork.send(NMS.Game("saveDataComplete", this.myActorId()));
  };
  // * Отправить сообщение в чат от текущего клиента
  _.sendMyChatMessage = function(channelId, message) {
    this.sendRawChatMessage(channelId, this.myActorId(), message);
  };
  _.sendRawChatMessage = function(channelId, actorId, message) {
    var data;
    data = ANET.Utils.buildChatMessage(channelId, actorId, message);
    ANNetwork.callback(NMS.Game("chatMessage", data), function() {
      ANET.UI.addMessageToChat(data);
      return ANET.UI.addEmotionToChat(data);
    });
  };
  // * Запрос мастера игры (комнаты) на данные игрового мира
  // * (При подключении к уже запущенной игре)
  _.sendStartedRoomGameDataRequest = function(onResponce, onTimeout) {
    ANClientResponceManager.sendResponce(NMS.Game("startedRoomGameDataRequest"), onResponce, onTimeout, 5000, "Joining to the game...");
  };
  _.sendStartedRoomDataRespone = function(whoRequestId) {
    var e, gameData;
    try {
      // * Сохраняем данные о текущем мире (игре)
      gameData = DataManager.makeSaveContents();
      if (KDCore.isMZ()) {
        // * Тут нельзя редактировать gameData
        return StorageManager.saveObjectForNet(gameData).then(function() {
          // * Отправляем обратно тому кто запросил
          ANNetwork.send(NMS.Game("startedRoomGameData", {
            whoRequestId,
            gameData: $gameTemp._startedRoomGameDataResponse
          }));
          return $gameTemp._startedRoomGameDataResponse = null; // * В MV другая реализация сохранения и загрузки данных
        });
      } else {
        gameData = JsonEx.stringify(DataManager.makeSaveContents());
        return ANNetwork.send(NMS.Game("startedRoomGameData", {whoRequestId, gameData}));
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.sendJoinedToStartedGame = function() {
    var e;
    try {
      return ANNetwork.send(NMS.Game("someoneJoinedToStartedGame"));
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  // * Когда один игрок применяе предмет (навык) из меню на другого игрока
  _.sendUseItemFromMenuAction = function(action, target) {
    var data, e;
    try {
      data = {
        action,
        target: ANET.Utils.packBattlerForNetwork(target)
      };
      return ANNetwork.send(NMS.Common("custom_applyItemFromMenu", data));
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================

  //? СОБЫТИЯ (обработка событий от сервера, вызываются из NETClientMethodsManager)
  // * ===============================================================
  _.onPlayerName = function(playerId, name) {
    var playerData;
    if (this.isPlayerDataExists()) {
      playerData = this.getPlayerDataById(playerId);
      if (playerData != null) {
        playerData.name = name;
      }
    } else {

    }
  };
  // * Данные об игроках в комнате (подключился, ушёл и т.д.)
  // * Тут архитектурная ошибка или просчёт, суть в том, что когда покидаешь комнату,
  // * приходят данные о игроках команты, а текущего клиента нету, а так как идёт
  // * замена полностью (присваивание), теряются данные текущего игрока
  // * Поэтому проверяется, если данных текущего клиента нету (а это невозможно)
  // * то мы их снова добавляем
  //  * Значит смена имени игрока, с которым мы не в комнате
  // Пока ничего не делаем, так как не видим всех игроков на сервере
  _.onRoomPlayers = function(data) {
    var myPlayerData;
    // * Копия наших данных
    myPlayerData = this.myPlayerData();
    this.playersData = data;
    // * Если наших данных нету (когда покинули комнату бывает такое)
    // * добавляем копию своих данных
    if (!this.getPlayerDataById(ANNetwork.myId())) {
      this.playersData.push(myPlayerData);
    }
  };
  // * Данные (состояния) об игроках (NetPlayer Data новые)
  _.onGamePlayers = function(data) {
    this.onRoomPlayers(data);
    // * Проверить состояние для всех игроков (иконки)
    this.refreshNetworkStates();
    $gameMap.nSafeRefresh();
  };
  // * Когда кто-то из игроков выбрал своего персонажа (готов к игре)
  _.onRefreshGameParty = function() {
    var i, len, plData, ref;
    $gameParty.nClearBeforeRefresh();
    ref = this.playersData;
    for (i = 0, len = ref.length; i < len; i++) {
      plData = ref[i];
      if (NetPlayerDataWrapper.isHaveCharacterInGame(plData)) {
        $gameParty._actors.push(plData.actorId);
      }
    }
    $gameParty.nRefreshSharedMembers();
    $gamePlayer.refresh();
    $gameMap.nSafeRefresh();
    KDCore.GEventsManager.call("netzRefreshNameplate");
  };
  _.onLeaveRoom = function() {
    // * Удаляем остальных игроков, оставляем себя
    return this.createMyPlayerData();
  };
  // * Этот метод получают все игроки (и тот кто присоединился)
  _.onPlayerJoinedThisGame = function(joinedPlayerId) { // * EMPTY
    var joinedCE;
    "JOINED TO GAME".p(joinedPlayerId);
    if (joinedPlayerId !== ANNetwork.myId()) {
      return;
    }
    if (ANET.PP.isActorSelectionAllowed()) {
      this.actorBingingFromSelection();
    } else {
      this.staticActorBinging();
    }
    joinedCE = ANET.PP.getJoinedRoomCommonEvent();
    if (joinedCE > 0) {
      $gameTemp.reserveCommonEvent(joinedCE);
    }
  };
})();

//@[EXTEND]
window.NGAME = ANGameManager;


// Generated by CoffeeScript 2.6.1
// * Специальные методы передачи данных для патчей совместимости
ANET.CFIX = function() {};

(function() {
  var _;
  //@[DEFINES]
  _ = ANET.CFIX;
  _.onCustomCommand = function(name, data) {
    var e;
    try {
      if (!name.contains("CFIX")) {
        return;
      }
      return this.processCustomCommand(name, data);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.send = function(name, data) {
    var e;
    if (!ANNetwork.isConnected()) {
      return;
    }
    // * Внешняя команда была, т.е. не отправляем снова, чтобы не было stackOverflow
    if ($gameTemp._netzCfixLocalOnly === true) {
      $gameTemp._netzCfixLocalOnly = false;
      return;
    }
    try {
      console.log("NETZ CFIX: SEND CUSTOM COMMAND: " + name);
      name = "CFIX_" + name;
      data.myId = ANNetwork.myId();
      nAPI.sendCustomCommand(name, data);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.isCommandFromThisClient = function(data) {
    if (data == null) {
      // * true в случае ошибок, чтобы не выполнять комманду
      return true;
    }
    if (data.myId == null) {
      return true;
    }
    return data.myId === ANNetwork.myId();
  };
  _.processCustomCommand = function(name, data) {
    var cmd, e;
    try {
      // * Только другие участники получают команду
      if (this.isCommandFromThisClient(data)) {
        return;
      }
      name = name.replace("CFIX_", "");
      console.log("NETZ CFIX: ON CUSTOM COMMAND: " + name);
      cmd = "on_" + name;
      if (ANET.CFIX[cmd] != null) {
        console.log("...execute...");
        ANET.CFIX[cmd](data);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.callLocalOnly = function(method) {
    var e;
    try {
      $gameTemp._netzCfixLocalOnly = true;
      if (method == null) {
        return;
      }
      method();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]
var DataObserver;

DataObserver = class DataObserver {
  constructor(_checkTime = 0, _instante = false) {
    this._checkTime = _checkTime;
    this._instante = _instante;
    this._fields = {};
    this._isDataChanged = false;
    this._isShouldSkipCheck = false;
    this._timer = 0;
    return;
  }

  // * отправка без проверки изменений (по таймеру, если задан)
  setInstanteMode() {
    return this._instante = true;
  }

  // * проверка изменений (по таймеру, если задан)
  setCheckMode() {
    return this._instante = false;
  }

  // * не проверять изменения, устанавливать флаг _isDataChanged сразу (по истечению таймера)
  setCheckInterval(_checkTime) {
    this._checkTime = _checkTime;
  }

  // * Пропустить проверку данных, например когда данные пришли от сервера
  skip() {
    return this._isShouldSkipCheck = true;
  }

  addFields(obj, fieldsList) {
    var f, i, len;
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      this.readField(obj, f);
    }
  }

  removeFields(fieldsList) {
    var f, i, len, results;
    results = [];
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      results.push(delete this._fields[f]);
    }
    return results;
  }

  // * Прочитать все значения с объекта
  refreshAll(obj) {
    var f;
    for (f in this._fields) {
      this.readField(obj, f);
    }
    return this._isDataChanged = false;
  }

  readField(obj, field) {
    return this._fields[field] = obj[field];
  }

  check(obj) {
    var f;
    // * Если данные изменены, но зачем снова проверять?
    // * Всё равно не отслеживается какое именно поле было изменнено
    if (this.isDataChanged()) {
      return;
    }
    this._timer--;
    // * Если таймер, то ждём, не проверяем
    if (this._timer > 0) {
      return;
    }
    this._timer = this._checkTime;
    // * Если надо пропустить проверку, то пропускаем
    if (this._isShouldSkipCheck === true) {
      this._isShouldSkipCheck = false;
      return;
    }
    // * Если постоянное обновление, то сразу флаг и пропускаем проверку
    if (this._instante === true) {
      this._isDataChanged = true;
      return;
    }
    for (f in this._fields) {
      if (obj[f] !== this._fields[f]) {
        this._isDataChanged = true;
        break;
      }
    }
  }

  isDataChanged() {
    return this._isDataChanged === true;
  }

  // * Получить данные всех полей для отправки на сервер
  getDataForNetwork(obj) {
    this.refreshAll(obj);
    return this._fields;
  }

  // * Установить данные всех полей, когда пришли с сервера
  setDataFromNetwork(obj, observerData) {
    var f;
    for (f in this._fields) {
      obj[f] = observerData[f];
    }
    this.refreshAll(obj);
  }

};


// Generated by CoffeeScript 2.6.1
//$[ENCODE]

//@[GLOBAL]
window.NetClientMethodsManager = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetClientMethodsManager.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NET Client");
  LOG.setColors(KDCore.Color.MAGENTA.reAlpha(200), KDCore.Color.BLACK.getLightestColor(200));
  LOG.on();
  //@[DEFINES]
  _ = window.NetClientMethodsManager;
  _.setConnectionToMasterCallback = function(onConnectCallback) {
    this.onConnectCallback = onConnectCallback;
  };
  _.onConnect = function() {
    LOG.p("Connected");
    // * Проверка версии сервера и клиента на соответствие
    ANNetwork.callback(NMS.Lobby("serverVerCheck", ANET.MinServerRev), function(result) {
      if (!result) {
        LOG.p("Server is outdated, require rev. " + ANET.MinServerRev + " or higher");
        window.alert("Server version is outdated for this Alpha NET Z version " + (ANET.Version / 100));
        return ANNetwork.stop();
      }
    });
    if (this.onConnectCallback != null) {
      return this.onConnectCallback(1);
    }
  };
  _.onDisconnect = function() {
    var ref;
    LOG.p("Disconnected");
    // * Общее событие на все сцены
    if ((ref = SceneManager._scene) != null) {
      ref.onLostConnection();
    }
    HUIManager.notifyError("Disconnected from server");
    return ANNetwork.stop();
  };
  _.onConnectionError = function() {
    LOG.p("Can't connect to server!");
    if (this.onConnectCallback != null) {
      this.onConnectCallback(0);
    }
    return ANNetwork.stop();
  };
  // * Существует ли метод для обработки команды от сервера?
  _.isExistPrcEvent = function(eventHandlerMethodName) {
    return NetClientMethodsManager["event_" + eventHandlerMethodName] != null;
  };
  // * Выполнить команду от сервера
  _.handlePrcEvent = function(eventHandlerMethodName, content) {
    var noLog;
    noLog = ["game_observerData", "map_eventMove", "map_playerMove", "battle_battleMethod", "battle_battleMethodReceived"].contains(eventHandlerMethodName);
    if (!noLog) {
      LOG.p("Handle Event: " + eventHandlerMethodName);
    }
    NetClientMethodsManager["event_" + eventHandlerMethodName](content);
    // * Вызвать метод на сцене, если он существует
    // * Сцена уже сама знает, надо ей обновить (перерисовать) что-то или нет,
    // * определяет по имени метода
    // * С версии 0.7 появились общие комманды, их можно обрабатывать на сцене с учётом имени самой команды
    if (eventHandlerMethodName === "common_forClients" && (content != null) && String.any(content.cmd)) {
      this.callSceneCallback(eventHandlerMethodName + "_" + content.cmd);
    } else {
      this.callSceneCallback(eventHandlerMethodName);
    }
    if (!noLog) {
      LOG.p("Event End: " + eventHandlerMethodName);
    }
  };
  _.callSceneCallback = function(eventName) {
    var ref;
    return (ref = SceneManager._scene) != null ? ref.onServerEvent(eventName) : void 0;
  };
  //? ОБРАБОТКА КОМАНД ОТ СЕРВЕРА
  // * =========================================================================

  //TODO: Это возможно и не нужно, так как игрок имя может поменять только перед входом в комнату( созданием)
  _.event_lobby_changePlayerName = function(content) {
    return ANGameManager.onPlayerName(content.who, content.name);
  };
  _.event_lobby_refreshRoomData = function(content) {
    if (SceneManager.isBusyForNetworkData()) {
      return;
    }
    ANGameManager.onRoomPlayers(content.playersData);
    return ANNetwork.onRoomDataFromServer(content.room);
  };
  _.event_lobby_roomClosed = function(content) {
    return ANNetwork.onRoomClosed();
  };
  _.event_lobby_startGame = function() {
    ANGameManager.setupNewNetworkGame();
    return "STARTING GAME".p();
  };
  _.event_lobby_chatMessage = function(content) {
    var e;
    try {
      return HUIManager.onChatMessageFromServer(content);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _.event_game_playersData = function(content) {
    ANGameManager.onGamePlayers(content);
    return "GAME PLAYERS DATA REFRESHED".p();
  };
  _.event_game_refreshParty = function() {
    ANGameManager.onRefreshGameParty();
    return "REFRESH PARTY".p();
  };
  _.event_game_observerData = function(content) {
    var e;
    try {
      return ANSyncDataManager.onObserverData(content.id, content.type, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_game_observerData", e);
    }
  };
  _.event_game_variable = function(content) {
    var e;
    try {
      return ANSyncDataManager.onVariableValue(content.id, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_game_variable", e);
    }
  };
  _.event_game_switch = function(content) {
    var e;
    try {
      return ANSyncDataManager.onSwitchValue(content.id, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_game_switch", e);
    }
  };
  _.event_game_saveDataRequest = function(content) {
    var e;
    try {
      $gameTemp.nUniqueSaveID = content.uniqueSaveID;
      // * Сохранение выполненно
      $gameSystem.onBeforeSave();
      DataManager.saveGame(content.savefileId);
      //TODO: Тут желательно ждать положительный результат, но пока сразу отправим флаг
      return ANGameManager.sendSaveDataCompleteFlag();
    } catch (error) {
      e = error;
      return console.warn("event_game_saveDataRequest", e);
    }
  };
  _.event_game_saveDataComplete = function(content) {
    var e, savedActorId;
    try {
      // * Если данный клиент не запускал сохранение, то игнор
      if ($gameTemp.nSaveData == null) {
        return;
      }
      savedActorId = content;
      //console.log(savedActorId)
      return $gameTemp.nSaveData.onAnswer(savedActorId, true);
    } catch (error) {
      e = error;
      return console.warn("event_game_saveDataComplete", e);
    }
  };
  _.event_game_chatMessage = function(content) {
    var channelId, e, mapId;
    try {
      mapId = content.mapId;
      channelId = content.channelId;
      if (channelId > 0) { // * MAP
        if ((mapId != null) && mapId === $gameMap.mapId()) {
          return ANET.UI.addMessageToChat(content);
        }
      } else {
        return ANET.UI.addMessageToChat(content);
      }
    } catch (error) {
      e = error;
      return console.warn("event_game_chatMessage", e);
    }
  };
  _.event_game_startedRoomGameDataRequest = function(content) {
    var e;
    try {
      // * Эта проверка не обязательная, сервер только матеру отправляет
      if (!ANNetwork.isMasterClient()) {
        return;
      }
      return ANGameManager.sendStartedRoomDataRespone(content);
    } catch (error) {
      e = error;
      return console.warn("event_game_startedRoomGameDataRequest", e);
    }
  };
  _.event_game_startedRoomGameData = function(content) {
    var e, id;
    try {
      // * Тут через ANClientResponceManager
      id = "game_startedRoomGameDataRequest";
      return ANClientResponceManager.onResponceReceived(id, content);
    } catch (error) {
      e = error;
      return console.warn("event_game_startedRoomGameDataRequest", e);
    }
  };
  _.event_game_someoneJoinedToStartedGame = function(content) {
    var e;
    try {
      return ANGameManager.onPlayerJoinedThisGame(content);
    } catch (error) {
      e = error;
      return console.warn("event_game_someoneJoinedToStartedGame", e);
    }
  };
  _.event_map_playerMove = function(content) {
    var e;
    try {
      return ANPlayersManager.onPlayerMove(content.id, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_map_playerMove", e);
    }
  };
  _.event_map_playerLocation = function(content) {
    var e;
    try {
      return ANPlayersManager.onPlayerLocation(content.id, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_map_playerLocation", e);
    }
  };
  _.event_map_eventMove = function(content) {
    var e;
    try {
      return ANMapManager.onEventMove(content.mapId, content.id, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_map_eventMove", e);
    }
  };
  // * Если пришёл этот метод, то надо отправить данные свои на карте, для синхронизации
  _.event_map_initialMapSynchronization = function(content) {
    var e;
    try {
      if ($gameMap.mapId() === content) {
        return ANMapManager.onInitialMapSync();
      }
    } catch (error) {
      e = error;
      return console.warn("event_map_eventMove", e);
    }
  };
  _.event_event_virtualEventCommand = function(content) {
    var e;
    try {
      return ANInterpreterManager.onVirtualCommand(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_virtualEventCommand", e);
    }
  };
  _.event_battle_battleMethod = function(content) {
    var e;
    try {
      return ANBattleManager.onBattleMethod(content.id, content.method, content.data);
    } catch (error) {
      e = error;
      return console.warn("event_battle_battleMethod", e);
    }
  };
  _.event_battle_animation = function(content) {
    var e;
    try {
      return ANBattleManager.onBattleAnimation(content);
    } catch (error) {
      e = error;
      return console.warn("event_battle_animation", e);
    }
  };
  _.event_battle_battleMethodReceived = function(content) {
    var e;
    try {
      return ANBattleManager.onBattleMethodReceived();
    } catch (error) {
      e = error;
      return console.warn("event_battleMethodReceived", e);
    }
  };
  _.event_battle_logMessage = function(content) {
    var e;
    try {
      return ANBattleManager.onLogWindowMessage(content.cmd, content.text);
    } catch (error) {
      e = error;
      return console.warn("event_battle_logMessage", e);
    }
  };
  _.event_battle_input = function(content) {
    var e;
    try {
      return ANBattleManager.onBattleInputState(content.inputState, content.inputActorId);
    } catch (error) {
      e = error;
      return console.warn("event_battle_input", e);
    }
  };
  _.event_battle_inputAction = function(content) {
    var e;
    try {
      return ANBattleManager.onBattleInputAction(content.inputActorId, content.action);
    } catch (error) {
      e = error;
      return console.warn("event_battle_inputAction", e);
    }
  };
  _.event_battle_serverBattleData = function(content) {
    var e;
    try {
      // * Обновляем данные, затем вызывается уже event сцены битвы
      return ANBattleManager.onBattleDataFromServer(content);
    } catch (error) {
      e = error;
      return console.warn("event_battle_serverBattleData", e);
    }
  };
  _.event_battle_executeEncounter = function(content) {
    var e;
    try {
      "ENCOUNTER MAP BATTLE IN".p();
      return ANBattleManager.onExecuteEncounterBattle(content);
    } catch (error) {
      e = error;
      return console.warn("event_battle_executeEncounter", e);
    }
  };
  _.event_event_registerOnShared = function(content) {
    var e;
    try {
      "SHARED EVENT IN".p();
      return ANInterpreterManager.onRegisterOnSharedEventRequest(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_registerOnShared", e);
    }
  };
  _.event_event_registerDone = function(content) {
    var e;
    try {
      "SHARED EVENT ANSWER".p();
      return ANInterpreterManager.onRegisterOnSharedEventResponse(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_registerDone", e);
    }
  };
  _.event_event_sharedCanContinue = function(content) {
    var e;
    try {
      "SHARED EVENT CAN CONTINUE".p();
      return ANInterpreterManager.onContinueSharedEvent(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_sharedCanContinue", e);
    }
  };
  _.event_event_sharedForceCancel = function(content) {
    var e;
    try {
      "SHARED EVENT FORCE CANCELLED".p();
      return ANInterpreterManager.onSharedEventForceCancelFromServer(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_sharedForceCancel", e);
    }
  };
  _.event_event_sharedChoice = function(content) {
    var e;
    try {
      "SHARED EVENT CHOICE ACTION".p();
      return ANInterpreterManager.onSharedEventChoiceActionFromServer(content);
    } catch (error) {
      e = error;
      return console.warn("event_event_sharedForceCancel", e);
    }
  };
  _.event_game_userCommand = function(content) {
    var data, e, name;
    try {
      "CUSTOM COMMAND IN".p();
      ({name, data} = content);
      return nAPI.onCustomCommand(name, data);
    } catch (error) {
      e = error;
      return console.warn("event_game_userCommand", e);
    }
  };
  _.event_game_customCommandLink = function(content) {
    var commonEventId, e, name;
    try {
      "CUSTOM LINK IN".p();
      ({name, commonEventId} = content);
      return typeof $gameSystem !== "undefined" && $gameSystem !== null ? $gameSystem.nRegisterCustomCommandCE(name, commonEventId) : void 0;
    } catch (error) {
      e = error;
      return console.warn("event_game_userCommand", e);
    }
  };
  // * Обработка общих команд, которые имеют внутренний флаг cmd
  // * См. реализацию NMS.Common в NetMessages.coffee
  //? ТОЛЬКО НА ДРУГИХ КЛИЕНТАХ, а не на том кто отправил!
  _.event_common_forClients = function(content) {
    var cmd, data, e;
    try {
      ({cmd, data} = content);
      //TODO: Более удобную структуру чем else if
      if (cmd.contains("trade")) {
        return ANTradeManager.onCommonCommandFromServer(cmd, data);
      } else if (cmd.contains("applyItemFromMenu")) {
        return Game_Action.NApplyFromMenuFromNetwork(data);
      } else if (cmd.contains("nameplates")) {
        return ANPlayersManager.onPlayersNameplatesStyles(data);
      } else {
        return console.warn("Unknown common subCommand " + cmd);
      }
    } catch (error) {
      e = error;
      return console.warn("event_common_forClients", e);
    }
  };
  // * Обработка выделенной общей команды для плагина Alpha ABS Z
  _.event_common_absz = function(content) {
    var cmd, data, e;
    try {
      ({cmd, data} = content);
      return NetClientMethodsManager.event_aabz(cmd, data);
    } catch (error) {
      e = error;
      return console.warn("event_common_absz", e);
    }
  };
  //@[FOR OVERRIDE]
  // * Отдельный метод, который должен быть переопределён в плагине AABSZ
  _.event_aabz = function(name, data) { // * for AABS Z plugin implementation
    return "EVENT_AABSZ".p(name);
  };
})();

// ■ END NetClientMethodsManager.coffee
//---------------------------------------------------------------------------
//console.log(name)
//console.info(data)


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку данных в бою

//$[ENCODE]

//@[GLOBAL]
window.ANBattleManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetBattle");
  LOG.setColors(KDCore.Color.RED, KDCore.Color.BLACK.getLightestColor(135));
  LOG.on();
  //@[DEFINES]
  _ = window.ANBattleManager;
  _.isBattleMaster = function() {
    if (this.battleData != null) {
      return this.battleData.actors[0] === ANGameManager.myActorId();
    } else {
      return $gameParty.inBattle();
    }
  };
  _.isBattleRegistred = function() {
    return this.battleData != null;
  };
  _.isBattleLocal = function() {
    if (this.battleData != null) {
      return this.battleData.isLocal;
    } else {
      return true;
    }
  };
  _.isShouldWaitServer = function() {
    return this._waitMode != null;
  };
  _.battleMembers = function() {
    if (this.isBattleRegistred()) {
      return this.battleData.actors.map(function(a) {
        return $gameActors.actor(a);
      });
    } else {
      return [$gameParty.leader()];
    }
  };
  _.setWait = function(_waitMode) {
    this._waitMode = _waitMode;
    this._waitPool = 0;
    this._waitTimeout = 360;
    return HUIManager.showLoader(1000);
  };
  _.resetWait = function() {
    this.setWait(null);
    return HUIManager.hideLoader();
  };
  _.update = function() {
    if (this.isShouldWaitServer()) {
      if (this._waitTimeout <= 0) {
        LOG.p("TIME OUT");
        this.resetWait();
      } else {
        this._waitTimeout--;
        this.updateWaiting();
      }
    } else {
      if (this._battleMethodsPool.length > 0) {
        this._callBattleMethodOnServer(...this._battleMethodsPool.shift());
      }
      if (HUIManager.isLoaderActive()) {
        HUIManager.hideLoader();
      }
    }
  };
  // * Ожидание данных (игроков) от сервера
  _.updateWaiting = function() {
    if (!this.isShouldWaitServer()) {
      return;
    }
    "WAIT".p(this._waitPool);
    switch (this._waitMode) {
      case 'battleMethod':
        if (this._waitPool === $gameParty.battleMembers().length) {
          this.resetWait();
        }
    }
  };
  _.updateInputChange = function() {
    if ($gameParty.isOneBattler()) {
      return;
    }
    if (this._lastBattleManagerInputActor !== BattleManager._currentActor) {
      this._lastBattleManagerInputActor = BattleManager._currentActor;
      this.sendInputState();
    } else if (this._lastBattleManagerInputValue !== BattleManager._inputting) {
      this._lastBattleManagerInputValue = BattleManager._inputting;
      this.sendInputState();
    }
  };
  _.registerOnLocalBattle = function() {
    this.battleData = {
      isLocal: true,
      battleId: "local",
      actors: [ANGameManager.myActorId()]
    };
    LOG.p("STARTED LOCAL BATTLE");
  };
  _.onBattleStarted = function() {
    this._battleMethodsPool = [];
    this._lastBattleManagerInputValue = false;
    this._lastBattleManagerInputActor = null;
    this.sendBattleStarted();
  };
  _.onBattleEnd = function() {
    if (!this.isBattleLocal()) {
      this.sendBattleEnded();
    }
    this.battleData = null;
  };
  _.callBattleMethod = function(battler, method, args) {
    // * Если в бою только один игрок, то ничего не отправляем (чтобы не грузить сеть)
    if ($gameParty.isOneBattler()) {
      return;
    }
    if (ANET.PP.isForceBattleSyncMode()) {
      if (this._battleMethodsPool == null) {
        this._battleMethodsPool = [];
      }
      this._battleMethodsPool.push([battler, method, args]);
    } else {
      this._callBattleMethodOnServer(battler, method, args);
    }
  };
  
  // * Отправка метод из очереди (используется в режиме Force Battle Sync)
  _._callBattleMethodOnServer = function(battler, method, args) {
    "CALL BATTLE METHOD".p();
    // * Обновим данные перед методом битвы
    // * Без этого был баг, что приходил collapse эффект, а hp = 0 уже после
    ANSyncDataManager.sendBattlerObserver(battler);
    // * На всякий случай, чтобы не сбивать основную логику обновления
    battler.netDataObserver._isDataChanged = true;
    this.sendBattleMethod(method, battler.packForNetwork(), args);
    if (ANET.PP.isForceBattleSyncMode()) {
      // * Будем ждать игроков
      this.setWait('battleMethod');
      this._waitPool += 1; // * Мы уже готовы (мастер боя)
    }
  };
  // * Анимация в бою
  _.requestAnimation = function(targets, animationId, mirror = false) {
    var converted, data;
    if ($gameParty.isOneBattler()) {
      return;
    }
    converted = targets.map(function(t) {
      return t.packForNetwork();
    });
    data = {
      animationId: animationId,
      mirror: mirror,
      targets: converted
    };
    this.sendBattleAnimation(data);
  };
  // * Персонаж данного игрока сделал выбор в бою (ввод команды)
  _.battleInputActionDone = function() {
    var action;
    action = BattleManager.inputtingAction();
    // * Логика боя в MV другая, поэтому доп. проверка
    if (KDCore.isMV()) {
      if (action == null) {
        return;
      }
    }
    this.sendBattleInputAction(ANGameManager.myActorId(), action);
  };
  // * Регистрация на битву
  _.registerOnBattle = function(battleData) {
    LOG.p("Try register battle: " + battleData.battleId);
    return this.sendRegisterOnBattle(battleData);
  };
  // * Регистрация (вступление в битву) которая уже была начата
  _._registerToExistsSharedBattle = function() {
    LOG.p("Join Shared battle");
    $gameTemp._requestInitialSharedBattleRefresh = true;
  };
  // * Запуск глобальный битвы через Map Encounter
  _.executeMapEncounterBattle = function(troopId) {
    var battleId, e;
    try {
      // * Создаём ID
      battleId = KDCore.makeId(4);
      // * Регестрируем битву
      BattleManager.nSetNetworkBattle(battleId);
      // * Отправляем на сервер (другим игрокам)
      return this.sendExecuteEncounterBattleRequest({
        battleId,
        mapId: $gameMap.mapId(),
        troopId
      });
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================

  // * Отправить выбранное игроком (в битве) действие
  _.sendBattleInputAction = function(inputActorId, action) {
    ANNetwork.send(NMS.Battle("inputAction", {action, inputActorId}));
  };
  // * Отправить изменение состояния ввода
  _.sendInputState = function() {
    var inputActorId, inputState;
    inputState = BattleManager._inputting;
    if (BattleManager._currentActor != null) {
      inputActorId = BattleManager._currentActor.actorId();
    } else {
      inputActorId = null;
    }
    ANNetwork.send(NMS.Battle("input", {inputState, inputActorId}));
  };
  // * Отправить команду WindowLog на сервер
  _.sendWindowLogMessage = function(cmd, text) {
    ANNetwork.send(NMS.Battle("logMessage", {cmd, text}));
  };
  _.sendBattleStarted = function() {
    return ANNetwork.send(NMS.Battle("started"));
  };
  _.sendBattleEnded = function() {
    return ANNetwork.send(NMS.Battle("ended"));
  };
  _.sendBattleMethod = function(methodName, id, args) {
    var data;
    data = {
      method: methodName,
      id: id,
      data: args
    };
    ANNetwork.send(NMS.Battle("battleMethod", data), true);
  };
  _.sendBattleAnimation = function(data) {
    ANNetwork.send(NMS.Battle("animation", data));
  };
  _.sendBattleMethodReceived = function() {
    ANNetwork.send(NMS.Battle("battleMethodReceived"));
  };
  _.sendRegisterOnBattle = function(battleData) {
    ANNetwork.get(NMS.Battle("register", battleData), function(result) {
      return ANBattleManager.onBattleRegisterResult(result);
    }, function() {
      // * Снять флаг сетевой битвы (чтобы сцена Start выполнела)
      BattleManager.nSetNetworkBattle(null);
      // * Запускаем локальную битву (чтобы battleData существовал)
      return ANBattleManager.registerOnLocalBattle();
    });
  };
  _.sendExecuteEncounterBattleRequest = function(battleData) {
    return ANNetwork.send(NMS.Battle("executeEncounter", battleData));
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.onBattleDataFromServer = function(battleData) {
    // * Если этот клиент не участвует в битве, то ничего
    if (!this.isBattleRegistred()) {
      return;
    }
    // * Если я в локальной битве (сам), то меня не касается
    if (this.isBattleLocal()) {
      return;
    }
    // * Данные битвы касаются моей битвы?
    if (this.battleData.battleId === battleData.battleId) {
      $gameTemp._previousNetBattleActors = [...this.battleData.actors];
      this.battleData = battleData;
    }
  };
  _.onBattleRegisterResult = function(result) {
    var _evCallback;
    "REGISTER SUCCESS".p();
    this.battleData = result;
    // * Эта команда обязательно должны быть ниже этой @battleData = result
    // * После регистрации на сетевую битву, устанавливается Troop
    // * из сервера, чтобы у всех одинаковый был
    // * Чтобы не сбросился callback результата битвы, переносим его
    // * Так как initMembers получается второй раз вызывается
    _evCallback = BattleManager._eventCallback;
    BattleManager.setup(...result.options);
    if (_evCallback != null) {
      BattleManager.setEventCallback(_evCallback);
    }
    "SETUP".p(result.options);
    console.info(result);
    if (!this.isBattleMaster()) {
      this._registerToExistsSharedBattle();
    }
  };
  // * С сервера пришла команда проиграть анимацию
  _.onBattleAnimation = function(data) {
    var e, targets;
    try {
      targets = data.targets.map(function(t) {
        return ANET.Utils.unpackBattlerFromNetwork(t);
      });
      $gameTemp.requestAnimation(targets, data.animationId, data.mirror);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * С сервера пришла команда (метод) боя
  _.onBattleMethod = function(battlerNetData, method, args) {
    var battler, e;
    try {
      //"BATTLE METHOD RECEIVED".p()
      // * Отправляю мастеру битвы информацию что я получил команду
      if (ANET.PP.isForceBattleSyncMode()) {
        this.sendBattleMethodReceived();
      }
      battler = ANET.Utils.unpackBattlerFromNetwork(battlerNetData);
      if (battler[method] != null) {
        //TODO: convert arguments
        battler[method](args);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Игрок принял команду боя
  _.onBattleMethodReceived = function() {
    var e;
    try {
      this._waitPool += 1;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Пришло изменение состояние ввода
  _.onBattleInputState = function(inputState, inputActorId) {
    var e;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      BattleManager._inputting = inputState;
      if (inputActorId === ANGameManager.myActorId()) {
        return BattleManager.nSetCurrentClientInput();
      } else {
        // * Если не мой персонаж, то никакого ввода
        return BattleManager.nClearClientInput();
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onBattleInputAction = function(inputActorId, action) {
    var e;
    try {
      if (!ANGameManager.isBattleMaster()) {
        return;
      }
      //TODO: Тут есть проблема в MV версии
      //? TypeError: Cannot read property 'setFromNetwork' of null
      // inputtingAction() - нету в MV
      //TODO: Проверка что inputActorId = BattleManager._currentActor.actorId()
      BattleManager.inputtingAction().setFromNetwork(action);
      // * Далее (продолжить бой)
      return BattleManager.selectNextCommand();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onLogWindowMessage = function(cmd, text) {
    var e, ref, ref1;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      switch (cmd) {
        case "add":
          if ((ref = BattleManager._logWindow) != null) {
            ref.addText(text);
          }
          break;
        default:
          if ((ref1 = BattleManager._logWindow) != null) {
            ref1.clear();
          }
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onExecuteEncounterBattle = function(battleData) {
    var battleId, e, mapId, timeRand, troopId;
    try {
      // * Данный метод приходит ДРУГИМ игрокам, помимо того, кто вызвал битву
      //?Пока просто выходим, если запущено событие
      if ($gameMap.isEventRunning()) {
        return;
      }
      if (KDCore.Utils.isSceneBattle()) {
        return;
      }
      if (battleData == null) {
        return;
      }
      ({battleId, mapId, troopId} = battleData);
      // * Нельзя на разных картах!
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Сбрасываем шаги до след. битвы у всех, чтобы не частить
      $gamePlayer.makeEncounterCount();
      // * Чтобы все игрока в одно времяя не начали
      // (чтобы кто-то первый (точно первый) зарегестрировал Shared битву)
      timeRand = Math.random() * 200;
      return setTimeout((function() {
        var e;
        try {
          // * Регестрируемся на Shared битву (как обычно)
          BattleManager.nSetNetworkBattle(battleId);
          // * Настраиваем битву
          BattleManager.setup(troopId, true, false);
          // * Начинаем битву
          return SceneManager.push(Scene_Battle);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }), timeRand);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку интерпретера и команд события

//$[ENCODE]

//@[GLOBAL]
window.ANInterpreterManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetIntr");
  LOG.setColors(KDCore.Color.YELLOW, KDCore.Color.BLACK.getLightestColor(15));
  LOG.on();
  //@[DEFINES]
  _ = window.ANInterpreterManager;
  // * Когда закончелось событие
  _.eventProcessExit = function() {
    if ($gameMessage.isBusy()) {
      $gameMessage.nSetEndCallback(_.eventProcessExit);
    } else {
      if (!$gameMap.isEventRunning()) {
        _.sendEventEnded();
        _.resetSharedEvent();
      }
    }
  };
  // * Дополнительная проверка что статус игрока соответсвует событию (запущено или нет)
  _.checkEventRunning = function() {
    var evId;
    if (NetPlayerDataWrapper.isOnAnyEvent(ANGameManager.myPlayerData())) {
      if (!$gameMap.isEventRunning()) {
        if (!$gameMessage.isBusy()) {
          this.sendEventEnded();
        }
      }
    } else {
      if ($gameMap.isEventRunning()) {
        evId = $gameMap._interpreter.eventId();
        this.sendEventStarted(evId);
      }
    }
  };
  // * Выполнить виртуальную команду (list) вне очереди (не ожидая сцены или другого события)
  // * mapId - ID карты не текущей, а того, от кого пришла команда (нужно для Self.Switch)
  _.startVirtualCommand = function(list, eventId, mapId) {
    var e, key, virtualInter;
    try {
      // * Self.Switch имеет отдельную обработку (так как mapId отличается)
      if (list[0].code === 123 && eventId > 0) {
        key = [mapId, eventId, list[0].parameters[0]];
        $gameSelfSwitches.setValue(key, list[0].parameters[1] === 0); // * Команда может быть только одна (всегда), поэтому else (больше команд нету)
      } else {
        virtualInter = new Game_Interpreter();
        virtualInter.setup(list, eventId);
        virtualInter.executeCommand(); // * force execute
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Выполнить комадну виртуально?
  _.isVirtualCommand = function(commandCode) {
    return !ANET.System.NonVirtualCommandsList.contains(commandCode);
  };
  // * Сброс общего события
  _.resetSharedEvent = function() {
    this._sharedInterpreter = null;
    this._sharedEventMaster = false;
    // * На всякий случай
    this.hideWaitPlayersOnSharedEvent();
  };
  // * Когда игрок запускает общее событие, оно регестрируется этим методом
  // * ссылка на сам interpreter и флаг - является ли игрок мастером - кто первый запустил
  _.setupSharedInterpreter = function(_sharedInterpreter, _sharedEventMaster) {
    this._sharedInterpreter = _sharedInterpreter;
    this._sharedEventMaster = _sharedEventMaster;
    // * Сброс флага необходимости закрытия (для клиентов)
    $gameTemp._shouldForceExitSharedEvent = false;
    // * Нельзя, если уже зарезервированно общее событие от сервера
    if ($gameTemp.isNetworkSharedEventReserved()) {
      return;
    }
    if (this._sharedInterpreter == null) {
      return;
    }
    LOG.p("Shared event registred " + this._sharedInterpreter.eventId());
  };
  // * Является ли данный клиент мастером общего события
  _.isSharedEventMaster = function() {
    return this.isSharedEventIsRunning() && this._sharedEventMaster === true;
  };
  _.isSharedEventIsRunning = function() {
    return (this._sharedInterpreter != null) && $gameMap.isEventRunning();
  };
  // * Отмена ожидания игроков (когда Shared mode == optional)
  _.forceCancelSharedEvent = function() {
    if (!this.isSharedEventMaster()) {
      return;
    }
    LOG.p("Shared event force cancelled");
    "SEND ALL CANCEL EVENT".p();
    this.sendForceCancelSharedEvent();
    this.hideWaitPlayersOnSharedEvent();
  };
  _.showWaitPlayersOnSharedEvent = function() {
    var text, text2;
    this.hideWaitPlayersOnSharedEvent();
    //TODO: Вынести все строки в параметры
    text = "Waiting players";
    text2 = "";
    if (this.isSharedEventMaster() && this._sharedInterpreter.nIsSharedEventCanBeForceCancelled()) {
      text2 = "Press ESC to cancel";
    }
    if (typeof HUIManager !== "undefined" && HUIManager !== null) {
      HUIManager.showWaitingInfo(text, text2, 1000);
    }
  };
  _.hideWaitPlayersOnSharedEvent = function() {
    return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.hideWaitingInfo() : void 0;
  };
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================

  // * Когда игрок запускает какое-либо событие
  _.sendEventStarted = function(eventId) {
    return ANNetwork.send(NMS.Event("eventStarted", eventId));
  };
  
  // * Когда игрок "выходит" из запущенного события
  _.sendEventEnded = function() {
    return ANNetwork.send(NMS.Event("eventEnded"));
  };
  
  // * Отправка виртуальной команды на сервер
  _.sendEventVirtualCommand = function(command, options, eventId) {
    var data, endCommand, vEvent;
    // * Эта команда всегда в конце
    endCommand = {
      code: 0,
      indent: 0,
      parameters: []
    };
    // * Модель общего события
    vEvent = {
      list: [command, endCommand]
    };
    data = {
      mapId: $gameMap.mapId(),
      eventId: eventId,
      event: vEvent,
      options: options
    };
    ANNetwork.send(NMS.Event("virtualEventCommand", data));
  };
  // * Отправка запроса чтобы все начали общее событие
  // * Игрок запустил общее событие и будет теперь ждать всех игроков (на карте)
  _.sendSharedEventRequireRegister = function() {
    var data;
    // * Только мастер может это отправить
    // * Плюс эта проверка гарантирует, что мы запустили событие
    if (!this.isSharedEventMaster()) {
      return;
    }
    data = {
      mapId: $gameMap.mapId(),
      eventId: this._sharedInterpreter.eventId(),
      index: this._sharedInterpreter.nSyncWaitCommandData.index,
      indent: this._sharedInterpreter.nSyncWaitCommandData.indent
    };
    ANNetwork.send(NMS.Event("registerOnShared", data));
  };
  // * Отправка ответа, что клиент зарегестрировался на общем событии
  _.sendSharedEventRegisteredDone = function() {
    var data;
    if (this.isSharedEventMaster()) {
      return;
    }
    data = {
      mapId: $gameMap.mapId(),
      eventId: this._sharedInterpreter.eventId(),
      actorId: ANGameManager.myActorId(),
      index: this._sharedInterpreter.nSyncWaitCommandData.index,
      indent: this._sharedInterpreter.nSyncWaitCommandData.indent
    };
    ANNetwork.send(NMS.Event("registerDone", data));
  };
  // * Мастер отправляет клиентам, что можно продолжать выполнение
  _.sendSharedEventReadyToContinue = function() {
    var data;
    if (!this.isSharedEventMaster()) {
      return;
    }
    data = {
      mapId: $gameMap.mapId(),
      eventId: this._sharedInterpreter.eventId()
    };
    ANNetwork.send(NMS.Event("sharedCanContinue", data));
  };
  // * Когда мастер общего события отменяет общее событие (на стадии ожидания игроков)
  _.sendForceCancelSharedEvent = function() {
    var data;
    if (!this.isSharedEventMaster()) {
      return;
    }
    data = {
      mapId: $gameMap.mapId(),
      eventId: this._sharedInterpreter.eventId()
    };
    ANNetwork.send(NMS.Event("sharedForceCancel", data));
  };
  _.sendChoiceSelection = function(index, action) {
    var data;
    if (!this.isSharedEventMaster()) {
      return;
    }
    data = {
      mapId: $gameMap.mapId(),
      eventId: this._sharedInterpreter.eventId(),
      index: index,
      action: action
    };
    ANNetwork.send(NMS.Event("sharedChoice", data));
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================

  // * Просто общее событие ждёт, а некоторые вещи можно сразу выполнять, не зависимо от того игрок находится в событии или нет
  _.onVirtualCommand = function(data) {
    var e, event, list;
    try {
      // * Если только на одой карте, то проверяем номер карты
      if (data.options.scope === "Same map") {
        if ($gameMap.mapId() !== data.mapId) {
          return;
        }
      }
      // * Затем проверяем фильтр (для нас ли эта команда?)
      if (!ANET.Utils.isPassEventFilterOptions(data.options)) {
        return;
      }
      event = data.event;
      list = event.list;
      // * В зависимости от опции, запускаем в разных режимах
      switch (data.options.executeMode) {
        case "Virtual":
          _.startVirtualCommand(list, data.eventId, data.mapId);
          break;
        case "Common Event":
          $gameTemp.reserveVirtualCommonEvent(event); //? AUTO
          break;
        default:
          // * Некоторые команды можно выполнять сразу, не ожидая сцены (или другого события)
          if (_.isVirtualCommand(list[0].code)) {
            _.startVirtualCommand(list, data.eventId, data.mapId);
          } else {
            // * Остальные идут как общее событие (приоритетное)
            $gameTemp.reserveVirtualCommonEvent(event);
          }
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Когда пришёл запрос с сервера, что надо начать общее событие
  _.onRegisterOnSharedEventRequest = function(data) {
    var e, eventId, indent, index, mapId;
    try {
      ({mapId, eventId, index, indent} = data);
      // * Если карта другая, то пропускаем это сообщение
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Если общее событие уже запущено (не важно какое), игнорируем
      if (_.isSharedEventIsRunning()) {
        return;
      }
      // * Это событие уже начато, т.е. этот клиент опоздал (пришёл с другой карты)
      if (index !== 0) {
        return;
      }
      $gameTemp.reserveNetworkSharedEvent(eventId);
      return;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Когда клиент на необходимой команде общего события
  _.onRegisterOnSharedEventResponse = function(data) {
    var actorId, e, eventId, indent, index, mapId;
    try {
      ({mapId, eventId, actorId, index, indent} = data);
      // * Если карта другая, то пропускаем это сообщение
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Мы не мастер, игнорируем
      if (!_.isSharedEventMaster()) {
        return;
      }
      // * ID событий не совпадают, игнорируем
      if (_._sharedInterpreter.eventId() !== eventId) {
        return;
      }
      // * Регестрируем ответ
      _._sharedInterpreter.nOnSyncedEventCommandResponse(index, indent, actorId);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Когда все игроки "готовы" и можно продолжать выполнение общего события
  _.onContinueSharedEvent = function(data) {
    var e, eventId, mapId;
    try {
      ({mapId, eventId} = data);
      // * Если карта другая, то пропускаем это сообщение
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Если общее событие не запущено, игнорируем
      if (!_.isSharedEventIsRunning()) {
        return;
      }
      // * Мы мастер, игнорируем (выполнение у мастера от пула внутри события)
      if (_.isSharedEventMaster()) {
        return;
      }
      // * ID событий не совпадают, игнорируем
      if (_._sharedInterpreter.eventId() !== eventId) {
        return;
      }
      return _._sharedInterpreter.nAllowContinueSharedEvent();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Когда мастер общего события отменил его
  _.onSharedEventForceCancelFromServer = function(data) {
    var e, eventId, mapId;
    try {
      ({mapId, eventId} = data);
      // * Если карта другая, то пропускаем это сообщение
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Мы мастер, игнорируем
      if (_.isSharedEventMaster()) {
        return;
      }
      if (_.isSharedEventIsRunning()) {
        // * ID событий не совпадают, игнорируем
        if (_._sharedInterpreter.eventId() !== eventId) {
          return;
        }
        // * Ставим глобальны флаг (обаботка идёт внутри Game_Event)
        return $gameTemp._shouldForceExitSharedEvent = true;
      } else {
        // * Если событие ещё не было запущено (например этот клиент был в меню)
        // * Надо проверить не стоит ли событие в очереди на запуск
        if ($gameTemp.isNetworkSharedEventReserved()) {
          // * Если ID событий совпадает
          if (eventId === $gameTemp._reservedNetworkSharedEvent) {
            $gameTemp.retrieveNetworkSharedEvent(); // * Забираем без выполнения
          }
        }
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Когда мастер общего события сменил выбор (или действие выбора) в окне выбора вариантов в сообщении
  _.onSharedEventChoiceActionFromServer = function(data) {
    var action, e, eventId, index, mapId;
    try {
      ({mapId, eventId, action, index} = data);
      // * Если карта другая, то пропускаем это сообщение
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      // * Если клиент не в общем событии, пропускаем
      if (!_.isSharedEventIsRunning()) {
        return;
      }
      // * ID событий не совпадают, игнорируем
      if (_._sharedInterpreter.eventId() !== eventId) {
        return;
      }
      // * Задаём глобальные данные
      $gameTemp.nSelectionActionFromNetwork = {action, index};
      return LOG.p("Shared Choice accepted from server");
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку игровых карт

//@[GLOBAL]
window.ANMapManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetMap");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANMapManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendMapLoaded = function() {
    return ANNetwork.send(NMS.Map("loaded", $gameMap.mapId()));
  };
  _.sendInitialMapData = function() {
    // * Отправляем принудительно свои данные всем игрокам на карте
    ANSyncDataManager.sendPlayerObserver();
    ANPlayersManager.sendPlayerLocation();
    if (ANGameManager.isMapMaster()) {
      this.sendMapEventsInitialPositions();
    }
  };
  _.sendEventMove = function(eventId) {
    var data, e, event;
    try {
      event = $gameMap.event(eventId);
      if (event == null) {
        return;
      }
      data = {
        id: eventId,
        mapId: $gameMap.mapId(),
        data: event.getMoveDataForNetwork()
      };
      ANNetwork.send(NMS.Map("eventMove", data), true);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данную команду выполняет только мастер карты, когда кто-то подключается к карте
  _.sendMapEventsInitialPositions = function() {
    var ev, eventId, i, len, ref;
    ref = $gameMap.events();
    for (i = 0, len = ref.length; i < len; i++) {
      ev = ref[i];
      if (ev == null) {
        continue;
      }
      eventId = ev.eventId();
      setTimeout((function() {
        return ANMapManager.sendEventMove(eventId);
      }), 50); //TODO: Надо ли эту задержку?
    }
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.onEventMove = function(mapId, eventId, moveData) {
    var e, event;
    try {
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      event = $gameMap.event(eventId);
      if (event != null) {
        event.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onInitialMapSync = function() {
    var e;
    try {
      this.sendInitialMapData();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку данных игроков и их персонажей

//@[GLOBAL]
var ANPlayersManager;

ANPlayersManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetPlayer");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = ANPlayersManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendBindActorFromGame = function(actorId) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), this.bindActorResult.bind(this));
  };
  _.sendBindActorFromLobby = function(actorId, callback) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), callback);
  };
  _.sendPlayerName = function() {
    return ANNetwork.send(NMS.Lobby("setPlayerName", ANGameManager.myPlayerData().name));
  };
  _.sendPlayerInRoomReady = function(isReady) {
    return ANNetwork.send(NMS.Lobby("playerReady", isReady));
  };
  _.sendActorReady = function() {
    var actorData;
    actorData = $gameActors.actor(ANGameManager.myPlayerData().actorId);
    ANNetwork.send(NMS.Game("actorReady", actorData));
    return ANGameManager.setWait('playersActors');
  };
  _.sendPlayerMove = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: $gamePlayer.getMoveDataForNetwork()
    };
    return ANNetwork.send(NMS.Map("playerMove", data), true);
  };
  _.sendPlayerLocation = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: [$gamePlayer.x, $gamePlayer.y]
    };
    return ANNetwork.send(NMS.Map("playerLocation", data));
  };
  _.sendNameplatesStyles = function() {
    var data;
    data = $gameSystem.nActorsNameplatesStyles || {};
    ANNetwork.send(NMS.Common("custom_nameplates", data));
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.bindActorResult = function(result) {
    //TODO: Если true - зарезервировали,  дальше либо кастомизация, либо отправка
    // клиент готов начинать игру (и ожидание игроков включается)
    // false - значит данный персонаж занят, надо обрабатыватЬ!
    if (result === true) {
      "BINDING GOOD, send ActorReady".p();
      //TODO: Сейчас без кастомизации
      this.sendActorReady();
    }
  };
  _.onPlayerMove = function(id, moveData) {
    var char, e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onPlayerLocation = function(id, positionData) {
    var char, e;
    try {
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.setPosition(positionData[0], positionData[1]);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onPlayersNameplatesStyles = function(styles) {
    var e;
    try {
      $gameSystem.nActorsNameplatesStyles = styles;
      // * Обновляем таблички
      return KDCore.GEventsManager.call("netzRefreshNameplate");
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за методы передачи, обработки и
// * синхронизации игровых данных (и Observers)

//$[ENCODE]

//@[GLOBAL]
window.ANSyncDataManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("DataSync");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANSyncDataManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendPlayerObserver = function() {
    return this._sendObserverData('playerChar', ANNetwork.myId(), $gamePlayer.getObserverDataForNetwork());
  };
  _.sendEventObserver = function(eventId) {
    this._sendObserverData('eventChar', {
      mapId: $gameMap.mapId(),
      eventId: eventId
    }, $gameMap.event(eventId).getObserverDataForNetwork());
  };
  _.sendActorObserver = function() {
    return this._sendObserverData('playerActor', ANNetwork.myId(), $gameParty.leader().getObserverDataForNetwork());
  };
  //TODO: через GET ? или callback
  _.sendBattleUnitsObserver = function(members) {
    var observers;
    //"SEND UNITS OBSERVER".p()
    if ($gameParty.isOneBattler()) {
      return;
    }
    observers = members.map(function(m) {
      return [m.packForNetwork(), m.getObserverDataForNetwork()];
    });
    //m.result().getObserverDataForNetwork()]
    this._sendObserverData('battleUnits', null, observers);
  };
  //TODO: NOT USED
  _.sendBattlerObserver = function(battler) {
    "SEND BATTLER OBSERVER".p();
    return this._sendObserverData('battler', battler.packForNetwork(), battler.getObserverDataForNetwork());
  };
  _.sendBattlerResultObserver = function(battler) {
    "SEND BATTLER RESULT".p();
    if ($gameParty.isOneBattler()) {
      return;
    }
    return this._sendObserverData('battlerResult', battler.packForNetwork(), battler.result().getObserverDataForNetwork());
  };
  _._sendObserverData = function(type, id, observerData) {
    var data;
    data = {
      type: type,
      id: id,
      data: observerData
    };
    ANNetwork.send(NMS.Game("observer", data), true);
  };
  //TODO: Может отправлять изменение на мастера, он уже все глобальные переменные всем отправляет
  _.sendGlobalVariableChange = function(varId, newValue) {
    var data;
    data = {
      id: varId,
      data: newValue
    };
    ANNetwork.send(NMS.Game("variable", data));
  };
  _.sendGlobalSwitchChange = function(switchId, newValue) {
    var data;
    data = {
      id: switchId,
      data: newValue
    };
    ANNetwork.send(NMS.Game("switch", data));
  };
  _.sendSyncGlobalVariables = function() {};
  //TODO: Синхронизация всех глобальных переменных
  //см. $gameVariables.getAllGlobalVariablesData()

  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.onObserverData = function(id, type, content) {
    switch (type) {
      case 'playerChar':
        return this._onPlayerCharObserverData(id, content);
      case 'eventChar':
        return this._onEventCharObserverData(id, content);
      case 'playerActor':
        return this._onPlayerActorObserverData(id, content);
      case 'battler':
        return this._onBattlerObserverData(id, content);
      case 'battlerResult':
        return this._onBattlerResultObserverData(id, content);
      case 'battleUnits':
        return this._onBattleUnitsObserverData(content);
      default:
        LOG.p("From server: unknown observer data type: " + type);
    }
  };
  _._onPlayerCharObserverData = function(id, content) {
    var char, e;
    try {
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.applyObserverData(content);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._onEventCharObserverData = function(id, content) {
    var e, event, eventId, mapId;
    try {
      ({mapId, eventId} = id);
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      event = $gameMap.event(eventId);
      if (event != null) {
        event.applyObserverData(content);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._onPlayerActorObserverData = function(id, content) {
    var actor, e, player;
    try {
      // * Если событие перевело выбор персонажа в локальный режим
      // * то ставим специальный флаг что сейчас идёт обращение только
      // * к сетевому персонажу
      if ($gameTemp._nLocalActorMode === true) {
        $gameTemp._nNetworkActorPickRequest = true;
      }
      player = ANGameManager.getPlayerDataById(id);
      actor = NetPlayerDataWrapper.getActorForPlayer(player);
      // * На всякий случай сниму флаг
      $gameTemp._nNetworkActorPickRequest = false;
      if (actor == null) {
        return;
      }
      this._convertActorEquipmens(content);
      actor.applyObserverData(content);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._onBattlerObserverData = function(battlerNetData, content) {
    var battler, e;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      //"ON BATTLER OBSERVER DATA".p()
      battler = ANET.Utils.unpackBattlerFromNetwork(battlerNetData);
      if (battler == null) {
        return;
      }
      this._convertActorEquipmens(content);
      battler.applyObserverData(content);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._convertActorEquipmens = function(content) {
    var i, itemData, j, ref;
    if (content._equips == null) {
      return;
    }
    for (i = j = 0, ref = content._equips.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      itemData = content._equips[i];
      content._equips[i] = new Game_Item();
      content._equips[i]._dataClass = itemData._dataClass;
      content._equips[i]._itemId = itemData._itemId;
    }
  };
  _._onBattlerResultObserverData = function(battlerNetData, content) {
    var battler, e, ref;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      //"ON BATTLER RESULT DATA".p()
      battler = ANET.Utils.unpackBattlerFromNetwork(battlerNetData);
      if (battler == null) {
        return;
      }
      if ((ref = battler.result()) != null) {
        ref.applyObserverData(content);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._onBattleUnitsObserverData = function(content) {
    var battler, e, j, len, netData;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
//"ON BATTLERS UNITS DATA".p()
      for (j = 0, len = content.length; j < len; j++) {
        netData = content[j];
        battler = ANET.Utils.unpackBattlerFromNetwork(netData[0]);
        if (battler != null) {
          this._convertActorEquipmens(netData[1]);
          battler.applyObserverData(netData[1]);
        }
      }
      // * Игрок только присоединился, нужен дополнительный refresh графики
      if ($gameTemp._requestInitialSharedBattleRefresh === true) {
        BattleManager.nRefreshSharedBattleState();
        $gameTemp._requestInitialSharedBattleRefresh = false;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onVariableValue = function(varId, value) {
    var e;
    try {
      $gameVariables.onVariableFromServer(varId, value);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onSwitchValue = function(varId, value) {
    var e;
    try {
      $gameSwitches.onSwitchFromServer(varId, value);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//? Методы для улучшения совместимости с плагинами Yanfly и VisuMZ

//@[EXTENSION]
ANET.extend(function() {
  if (Imported.YEP_BattleEngineCore === true || Imported.VisuMZ_1_BattleCore === true) {
    // * Force передача Sprite_Battler:startMove
    console.log("Load extension: YEP_BattleEngineCore | VisuMZ_1_BattleCore");
    ANET.CFIX.on_startMove = function(data) {
      var battler, duration, e, sprite, x, y;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({x, y, duration} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startMove(x, y, duration);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    ANET.CFIX.on_startJump = function(data) {
      var a, b, battler, e, sprite;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({a, b} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startJump(a, b);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Sprite_Battler.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__startJump, ALIAS__startMove, _;
      //@[DEFINES]
      _ = Sprite_Battler.prototype;
      //@[ALIAS]
      ALIAS__startMove = _.startMove;
      _.startMove = function(x, y, duration) {
        var e, packed;
        ALIAS__startMove.call(this, x, y, duration);
        try {
          if (this._battler == null) {
            return;
          }
          if (!ANGameManager.isBattleMaster()) {
            return;
          }
          packed = ANET.Utils.packBattlerForNetwork(this._battler);
          return ANET.CFIX.send("startMove", {packed, x, y, duration});
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      if (_.startJump != null) {
        ALIAS__startJump = _.startJump;
        _.startJump = function(a, b) {
          var e, packed;
          ALIAS__startJump.call(this, a, b);
          try {
            if (this._battler == null) {
              return;
            }
            if (!ANGameManager.isBattleMaster()) {
              return;
            }
            packed = ANET.Utils.packBattlerForNetwork(this._battler);
            return ANET.CFIX.send("startJump", {packed, a, b});
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }; // * Если определён метод startJump
      }
    })();
  }
});

// ■ END Sprite_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANBattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onLogWindowMessage, _;
  
  // * Эти методы (переопределения) только для RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = ANBattleManager;
  // * В MV нету _currentActor и _inputting
  //$[OVER]
  _.updateInputChange = function() {
    if ($gameParty.isOneBattler()) {
      return;
    }
    if (this._lastBattleManagerInputActor !== BattleManager._actorIndex) {
      this._lastBattleManagerInputActor = BattleManager._actorIndex;
      this.sendInputState();
    } else if (this._lastBattleManagerInputValue !== BattleManager.isInputting()) {
      this._lastBattleManagerInputValue = BattleManager.isInputting();
      this.sendInputState();
    }
  };
  
  //$[OVER]
  // * Отправить изменение состояния ввода
  _.sendInputState = function() {
    var actor, inputActorId, inputState;
    inputState = BattleManager.isInputting();
    actor = BattleManager.actor();
    if (actor != null) {
      inputActorId = actor.actorId();
    } else {
      inputActorId = null;
    }
    ANNetwork.send(NMS.Battle("input", {inputState, inputActorId}));
  };
  //$[OVER]
  // * Пришло изменение состояние ввода
  _.onBattleInputState = function(inputState, inputActorId) {
    var e;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      if (inputState === true) {
        BattleManager._phase = 'input';
      } else {
        // * Чтобы скрыть выбор действий
        BattleManager.startTurn();
      }
      if (inputActorId === ANGameManager.myActorId()) {
        BattleManager.nSetCurrentClientInput();
      } else {
        // * Если не мой персонаж, то никакого ввода
        BattleManager.nClearClientInput();
      }
      return $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * В MV анимация отдельно реализована
  // * Отправить боевую анимацию (из WindowLog) на сервер
  _.sendWindowLogAnimation = function(targets, animationId, mirror) {
    var converted, data;
    converted = targets.map(function(t) {
      return t.packForNetwork();
    });
    data = {
      animationId: animationId,
      mirror: mirror,
      targets: converted
    };
    // * Используем метод из MZ версии
    this.sendBattleAnimation(data);
  };
  //@[ALIAS]
  ALIAS__onLogWindowMessage = _.onLogWindowMessage;
  _.onLogWindowMessage = function() {
    ALIAS__onLogWindowMessage.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
  // * С сервера пришла команда проиграть анимацию (замена метода из MZ)
  //$[OVER]
  _.onBattleAnimation = function(data) {
    var e, ref, targets;
    try {
      targets = data.targets.map(function(t) {
        return ANET.Utils.unpackBattlerFromNetwork(t);
      });
      if ((ref = BattleManager._logWindow) != null) {
        ref.showNormalAnimation(targets, data.animationId, data.mirror);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END ANBattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за сетевые алгоритмы
// * внутриигровой торговли (обмене) между игроками

//$[ENCODE]

//%[Работает на NMS.Common]

//@[GLOBAL]
window.ANTradeManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("Trade");
  LOG.setColors(KDCore.Color.YELLOW, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANTradeManager;
  // * Время на раздумия при запросе на торговлю (используется и как timeout)
  _.TradeRequestTime = 6000;
  // * ID для идентификации предмета - золото
  _.TradeGoldItemId = -100;
  // * Находится ли игрок в режиме торговли
  // * Данный метод используется стандартными окнами и сценами для смены
  // * некоторых методов (например отрисовка пустого предмета в списке предметов)
  _.isInTrade = function() {
    return ANNetwork.isConnected() && this._isInTrade === true;
  };
  // * Есть с кем торговать? (Уже задан и установлен другой участник торговли)
  _.isHaveTradeParticipant = function() {
    return String.any(this._hisId);
  };
  // * Данные игрока с которым я торгую
  _.getTradeParticipantData = function() {
    return nAPI.getPlayerInfo("info", "netId", this._hisId);
  };
  //%[Главный метод начала торговли]
  // * Начать торговлю с другим игроком
  //?anotherPlayer - NetPlayerData structure
  _.requestTradeWith = function(anotherPlayer) {
    if (this.isInTrade()) {
      return;
    }
    // * Если игрок в бою, то нельзя (если в событии, то тоже нельзя) и т.д.
    if (this.isPlayerAvailableForTrade(anotherPlayer)) {
      this.sendStartTradeRequest(anotherPlayer);
    } else {
      nAPI.showRedAlert("Player not available!");
    }
  };
  
  // * Может ли другой игрок сейчас принять запрос на торговлю
  // * Да, если находится на сцене карты (пусть даже в событии)
  _.isPlayerAvailableForTrade = function(anotherPlayer) {
    return (anotherPlayer != null) && NetPlayerDataWrapper.isOnMapScene(anotherPlayer);
  };
  // * Когда уже торговля идёт, проверка что другой игрок на сцене и существует (не отключился)
  _.isTradeParticipantIsValid = function() {
    var anotherPlayer;
    if (!this.isInTrade()) {
      return false;
    }
    if (!this.isHaveTradeParticipant()) {
      return false;
    }
    anotherPlayer = this.getTradeParticipantData();
    if (anotherPlayer != null) {
      // * Тут должна быть проверка == "trade", но тогда
      // * возвращает false, если сцена выбора предмета внутри торговли
      return anotherPlayer.scene !== "map";
    }
    return false;
  };
  // * Может ли текущий игрок начать торговлю
  // * Да, если он не торгует уже и находится на сцене карты
  _.isClientAvailableForTrade = function() {
    return ANET.isPro() && !this.isInTrade() && KDCore.Utils.isSceneMap();
  };
  // * Подготовить данные для торговли и запустить сцену
  _._startTradeSession = function() {
    // * Должен быть игрок, с кем мы торгуем
    if (!this.isHaveTradeParticipant()) {
      return;
    }
    LOG.p("TRADE WITH " + this._hisId);
    // * Находимся в режиме торговли
    this._isInTrade = true;
    // * Нет никаких предметов
    $gameTemp._netMyTradeItems = [];
    $gameTemp._netHisNetTradeItems = [];
    // * Изначально другой игрок "не готов"
    $gameTemp._netHisTradeReadyStatus = false;
    SceneManager.push(Scene_NetworkInGameTrade);
  };
  // * Показать диалоговое окно (принять торговлю или нет)
  _.showTradeInDialog = function() {
    // * Должен быть игрок, кто нам предлагает торговлю
    if (!this.isHaveTradeParticipant()) {
      return;
    }
    if (ANET.PP.isShowModalForTradeRequest()) {
      ANET.UI.showModalWindowForTrade(this._hisId);
    } else {
      ANTradeManager.acceptTradeInRequest();
    }
  };
  // * Отказать в торговле игроку anotherPlayer (он прислал запрос)
  _.refuseTradeRequest = function() {
    if (this.isHaveTradeParticipant()) {
      return this.sendRefuseTradeRequest(this._hisId);
    }
  };
  // * Принять запрос в торговле от другого игрока
  _.acceptTradeInRequest = function() {
    if (!this.isHaveTradeParticipant()) {
      return;
    }
    this.sendAcceptTradeRequest(this._hisId);
    this._startTradeSession();
  };
  //? СОБЫТИЯ ВНУТРИ СЦЕНЫ ТОРГОВЛИ
  // * ===============================================================

  // * Я "готов" к торговле (нажатие кнопки)
  _.onTradeReady = function(status) {
    return this.sendMyTradeReadyStatus(status);
  };
  // * Изменение вещей (золота) с моей стороны
  _.onTradeChange = function(item, count) {
    var index;
    index = $gameTemp.__netTradeItemIndex;
    if (index == null) {
      return;
    }
    if (index < 0) {
      return;
    }
    if ((item != null) && count >= 1) {
      $gameTemp._netMyTradeItems[index] = [
        item,
        count // item, count
      ];
    } else {
      $gameTemp._netMyTradeItems[index] = null;
    }
    LOG.p("Trade items [my] changed");
    console.info($gameTemp._netMyTradeItems);
    this.sendMyTradeItems();
  };
  // * Отправляем изменения, у другого игрока должен быть сброс "Ready"

  // * Оба игрока готовы, завершаем торговлю
  _.onTradeShouldComplete = function() {
    LOG.p("TRADE SHOULD BE COMPLETED");
    return this.sendCompleteTrade();
  };
  // * Торговля законченна (любой исход)
  _.onTradeSceneEnd = function() {
    this._hisId = null;
    this._isInTrade = false;
    this._netHisTradeReadyStatus = false;
  };
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendStartTradeRequest = function(anotherPlayer) {
    var data;
    this._hisId = anotherPlayer.id;
    data = {
      initiator: ANNetwork.myId(),
      parcipiant: anotherPlayer.id
    };
    ANNetwork.send(NMS.Common("trade_request", data));
    ANNetwork.setWait();
    nAPI.showInfoMessage("Waiting " + anotherPlayer.name);
    // * Нужет timeout (вдруг игрок disconnect)
    this._startRequestTimeout();
  };
  _._startRequestTimeout = function() {
    ANTradeManager._tradeRequestTimeout = setTimeout((function() {
      return ANTradeManager.onAnotherPlayerNotAcceptTradeOrTimeout();
    }), ANTradeManager.TradeRequestTime);
  };
  _.sendRefuseTradeRequest = function(anotherPlayerId) {
    ANNetwork.send(NMS.Common("trade_refuse", anotherPlayerId));
  };
  _.sendAcceptTradeRequest = function(anotherPlayerId) {
    ANNetwork.send(NMS.Common("trade_accept", anotherPlayerId));
  };
  _.sendMyTradeItems = function() {
    var data, items;
    items = $gameTemp._netMyTradeItems.map(function(item) {
      if (item != null) {
        return [ANET.Utils.packItemForNetwork(item[0]), item[1]];
      } else {
        return null;
      }
    });
    data = {
      fromWho: ANNetwork.myId(),
      items
    };
    ANNetwork.send(NMS.Common("trade_items", data));
  };
  _.sendMyTradeReadyStatus = function(status) {
    var data;
    data = {
      fromWho: ANNetwork.myId(),
      status
    };
    ANNetwork.send(NMS.Common("trade_status", data));
  };
  _.sendCompleteTrade = function() {
    ANNetwork.callback(NMS.Common("trade_complete", ANNetwork.myId()), function() {
      return ANTradeManager.onTradeCompleted();
    });
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================

  // * Другой игрок принял приглашение
  _.onAnotherPlayerAcceptTrade = function() {
    this._onRequestAnswer();
    this._startTradeSession();
  };
  _._onRequestAnswer = function() {
    ANNetwork.resetWait();
    nAPI.hideInfoMessage();
    clearTimeout(ANTradeManager._tradeRequestTimeout);
  };
  // * Другой игрок отказался (или timeout)
  _.onAnotherPlayerNotAcceptTradeOrTimeout = function() {
    var anotherPlayer, e, name;
    this._onRequestAnswer();
    try {
      anotherPlayer = ANGameManager.getPlayerDataById(this._hisId);
      if (anotherPlayer != null) {
        name = anotherPlayer.name;
        nAPI.showRedAlert(name + " refused");
      } else {
        nAPI.showRedAlert("Trade refused");
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    this._hisId = null;
  };
  _.onTradeCompleted = function() {
    var e, gold, i, item, j, len, len1, ref, ref1;
    LOG.p("TRADE COMPLETED");
    try {
      KDCore.Utils.playSE(ANET.PP.tradeSceneCompleteSE());
      // * Забираем вещи у игрока (которые он предлагал)
      gold = $gameTemp._netMyTradeItems.shift();
      if (gold != null) {
        if ((gold[1] != null) && gold[1] > 0) {
          $gameParty.loseGold(gold[1]);
        }
      }
      ref = $gameTemp._netMyTradeItems;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (item == null) {
          continue;
        }
        if (item[0] == null) {
          continue;
        }
        if (item[1] <= 0) {
          continue;
        }
        $gameParty.gainItem(item[0], item[1] * -1); // * -1 - т.к убираем
      }
      
      // * Добавляем вещи другого игрока (что он нам предложил)
      gold = $gameTemp._netHisNetTradeItems.shift();
      if (gold != null) {
        if ((gold[1] != null) && gold[1] > 0) {
          $gameParty.gainGold(gold[1]);
        }
      }
      ref1 = $gameTemp._netHisNetTradeItems;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        item = ref1[j];
        if (item == null) {
          continue;
        }
        if (item[0] == null) {
          continue;
        }
        if (item[1] <= 0) {
          continue;
        }
        $gameParty.gainItem(item[0], item[1]);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  //? СОБЫТИЯ (обработка событий от сервера, вызываются из NETClientMethodsManager)
  // * ===============================================================

  // * Обработка общей команды NMS.Common
  _.onCommonCommandFromServer = function(cmd, content) {
    var e, method;
    try {
      method = ANTradeManager["_on_" + cmd];
      if (method != null) {
        return method(content);
      } else {
        return LOG.p("Unknown common subCommand " + cmd);
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_request = function(content) {
    var e, initiator, parcipiant, result;
    try {
      "TRADE REQUEST IN".p();
      ({initiator, parcipiant} = content);
      // * Эта команда не мне
      if (parcipiant !== ANNetwork.myId()) {
        return;
      }
      // * Запоминаем кто с нами хочет торговать
      ANTradeManager._hisId = initiator;
      result = ANTradeManager.isClientAvailableForTrade();
      if (result === true) {
        return ANTradeManager.showTradeInDialog();
      } else {
        return ANTradeManager.refuseTradeRequest();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_refuse = function(content) {
    var e;
    try {
      "TRADE REFUSE IN".p();
      // * Эта команда не на мой запрос торговли
      if (content !== ANNetwork.myId()) {
        return;
      }
      return ANTradeManager.onAnotherPlayerNotAcceptTradeOrTimeout();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_accept = function(content) {
    var e;
    try {
      "TRADE ACCEPT IN".p();
      // * Этот ответ не на мой запрос торговли
      if (content !== ANNetwork.myId()) {
        return;
      }
      return ANTradeManager.onAnotherPlayerAcceptTrade();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_items = function(content) {
    var e, fromWho, items;
    try {
      "TRADE ITEMS IN".p();
      if (!ANTradeManager.isInTrade()) {
        return;
      }
      // * Это предметы не от моего соучастника торговли
      ({fromWho, items} = content);
      if (fromWho !== ANTradeManager._hisId) {
        return;
      }
      return $gameTemp._netHisNetTradeItems = items.map(function(item) {
        if (item != null) {
          return [ANET.Utils.unpackItemFromNetwork(item[0]), item[1]];
        } else {
          return null;
        }
      });
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_status = function(content) {
    var e, fromWho, status;
    try {
      "TRADE STATUS IN".p();
      if (!ANTradeManager.isInTrade()) {
        return;
      }
      ({fromWho, status} = content);
      // * Этот статус не от моего соучастника торговли
      if (fromWho !== ANTradeManager._hisId) {
        return;
      }
      return $gameTemp._netHisTradeReadyStatus = status;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._on_trade_complete = function(content) {
    var e;
    try {
      "TRADE COMPLETE IN".p();
      if (!ANTradeManager.isInTrade()) {
        return;
      }
      // * Проверка на соответсвие участника торговли
      if (content !== ANTradeManager._hisId) {
        return;
      }
      // * Доп. проверка статуса
      if ($gameTemp._netHisTradeReadyStatus !== true) {
        return;
      }
      // * Конец торговли (успешный)
      return ANTradeManager.onTradeCompleted();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANET Common Utils Methods.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Набор вспомогательных функций для ANET
KDCore.Utils.ANET = {};

//?shortcut
ANET.Utils = KDCore.Utils.ANET;

(function() {
  var _;
  //@[DEFINES]
  _ = KDCore.Utils.ANET;
  // * Проверка, что комментарий является NET командой
  _.isNetCommentCommand = function(commentLine) {
    if (!String.any(commentLine)) {
      return false;
    }
    // * Все команды начинаются с буквы заглавной N, затем пробел и команда
    return /N\s.+/.exec(commentLine);
  };
  _.getNetCommentCommand = function(commentLine) {
    var command;
    if (!this.isNetCommentCommand(commentLine)) {
      return "";
    }
    // * Возвращает первое слово после N
    command = /N\s(!*\w+)/.exec(commentLine)[1];
    if (!String.any(command)) {
      return "";
    }
    return command;
  };
  //TODO: Можно все все данные для сети через метод аналогичный передавать для безопасности
  // * Сохраняет Battler в определённый формат для отправки по сети
  _.packBattlerForNetwork = function(battler) {
    if (battler instanceof Game_Actor) {
      return {
        type: "actor",
        id: battler.actorId()
      };
    } else {
      return {
        type: "enemy",
        id: battler.index()
      };
    }
  };
  // * Возвращяет конкретный Battler из данных сети
  _.unpackBattlerFromNetwork = function(data) {
    if (data.type === "actor") {
      return $gameActors.actor(data.id);
    } else {
      return $gameTroop.members()[data.id];
    }
  };
  // * Сохраняем предмет в определённый формат для оптавки по сети (используется в торговле)
  _.packItemForNetwork = function(item) {
    var e, id, typeId;
    try {
      if (item == null) {
        return null;
      }
      id = item.id;
      if (id === ANTradeManager.TradeGoldItemId) {
        typeId = 0;
      } else {
        typeId = KDCore.Utils.getItemTypeId(item);
      }
      return {id, typeId};
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  // * Возвращяет конкретный Item из данных сети
  _.unpackItemFromNetwork = function(data) {
    var e, id, typeId;
    try {
      if (data == null) {
        return null;
      }
      ({id, typeId} = data);
      if (id === ANTradeManager.TradeGoldItemId) {
        return {id};
      } else {
        return KDCore.Utils.getItemByType(id, typeId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.getBattlerSprite = function(battler) {
    var container, e, sprite, sprites;
    if (!KDCore.Utils.isSceneBattle()) {
      return null;
    }
    try {
      container = SceneManager._scene._spriteset;
      sprites = container._enemySprites.concat(container._actorSprites);
      sprite = sprites.find(function(spr) {
        return (spr != null) && spr._battler === battler;
      });
      return sprite;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return sprite;
  };
  _.isMyActorInValidListToStart = function(list, isInclude) {
    var e;
    try {
      list = JsonEx.parse(list).map(function(i) {
        return parseInt(i);
      });
      return list.contains(ANGameManager.myActorId()) === isInclude;
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  _.isPassEventFilterOptions = function(options) {
    var e;
    try {
      switch (options.whoSelector) {
        case "All":
          return true;
        case "Master":
          return ANNetwork.isMasterClient();
        case "Master Except":
          return !ANNetwork.isMasterClient();
        case "Actor List":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, true);
        case "Actor List Except":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, false);
        case "Me Except":
          // * Если команда пришла с сервера, то явно эта проверка не касается этого клиента
          // * В опциях запуска события - не используется
          return true;
        default:
          return false;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  // * Событие запущенно каким-либо игроком?
  _.isEventStartedByAny = function(eventId) {
    var e;
    try {
      return ANGameManager.anotherPlayersOnMap().some(function(p) {
        return NetPlayerDataWrapper.isOnEvent(p, eventId);
      });
    } catch (error) {
      e = error;
      ANET.w(e);
      // * В случае ошибки безопаснее вернуть true
      return true;
    }
  };
  // * Собрать опции для команды события по параметрам из комменатрия (аналог опций из команды плагина)
  // * Список должен быть строкой! [1, 2, 3]
  _.buildEventCommandOptions = function(selector, list, scope, mode) {
    return {
      "actorList": list,
      "executeMode": mode,
      "scope": scope,
      "whoSelector": selector
    };
  };
  // * Конвертировать из команды комменатрия в параметр команды плагина
  _.convertEventCommandScopeAndMode = function(commentLine) {
    var mode, scope;
    // * SCOPE
    if (commentLine.contains("world")) {
      scope = "All world";
    } else {
      scope = "Same map";
    }
    // * MODE
    if (commentLine.contains("virtual")) {
      mode = "Virtual";
    } else if (commentLine.contains("common")) {
      mode = "Common Event";
    } else {
      mode = "Auto";
    }
    return {scope, mode};
  };
  // * Изъять список персонажей из комментария
  // * Формат выходной [1, 2, 3....]
  _.extractActorsListFromComment = function(commentLine) {
    var list, regex, resultList;
    regex = /forActors\s+([\d,\s*]*)/gm;
    resultList = regex.exec(commentLine);
    if (resultList == null) {
      return "[]";
    }
    if (resultList[1] == null) {
      return "[]";
    }
    list = "[" + resultList[1] + "]";
    return list;
  };
  _.parseEventStartOptionsFromCommentLine = function(commentLine) {
    var e, nStartOptions;
    try {
      // * Стандартный набор
      nStartOptions = {
        lockMode: "false",
        sharedMode: "No",
        whoSelector: "All",
        actorList: "[]"
      };
      if (commentLine.contains("lock")) {
        nStartOptions.lockMode = "true";
      }
      if (commentLine.contains("shared")) {
        nStartOptions.sharedMode = "Strict";
        // * Только если есть флаг sharedMode
        if (commentLine.contains("optional")) {
          nStartOptions.sharedMode = "Optional";
        }
      }
      if (commentLine.contains("master")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Master Except";
        } else {
          nStartOptions.whoSelector = "Master";
        }
      } else if (commentLine.contains("forActors")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Actor List Except";
        } else {
          nStartOptions.whoSelector = "Actor List";
        }
        nStartOptions.actorList = ANET.Utils.extractActorsListFromComment(commentLine);
      }
      return nStartOptions;
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.generateSaveUniqueId = function() {
    var savefileId, versionId;
    versionId = ANET.VD.getGameVersion();
    savefileId = versionId + "" + Math.randomInt(versionId);
    // * Вероятность крайне крайне мала, но нельзя чтобы были повторы
    if (DataManager.nIsHaveNetworkSaveWithId(savefileId)) {
      return this.generateSaveUniqueId();
    } else {
      return savefileId;
    }
  };
  // * Текущая комната - загрузка сохранённой игры?
  _.isLoadGameRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isLoadGameRoom(ANNetwork.room);
  };
  // * Текущая комната - уже запущенная игра
  _.isStartedRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isStartedGameRoom(ANNetwork.room);
  };
  // * Построить Chat Message
  _.buildChatMessage = function(channelId, actorId, message) {
    return {
      channelId: channelId,
      actorId: actorId,
      text: message,
      mapId: $gameMap.mapId()
    };
  };
  _.getEmotionCodeFromText = function(text) {
    if (!text.contains(":")) {
      return 0;
    }
    if (text.contains(":!")) {
      return 1;
    }
    if (text.contains(":?")) {
      return 2;
    }
    if (text.contains(":song")) {
      return 3;
    }
    if (text.contains(":love")) {
      return 4;
    }
    if (text.contains(":angry")) {
      return 5;
    }
    if (text.contains(":drop")) {
      return 6;
    }
    if (text.contains(":conf")) {
      return 7;
    }
    if (text.contains(":...")) {
      return 8;
    }
    if (text.contains(":idea")) {
      return 9;
    }
    if (text.contains(":zzz")) {
      return 10;
    }
    return 0;
  };
})();

// ■ END ANET Common Utils Methods.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__displayStartMessages, ALIAS__endBattle, ALIAS__processEscape, ALIAS__selectNextActor, ALIAS__selectPreviousActor, ALIAS__setup, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    // * Если флаг что необходима Map Encounter битва
    if ($gameTemp.nNextBattleIsEncounter === true) {
      ANBattleManager.executeMapEncounterBattle(...arguments);
      // * Снимаем флаг, чтобы не мешал другим битвам
      $gameTemp.nNextBattleIsEncounter = false;
    }
    ALIAS__setup.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      if (!ANBattleManager.isBattleRegistred()) {
        // * Только если данные боя не установлены, но проверка сетевой битвы
        this.nSetupNetworkBattle();
      }
    }
  };
  //@[ALIAS]
  ALIAS__endBattle = _.endBattle;
  _.endBattle = function(result) {
    ALIAS__endBattle.call(this, result);
    if (ANNetwork.isConnected()) {
      // * Убрать флаг сетевой битвы
      this.nSetNetworkBattle(null);
    }
  };
  //@[ALIAS]
  ALIAS__selectNextActor = _.selectNextActor;
  _.selectNextActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
    } else {
      ALIAS__selectNextActor.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__selectPreviousActor = _.selectPreviousActor;
  _.selectPreviousActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectPreviousActorOnClient();
    } else {
      ALIAS__selectPreviousActor.call(this);
    }
  };
  //@[ALIAS]
  // * В сетевом режиме Update вызывается только на мастере боя!
  ALIAS__update = _.update;
  _.update = function(activeTime) {
    ALIAS__update.call(this, activeTime);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this.nUpdateNetwork();
  };
  //TEMP
  //TODO: Временно отключено начальное сообщение в бою
  //@[ALIAS]
  ALIAS__displayStartMessages = _.displayStartMessages;
  _.displayStartMessages = function() {
    if (ANNetwork.isConnected()) {

    } else {
      // * EMPTY
      return ALIAS__displayStartMessages.call(this);
    }
  };
  
  //TEMP
  //TODO: Если шанс побега не сработал, будет баг
  // * Временно шанс побега 100%
  //@[ALIAS]
  ALIAS__processEscape = _.processEscape;
  _.processEscape = function() {
    if (ANNetwork.isConnected()) {
      this._escapeRatio = 101;
    }
    return ALIAS__processEscape.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeActor, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  if (KDCore.isMZ()) {
    return;
  }
  // * Заместо selectNextActor (нету в MV такой команды)
  //@[ALIAS]
  ALIAS__changeActor = _.changeActor;
  _.changeActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } else {
      ALIAS__changeActor.call(this, ...arguments);
    }
  };
  _.myNetworkActorIndex = function() {
    return $gameParty.members().indexOf($gameParty.leader());
  };
  
  // * В MV логика боя отличается от MZ, не происходит многих автоматических обновлений
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (this.__oldPhase !== this._phase) {
      this.__oldPhase = this._phase;
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
      $gameTemp.requestBattleRefresh();
    }
    ALIAS__update.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = BattleManager;
  _.nSetNetworkBattle = function(netBattleId) {
    this.netBattleId = netBattleId;
  };
  _.nIsNetworkBattle = function() {
    return this.netBattleId != null;
  };
  _.nSetupNetworkBattle = function() {
    var battleData;
    if (this.nIsNetworkBattle()) {
      battleData = {
        battleId: this.netBattleId,
        options: [$gameTroop._troopId, this._canEscape, this._canLose]
      };
      ANBattleManager.registerOnBattle(battleData);
    } else {
      ANBattleManager.registerOnLocalBattle();
    }
  };
  _.nSelectNextActorOnClient = function() {
    // * Если данный флаг == true, то игрок переключает меню ввод с группы на персонажа своего
    // * (Это если нажать Escape и появилось Party Commands, а затем снова на Fight)
    if (this._isShouldWaitMyNetworkAction === true) {
      // * Выбираем только своего персонажа снова (а не первого)
      this._currentActor = $gameParty.leader();
      if (KDCore.isMV()) {
        this._actorIndex = this.myNetworkActorIndex();
        $gameTemp._isBattleSceneShouldBeRefreshed = true;
      }
      return this._isShouldWaitMyNetworkAction = false;
    } else {
      ANBattleManager.battleInputActionDone();
      return this._inputting = false;
    }
  };
  
  // * В стандартном тактическом режиме боя если нажать "отмена" (назад)
  // * То мы можем поменять выбор предыдущего персонажа, но в сети,
  // * мы не можем это сделать, поэтому просто "выходим" на меню группы
  _.nSelectPreviousActorOnClient = function() {
    return this._currentActor = null;
  };
  _.nUpdateNetwork = function() {
    ANBattleManager.updateInputChange();
    $gameTroop.nUpdateBattleDataSync();
    $gameParty.nUpdateBattleDataSync();
  };
  _.nClearClientInput = function() {
    this._inputting = false;
    this._currentActor = null;
    this._isShouldWaitMyNetworkAction = true;
    if (KDCore.isMV()) {
      this.startTurn();
    }
  };
  _.nSetCurrentClientInput = function() {
    $gameParty.makeActions(); // * Чтобы был inputting action
    this._currentActor = $gameParty.leader();
    if (KDCore.isMV()) {
      this._actorIndex = this.myNetworkActorIndex();
    }
    // * Готов к отправке действия сразу (по умолчанию)
    // * Команда 'Fight' делает false (см nSelectNextActorOnClient)
    return this._isShouldWaitMyNetworkAction = false;
  };
  _.nRefreshSharedBattleState = function() {
    var e;
    try {
      if (SceneManager._scene.nRefreshSharedBattle != null) {
        SceneManager._scene.nRefreshSharedBattle();
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Если во время боя был удалён (вышел) сетевой игрок
  // * Без этого метода, игра переключает (или зависат) ввод другого игрока (который вышел)
  _.nSafeRemoveActor = function() {
    var e;
    if (this._phase !== "input") {
      return;
    }
    try {
      if (this._currentActor !== $gameParty.leader()) {
        return this.selectNextActor();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Можно ли клиенту (не BattleMaster) самостоятельно обновлять BattleManager
  _.nIsLocalForceUpdatePhase = function() {
    return this.isAborting() || this.isBattleEnd();
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ConfigManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__applyData, ALIAS__makeData, _;
  //@[DEFINES]
  _ = ConfigManager;
  // * Сохранение и загрузка сетевого имени игрока

  //@[ALIAS]
  ALIAS__makeData = _.makeData;
  _.makeData = function() {
    var config;
    config = ALIAS__makeData.call(this);
    config.netPlayerName = this.netPlayerName;
    return config;
  };
  
  //@[ALIAS]
  ALIAS__applyData = _.applyData;
  _.applyData = function(config) {
    ALIAS__applyData.call(this, config);
    this.netPlayerName = config.netPlayerName;
  };
})();

// ■ END ConfigManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeSavefileInfo, _;
  //@[DEFINES]
  _ = DataManager;
  //@[ALIAS]
  ALIAS__makeSavefileInfo = _.makeSavefileInfo;
  _.makeSavefileInfo = function() {
    var info;
    info = ALIAS__makeSavefileInfo.call(this);
    if (ANNetwork.isConnected() && ($gameTemp.nUniqueSaveID != null)) {
      this.nWriteNetworkSaveFileInfo(info);
      // * Сбросим флаг
      $gameTemp.nUniqueSaveID = null;
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = DataManager;
  // * Записать информацию о сетевом сохранении (что в этом файле сетевое сохранение)
  _.nWriteNetworkSaveFileInfo = function(info) {
    // * Для определения подходящих файлов у других клиентов
    info.nUniqueSaveID = $gameTemp.nUniqueSaveID;
    // * Для определения своего персонажа
    info.nMyActorId = ANGameManager.myActorId();
  };
  
  // * Является ли файл сохранения сетевым (созданным по сети)
  _.nIsNetworkSaveFile = function(savefileId) {
    var info;
    info = this.nGetInfoForSavefileId(savefileId);
    if ((info != null) && (info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      return true;
    }
    return false;
  };
  // * Есть ли файл сетевого сохранения с уникальным ID
  _.nIsHaveNetworkSaveWithId = function(uniqueSaveID) {
    return this.nGetNetworkSaveInfoWithId(uniqueSaveID) != null;
  };
  // * Получить данные сетвого сохранения по уникальному ID
  _.nGetNetworkSaveInfoWithId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index)) {
        if (file.nUniqueSaveID === uniqueSaveID) {
          return file;
        }
      }
    }
    return null;
  };
  // * Получить индекс файла сохранения по уникальнмоу ID
  // * Это нужно для загрузки правильного файла
  _.nGetNetworkSaveFileIdByUniqueId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index) && file.nUniqueSaveID === uniqueSaveID) {
        return index;
      }
    }
    return -1;
  };
  // * Методы различаются в MV и MZ
  _.nGetGlobalInfo = function() {
    if (KDCore.isMZ()) {
      return this._globalInfo;
    } else {
      return this.loadGlobalInfo();
    }
  };
  // * Методы различаются в MV и MZ
  _.nGetInfoForSavefileId = function(savefileId) {
    var info;
    if (KDCore.isMZ()) {
      info = DataManager.savefileInfo(savefileId);
    } else {
      info = DataManager.loadSavefileInfo(savefileId);
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var FWindow_InGameChat;

FWindow_InGameChat = class FWindow_InGameChat extends KDCore.FloatingWindow {
  constructor() {
    super(...arguments);
    this.params = this.getSettings();
    this.setDragEndHandler(this._savePlayerDragPosition.bind(this));
    return;
  }

  //%[I] Показывать чат в сцене ввода сообщения
  // * должен быть всега не прозрачный и без обработки кнопок (без крестика)
  getSettings() {
    return ANET.PP.uiData("inGameChatWindow");
  }

  isMouseInContentZone() {
    return !($gameTemp.kdButtonUnderMouse != null) && !this._isMouseInHeader();
  }

  //? message: {
  //   channelId
  //   actorId
  //   text
  //}
  addMessageToChat(message) {
    var e;
    try {
      return this._addMessageToChat(message, true);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  parseEmotions(message) {
    if (!ANET.PP.getChatMessagesSettings().allowEmotions) {
      return;
    }
    this._parseAndShowEmotions(message);
  }

  open() {
    super.open();
    return $gamePlayer._nChatIsClosed = false;
  }

  close() {
    super.close();
    return $gamePlayer._nChatIsClosed = true;
  }

  update() {
    var ref;
    super.update();
    if ((ref = this._changer) != null) {
      ref.update();
    }
    if (this.isOpen()) {
      return this._updateClickOnChat();
    }
  }

};

(function() {  
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ FWindow_InGameChat.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var ALIAS___onMouseIn, ALIAS___onMouseOut, _;
  //@[DEFINES]
  _ = FWindow_InGameChat.prototype;
  //@[ALIAS]
  ALIAS___onMouseIn = _._onMouseIn;
  _._onMouseIn = function() {
    ALIAS___onMouseIn.call(this);
    if (this.opacity === 255) {
      return;
    }
    this._changer = new KDCore.Changer(this);
    this._changer.change('opacity').from(this.opacity).to(255).step(10);
    this._changer.start();
  };
  
  //@[ALIAS]
  ALIAS___onMouseOut = _._onMouseOut;
  _._onMouseOut = function() {
    ALIAS___onMouseOut.call(this);
    if (this.params.notActiveOpacity === 255) {
      return;
    }
    this._changer = new KDCore.Changer(this);
    this._changer.change('opacity').from(this.opacity).to(this.params.notActiveOpacity).step(5).delay(10);
    this._changer.start();
  };
  //$[OVER]
  _._createCustomElements = function() {
    this._lines = [];
    this._loadChatHistory();
  };
  _._loadChatHistory = function() {
    var e, j, len, message, ref;
    if ($gameTemp._nChatHistory == null) {
      $gameTemp._nChatHistory = [];
    }
    ref = $gameTemp._nChatHistory;
    for (j = 0, len = ref.length; j < len; j++) {
      message = ref[j];
      try {
        this._addMessageToChat(message, false);
      } catch (error) {
        e = error;
        ANET.w(e);
      }
    }
  };
  _._addMessageToChat = function(message, isNew) {
    var actorId, channelId, i, j, line, ref, text;
    if (message == null) {
      return;
    }
    if (this._lines == null) {
      this._lines = [];
    }
    ({channelId, actorId, text} = message);
    line = new ANET.Sprite_NetChatTextLine();
    this.addContent(line);
    line.drawChatMessage(channelId, actorId, text);
    if (isNew === true && KDCore.Utils.isSceneMap() && this.isOpen()) {
      // * Анимируем, если сцена карта и сообщение новое (а не из истории)
      line.animate();
    }
    line.move(this.params.firstChatMessageMargin);
    this._lines.unshift(line);
    if (this._lines.length % 2 === 0) {
      //TODO: Тут есть баг, см. сообщение от SMO_Valadorn
      // * Разный цвет для каждой последующей
      line.applyBackgroundStyleB();
    }
    for (i = j = 1, ref = this._lines.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
      this._lines[i].moveUp();
      if (i === this.params.maxMessages) {
        this._removeLine(this._lines[i]);
        break;
      }
    }
    if (isNew === true) {
      // * Добавляем в историю только новые сообщения (а не из истории)
      $gameTemp._nChatHistory.push(message);
      // * Очищаем историю, чтобы память не занимала
      if ($gameTemp._nChatHistory.length > this.params.maxMessages) {
        $gameTemp._nChatHistory.shift();
      }
    }
  };
  _._removeLine = function(line) {
    var ref;
    line.visible = false;
    if ((ref = line.parent) != null) {
      ref.removeChild(line);
    }
    this._lines.delete(line);
  };
  //$[OVER]
  _._moveToStartPosition = function() {
    return this._moveToLastSavedPosition();
  };
  //$[OVER]
  _._afterOpen = function() {
    this._checkMousePositionAfterOpen();
    this._moveToStartPosition();
  };
  // * Доп. проверка нахождения курсора мышки при открытии окна
  _._checkMousePositionAfterOpen = function() {
    this._mouseIn = !this.isMouseIn();
    this._registerMouseInOut();
  };
  _._moveToLastSavedPosition = function() {
    var e, x, y;
    if ($gamePlayer._nLastChatWindowPosition == null) {
      ({x, y} = this.getSettings().position);
      try {
        $gamePlayer._nLastChatWindowPosition = {
          x: eval(x),
          y: eval(y)
        };
      } catch (error) {
        e = error;
        AA.warning(e);
        $gamePlayer._nLastChatWindowPosition = {
          x: 0,
          y: 0
        };
      }
    }
    this.move($gamePlayer._nLastChatWindowPosition);
  };
  _._savePlayerDragPosition = function() {
    $gamePlayer._nLastChatWindowPosition = {
      x: this.x,
      y: this.y
    };
  };
  //@[DYNAMIC INNER]
  _._updateClickOnChat = function() {
    if (!ANET.PP.isSayIfClickOnChatWindow()) {
      this._updateClickOnChat = function() {}; // * EMPTY
    } else {
      this._updateClickOnChat = function() {
        if (TouchInput.isTriggered() && this.isMouseIn() && this.isMouseInContentZone()) {
          ANET.UI.showChatInputSafe();
          return Input.clear();
        }
      };
    }
  };
  _._parseAndShowEmotions = function(message) {
    var actorId, char, e, emotionCode, text;
    try {
      if (message == null) {
        return;
      }
      ({actorId, text} = message);
      emotionCode = ANET.Utils.getEmotionCodeFromText(text);
      if (emotionCode === 0) {
        return;
      }
      if (ANGameManager.myActorId() === actorId) {
        char = $gamePlayer;
      } else {
        char = nAPI.getPlayerCharacter("actorId", actorId);
      }
      return char != null ? char.requestBalloon(emotionCode) : void 0;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END FWindow_InGameChat.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FWindow_InGameModalDialog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var FWindow_InGameModalDialog;

FWindow_InGameModalDialog = class FWindow_InGameModalDialog extends KDCore.FloatingWindow {
  constructor() {
    super(...arguments);
  }

  _init() {
    this.parameters = {
      draggable: false,
      closeButton: false,
      moveToCenter: true,
      alwaysOnTop: true,
      header: false
    };
    KDCore.FloatingWindow.prototype._init.call(this);
  }

  //@[DUMMY]
  okHandler() {}

  //@[DUMMY]
  cancelHandler() {}

  // * Закрыть и при этом "нет" (отмена)
  forceCancel() {
    this.close();
    this.cancelHandler();
  }

  //%[Для запроса торговли]
  openForTradeRequest(initiatorName) {
    KDCore.Utils.playSE(ANET.PP.getModalWindowOpenSE());
    //%[I] Может добавить некий Shake эффект при открытии для привлечения внимания?
    //TODO: Параметры (текст и разные настройки)
    this.drawDialogMessage(ANET.PP.getTradeModalWindowText(), initiatorName);
    this.okHandler = function() {
      return ANTradeManager.acceptTradeInRequest();
    };
    this.cancelHandler = function() {
      return ANTradeManager.refuseTradeRequest();
    };
    this.setTimer(5); // * в секундах
    this.open();
  }

  // * Text (formatted %), arguments...
  drawDialogMessage() {
    this.textSpr.drawTextWithFormat(...arguments);
  }

  setTimer(seconds) {
    if (seconds <= 0) {
      this.timeGauge.visible = false;
      this._timerThread = null;
    } else {
      this.timeGauge.visible = true;
      this.timeGauge.draw(1);
      this._allTime = seconds * 60;
      this._timeLeft = this._allTime;
      this._timerThread = new KDCore.TimedUpdate(1, this._tick.bind(this));
    }
  }

  _moveToStartPosition() {
    super._moveToStartPosition();
    return this.y = 0;
  }

  update() {
    var ref;
    super.update();
    if (this.isOpen()) {
      if ((ref = this._timerThread) != null) {
        ref.update();
      }
      this._updateHotkeys();
    }
  }

  close() {
    super.close();
    return this._timerThread = null;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = FWindow_InGameModalDialog.prototype;
  _._tick = function() {
    this._timeLeft--;
    this.timeGauge.draw(this._timeLeft / this._allTime);
    if (this._timeLeft <= 0) {
      return this._onBtnNoClick();
    }
  };
  _._createCustomElements = function() {
    this._createDialogText();
    this._createDialogButtons();
    return this._createTimeGauge();
  };
  _._createDialogText = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width,
        h: 60
      },
      font: {
        face: null,
        size: 20,
        italic: false
      },
      margins: {
        x: 0,
        y: 0
      },
      forceCentered: true,
      singleLine: true
    };
    this.textSpr = new KDCore.UI.Sprite_UITextExt(p);
    return this.addContent(this.textSpr);
  };
  _._createDialogButtons = function() {
    var margin;
    margin = 16;
    this.btnYes = new KDCore.ButtonM("nzModalYesButton", false, "Alpha");
    this.btnYes.addClickHandler(this._onBtnYesClick.bind(this));
    this.btnYes.move(margin, 62);
    this.addContent(this.btnYes);
    this.btnNo = new KDCore.ButtonM("nzModalNoButton", false, "Alpha");
    this.btnNo.addClickHandler(this._onBtnNoClick.bind(this));
    this.btnNo.move(this.width - 120 - margin, this.btnYes.y);
    this.addContent(this.btnNo);
  };
  _._onBtnYesClick = function() {
    this._onBtnClick();
    return this.okHandler();
  };
  _._onBtnClick = function() {
    SoundManager.playCursor();
    return this.close();
  };
  _._onBtnNoClick = function() {
    this._onBtnClick();
    return this.cancelHandler();
  };
  _._createTimeGauge = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width - 4,
        h: 4
      },
      fill: "#eb9534",
      foreground: "",
      mask: "",
      backColor: "#000000".toCss(),
      backOpacity: 255,
      vertical: false
    };
    this.timeGauge = new KDCore.UI.Sprite_UIColorGauge(p);
    this.timeGauge.x = 2;
    this.timeGauge.y = this.height - p.size.h - 2;
    return this.addContent(this.timeGauge);
  };
  _._updateHotkeys = function() {
    if (Input.isTriggered(ANET.PP.getModalWindowYesHotkey())) {
      this._onBtnYesClick();
    } else if (Input.isTriggered(ANET.PP.getModalWindowNoHotKey())) {
      this._onBtnNoClick();
    }
  };
})();

// ■ END FWindow_InGameModalDialog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FWindow_InGamePlayerMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var FWindow_InGamePlayerMenu;

FWindow_InGamePlayerMenu = class FWindow_InGamePlayerMenu extends KDCore.FloatingWindow {
  constructor() {
    super(...arguments);
  }

  _init() {
    this.parameters = {
      draggable: false,
      closeButton: true,
      moveToCenter: false,
      alwaysOnTop: true,
      header: true
    };
    KDCore.FloatingWindow.prototype._init.call(this);
  }

  isHaveCharacter() {
    return this.bindedChar != null;
  }

  //%[Основной метод - открыть окно relative другого игрока]
  // * Нужно передать Game_Character
  openForCharacter(netChar) {
    this.prepareForCharacter(netChar);
    this.open();
  }

  // * Подготовка меню под персонажа
  prepareForCharacter(bindedChar) {
    this.bindedChar = bindedChar;
    if (this.bindedChar == null) {
      return;
    }
    this.sub().setCommandsFor(this.bindedChar);
    this.sub().activate();
    this.sub().select(0);
    this._storePositions();
    this._updatePlacement();
    this._updateTitle();
  }

  close() {
    var e;
    super.close();
    try {
      if (this.sub() != null) {
        return this.sub().deactivate();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  update() {
    super.update();
    if (this.isOpen() && this.isHaveCharacter()) {
      // * Автоматическое закрытие окна если игрок (или персонаж для меню) совершили движение
      return this._updateAutoClose();
    }
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = FWindow_InGamePlayerMenu.prototype;
  _._createCustomElements = function() {
    this._createCommandsListWindow();
    this._createCharNameText();
  };
  _._createCommandsListWindow = function() {
    var playerCommandsListWindow, size;
    size = new Rectangle(0, 0, this.width, this.height - 24);
    playerCommandsListWindow = new Window_NPlayerCommandsList(size);
    playerCommandsListWindow.setHandler('ok', this._onPlayerCommandSelected.bind(this));
    playerCommandsListWindow.refresh();
    this.setSubWindow(playerCommandsListWindow);
  };
  _._onPlayerCommandSelected = function() {
    var item;
    if (this.sub().isCurrentItemEnabled()) {
      ANET.UI.closePlayerMenu();
      item = this.sub().selectedItem();
      this._executeMenuItem(item);
    } else {
      SoundManager.playBuzzer();
      this.sub().activate();
    }
  };
  _._createCharNameText = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width - 20,
        h: 28
      },
      alignment: "center",
      font: {
        face: null,
        size: 18,
        italic: false
      },
      margins: {
        x: 0,
        y: 0
      },
      outline: {
        color: null,
        width: 2
      },
      textColor: "#e0da1b".toCss()
    };
    this.charNameText = new KDCore.UI.Sprite_UIText(p);
    return this.addChild(this.charNameText);
  };
  _._updatePlacement = function() {
    var h2, sector, w2, x, y;
    if (this.bindedChar == null) {
      return;
    }
    x = this.bindedChar.screenX();
    y = this.bindedChar.screenY() - 42;
    // Screen sectors
    // 1 | 2
    // 3 | 4
    // ==============
    sector = 1;
    w2 = Graphics.width / 2;
    h2 = Graphics.height / 2;
    
    // * Определяем сектор экрана, на котром находится элемент
    if (x < w2) {
      if (y < h2) {
        sector = 1;
      } else {
        sector = 3;
      }
    } else {
      if (y < h2) {
        sector = 2;
      } else {
        sector = 4;
      }
    }
    // * Настраиваем позиции в зависимости от секторов
    if (sector === 3 || sector === 1) {
      this.x = x + 18;
    }
    if (sector === 2 || sector === 4) {
      this.x = x - this.width - 18; //TODO: margins from settings
    }
    if (sector >= 3) {
      this.y = y - this.height;
    } else {
      this.y = y + 42;
    }
  };
  _._updateTitle = function() {
    var actor;
    actor = this.bindedChar.actor();
    return this.charNameText.draw(actor.name());
  };
  _._storePositions = function() {
    this._myOldX = $gamePlayer.x;
    this._myOldY = $gamePlayer.y;
    this._charOldX = this.bindedChar.x;
    this._charOldY = this.bindedChar.y;
  };
  _._updateAutoClose = function() {
    if ($gamePlayer.x !== this._myOldX || $gamePlayer.y !== this._myOldY || this.bindedChar.x !== this._charOldX || this.bindedChar.y !== this._charOldY) {
      return ANET.UI.closePlayerMenu();
    }
  };
  _._executeMenuItem = function(item) {
    var e;
    if (item == null) {
      return;
    }
    try {
      if (String.any(item.action)) { // * Только для стандартных комманд
        nAPI.callPlayerMenuAction(item.action, this.bindedChar.actorId());
      }
      if (item.value > 0) {
        // * Общее событие (есть у всех комманд)
        return $gameTemp.reserveCommonEvent(item.value);
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END FWindow_InGamePlayerMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__apply, _;
  //@[DEFINES]
  _ = Game_Action.prototype;
  //@[ALIAS]
  ALIAS__apply = _.apply;
  _.apply = function(target) {
    if (ANNetwork.isConnected()) {
      if (this.nIsApplyItemFromMenu(target)) {
        this.nSendNetworkActionFromMenu(target);
        return;
      }
    }
    return ALIAS__apply.call(this, ...arguments);
  };
})();

// ■ END Game_Action.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Глобальный метод класса Game_Action
  Game_Action.NApplyFromMenuFromNetwork = function(data) {
    var action, e, target;
    try {
      if (data == null) {
        return;
      }
      if (data.target == null) {
        return;
      }
      target = ANET.Utils.unpackBattlerFromNetwork(data.target);
      // * Только для своего персонажа, т.к. Observer
      if (target !== $gameParty.leader()) {
        return;
      }
      // * Тут используется $gameParty.leader() как заглушка, т.к. должен быть Subject
      action = new Game_Action($gameParty.leader(), true);
      action.setFromNetwork(data.action);
      return action.apply($gameParty.leader());
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  //@[DEFINES]
  _ = Game_Action.prototype;
  // * Задать действие из сети (т.е. из действия другого игрока)
  _.setFromNetwork = function(action) {
    var f;
    this.clear();
    this._nParseActionItem(action._item);
    for (f in action) {
      if (f === "_item") {
        // * пропускаем Game_Item, он уже сконвертирован
        continue;
      }
      this[f] = action[f];
    }
  };
  // * Класс Game_Item отдельно
  _._nParseActionItem = function(item) {
    var f;
    if (item == null) {
      return;
    }
    for (f in item) {
      this._item[f] = item[f];
    }
  };
  // * Применяется предмет из меню?
  _.nIsApplyItemFromMenu = function(target) {
    return !$gameParty.inBattle() && target !== $gameParty.leader() && ($gameTemp.netApplyItemUser != null);
  };
  _.nSendNetworkActionFromMenu = function(target) {
    var e;
    try {
      return ANGameManager.sendUseItemFromMenuAction(this, target);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Game_Action.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nCreateObserver();
    }
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  _.nCreateObserver = function() {
    this.netDataObserver = new DataObserver();
    this.nFillObserver();
    // * Создаём после nFillObserver, чтобы не было в списке полей Observer
    this.isDataObserverHaveChanges = false;
    this.netDataObserver.refreshAll(this);
  };
  // * Тут применён автоматический сбор всех полей
  _.nFillObserver = function() {
    var entries, fields, i, len, value;
    fields = [];
    entries = Object.entries(this);
    for (i = 0, len = entries.length; i < len; i++) {
      value = entries[i];
      if (value[0] === 'netDataObserver') {
        // * Так как сбор полей идёт после создания netDataObserver, то его надо исключить
        continue;
      }
      fields.push(value[0]);
    }
    this.netDataObserver.addFields(this, fields);
  };
  _.nUpdateObserver = function() {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.check(this);
    if (this.netDataObserver.isDataChanged()) {
      this.nDataObserverHaveChanges();
      this.netDataObserver.refreshAll(this);
    }
  };
  // * Тут мы напрямую не отправляем данные, так как мы не знаем кому (Battler) мы принадлежим
  // * Ставится флаг в TRUE, и Battler сам отправить данные
  _.nDataObserverHaveChanges = function() {
    return this.isDataObserverHaveChanges = true;
  };
  _.getObserverDataForNetwork = function() {
    this.isDataObserverHaveChanges = false;
    return this.netDataObserver.getDataForNetwork(this);
  };
  _.applyObserverData = function(data) {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.setDataFromNetwork(this, data);
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__refresh, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(actorId) {
    ALIAS__setup.call(this, actorId);
    // * Чтобы refreshNetwork не вызывался когда ещё Actor не создан
    if (ANNetwork.isConnected()) {
      this.refreshNetworkDummy = this.refreshNetwork;
      if (ANET.PP.playerActorNameType() > 0) {
        this.nSetupPlayerActorName();
      }
    }
  };
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    return this.refreshNetworkDummy();
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  // * Данный персонаж - мой сетевой персонаж (текущего игрока)
  _.isMyNetworkActor = function() {
    if ($gameTemp._nLocalActorMode === true) {
      // * Тут сделано разделение специально, чтобы уменьшить проблемы с LocalActor
      // * Суть в том, что при LocalActor могут отправляться данные всех персонажей,
      // * так как проверка через leader() обращается в Game_Actors, а ID всегда на
      // * своего персонажа (стоит Instance Mode, в этом ещё дело)
      // * Пока отключил передачу СВОИХ данных в режиме Local
      return false;
    }
    if ($gameParty.inBattle()) {
      return this.isMyNetworkBattler();
    } else {
      return this.actorId() === ANGameManager.myActorId();
    }
  };
  _.updateDataObserver = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this._updateDataObserver();
      } else {

      }
    } else {
      if (this.isMyNetworkActor()) {
        // * Если НЕ в бою, то проверка observer только свого персонажа
        // * Только приём данных
        this._updateDataObserver();
      }
    }
  };
  // * Отправка Observer только своего персонажа
  _.dataObserverHaveChanges = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this.requestNetBattleDataPush();
        // * Если только я в бою, то отправляю обычные данные
        // * Чтобы другие игроки видели HP и MP
        // TODO: Опция?
        if ($gameParty.isOneBattler()) {
          ANSyncDataManager.sendActorObserver();
        }
      }
    } else {
      // * Если не в бою, то только свои данные
      if (this.isMyNetworkActor()) {
        ANSyncDataManager.sendActorObserver();
      }
    }
  };
  
  //TODO: Может просто все все свойства передавать?
  // собрать их автоматически
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.ActorObserverFields);
  };
  //?{DYNAMIC}
  _.refreshNetworkDummy = function() {}; // * EMPTY
  _.refreshNetwork = function() {
    // * Тут нельзя делать проверку на текущих Actor или нет, так как вызывает Stack Overflow
    // * Метод refresh вызывается ещё до того как Actor создан (класс)
    // * Принудительная отправка
    if (!$gameParty.inBattle()) {
      this.dataObserverHaveChanges();
    }
  };
  // * Установить заместо имени (никнейма) персонажа имя сетевого игрока
  _.nSetupPlayerActorName = function() {
    var playerData;
    // * Устанавливаем только своему персонажу, так как myPlayerData есть в начале игры
    // * Данные других персонажей прийдут сами с Observer сразу
    if (this.actorId() !== ANGameManager.myActorId()) {
      return;
    }
    playerData = ANGameManager.myPlayerData();
    if (playerData == null) {
      return;
    }
    if (ANET.PP.playerActorNameType() === 1) {
      this._name = playerData.name;
    } else if (ANET.PP.playerActorNameType() === 2) {
      this._nickname = playerData.name;
    }
  };
  // * Данные для Nameplate
  // * Данный метод вызывается из Game_Character (Game_Player), а не напрямую
  _.nGetNameplate = function() {
    var e, name, playerData;
    try {
      if (ANET.PP.isShowActorNameInNameplate()) {
        name = this.name();
      } else {
        playerData = ANGameManager.getPlayerDataByActorId(this.actorId());
        if (playerData != null) {
          name = playerData.name;
        } else {
          name = this.name();
        }
      }
      return {
        text: name,
        style: $gameSystem.nGetNameplateStyleForActor(this.actorId())
      };
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return null;
    }
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actors.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__actor, _;
  //@[DEFINES]
  _ = Game_Actors.prototype;
  //TODO: Есть проблемы у этого способа! Надо больше тестов
  //TODO: Добавить дополнительные проверки, так как слишком опасно
  //@[ALIAS]
  ALIAS__actor = _.actor;
  _.actor = function(actorId) {
    // * Возвращять текущего персонажа для выборки в событии
    // * Выборка LOCAL ACTOR работает только если указан Actor с ID = 1 (ОТМЕНА!)
    //TODO: Может это и не надо, но сделал для меньших проблем, так как метод опасно переопределять
    //TODO: Временно убрал выборку только 1 актора
    if (ANNetwork.isConnected() && $gameTemp._nLocalActorMode === true) { //&& actorId == 1
      if ($gameTemp._nNetworkActorPickRequest === true) {
        $gameTemp._nNetworkActorPickRequest = false;
        return ALIAS__actor.call(this, actorId);
      } else {
        return this._data[ANGameManager.myActorId()];
      }
    } else {
      return ALIAS__actor.call(this, actorId);
    }
  };
})();

// ■ END Game_Actors.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onBattleEnd, ALIAS__onBattleStart, ALIAS__startDamagePopup, _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nInitializeNetwork();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    if (ANNetwork.isConnected()) {
      this._nStartBattleObserver();
    }
    return ALIAS__onBattleStart.call(this, ...arguments);
  };
  
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this._nEndBattleObserver();
    }
  };
  // * Отдельная реализация, чтобы передавать battleResult
  //@[ALIAS]
  ALIAS__startDamagePopup = _.startDamagePopup;
  _.startDamagePopup = function() {
    if (ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler()) {
      ANSyncDataManager.sendBattlerResultObserver(this);
      ANBattleManager.callBattleMethod(this, "startDamagePopup", null);
    }
    return ALIAS__startDamagePopup.call(this);
  };
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  _.nInitializeNetwork = function() {
    this._nRegisterSyncBattleMethod("requestEffect");
    this._nRegisterSyncBattleMethod("requestMotion");
    this._nRegisterSyncBattleMethod("startWeaponAnimation");
    this._nRegisterSyncBattleMethod("setActionState");
    // * Sound effects
    this._nRegisterSyncBattleMethod("performDamage");
    this._nRegisterSyncBattleMethod("performCollapse");
    this._nRegisterSyncBattleMethod("performMiss");
    this._nRegisterSyncBattleMethod("performRecovery");
    this._nRegisterSyncBattleMethod("performEvasion");
    this._nRegisterSyncBattleMethod("performMagicEvasion");
    this._nRegisterSyncBattleMethod("performCounter");
    this._nRegisterSyncBattleMethod("performReflection");
  };
  // * Данный баттлер является моим (этого сетевого игрока)
  _.isMyNetworkBattler = function() {
    if (ANNetwork.isConnected()) {
      return this === $gameParty.leader();
    } else {
      return true;
    }
  };
  // * Подписать метод на синхронизацию через сервер
  _._nRegisterSyncBattleMethod = function(methodName) {
    var alias;
    alias = this[methodName];
    this[methodName] = function() {
      if (ANNetwork.isConnected() && ANGameManager.isBattleMaster()) {
        // * В данной реализации передаётся только один аргумент, так как ... перед arguments
        ANBattleManager.callBattleMethod(this, methodName, ...arguments);
      }
      return alias.call(this, ...arguments);
    };
  };
  _.isNeedNetPushBattleData = function() {
    return this._netBattleObserverNeedToPush === true;
  };
  _.onNetBattleDataPushed = function() {
    return this._netBattleObserverNeedToPush = null;
  };
  _.requestNetBattleDataPush = function() {
    return this._netBattleObserverNeedToPush = true;
  };
  (function() {    // * Специальный Data Observer для боя
    // -----------------------------------------------------------------------
    // * Данные только для боя (эти данные передаёт только Battle Master)
    _._nStartBattleObserver = function() {
      // * Включаем Instance режим
      //@netDataObserver.setInstanteMode()
      this.netDataObserver.setCheckInterval(ANET.PP.battleDataRefreshRate());
      this._addBattleFieldsToNetowrkDataObserver();
    };
    // * Добавляем дополнительные поля в Observer
    _._addBattleFieldsToNetowrkDataObserver = function() {
      this.netDataObserver.addFields(this, ANET.System.BattlerObserverFields);
    };
    // * После битвы нет необходимости хранить observer
    return _._nEndBattleObserver = function() {
      // * Возвращаем режим проверки
      this._applyDataObserverInitialParameters();
      // * Убираем добавленные для боя поля
      this.netDataObserver.removeFields(this, ANET.System.BattlerObserverFields);
    };
  })();
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__meetsItemConditions, ALIAS__onBattleEnd, ALIAS__onBattleStart, _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    ALIAS__onBattleStart.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setCheckMode();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setInstanteMode();
    }
  };
  //TEMP
  //TODO: Временное решение, так как нет проверки кто именно
  // * Так как вещи другого игрока нет в инвентаре мастера боя, то
  // * мы пропускаем проверку на наличие вещи в инвентаре $gameParty.hasItem(item)
  //@[ALIAS]
  ALIAS__meetsItemConditions = _.meetsItemConditions;
  _.meetsItemConditions = function(item) {
    if (ANNetwork.isConnected()) {
      return this.meetsUsableItemConditions(item);
    } else {
      return ALIAS__meetsItemConditions.call(this, item);
    }
  };
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  // * Специальное представление данных для сети
  _.packForNetwork = function() {
    return ANET.Utils.packBattlerForNetwork(this);
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this._applyDataObserverInitialParameters();
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    _._applyDataObserverInitialParameters = function() {
      // * Тут нужен Instante, чтобы данные на карте всегда были актуальны
      // * Если CheckMode, то при помощи событий можно менять параметры ХП
      // * всей группы и ХП других игроков будут отображаться не правильно
      this.netDataObserver.setInstanteMode();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
    };
    //TODO: Можно автоматически и удалять лишнее (см. Game_ActionResult)
    _._fillNetworkObserver = function() {
      this.netDataObserver.addFields(this, ["_hp", "_mp", "_tp", "_paramPlus", "_states", "_stateTurns", "_buffs", "_buffTurns"]);
    };
    //TODO: updateStateTurns и баффы не должны выполняться на фантоме (???)

    // * Этот метод должны вызывать потомки верхнего уровня, так как нету Update в этом классе
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANNetwork.isConnected()) {
      return this._updateDataObserver();
    }
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Получить данные о табличке с именем персонажа
  _.nGetNameplate = function() {
    return null;
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    //TODO: Добавить API для разработчиков плагинов вносить свои поля (и так со всем Observers)
    // * Движение передаётся отдельным методом для достижения плавности
    _._fillNetworkObserver = function() {
      return this.netDataObserver.addFields(this, ["_opacity", "_blendMode", "_walkAnime", "_stepAnime", "_directionFix", "_transparent", "_direction"]);
    };
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
  _.moveStraightFromServer = function(moveData) {
    // * Всегда успех, так как если нет, то данные и не прийдут от другого игрока
    this.setMovementSuccess(true);
    this.setDirection(moveData.direction);
    this._x = moveData.x;
    this._y = moveData.y;
    this._realX = moveData.realX;
    this._realY = moveData.realY;
    // * Чтобы синхронизировать правильно бег
    this._moveSpeed = moveData.moveSpeed;
    this.increaseSteps();
  };
  _.getMoveDataForNetwork = function() {
    return {
      direction: this._direction,
      moveSpeed: this.realMoveSpeed(),
      x: this.x,
      y: this.y,
      realX: this._realX,
      realY: this._realY
    };
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
  //TODO: Есть проблема, dead enemies не исчезают у второго игрока

  // * Дополнительные найстройки Observer для врагов
  _._addBattleFieldsToNetowrkDataObserver = function() {
    Game_Battler.prototype._addBattleFieldsToNetowrkDataObserver.call(this);
    // * Данные поля не нужны (наверное) врагам, так как не видно их полосу
    this.netDataObserver.removeFields(this, ["_tpbChargeTime"]);
  };
  // * Только мастер битвы может отправлять данные (вызывается из Scene_Battle)
  _.updateDataObserver = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this._updateDataObserver();
    }
  };
  _.dataObserverHaveChanges = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this.requestNetBattleDataPush();
    }
  };
  // * Добавляем свои поля
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.EnemyObserverFields);
  };
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  (function() {    // * Синхронизация движения
    // -----------------------------------------------------------------------
    var ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__updateSelfMovement;
    //@[ALIAS]
    ALIAS__moveStraight = _.moveStraight;
    _.moveStraight = function(d) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveStraight.call(this, d);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            return ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        return ALIAS__moveStraight.call(this, d);
      }
    };
    
    //@[ALIAS]
    ALIAS__moveDiagonally = _.moveDiagonally;
    _.moveDiagonally = function(horz, vert) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveDiagonally.call(this, horz, vert);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        ALIAS__moveDiagonally.call(this, horz, vert);
      }
    };
    //@[ALIAS]
    ALIAS__updateSelfMovement = _.updateSelfMovement;
    return _.updateSelfMovement = function() {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          return ALIAS__updateSelfMovement.call(this);
        } else {

        }
      } else {
        // * NOTHING
        // * Обновление движения события только на мастере карты
        return ALIAS__updateSelfMovement.call(this);
      }
    };
  })();
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  _.dataObserverHaveChanges = function() {
    if (ANGameManager.isMapMaster()) {
      ANSyncDataManager.sendEventObserver(this.eventId());
    }
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------
// * Если мы не отправляем данные Observer,
// * то check не будет работать, пока не сбросить флаг


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Followers.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isSomeoneCollided, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Followers.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    if (ANNetwork.isConnected()) {
      return this._data = [];
    } else {
      // * Нет последователей! Используется другой класс
      return ALIAS__setup.call(this);
    }
  };
  
  // * Учёт коллизий с сетевыми игроками при движении событий
  // * В этом методе, а не в NETCharactersGroup, чтобы было больше совместимости
  //@[ALIAS]
  ALIAS__isSomeoneCollided = _.isSomeoneCollided;
  _.isSomeoneCollided = function(x, y) {
    if (ANNetwork.isConnected()) {
      return $gameMap.netCharsIsSomeoneCollided(x, y);
    } else {
      return ALIAS__isSomeoneCollided.call(this, x, y);
    }
  };
})();

// ■ END Game_Followers.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  (function() {    // * Статус запуска события
    // -----------------------------------------------------------------------
    var ALIAS__clear, ALIAS__initialize, ALIAS__setup, ALIAS__update, ALIAS__updateWaitMode;
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(depth) {
      ALIAS__initialize.call(this, depth);
      this._nRunningCheckTimer = 0;
      // * Отключаем некоторые команды
      if (ANNetwork.isConnected()) {
        this.nDisableNotNetCommands();
      }
    };
    //@[ALIAS]
    ALIAS__setup = _.setup;
    _.setup = function(list, eventId) {
      var ref;
      ALIAS__setup.call(this, list, eventId);
      if (ANNetwork.isConnected()) {
        // * Сброс сетевой битвы, если началось другое событие
        BattleManager.nSetNetworkBattle(null);
        this.nCheckEventStartOptions();
        if (!this.isPassStartOptions()) { // * Проверка опций запуска события
          if (this.nIsAutorunEvent()) {
            // * Turn off Auto trigger for Event
            if ((ref = $gameMap.event(eventId)) != null) {
              ref._trigger = 0;
            }
          }
          // * Выключаем Auto триггер, чтобы игра не циклилась
          // * игра зацикливается, т.к. нет EraseEvent или
          // * переключения страницы, ведь мы подменяем на
          // * пустой лист команд
          this._list = []; // * Не будет выполняться
        } else {
          ANInterpreterManager.sendEventStarted(eventId);
          if (this.nIsEventIsShared()) {
            this.nPrepareSharedEvent();
          }
          this.nClearFlags();
        }
      }
    };
    
    //@[ALIAS]
    ALIAS__clear = _.clear;
    _.clear = function() {
      ALIAS__clear.call(this);
      if (ANNetwork.isConnected()) {
        ANInterpreterManager.eventProcessExit();
        this.nClearFlags();
      }
    };
    //@[ALIAS]
    ALIAS__update = _.update;
    _.update = function() {
      ALIAS__update.call(this);
      if (ANNetwork.isConnected()) {
        this._nRunningCheckTimer++;
        if (this._nRunningCheckTimer >= 60) {
          ANInterpreterManager.checkEventRunning();
          this._nRunningCheckTimer = 0;
        }
      }
    };
    //@[ALIAS]
    ALIAS__updateWaitMode = _.updateWaitMode;
    return _.updateWaitMode = function() {
      if (this._waitMode === 'netPlayersPool') {
        return this.nUpdateWaitPlayersPool();
      } else if (this._waitMode === 'netNextCommand') {
        return this.nUpdateWaitServerNextCommandPermission();
      } else {
        return ALIAS__updateWaitMode.call(this);
      }
    };
  })();
  (function() {    // * Выполнение команд в сети
    // -----------------------------------------------------------------------
    var ALIAS__command108;
    //@[ALIAS, STORED]
    _.ALIAS__executeCommand = _.executeCommand;
    _.executeCommand = function() {
      if (ANNetwork.isConnected()) {
        if (this.nIsOptionsForCurrentCommand()) {
          return this.nProcessCommandWithOptions();
        }
      }
      return _.ALIAS__executeCommand.call(this);
    };
    //TODO: MV
    //@[ALIAS]
    ALIAS__command108 = _.command108;
    return _.command108 = function(params) {
      if (ANNetwork.isConnected()) {
        if (KDCore.isMV()) {
          params = this._params;
        }
        // * Проверить комментарий на наличие NET команд
        this._nCheckNetComment(params[0]);
      }
      return ALIAS__command108.call(this, params);
    };
  })();
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//$[ENCODE]
(function() {
  var _;
  // * Используется Virtual Interpreter. Команда от сервера запускается в отдельном Interpreter, а не
  // * в аналогичном событии (как это было в Alpha NET).
  // * Некоторы команды выполняются напрямую, а некоторые через общие события только с одной командой

  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  // * Отключение не подходящих для сети комманд
  _.nDisableNotNetCommands = function() {
    var code, disableCommand, i, len, ref;
    disableCommand = function() {
      return _["command" + code] = function() {
        return true;
      };
    };
    ref = [129, 202, 206, 216, 217, 137];
    // * Change Party Member
    // * Set Vehicle Location
    // * Get on/off Vehicle
    // * Change Player Followers
    // * Gather Followers
    // * Change Formation Access
    for (i = 0, len = ref.length; i < len; i++) {
      code = ref[i];
      disableCommand(code);
    }
  };
  _.nIsHaveCommandOptions = function() {
    return this._nCommandOptionsRequested === true && (this.nCommandStartOptions != null);
  };
  _.nClearCommandOptions = function() {
    this._nCommandOptionsRequested = false;
    return this.nCommandStartOptions = null;
  };
  // * Устанавливаем опции (набор данных) и флаг что надо использовать на следующей команде
  _.nSetCommandOptions = function(nCommandStartOptions) {
    this.nCommandStartOptions = nCommandStartOptions;
    return this._nCommandOptionsRequested = true;
  };
  // * Опции подходят для "текущей" (следующей на выполнение) команды
  _.nIsOptionsForCurrentCommand = function() {
    if (!this.nIsHaveCommandOptions()) {
      return false;
    }
    if (ANET.System.ForbiddenVirtualCommandsList.contains(this.currentCommand().code)) {
      return false;
    }
    return true;
  };
  // * Проверка опций и выполнение команды в соответсвии с ними
  _.nProcessCommandWithOptions = function() {
    var e;
    try {
      // * Снимаем флаг, что надо использовать опции
      this._nCommandOptionsRequested = false;
      switch (this.nCommandStartOptions.whoSelector) {
        case "All":
          return this._nProcessCommandForAll();
        case "Master":
          return this._nProcessCommandForMaster(true);
        case "Master Except":
          return this._nProcessCommandForMaster(false);
        case "Actor List":
          return this._nProcessCommandForActorsList(true);
        case "Actor List Except":
          return this._nProcessCommandForActorsList(false);
        case "Me Except":
          return this._nProcessCommandNotMe();
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return _.ALIAS__executeCommand.call(this);
  };
  _._nProcessCommandForAll = function() {
    this._nSendCommandToServer();
    // * Выполнение команды как обычно у себя (так как там broadcast)
    return _.ALIAS__executeCommand.call(this);
  };
  _._nProcessCommandForMaster = function(isInclude) {
    if (ANNetwork.isMasterClient() === isInclude) {
      return _.ALIAS__executeCommand.call(this);
    } else {
      this._nSendCommandToServer();
      return this._nSkipCommand();
    }
  };
  _._nProcessCommandForActorsList = function(isInclude) {
    this._nSendCommandToServer();
    if (ANET.Utils.isMyActorInValidListToStart(this.nCommandStartOptions.actorList, isInclude)) {
      return _.ALIAS__executeCommand.call(this);
    } else {
      return this._nSkipCommand();
    }
  };
  _._nProcessCommandNotMe = function() {
    this._nSendCommandToServer();
    return this._nSkipCommand();
  };
  _._nSkipCommand = function() {
    this._index++;
    this.nClearCommandOptions();
    return true;
  };
  _._nSendCommandToServer = function() {
    ANInterpreterManager.sendEventVirtualCommand(this.currentCommand(), this.nCommandStartOptions, this.eventId());
  };
  // * Проверить комментарий на наличие NET команд
  _._nCheckNetComment = function(commentLine) {
    var command;
    command = ANET.Utils.getNetCommentCommand(commentLine);
    if (!String.any(command)) {
      return;
    }
    switch (command) {
      case "localActor":
        this._nOnNetCommand_LocalActor(commentLine);
        break;
      case "all":
        this._nOnNetCommand_SingleSelectorEventCommand("All", commentLine);
        break;
      case "!me":
        this._nOnNetCommand_SingleSelectorEventCommand("Me Except", commentLine);
        break;
      case "master":
        this._nOnNetCommand_SingleSelectorEventCommand("Master", commentLine);
        break;
      case "!master":
        this._nOnNetCommand_SingleSelectorEventCommand("Master Except", commentLine);
        break;
      case "forActors":
        this._nOnNetCommand_ActorListSelectorEventCommand(commentLine, true);
        break;
      case "!forActors":
        this._nOnNetCommand_ActorListSelectorEventCommand(commentLine, false);
        break;
      case "wait":
        if (ANInterpreterManager.isSharedEventIsRunning()) {
          this.nRequestSyncedNextEventCommand();
        } else {
          console.warn("N wait can be used only in Shared Events");
        }
        break;
      case "choicesForMaster":
        if (ANInterpreterManager.isSharedEventIsRunning()) {
          this.nRequestMasterOnlyChoicesModeForNextChoice();
        } else {
          console.warn("N choicesForMaster can be used only in Shared Events");
        }
        break;
      case "start":
        break;
      default:
        // * Это коммент опций запуска, просто пропускаем, чтобы ошибку не писать в консоль
        // * Обрабатывается он отдельно, так как если условие ложно, событие не должно
        // * Вообще запускаться, а эти команды обрабатываеются уже в запущенном событии
        console.warn("Unknown NET Comment command " + command);
    }
  };
  // * Сделать следующую битву сетевой битвой (общей, расшаринной)
  _.nSetSharedBattle = function(battleId) {
    if (!String.any(battleId)) {
      // * Если пустая строка, то Null
      battleId = null;
    }
    BattleManager.nSetNetworkBattle(battleId);
  };
  // * Сбросить все сетевые флаги \ настройки перед запуском очередного события
  _.nClearFlags = function() {
    $gameTemp._nLocalActorMode = false;
    this._nRunningCheckTimer = 0;
    this.nClearCommandOptions();
  };
  (function() {    // * Опции запуска события
    // -----------------------------------------------------------------------
    _.isHaveNetworkStartOptions = function() {
      return this.nStartOptions != null;
    };
    // * Может ли данный игрок запустить это событие
    _.isPassStartOptions = function() {
      // * Если это общее событие и запускаетс от сервера, то по любому можно запускать
      if (this.nIsEventIsShared() && $gameTemp._nSharedEventOuterStartFlag === true) {
        return true;
      } else {
        if (!this.isHaveNetworkStartOptions()) {
          return true;
        }
        if (this.nIsLockedEvent()) {
          if (ANET.Utils.isEventStartedByAny(this.eventId())) {
            return false;
          }
        }
        return ANET.Utils.isPassEventFilterOptions(this.nStartOptions);
      }
    };
    // * Закрытыми могут быть только события с собственным ID (т.е. события карты)
    _.nIsLockedEvent = function() {
      var ref;
      return this.eventId() > 0 && ((ref = this.nStartOptions) != null ? ref.lockMode : void 0) === "true";
    };
    // * Есть ли опции (условия) запуска события для сети
    _.nCheckEventStartOptions = function() {
      var e, options, ref;
      this.nStartOptions = null; // * сбрасываем
      try {
        options = (ref = this._list) != null ? ref.find(function(line) {
          var ref1;
          return line.code === 357 && ((ref1 = line.parameters) != null ? ref1[1] : void 0) === "EventStartOptions";
        }) : void 0;
        if (options != null) {
          this.nStartOptions = options.parameters[3];
        } else {
          // * Меньший приоритет, т.е. параметр плагина главнее
          this.nCheckEventStartOptionsFromCommentCommand();
        }
      } catch (error) {
        e = error;
        ANET.w(e);
        this.nStartOptions = null;
      }
    };
    return _.nIsAutorunEvent = function() {
      var e, event;
      try {
        event = $gameMap.event(this.eventId());
        return (event != null ? event._trigger : void 0) === 3;
      } catch (error) {
        e = error;
        ANET.w(e);
      }
      return true;
    };
  })();
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Обработка комманд из комментариев (алтернатива командам плагинов)

  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  //input: "N localActor" | "N localActor end"
  _._nOnNetCommand_LocalActor = function(commentLine) {
    if (commentLine.contains("end")) {
      $gameTemp._nLocalActorMode = false;
    } else {
      $gameTemp._nLocalActorMode = true;
    }
  };
  
  //input: "N (selector)" | "N (selector) [scope]" | "N (selector) [scope] [mode]"
  //selcetor: all, !me, master, !master
  //scope: world, mode: virtual
  _._nOnNetCommand_SingleSelectorEventCommand = function(selector, commentLine) {
    var mode, scope;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    this._nSetAnyEventCommandOptions(selector, "[]", scope, mode);
  };
  // * Установить опции команды события для следующей комманды
  _._nSetAnyEventCommandOptions = function(selector, list, scope, mode) {
    var options;
    if (!String.any(scope)) {
      // * Стандартные значения из команды плагина
      scope = "Same map";
    }
    if (!String.any(mode)) {
      mode = "Auto";
    }
    options = ANET.Utils.buildEventCommandOptions(selector, list, scope, mode);
    this.nSetCommandOptions(options);
  };
  _._nOnNetCommand_ActorListSelectorEventCommand = function(commentLine, isInclude) {
    var list, mode, scope, selector;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    list = ANET.Utils.extractActorsListFromComment(commentLine);
    selector = "Actor List";
    if (!isInclude) {
      selector += " Except";
    }
    this._nSetAnyEventCommandOptions(selector, list, scope, mode);
  };
  // * Есть ли опции (условия) запуска события для сети (проверка команды - комментария)
  _.nCheckEventStartOptionsFromCommentCommand = function() {
    var commentLine;
    if (this._list == null) {
      return;
    }
    commentLine = KDCore.Utils.getEventCommentValue("N start", this._list);
    if (commentLine == null) {
      return;
    }
    this.nStartOptions = ANET.Utils.parseEventStartOptionsFromCommentLine(commentLine);
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//$[ENCODE]
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  _.nIsEventIsShared = function() {
    var e;
    try {
      return this.isHaveNetworkStartOptions() && this.nStartOptions.sharedMode !== "No";
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  _.nIsEventIsSharedAndStrict = function() {
    var e, ref;
    try {
      return this.nIsEventIsShared() && ((ref = this.nStartOptions.sharedMode) != null ? ref.contains("Strict") : void 0);
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  _.nIsSharedEventCanBeForceCancelled = function() {
    return !this.nIsEventIsSharedAndStrict() && this.nSyncWaitCommandData.index === 0;
  };
  _.nPrepareSharedEvent = function() {
    ANInterpreterManager.resetSharedEvent();
    "PREPARE SHARED MOD".p(this._eventId);
    if ($gameTemp._nSharedEventOuterStartFlag == null) {
      // * Сброс пула игроков
      this.nPlayerPool = null;
      // * Регестрируем общее событие (второй аргумент флаг - мастер этот клиент?)
      ANInterpreterManager.setupSharedInterpreter(this, true);
      // * Запускаем пул игроков (на карте)
      this.nRequestSyncedNextEventCommand();
    } else {
      "OUUTER START".p();
      // * Сброс флага
      $gameTemp._nSharedEventOuterStartFlag = null;
      // * Отправим, что мы зарегестрировались на этом событии
      ANInterpreterManager.setupSharedInterpreter(this, false);
      // * Ждём разрешение на старт следующей команды (от сервера, мастера общего события)
      this.nRequestSyncedNextEventCommand();
    }
  };
  
  // * Игрок отменил ожидания других игроков (события должно закрыться сразу)
  _.nIsSharedEventWaitPoolCancelled = function() {
    var e;
    try {
      if (!this.nIsSharedEventCanBeForceCancelled()) {
        return;
      }
      if (Input.isCancel()) {
        // * Прерываем событие сразу (не запускаем)
        // * Очищаем ввод, чтобы меню сразу не выскочело после нажатия Esc
        Input.clear();
        ANInterpreterManager.forceCancelSharedEvent();
        this.terminate();
        return true;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
  // * Следующая команда события должна быть синхронизированна
  _.nRequestSyncedNextEventCommand = function() {
    this.nSyncWaitCommandData = {
      index: this._index,
      indent: this._indent
    };
    if (ANInterpreterManager.isSharedEventMaster()) {
      this.nSetWaitPlayerPool();
    } else {
      this.nSetWaitStartNextCommandFromServer();
    }
    ANInterpreterManager.showWaitPlayersOnSharedEvent();
  };
  // * Когда пришли данные от клиента
  _.nOnSyncedEventCommandResponse = function(index, indent, actorId) {
    var e;
    try {
      if (this.nSyncWaitCommandData == null) {
        return;
      }
      if (this.nPlayerPool == null) {
        return;
      }
      if (this.nSyncWaitCommandData.index === index && this.nSyncWaitCommandData.indent === indent) {
        "PLAYER ANSWER ".p(actorId);
        return this.nPlayerPool.onAnswer(actorId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Ожидания пула игроков
  _.nSetWaitPlayerPool = function() {
    "START POOL".p();
    if (this.nPlayerPool == null) {
      this.nPlayerPool = new PlayersWaitPool();
    } else {
      // * Не пересоздаём, так как нам важно учитывать только тех игроков на карте
      // * которые были во время запуска события, а не подключились позже
      this.nPlayerPool.reset();
    }
    // * Отправляем на сервер запрос
    this.nPlayerPool.register();
    this._waitMode = "netPlayersPool";
  };
  // * Ожидание готовности пула игроков (этот метод работает только на мастере общего события)
  _.nUpdateWaitPlayersPool = function() {
    var waiting;
    // * Пул надо обновлять (таймер внутри на повторную отправку запроса о готовности клиентов)
    this.nPlayerPool.update();
    if (this.nIsSharedEventWaitPoolCancelled()) {
      "STOP WAITING PLAYERS : IS CANCELED!".p();
      return true; // * Сразу выход из ожидания, если ожидание было преврано
    }
    waiting = !this.nPlayerPool.isReady();
    if (!waiting) {
      // * Теперь событие продолжается (мастер)
      "STOP WAITING PLAYERS : IS READY".p();
      ANInterpreterManager.sendSharedEventReadyToContinue();
      ANInterpreterManager.hideWaitPlayersOnSharedEvent();
      this.nClearSharedSyncEventCommandWait();
      this._waitMode = '';
    }
    return waiting;
  };
  // * Очистить пул и данные команды на синхронизацию
  _.nClearSharedSyncEventCommandWait = function() {
    this.nSyncWaitCommandData = null;
  };
  // * Ждать разрешение от сервера (мастера общего события) на запуск следующей команды события
  // * Этот метод работает только на клиентах (не мастере общего события)
  _.nSetWaitStartNextCommandFromServer = function() {
    this._canContinueSharedEvent = false;
    ANInterpreterManager.sendSharedEventRegisteredDone();
    "WAIT SERVER FOR NEXT COMMAND".p();
    // * Когда клиент уже на команде, которую надо синхронизировать, он будет
    // * каждую секунду "напоминать" о себе (снова отправлять что он готов продолжать)
    this._nRepeatAnswerToServerTimer = 60;
    this._waitMode = "netNextCommand";
  };
  // * Ожидание разрешения от сервера на запуск следующей команды
  _.nUpdateWaitServerNextCommandPermission = function() {
    var waiting;
    // * Сервер закрыл общее событие (отменил ожидание старта)
    // * В GameTemp, потому что может отменить, как тут ещё и не стартует это событие
    if ($gameTemp._shouldForceExitSharedEvent === true) {
      this.terminate();
      return true;
    }
    waiting = !this._canContinueSharedEvent;
    if (!waiting) {
      // * Событие продолжается (клиент)
      "CAN PROCESS TO NEXT COMMAND".p();
      this._waitMode = '';
    } else {
      if (this._nRepeatAnswerToServerTimer >= 0) {
        this._nRepeatAnswerToServerTimer--;
        if (this._nRepeatAnswerToServerTimer === 0) {
          this.nSetWaitStartNextCommandFromServer();
        }
      }
    }
    return true;
  };
  // * Получен ответ от сервера, что можно продолжать выполнение общего события
  _.nAllowContinueSharedEvent = function() {
    if (this._waitMode !== "netNextCommand") {
      return;
    }
    this._canContinueSharedEvent = true;
    // * Чтобы сброс переменной не произошёл снова
    this._nRepeatAnswerToServerTimer = -1;
    ANInterpreterManager.hideWaitPlayersOnSharedEvent();
  };
  // * Следующий выбор (команда 102) будет в режиме "только мастер события"
  _.nRequestMasterOnlyChoicesModeForNextChoice = function() {
    // * Если Пул игроков пустой, то не задаём флаг, чтобы сервер лишний раз не грузить
    if ((this.nPlayerPool != null) && this.nPlayerPool.isSinglePool()) {
      return;
    }
    "Shared Event Choices in Master only mode".p();
    $gameTemp.nRequireChoiceOnlyForMaster = true;
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__refresh, ALIAS__setup, ALIAS__setupStartingEvent, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    this._networkCharacters = new NETCharactersGroup();
  };
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(mapId) {
    ALIAS__setup.call(this, mapId);
    if (ANNetwork.isConnected()) {
      // * Клиент переходит на новую карту
      ANGameManager.onNewGameMapSetup();
      this.setupNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      return this.updateNetwork();
    }
  };
  
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    if (ANNetwork.isConnected()) {
      return this.refreshNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__setupStartingEvent = _.setupStartingEvent;
  _.setupStartingEvent = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp.isNetworkSharedEventReserved()) {
        return this.nSetupNetworkSharedEvent();
      }
    }
    return ALIAS__setupStartingEvent.call(this);
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  // * Безопасное обновление карты, так как может вызываться когда пришли данные игроков (на любой сцене в любой момент)
  _.nSafeRefresh = function() {
    var e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      if (typeof $dataMap === "undefined" || $dataMap === null) {
        return;
      }
      this.refresh();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.netCharsIsSomeoneCollided = function(x, y) {
    return this._networkCharacters.isSomeoneCollided(x, y);
  };
  _.nGetNetCharXY = function(x, y) {
    if (this.netCharsIsSomeoneCollided(x, y)) {
      return this._networkCharacters.getInPos(x, y);
    } else {
      return null;
    }
  };
  _.netChars = function() {
    return this._networkCharacters.characters();
  };
  _.networkCharacterByActorId = function(actorId) {
    return this._networkCharacters.characterByActorId(actorId);
  };
  _.networkCharacterById = function(id) {
    return this._networkCharacters.characterById(id);
  };
  // * Инициализация персонажей отображаемых на карте
  _.setupNetworkCharacters = function() {
    return this._networkCharacters.setup();
  };
  _.updateNetwork = function() {
    return this._networkCharacters.update();
  };
  _.refreshNetworkCharacters = function() {
    return this._networkCharacters.refresh();
  };
  // * Запуск общего события (которое пришло от сервера)
  _.nSetupNetworkSharedEvent = function() {
    var e, event;
    try {
      event = this.event($gameTemp.retrieveNetworkSharedEvent());
      if (event == null) {
        return false;
      }
      $gameTemp._nSharedEventOuterStartFlag = true;
      event.start();
      return true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__clear, _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (ANNetwork.isConnected()) {
      return this.nEndCallback();
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  _.nSetEndCallback = function(_nEndCallbackMethod) {
    this._nEndCallbackMethod = _nEndCallbackMethod;
  };
  _.nEndCallback = function() {
    if (this._nEndCallbackMethod != null) {
      this._nEndCallbackMethod();
      this._nEndCallbackMethod = null;
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__battleMembers, ALIAS__charactersForSavefile, ALIAS__facesForSavefile, ALIAS__leader, ALIAS__partyAbility, ALIAS__setupStartingMembers, _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  //@[ALIAS]
  ALIAS__battleMembers = _.battleMembers;
  _.battleMembers = function() {
    if (ANNetwork.isConnected()) {
      return ANBattleManager.battleMembers();
    } else {
      return ALIAS__battleMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__setupStartingMembers = _.setupStartingMembers;
  _.setupStartingMembers = function() {
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isMultiActorsMode()) {
        ALIAS__setupStartingMembers.call(this);
        // * Делаем копию начальных персонажей
        this._nSharedPartyMembers = [...this._actors];
        this._nSharedPartyOwners = {};
      }
      // * Нет начальной группы
      this._actors = [];
    } else {
      ALIAS__setupStartingMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__leader = _.leader;
  _.leader = function() {
    if (ANNetwork.isConnected()) {
      return this.networkLeader();
    } else {
      return ALIAS__leader.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__charactersForSavefile = _.charactersForSavefile;
  _.charactersForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.characterName(), actor.characterIndex()];
      });
    } else {
      return ALIAS__charactersForSavefile.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__facesForSavefile = _.facesForSavefile;
  _.facesForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.faceName(), actor.faceIndex()];
      });
    } else {
      return ALIAS__facesForSavefile.call(this);
    }
  };
  // * На всякий слуйчай добавил try \ catch, бывает выдаёт ошибку этот метод
  //@[ALIAS]
  ALIAS__partyAbility = _.partyAbility;
  _.partyAbility = function() {
    var e;
    if (ANNetwork.isConnected()) {
      try {
        return ALIAS__partyAbility.call(this, ...arguments);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    } else {
      return ALIAS__partyAbility.call(this, ...arguments);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  // * ОБЩИЙ персонаж - это персонаж которым также управляет игрок (но не его основной)
  // * Проверка, является ли actorId - СВОБОДНЫМ общим персонажем
  _.nIsValidSharedActor = function(actorId) {
    var playerForActor;
    playerForActor = ANGameManager.playersData.find(function(pl) {
      return pl.actorId === actorId;
    });
    if (playerForActor != null) {
      // * Данный ActorId является игроком!!!
      return false;
    } else {
      return true;
    }
  };
  _.nIsOwnedSharedActor = function(actorId) {
    return this.nGetOwnerOfSharedActor(actorId) != null;
  };
  _.nGetOwnerOfSharedActor = function(actorId) {
    return this._nSharedPartyOwners[actorId];
  };
  
  // * Я (данный клиент) управляю данным персонажем? (дополнительным)
  _.nIsIOwnedSharedActor = function(actorId) {
    return this.nIsOwnedSharedActor(actorId) && this.nGetOwnerOfSharedActor(actorId) === ANNetwork.myId();
  };
  //TODO: Надо чтобы NetworkCharacters на карте не создавались, а то ошибки и вылеты при JoinGame

  // * Оставляем shared акторов (которых контролирует игрок)
  _.nRefreshSharedMembers = function() {
    var actorId, i, len, ref;
    if (!ANET.PP.isMultiActorsMode()) {
      return;
    }
    ref = this._nSharedPartyMembers;
    for (i = 0, len = ref.length; i < len; i++) {
      actorId = ref[i];
      if (this.nIsValidSharedActor(actorId)) {
        this._actors.push(actorId);
        if (ANNetwork.isMasterClient()) {
          // * Если никто не занял, значит персонаж - хоста (по умолчанию)
          if (this._nSharedPartyOwners[actorId] == null) {
            this._nSharedPartyOwners[actorId] = ANNetwork.myId();
          }
        }
      } else {
        // * Если персонажем играют, то его удаляем
        delete this._nSharedPartyOwners[actorId];
      }
    }
  };
  //TODO: syncover clients @_nSharedPartyOwners
  _.nRemoveNetPlayerActor = function(actorId) {
    if (ANET.PP.isMultiActorsMode()) {
      if (!this.nIsValidSharedActor(actorId)) {
        ANGameManager.anotherPlayerLeaveGame(actorId);
      }
      if (ANNetwork.isMasterClient()) {
        console.log("TODO: refresh shared actor binding");
      }
    } else {
      // * not remove, Actor now is shared
      this.removeActor(actorId);
      //TODO: Этот метод не вызывается если уходит настоящий игрок!!! (в режиме мульти чар)
      ANGameManager.anotherPlayerLeaveGame(actorId);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  _.setupNetworkGame = function() {};
  // * В бою участвует только один персонаж?
  _.isOneBattler = function() {
    return this.battleMembers().length <= 1;
  };
  //TODO: как задать после выбора персонажа, чтобы каждый раз не вычислять
  _.networkLeader = function() {
    var actorId;
    actorId = ANGameManager.myPlayerData().actorId;
    return $gameActors.actor(actorId);
  };
  //TODO: Есть метод onRefreshGameParty (в ANGameManager) -> путаница может быть
  // * Этот метод вызывается когда группа была изменена (кто-то отключился)
  _.nRefreshNetworkActors = function() {
    var actor, e, i, id, len, playerForActor, ref;
    try {
      ref = this.members();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        id = actor.actorId();
        // * Ищем игрока для каждого Actor
        playerForActor = ANGameManager.playersData.find(function(pl) {
          return pl.actorId === id;
        });
        // * Если нету больше игрока с таким Actor, удаляем из партии
        if (playerForActor == null) {
          this.nRemoveNetPlayerActor(id);
        }
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  //TODO: Возможно это и на сцену битвы надо? (или там по другому работает)

  // * Данный метод очищает группу чтобы перераспределить Actors между игроками
  _.nClearBeforeRefresh = function() {
    return this._actors = [];
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__canMove, ALIAS__executeEncounter, ALIAS__getInputDirection, ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  //@[ALIAS]
  ALIAS__getInputDirection = _.getInputDirection;
  _.getInputDirection = function() {
    var dir;
    if (ANNetwork.isConnected() && $gameTemp._netAutoFollowActorId > 0) {
      dir = ALIAS__getInputDirection.call(this);
      if (dir !== 0) {
        $gameTemp._netAutoFollowActorId = null;
      }
      return dir;
    } else {
      return ALIAS__getInputDirection.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__canMove = _.canMove;
  _.canMove = function() {
    if (ANNetwork.isConnected()) {
      if (ANNetwork.isBusy()) {
        // * Игрок не может ходить если игра ждёт ответ от сервера
        return false;
      }
      if (ANET.UI.isPlayerMenuIsOpen()) {
        // * Игрок не может ходить, когда открыто меню другого игрока
        return false;
      }
    }
    return ALIAS__canMove.call(this, ...arguments);
  };
  //@[ALIAS]
  ALIAS__moveStraight = _.moveStraight;
  _.moveStraight = function(d) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveStraight.call(this, d);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        return ANPlayersManager.sendPlayerMove();
      }
    } else {
      return ALIAS__moveStraight.call(this, d);
    }
  };
  
  //@[ALIAS]
  ALIAS__moveDiagonally = _.moveDiagonally;
  _.moveDiagonally = function(horz, vert) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveDiagonally.call(this, horz, vert);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        ANPlayersManager.sendPlayerMove();
      }
    } else {
      ALIAS__moveDiagonally.call(this, horz, vert);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      this.updateNetwork();
      if (sceneActive === true) {
        this.nUpdatePlayerInputForNetwork();
      }
    }
  };
  //@[ALIAS]
  ALIAS__executeEncounter = _.executeEncounter;
  _.executeEncounter = function() {
    var result;
    if (ANNetwork.isConnected() && ANET.PP.isMapEncountersGlobal()) {
      $gameTemp.nNextBattleIsEncounter = true;
      result = ALIAS__executeEncounter.call(this, ...arguments);
      // * Снимаем флаг, чтобы не мешал другим битвам
      $gameTemp.nNextBattleIsEncounter = false;
      return result;
    } else {
      return ALIAS__executeEncounter.call(this, ...arguments);
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  _.nGetNameplate = function() {
    var actor;
    actor = $gameParty.leader();
    if ((actor != null) && ANET.PP.isShowNameplateOverMyCharacter() === true) {
      return actor.nGetNameplate();
    } else {
      return null;
    }
  };
  _.dataObserverHaveChanges = function() {
    return ANSyncDataManager.sendPlayerObserver();
  };
  _.updateNetwork = function() {
    var ref;
    if ($gameParty.isEmpty()) {
      return;
    }
    // * Проверяем и обновляем DataObserver своего персонажа
    // * Тут этот ? (првоерка Null) нужна!
    return (ref = $gameParty.leader()) != null ? ref.updateDataObserver() : void 0;
  };
  _.nUpdatePlayerInputForNetwork = function() {
    this.nUpdateAutoFollowMode();
    if (ANET.PP.isGameChatAllowed()) { //TODO: DYNAMIC?
      return this.nUpdateChatInput();
    }
  };
  
  //%[I] Показывать какую-то иконку над игроком (или целью) что в режиме преследования находится
  _.nUpdateAutoFollowMode = function() {
    var actorForFollow;
    if (!($gameTemp._netAutoFollowActorId > 0)) {
      return;
    }
    if (this.isMoving() || !this.canMove()) {
      return;
    }
    actorForFollow = $gameMap.networkCharacterByActorId($gameTemp._netAutoFollowActorId);
    if (actorForFollow != null) {
      Game_Follower.prototype.chaseCharacter.call(this, actorForFollow);
    } else {
      $gameTemp._netAutoFollowActorId = null;
    }
  };
  _.nUpdateChatInput = function() {
    var openChatButton, sayInChatButton;
    //TODO: Можно оптимизировать, в initMembers
    openChatButton = ANET.PP.getChatOpenCloseKey();
    sayInChatButton = ANET.PP.getChatSayKey();
    if (Input.isTriggered(openChatButton)) {
      if (ANET.UI.isChatOpen()) {
        // * Если кнопка открыть чат и кнопка сказать в чат одинаковые
        if (openChatButton === sayInChatButton) {
          ANET.UI.showChatInputSafe(); // * то не закрываем, а сцена ввода текста
          Input.clear(); // * иначе закрываем
        } else {
          ANET.UI.closeChat();
        }
      } else {
        ANET.UI.showChat();
      }
    } else if (Input.isTriggered(sayInChatButton)) {
      if (ANET.UI.isChatOpen()) {
        ANET.UI.showChatInputSafe();
      }
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(switchId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, switchId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalSwitch(switchId)) {
          ANSyncDataManager.sendGlobalSwitchChange(switchId, this.value(switchId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, switchId, value);
    }
  };
  
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  _.isGlobalSwitch = function(switchId) {
    return ANET.PP.globalSwitchesIds().contains(switchId);
  };
  _.onSwitchFromServer = function(switchId, value) {
    this._data[switchId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  // * Инициализация стилей таблиц имён для персонажей
  _.nInitNameplatesStylesForActors = function() {
    if (this.nActorsNameplatesStyles == null) {
      return this.nActorsNameplatesStyles = {};
    }
  };
  // * Задать стиль для персонажа
  //?VERSION
  _.nSetNameplateStyleForActor = function(actorId, style) {}; // * ONLY FOR PRO
  
  //?VERSION
  _.nGetNameplateStyleForActor = function(actorId) {
    return null;
  };
  // * Инициализация набора общих событий для команд пользователя
  _.nInitCustomCommandsCE = function() {
    if (this.nCustomCommandsCE == null) {
      return this.nCustomCommandsCE = {};
    }
  };
  // * Проверка, есть ли для кастомной команды общее событие (и запуск если есть)
  _.nCheckCustomCommandForCEStart = function(name) {
    var ceId, e;
    try {
      this.nInitCustomCommandsCE();
      ceId = this.nCustomCommandsCE[name];
      if ((ceId != null) && ceId > 0) {
        $gameTemp.reserveCommonEvent(ceId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Зарегестрировать вызов общего события для кастомной команды
  _.nRegisterCustomCommandCE = function(name, ceId) {
    var e;
    try {
      this.nInitCustomCommandsCE();
      this.nCustomCommandsCE[name] = ceId;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCommonEventReserved, ALIAS__requestAnimation, ALIAS__retrieveCommonEvent, ALIAS__setDestination, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  //@[ALIAS]
  ALIAS__setDestination = _.setDestination;
  _.setDestination = function() {
    ALIAS__setDestination.call(this, ...arguments);
    $gameTemp._netAutoFollowActorId = null;
  };
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    // * Виртуальные общие события от сервера
    this._virtualEventQueue = [];
  };
  
  //@[ALIAS]
  ALIAS__isCommonEventReserved = _.isCommonEventReserved;
  _.isCommonEventReserved = function() {
    return this.isVirtualCommonEventReserved() || ALIAS__isCommonEventReserved.call(this);
  };
  
  // * Виртуальные события в приоритете
  //@[ALIAS]
  ALIAS__retrieveCommonEvent = _.retrieveCommonEvent;
  _.retrieveCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__retrieveCommonEvent.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__requestAnimation = _.requestAnimation;
  _.requestAnimation = function() {
    if (ANNetwork.isConnected()) {
      // * В бою анимацию синхронизируется (только мастер)(отправляется другим игрокам)
      if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
        ANBattleManager.requestAnimation(...arguments);
      }
    }
    return ALIAS__requestAnimation.call(this, ...arguments);
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__reservedCommonEvent, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV нету метода retrieveCommonEvent
  //@[ALIAS]
  ALIAS__reservedCommonEvent = _.reservedCommonEvent;
  _.reservedCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__reservedCommonEvent.call(this);
    }
  };
  // * В MV нету метода requestBattleRefresh
  _.requestBattleRefresh = function() {
    if ($gameParty.inBattle()) {
      return this._needsBattleRefresh = true;
    }
  };
  _.isBattleRefreshRequested = function() {
    return this._needsBattleRefresh === true;
  };
  _.clearBattleRefreshRequest = function() {
    return this._needsBattleRefresh = false;
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  (function() {    // * Virtual Common Events
    // -----------------------------------------------------------------------
    _.reserveNetworkSharedEvent = function(_reservedNetworkSharedEvent) {
      this._reservedNetworkSharedEvent = _reservedNetworkSharedEvent;
    };
    _.isNetworkSharedEventReserved = function() {
      return this._reservedNetworkSharedEvent >= 1;
    };
    // * Забираем (и сразу очищаем)
    _.retrieveNetworkSharedEvent = function() {
      var eventId;
      eventId = this._reservedNetworkSharedEvent;
      this._reservedNetworkSharedEvent = 0;
      return eventId;
    };
    _.reserveVirtualCommonEvent = function(list) {
      return this._virtualEventQueue.push(list);
    };
    _.isVirtualCommonEventReserved = function() {
      return this._virtualEventQueue.length > 0;
    };
  })();
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Troop.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Troop.prototype;
})();

// ■ END Game_Troop.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Unit.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Unit.prototype;
  _.nUpdateBattleDataSync = function() {
    var members;
    members = this.members();
    if (members.some(function(m) {
      return m.isNeedNetPushBattleData();
    })) {
      ANSyncDataManager.sendBattleUnitsObserver(members);
      members.forEach(function(m) {
        return m.onNetBattleDataPushed();
      });
    }
  };
})();

// ■ END Game_Unit.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(variableId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, variableId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalVariable(variableId)) {
          ANSyncDataManager.sendGlobalVariableChange(variableId, this.value(variableId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, variableId, value);
    }
  };
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      return this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  _.isGlobalVariable = function(varId) {
    return ANET.PP.globalVariablesIds().contains(varId);
  };
  _.getAllGlobalVariablesData = function() {
    var i, j, variables;
    variables = [];
    for (i = j = 1; j <= 8; i = ++j) {
      variables.push([i, this.value[i]]);
    }
    return variables;
  };
  _.onVariableFromServer = function(varId, value) {
    this._data[varId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ImageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ImageManager;
  _.loadAA = function(filename) {
    return this.loadBitmap('img/Alpha/', filename);
  };
})();

// ■ END ImageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
// * Глабольный набор вспомогательных функций для пользователя
var nAPI;

nAPI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = nAPI;
  // * Для вызова сцены сетевой игры
  // * (только если в Scene_Title нет пункта или используется кастомная сцена)
  //$[Внимание: могут быть проблемы в вызове из сцены карты (одиночная игра) и выходе из сцены]
  _.startNetworkGameScene = function() {
    SceneManager.push(Scene_NetworkGameMenu);
  };
  _.ID = function() {
    return ANET.VD.getGameVersion();
  };
  (function() {    // * NETWORK STATE
    // -----------------------------------------------------------------------
    _.isNetworkGame = function() {
      var e;
      try {
        return ANNetwork.isConnected();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    _.myPlayerIndex = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myIndex();
        } else {
          return 0;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.myActorId = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myActorId();
        } else {
          return $gameParty.leader().actorId();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.playersCount = function() {
      var e;
      try {
        return ANGameManager.playersData.length;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.isMasterClient = function() {
      var e;
      try {
        return _.isNetworkGame() && ANNetwork.isMasterClient();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    // * Возвращает набор данных исходя из what (см. ANGameManager.getPlayerInfo)
    //? what && byWhat: actor, actorId, netId, actorName, playerName, playerIndex, info
    _.getPlayerInfo = function(what, byWhat, value) {
      var e;
      try {
        return ANGameManager.getPlayerInfo(what, byWhat, value);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    // * Возвращает NETCharacter или Null
    _.getPlayerCharacter = function(byWhat, value) {
      var e, playerData;
      try {
        if (!KDCore.Utils.isSceneMap()) {
          return null;
        }
        playerData = this.getPlayerInfo("info", byWhat, value);
        // * Персонаж должен быть на текущей карте + сцена карты должна быть текущая
        if ((playerData != null) && NetPlayerDataWrapper.isCharOnMap(playerData)) {
          return $gameMap.networkCharacterById(playerData.id);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
    // * Кто на данный момент читает событие (локально)
    return _.getEventParticipant = function(what) {
      var e;
      try {
        if ($gameMap._interpreter.isRunning() && ANNetwork.isConnected()) {
          return nAPI.getPlayerInfo(what, "actorId", ANGameManager.myActorId());
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * HUI
    // -----------------------------------------------------------------------
    _.showGreenAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifySucess(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showRedAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifyError(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showInfoMessage = function(text1, text2 = "") {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.showWaitingInfo(text1, text2, 1) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return _.hideInfoMessage = function() {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.hideWaitingInfo() : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * USER SERVER COMMANDS
    // -----------------------------------------------------------------------
    //@[ALIAS SUPPORT]
    // * FOR ALIASING (for plugin developers and custom commands implementation)
    _.onCustomCommand = function(name, data) {
      var e;
      try {
        if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
          $gameSystem.nCheckCustomCommandForCEStart(name);
        }
        ANET.CFIX.onCustomCommand(name, data);
      } catch (error) {
        e = error;
        ANET.w(e);
      }
      console.log("Custom network command received: " + name);
    };
    // * USER CUSTOM CODE HERE
    _.sendCustomCommand = function(name, data) {
      var e;
      try {
        if (!_.isNetworkGame()) {
          return;
        }
        return ANNetwork.callback(NMS.Game("userCommand", {name, data}), function() {
          //TODO: Может не надо выполнять и на данном клиенте?
          // * Сразу выполняем и на данном клиенте
          // * Так как сервер эту команду выполнит в режиме ретрансляции
          return nAPI.onCustomCommand(name, data);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Подписать на определённую (кастомную) команду выполенине общего события
    return _.registerCommonEventForCommand = function(name, commonEventId) {
      var e;
      try {
        return ANNetwork.callback(NMS.Game("customCommandLink", {name, commonEventId}), function() {
          if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
            $gameSystem.nRegisterCustomCommandCE(name, commonEventId);
          }
          return console.log("Custom network command register to Common Event is done");
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * CHAT
    // -----------------------------------------------------------------------
    _.writeInChat = function(message, isGlobal = false) {
      var e;
      try {
        if (isGlobal === true && ANNetwork.isConnected()) {
          ANGameManager.sendRawChatMessage(0, 0, message);
        } else {
          ANET.UI.addMessageToChat(ANET.Utils.buildChatMessage(0, 0, message));
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.closeChatWindow = function() {
      var e;
      try {
        ANET.UI.closeChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.openChatWindow = function() {
      var e;
      try {
        ANET.UI.showChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.moveChatWindow = function(x = 0, y = 0) {
      var e;
      try {
        $gamePlayer._nLastChatWindowPosition = {
          x: x,
          y: y
        };
        if (this.isChatWindowOpened()) {
          ANET.UI.chat()._moveToStartPosition();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        $gamePlayer._nLastChatWindowPosition = {
          x: 0,
          y: 0
        };
      }
    };
    return _.isChatWindowOpened = function() {
      var e;
      try {
        return ANET.UI.isChatOpen();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * PLAYER MENU
    // -----------------------------------------------------------------------
    return _.callPlayerMenuAction = function(actionName, relativeActorId) {
      var anotherPlayer, e;
      try {
        switch (actionName) {
          case "trade":
            anotherPlayer = $gameMap.networkCharacterByActorId(relativeActorId);
            if ((anotherPlayer != null) && ANTradeManager.isClientAvailableForTrade()) {
              return ANTradeManager.requestTradeWith(anotherPlayer.playerData());
            }
            break;
          case "status":
            // * Запрашиваем статус определённого персонажа
            $gameTemp._netRequestStatusForCertainActorId = relativeActorId;
            return SceneManager.push(Scene_Status);
          case "follow":
            // * Автоматически следуем за определённым игроком
            return $gameTemp._netAutoFollowActorId = relativeActorId;
          default:
            return ANET.w("Unknown Player Menu Action: " + actionName);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
  (function() {    
    // -----------------------------------------------------------------------

    // * NAMEPLATES
    // -----------------------------------------------------------------------
    return _.setNameplateStyle = function(actorId, styleId) {
      var e;
      try {
        if (!ANET.isPro()) {
          return;
        }
        if (!ANNetwork.isConnected()) {
          return;
        }
        return $gameSystem.nSetNameplateStyleForActor(actorId, styleId);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------
// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс для персонажей на карте других игроков
var NETCharacter;

NETCharacter = class NETCharacter extends Game_Character {
  constructor(id) {
    super();
    this.id = id;
    //* Иконка сетевого состояния игрока (меню, карта, торговля, чат и т.д.)
    this.networkStateIcon = null;
    this.refresh();
  }

  // * Синхронизация движения
  playerData() {
    return ANGameManager.getPlayerDataById(this.id);
  }

  actor() {
    var plData;
    plData = this.playerData();
    if (plData != null) {
      return $gameActors.actor(this.playerData().actorId);
    } else {
      return null;
    }
  }

  actorId() {
    if (this.playerData() != null) {
      return this.playerData().actorId;
    } else {
      return 0;
    }
  }

  refresh() {
    var charIndex, charName;
    if (this.actor() == null) {
      return;
    }
    charName = this.actor().characterName();
    charIndex = this.actor().characterIndex();
    return this.setImage(charName, charIndex);
  }

  nGetNameplate() {
    var actor;
    if (this.actor() == null) {
      return null;
    }
    actor = this.actor();
    if (actor != null) {
      return actor.nGetNameplate();
    } else {
      return null;
    }
  }

  // * Сетевое состояние игрока
  // * =====================================================================
  requestNetworkStateIcon(networkStateIcon) {
    this.networkStateIcon = networkStateIcon;
  }

};

(function() {  
  // * =====================================================================

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharacter.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharacter.prototype;
})();

// ■ END NETCharacter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс содержит NETCharacter всех игроков на карте (аналог Game_Followers)
//?[STORABLE]
//@[GLOBAL]
var NETCharactersGroup;

NETCharactersGroup = class NETCharactersGroup {
  constructor() {
    this._data = [];
  }

  setup() {
    "SETUP NETWORK CHARS".p();
    this._data = [];
    this._refreshCharacters();
  }

  // * Вызывается из Game_Map.refresh
  refresh() {
    var char, i, len, ref;
    this._refreshCharacters();
    ref = this._data;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      char.refresh();
    }
  }

  characters() {
    return this._data;
  }

  characterById(id) {
    return this.characters().find(function(c) {
      return c.id === id;
    });
  }

  characterByActorId(actorId) {
    return this.characters().find(function(c) {
      return c.actorId() === actorId;
    });
  }

  update() {
    var c, i, len, ref, results;
    ref = this.characters();
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      c = ref[i];
      results.push(c.update());
    }
    return results;
  }

  isSomeoneCollided(x, y) {
    return this.characters().some(function(c) {
      return c.pos(x, y);
    });
  }

  getInPos(x, y) {
    return this.characters().find(function(c) {
      return c.pos(x, y);
    });
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharactersGroup.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharactersGroup.prototype;
  
  // * Данный метод удаляет (отключённых) и создаёт (подклюённых) персонажей
  _._refreshCharacters = function() {
    this._removeNotExistsCharacters();
    this._addNewCharacters();
    this._refreshNetworkCharactersSprites();
  };
  // * Удаляем (отключился или ушёл на другую карту)
  _._removeNotExistsCharacters = function() {
    var char, i, len, ref, x;
    x = ANGameManager.anotherPlayersOnMap();
    ref = this.characters();
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      if (char == null) {
        continue;
      }
      if (!x.find(function(c) {
        return c.id === char.id;
      })) {
        this._data.delete(char);
      }
    }
  };
  // * Добавляем новых персонажей
  _._addNewCharacters = function() {
    var char, i, len, pl, x;
    // * anotherPlayersOnMap - значит на текущей карте и characterReady is true - Это важно
    x = ANGameManager.anotherPlayersOnMap();
    for (i = 0, len = x.length; i < len; i++) {
      pl = x[i];
      char = this.characterById(pl.id);
      if (char == null) {
        this._data.push(new NETCharacter(pl.id));
      }
    }
  };
  // * Пересоздать спрайты персонажей
  _._refreshNetworkCharactersSprites = function() {
    var ref;
    if (!KDCore.Utils.isSceneMap()) {
      return;
    }
    if ((ref = SceneManager._scene._spriteset) != null) {
      ref.refreshNetworkCharacters();
    }
  };
})();

// ■ END NETCharactersGroup.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
var NETLobbyChat;

NETLobbyChat = class NETLobbyChat {
  constructor() {
    // * Используется для фильтрации сообщений
    this._gameId = nAPI.ID();
    this.loadHistory();
  }

  sendMessage() {
    var e, message, msgerInput, myName, text;
    try {
      msgerInput = document.getElementById("anet-chat-input");
      if (msgerInput == null) {
        return;
      }
      text = msgerInput.value;
      //console.log("try send", text)
      if (!String.any(text)) {
        return;
      }
      myName = ANGameManager.myPlayerData().name;
      message = this.buildMessage(myName, text);
      this.sendMessageToServer(message);
      return msgerInput.value = "";
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  buildMessage(who, text) {
    return {
      who,
      text,
      time: ANET.getNetChatTimeNow(),
      gameid: this._gameId
    };
  }

  appendMessage(message, side) {
    var e, msgHTML, msgerChat, text, time, who;
    try {
      msgerChat = document.getElementById("anet-chat-main");
      if (msgerChat == null) {
        return;
      }
      ({who, text, time} = message);
      msgHTML = ANET.getNetLobbyChatNewMessageCode(who, text, time, side);
      msgerChat.insertAdjacentHTML("beforeend", msgHTML);
      msgerChat.scrollTop += 500;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  static AddToHistory(message, side = 'left') {
    var e;
    try {
      if ($gameTemp.nLobbyChatHistory == null) {
        $gameTemp.nLobbyChatHistory = [];
      }
      $gameTemp.nLobbyChatHistory.push({message, side});
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  loadHistory() {
    var e, i, item, len, ref;
    if ($gameTemp.nLobbyChatHistory == null) {
      return;
    }
    try {
      ref = $gameTemp.nLobbyChatHistory;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        this.appendMessage(item.message, item.side);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  sendMessageToServer(message) {
    var e;
    try {
      //"send to server text from ".p(message.who)
      ANNetwork.callback(NMS.Lobby("chatMessage", message), () => {
        this.appendMessage(message, 'right');
        return NETLobbyChat.AddToHistory(message, 'right');
      });
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  onMessageFromServer(message) {
    var e;
    try {
      if (message == null) {
        return;
      }
      if (!String.any(message.who)) {
        return;
      }
      //"message from server from ".p(message.who)
      if (!ANET.PP.isLobbyChatIsGlobal()) {
        if (this._gameId !== message.gameid) {
          return;
        }
      }
      this.appendMessage(message, 'left');
      NETLobbyChat.AddToHistory(message, 'left');
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessages.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _CM, _M;
  //@[DEFINES]
  _M = NetMessage;
  _CM = function(name, flag, data, socket) {
    return _M.EmptyMessageWithFlag(flag, data, socket).setName(name);
  };
  // * Обозначения
  // f - имя комманды (флага)
  // d - данные
  // s - сокет (либо ничего)

  //?LOBBY COMMANDS
  _M.Lobby = function(f, d, s) {
    return _CM('lobby', f, d, s);
  };
  //?MAP COMMANDS
  _M.Map = function(f, d, s) {
    return _CM('map', f, d, s);
  };
  //?GAME COMMANDS
  _M.Game = function(f, d, s) {
    return _CM('game', f, d, s);
  };
  //?INTERPRETER COMMANDS
  _M.Event = function(f, d, s) {
    return _CM('event', f, d, s);
  };
  //?BATTLE COMMANDS
  _M.Battle = function(f, d, s) {
    return _CM('battle', f, d, s);
  };
  //?OTHER COMMANDS
  _M.Other = function(f, d, s) {
    return _CM('other', f, d, s);
  };
  //?COMMON COMMANDS
  _M.Common = function(innerFlag, d, s) {
    return _M._commonCMD('forClients', innerFlag, d, s);
  };
  //? COMMON COMMAND DATA
  _M._commonCMD = function(cmdName, innerFlag, d, s) {
    var commonData;
    commonData = {
      cmd: innerFlag,
      data: d
    };
    return _CM('common', cmdName, commonData, s);
  };
  //?ABSZ COMMANDS
  // * Через broadcast, т.е. самому себе не прийдёт
  _M.ABSZ = function(innerFlag, d, s) {
    return _M._commonCMD('absz', innerFlag, d, s);
  };
})();

// ■ END NetMessages.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Основной класс менеджер интерфейса (API)
// * Аналогичен классу AA.UI из ABSZ
ANET.UI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ ANET.UI.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.UI;
  _.setUI = function(uiSet) {
    this.uiSet = uiSet;
  };
  _.isValid = function() {
    return (this.uiSet != null) && ANNetwork.isConnected();
  };
  // * Когда появляется окно с сообщением
  _.onGameMessageStart = function() {
    if (!this.isValid()) {
      return;
    }
    this.uiSet.onGameMessageStart();
    this.closePlayerMenu();
  };
  // * Когда заканчивается окно с сообщением
  _.onGameMessageEnd = function() {
    if (!this.isValid()) {
      return;
    }
    return this.uiSet.onGameMessageEnd();
  };
  // * Когда было нажатие мышки на какой-либо UI элемент
  _.isUITouched = function() {
    return false;
  };
  // * Вызывается когда сцена карты заканчивается
  _.terminate = function() {
    var ref;
    if ((ref = this.uiSet) != null) {
      ref.terminate();
    }
    this.terminateModalWindow();
  };
  (function() {    
    // * Основной интерфейс Spriteset_UI
    // -----------------------------------------------------------------------
    _.refresh = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.refresh() : void 0;
    };
    _.hide = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.hide() : void 0;
    };
    _.show = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.show() : void 0;
    };
    // * Если какой-либо UI элемент обрабатывает нажатие курсора, то true
    _.isAnyUIElementTouchProcess = function() {
      return false;
    };
    // * Эффект нажатия курсора
    return _.playClickEffect = function(noSound = false) {
      var effect, x, y;
      if (!this.isValid()) {
        return;
      }
      if (!noSound) {
        SoundManager.playCursor();
      }
      ({x, y} = TouchInput);
      effect = new ANET.Sprite_MapClickEffect(x, y);
      this.uiSet.addChild(effect);
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Меню игрока
    // -----------------------------------------------------------------------
    _.playerMenu = function() {
      return this.uiSet.playerMenuWindow;
    };
    // * Есть ли меню игрока (создан ли), так как опциональный и нету в Basic
    _.isPlayerMenuValid = function() {
      return this.isValid() && (this.playerMenu() != null);
    };
    _.isPlayerMenuIsOpen = function() {
      return this.isPlayerMenuValid() && this.playerMenu().isOpen();
    };
    // * netChar - класс NETCharacter
    _.openNetPlayerMenuFor = function(netChar) {
      if (!this.isPlayerMenuValid()) {
        return;
      }
      if (netChar == null) {
        this.closePlayerMenu();
      }
      this.playerMenu().openForCharacter(netChar);
    };
    return _.closePlayerMenu = function() {
      var ref;
      if ((ref = this.playerMenu()) != null) {
        ref.close();
      }
    };
  })();
  (function() {    // * Чат
    // -----------------------------------------------------------------------
    _.chat = function() {
      return this.uiSet.chatWindow;
    };
    // * Есть ли чат (создан ли), так как опциональный и нету в Basic
    _.isChatValid = function() {
      return this.isValid() && (this.chat() != null);
    };
    // * Открыто ли окно чата
    _.isChatOpen = function() {
      return this.isChatValid() && this.chat().isActive();
    };
    // * Показать сцену ввода сообщения в чат
    _.showChatInput = function() {
      if (!this.isValid()) {
        return;
      }
      SceneManager.push(Scene_NetChatInput);
    };
    // * Показать сцену ввода сообщения в чат (с учётом событий и сообщений)
    _.showChatInputSafe = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isCanChatInput()) {
        return this.showChatInput();
      }
    };
    _.showChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!this.isChatOpen()) {
        this.chat().open();
      }
    };
    _.closeChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isChatOpen()) {
        this.chat().close();
      }
    };
    
    // * Добавить сообщение в чат (можно вызывать на любой сцене)
    _.addMessageToChat = function(message) {
      if (!this.isChatValid()) {
        return;
      }
      if (message == null) {
        return;
      }
      // * Если на карте, то добавляем прямо в чат
      if (KDCore.Utils.isSceneMap()) {
        this.chat().addMessageToChat(message);
        this.addEmotionToChat(message);
        if (ANET.PP.getChatAutoOpen()) {
          this.showChat();
        }
      } else {
        // * Иначе в историю
        $gameTemp._nChatHistory.push(message);
      }
    };
    // * Показать эмоцию из чата (вызывается либо когда сам отправляешь, либо на сцене карты)
    _.addEmotionToChat = function(message) {
      if (!this.isChatValid()) {
        return;
      }
      if (message == null) {
        return;
      }
      this.chat().parseEmotions(message);
    };
    // * Может ли игрок начать вводить текст в чат (другая сцена будет открыта)
    _.isCanChatInput = function() {
      return !($gameMessage.isBusy() || $gameMap.isEventRunning());
    };
    
    // * Открыть (или не надо) чат при переходе на сцену карты
    return _.openChatAfterMapLoaded = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!$gamePlayer._nChatIsClosed) {
        return this.showChat();
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Модальное диалоговое окно
    // -----------------------------------------------------------------------
    _.modalWindow = function() {
      return this.uiSet.netModalDialog;
    };
    _.isModalWindowIsOpen = function() {
      var ref;
      return this.isValid() && ((ref = this.modalWindow()) != null ? ref.isOpen() : void 0);
    };
    // * Если сцена закрывается, а окно октрыто -> автоматический ответ "НЕТ"
    _.terminateModalWindow = function() {
      var e;
      try {
        if (this.isModalWindowIsOpen()) {
          this.modalWindow().forceCancel();
        }
      } catch (error) {
        e = error;
        ANET.w(e);
      }
    };
    // * Показать модальное окно для начала торговли, где initiator игрок который отправил нам запрос
    return _.showModalWindowForTrade = function(initiatorId) {
      var e, name;
      if (!this.isValid()) {
        return;
      }
      if (!String.any(initiatorId)) {
        return;
      }
      try {
        name = nAPI.getPlayerInfo("actorName", "netId", initiatorId);
        return this.modalWindow().openForTradeRequest(name);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    };
  })();
})();

// ■ END ANET.UI.coffee
//---------------------------------------------------------------------------
// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс которые работает с параметрами и командами плагина
(function() {
  var ParamsManager;
  ParamsManager = (function() {
    class ParamsManager extends KDCore.ParamLoader {
      constructor() {
        super("ANETZ");
        this._prepareParameters();
      }

      //? GAME ID --------------------------------------------------------------
      // * Пользовательский GameID
      isUseCustomGameId() {
        return this.getParam("isCustomGameId", false) && String.any(this.getCustomGameId());
      }

      getCustomGameId() {
        return this.getParam("customGameId", "");
      }

      //? CONNECTION -----------------------------------------------------------
      // * Настройки соединения
      serverIp() {
        return this._ip;
      }

      serverPort() {
        return this._port;
      }

      isHTTPSConnection() {
        return this._isHttps === true;
      }

      //? MULTIPLAYER GROUP -----------------------------------------------------------

        //Join to Game Allowed?
      isJoinStartedRoomAllowed() {
        return this.getParam("joinStartedAllowed", false);
      }

      //Join to Loaded Game?
      isJoinStartedAndLoadedRoom() {
        return this.getParam("joinStartedAndLoadedAllowed", true);
      }

      //On Player Joined CE
      getJoinedRoomCommonEvent() {
        return this.getParam("onJoinCE", 0);
      }

      //Wait Map Transfer?
      isOnlySameMapMode() {
        return this.getParam("onlySameMap", true);
      }

      // New Game Allowed?
      // * Доступна ли обычная локальная Новая игра
      isSinglePlayerAllowed() {
        return this.getParam("singlePlayerAllowed", true);
      }

      // Is Check Ready?
      // * Проверять готовность игрока перед началом игры?
      isCheckPlayerReadyState() {
        return this.getParam("isReadyStatusCheck", true);
      }

      //Rooms Filter?
      isRoomFilterON() {
        return ANET.isPro() && this.getParam("roomFilter", false);
      }

      //Save and Load Allowed?
      // * Сохранение и загрузка сетевой игры
      isSaveLoadAllowed() {
        return this.getParam("saveLoadGame", true);
      }

      // Is show network icons?
      // * Показывать иконки статуса игрока
      isShowNetworkIcons() {
        return this.getParam("networkStatusIcons", true);
      }

      // Join Random Room Option
      // * Показывать опцию (Подключиться к случайной комнате)
      isJoinRandomRoomAllowed() {
        return this.getParam("isJoinRandomOptionExists", true);
      }

      //In-Game Chat?
      isGameChatAllowed() {
        if (ANET.isPro()) {
          return this.getParam("inGameChat", false);
        } else {
          return false;
        }
      }

      //Is Encounters is Global?
      isMapEncountersGlobal() {
        return this.getParam("isMapEncountersGlobal", false);
      }

      //? NAMEPLATES SUBGROUP ----------------------------------------------------

        //Is show Nameplates?
      // * Показывать имя персонажа (над персонажем)
      isShowNameplates() {
        return this.getParam("isUseNameplates", true);
      }

      //Actor name?
      // * Показывать имя персонажа (или игрока)
      isShowActorNameInNameplate() {
        return this.getParam("isShowActorNameInNameplate", true);
      }

      //My namaplate?
      // * Показывать имя над моим персонажем?
      isShowNameplateOverMyCharacter() {
        return this.getParam("isShowMyNameplate", false);
      }

      //Styles
      getNameplateStyles() {
        return this.getParam("nameplatesDB", []);
      }

      //? CHAT SUBGROUP -----------------------------------------------------------

        //Start Message
      getChatStartMessage() {
        return this.getParam("chatStartMessage", "");
      }

      getChatOpenCloseKey() {
        return this.getParam("chatOpenCloseKey", "t");
      }

      getChatSayKey() {
        return this.getParam("chatSayKey", "t");
      }

      getChatAutoOpen() {
        return this.getParam("chatAutoOpen", false);
      }

      // Is click to Say?
      isSayIfClickOnChatWindow() {
        return this.getParam("clickOnChatToSay", true);
      }

      // Messages Settings
      getChatMessagesSettings() {
        return this.getParam("chatMessagesSettings", {
          maxlength: 32,
          forbiddenEscapeCodes: "V",
          iconsSize: 18,
          allowEmotions: true
        });
      }

      // Input Text Scene
      getChatInputSceneVisualSettings() {
        return this.getParam("chatInputSceneVisualSettings", {
          mapChannelButtonPosition: {
            x: 4,
            y: 6
          },
          allChannelButtonPosition: {
            x: 104,
            y: 6
          },
          inputSceneOkButtonPosition: {
            x: 356,
            y: 284
          }
        });
      }

      //? PLAYER MENU -----------------------------------------------------------

        //In-Game Player Menu?
      // * Меню игрока - включено? (вообще в игре)
      isInGamePlayerMenuAllowed() {
        if (ANET.isPro()) {
          return this.getParam("playerMenuSettingsGroup", true);
        } else {
          return false;
        }
      }

      // * Стандартные команды для меню игрока
      getPlayerMenuDefaultCommands() {
        return this._menuCommands;
      }

      //Custom Commands
      getPlayerMenuUserCommands() {
        return this.getParam("userIPLMenuCommands", []);
      }

      //Is need trade confirm window?
      // * Спрашивать игрока о начале торговли? (запрос торговли от другого)
      isShowModalForTradeRequest() {
        return this.getParam("isTradeModalWindowActive", true);
      }

      getTradeModalWindowText() {
        return this.getParam("tradeModalWindow_text", "Accept \\C[1]Trade\\C[0] from \\C[2]%1\\C[0]?");
      }

      getModalWindowOpenSE() {
        return this.getParam("tradeModalWindow_openSE", "Bell3");
      }

      getModalWindowYesHotkey() {
        return this.getParam("tradeModalWindow_hkYes", "y");
      }

      getModalWindowNoHotKey() {
        return this.getParam("tradeModalWindow_hkNo", "n");
      }

      //? LOBBY CHAT -----------------------------------------------------------
      isShowLobbyChat() {
        return this.getParam("lobbyChat", true);
      }

      isLobbyChatIsGlobal() {
        return this.getParam("lobbyChatIsGlobal", false);
      }

      //? PLAYER SETTINGS GROUP -----------------------------------------------------------

        // * Набор персонажей Actors для сетевой игры
      //Actors
      actorsForNetwork() {
        return this.getParam("actorsForNetwork", [1, 2, 3, 4]);
      }

      //?VERSION
      //Players per Room
      maxPlayersInRoom() {
        return this.getParam("maxPlayersInRoom", 4);
      }

      // * Можно ли выбирать персонажа себе
      //Actor selection?
      isActorSelectionAllowed() {
        return this.getParam("isActorSelectionAllowed", true);
      }

      // * Можно ли начать сетевую игру одному
      //One player start?
      isSingleActorNetworkGameAllowed() {
        return this.getParam("isSinglePlayerStartAllowed", true);
      }

      // * Отображение имени игрока заместо имени персонажа
      // * 0 - Не показывать, 1 - Name, 2 - Nickname
      //?DINAMIC
      //Player Name for Actor
      playerActorNameType() {
        return 0;
      }

      //On Player Disconnect CE
      getPlayerLeaveGameCommonEventId() {
        return this.getParam("playerLeaveGameCommonEvent", 0);
      }

      //? OTHER -----------------------------------------------------------
      globalVariablesIds() {
        return this._globalVars;
      }

      globalSwitchesIds() {
        return this._globalSwitches;
      }

      //Input Max Length
      getTextInputMaxLength() {
        return this.getParam("textInputMaxLength", 12);
      }

      getLocaleValue(id, arg) {
        var value;
        value = this._localeDB[id] || id.toString();
        if ((arg != null) && String.any(arg.toString())) {
          value = value.replace("%1", arg);
        }
        return value;
      }

      //%[UI DATA]
      // * Метод из AABSZ
      uiData(tag, arg) {
        var method;
        // * Поиск соответсвующих настроек по тэгу элемента
        method = "_getDefaultVisualFor_" + tag;
        if (this[method] != null) {
          return this[method](arg);
        }
        return null;
      }

      //? NOT IN HEADER YET -------------------------------------

        // * Можно ли просматривать статус других игроков
      isOtherPlayersMenuStatusAllowed() {
        return true;
      }

      // * Видно ли других игроков в меню
      isOtherPlayersVisibleInMenu() {
        return true;
      }

      // * Ожидание получения действия от каждого игрока в битве
      isForceBattleSyncMode() {
        return true;
      }

      // * Время обновления данных игрока (на карте)
      playerDataRefreshRate() {
        return 60;
      }

      // * Время обновления данных в битве (влияет на производительность)
      battleDataRefreshRate() {
        return 60;
      }

      // * Настройки Trade сцены (визуальные)
      tradeSceneSettings() {} //TODO:

      
        //TODO: Параметр
      isSaveOnlyInMenu() {
        return false;
      }

      tradeSceneCompleteSE() {
        return "";
      }

      //$[EXPEREMENT, inDEV]
      //TODO: Параметр
      isMultiActorsMode() {
        return false;
      }

    };

    // * Создаём Shortcut для этого методы
    ANET.LV = function() {
      return ANET.PP.getLocaleValue(...arguments);
    };

    return ParamsManager;

  }).call(this);
  ANET.link(ParamsManager);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.ParamsManager.prototype;
  _._prepareParameters = function() {
    this._prepareConnectionSettings();
    this._preparePlayerActorName();
    this._prepareGlobalData();
    this._prepareDefaultPlayerMenuCommands();
    this._prepareLocaleValues();
  };
  //?VERSION
  //! У базовой версии свой метод!
  _._prepareConnectionSettings = function() {
    var p;
    p = this.getParam("connection", {
      serverIp: "195.161.41.20",
      serverPort: "3034",
      isHttpsConnection: false
    });
    this._ip = p.serverIp;
    this._port = p.serverPort;
    this._isHttps = p.isHttpsConnection;
    // * Это тут по сути не нужно (так как у базовой версии свой метод)
    if (this.isHTTPSConnection() && !ANET.isPro()) {
      window.alert("Only Alpha NET Z [PRO] supports HTTPS connection!");
      this._isHttps = false;
    }
  };
  _._preparePlayerActorName = function() {
    var p;
    p = this.getParam("playerActorNameType", "");
    switch (p) {
      case "Instead Name":
        this.playerActorNameType = function() {
          return 1;
        };
        break;
      case "Instead Nickname":
        this.playerActorNameType = function() {
          return 2;
        };
        break;
    }
  };
  // * Ничего, так как 0 по умолчанию
  _._prepareGlobalData = function() {
    var p;
    p = this.getParam("globalData", {
      globalSwitchesIds: [],
      globalVariablesIds: []
    });
    this._globalVars = p.globalVariablesIds;
    this._globalSwitches = p.globalSwitchesIds;
  };
  _._prepareDefaultPlayerMenuCommands = function() {
    var cmd, commandNames, i, len, name;
    this._menuCommands = [];
    commandNames = ["trade", "status", "follow"];
    for (i = 0, len = commandNames.length; i < len; i++) {
      name = commandNames[i];
      cmd = this.getParam("PlayerMenuItem_" + name, null);
      if (cmd == null) {
        continue;
      }
      cmd.action = name; // * флаг
      if (cmd.visible === true) {
        this._menuCommands.push(cmd);
      }
    }
  };
  _._prepareLocaleValues = function() {
    var p;
    // * Чтобы не дублировать, тут используем {} пустой
    p = this.getParam("localeDB", {});
    // * Заполняем значение с учётом Default значений
    // * Так сделано, так как при добавлении новых, их может ещё не быть у пользователя
    this._localeDB = {
      network: p.network || "Network",
      createRoom: p.createRoom || "Create Room",
      joinRoom: p.joinRoom || "Join Room",
      joinRandomRoom: p.joinRandomRoom || "Join Random Room",
      settings: p.settings || "Settings",
      start: p.start || "Start",
      leave: p.leave || "Leave",
      joinGame: p.joinGame || "Join Game",
      ready: p.ready || "Ready",
      character: p.character || "Character",
      close: p.close || "Close",
      welcome: p.welcome || "Welcome, %1",
      playersCount: p.playersCount || "Players on server: %1"
    };
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Parameters Manager Extension.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

//$[ENCODE]
(function() {
  var _;
  // * Базовые настройки элементов интерфейса
  // * Эти настройки используется BASIC версия плагина

  //? См. uiData метод в ParamsManager_0.coffee

  //@[DEFINES]
  _ = ANET.ParamsManager.prototype;
  _._getDefaultVisualFor_inGameChatWindow = function() {
    return this.getParam("inGameChatWindowVisualSettings", {
      size: {
        w: 312,
        h: 192
      },
      position: {
        x: 1,
        y: "Graphics.height - 193"
      },
      notActiveOpacity: 140,
      maxMessages: 9,
      firstChatMessageMargin: {
        x: 3,
        y: 145
      }
    });
  };
  //!warning
  //TODO: Какой-то баг, не хочет загружать textFormatForSystem и textFormatForPlayer
  // * а также загружает textFormat не правильно!
  _._getDefaultVisualFor_netChatTextLine = function() {
    return this.getParam("inGameChatTextLineSettings", {
      size: {
        w: 306,
        h: 18
      },
      backgroundA: {
        color: "#59a3d9".toCss(),
        opacity: 40
      },
      backgroundB: {
        color: "#59a3d9".toCss(),
        opacity: 70
      },
      textLine: {
        visible: true,
        size: {
          w: 520,
          h: 20
        },
        font: {
          face: null,
          size: 14,
          italic: false
        },
        margins: {
          x: 4,
          y: -3
        }
      },
      // 1 - Channel
      // 2 - Actor Name
      // 3 - Message
      // 4 - Player Name
      textFormat: "\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3",
      textFormatForPlayer: "\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3",
      textFormatForSystem: "\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3",
      animationSpeedInPx: 18,
      channelAll: 'ALL',
      channelMap: 'MAP'
    });
  };
})();

// ■ END Parameters Manager Extension.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.5.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersCheckPool;

PlayersCheckPool = class PlayersCheckPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Главный метод -> отправка на сервер запроса
  requestToServer(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.requestToServer(this.requestMethod);
        this.resetTimer();
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  isReady() {
    return this._isReady === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this._anotherPlayersData[actorId] != null;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    return this._anotherPlayersData[actorId] = data;
  }

  reset() {
    this.resetTimer();
    this._isReady = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersDataPool;

PlayersDataPool = class PlayersDataPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Режим ожидания не данных, а чтобы у всех был TRUE
  setFlagMode() {
    return this._isFlagMode = true;
  }

  // * Главный метод -> отправка на сервер запроса
  register(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this.isReady()) { // * Чтобы цикла не было по вызову callback
      return;
    }
    this._timeout--;
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.resetTimer();
        if (this._timeout > 0) {
          this.register(this.requestMethod);
        } else {
          this._isTimedOut = true;
          if (this.failCallback != null) {
            this.failCallback();
          }
          // * Сброс (например если Timeout не предусмотрен, не задан метод failCallback)
          this.resetTimeout();
        }
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  onFail(failCallback) {
    this.failCallback = failCallback;
  }

  isReady() {
    return this._isReady === true;
  }

  isTimedOut() {
    return this._isTimedOut === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this.getDataFor(actorId) != null;
  }

  getDataFor(actorId) {
    return this._anotherPlayersData[actorId];
  }

  getData() {
    return this._anotherPlayersData;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    if (!this._isFlagMode) {
      this._anotherPlayersData[actorId] = data;
    } else {
      // * Если в режиме флагов, то только при TRUE присваиваем данные
      if (data === true) {
        this._anotherPlayersData[actorId] = data;
      } else {
        // * null, а не false, потому что проверка через ? идёт
        this._anotherPlayersData[actorId] = null;
        delete this._anotherPlayersData[actorId];
      }
    }
  }

  reset() {
    this.resetTimer();
    this.resetTimeout();
    this._isReady = false;
    this._isFlagMode = false;
    this._isTimedOut = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  resetTimeout() {
    return this._timeout = 600;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания других игроков
var PlayersWaitPool;

PlayersWaitPool = class PlayersWaitPool {
  constructor() {
    // * Запоминается при создании, чтобы можно было сбросить
    // * Это нужно, чтобы если игрок новый переместился на карту, его
    // * не добавили в ожидание, если на этой карте уже запущено общее событие
    this._anotherPlayersIds = ANGameManager.anotherPlayersOnMap().map(function(pl) {
      return pl.actorId;
    });
    this.reset();
    return;
  }

  // * Зарегестрировать (отправить на сервер)
  register() {
    this.resetTimer();
    ANInterpreterManager.sendSharedEventRequireRegister();
  }

  // * Только один игрок (мастер события) запустил событие (один на карте или в игре)
  isSinglePool() {
    return this._anotherPlayersIds.length === 0;
  }

  // * Проверить, что игроки, которые в пуле, онлайн (не отключились)
  checkPool() {
    var i, id, len, player, playersOnMap, ref;
    playersOnMap = ANGameManager.anotherPlayersOnMap();
    ref = this._anotherPlayersIds;
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      // * Если игрока больше нет на карте, мы его удаляем из пула
      player = playersOnMap.find(function(pl) {
        return pl.actorId === id;
      });
      if (player == null) {
        this._anotherPlayersIds.delete(id);
        // * Игрок отключился, делаем ему true, чтобы можно было продолжить событие
        // * (в следующей команде он уже участвовать не будет, так как будет Reset)
        this._playersReady[id] = true;
      }
    }
  }

  // * Ответ от сервера
  onAnswer(actorId) {
    return this._playersReady[actorId] = true;
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      if (!this.isReady()) {
        this.checkPool();
        this.register();
      }
    }
  }

  isReady() {
    var pl, ref, value;
    ref = this._playersReady;
    for (pl in ref) {
      value = ref[pl];
      if (value === false) {
        // * Если хоть одно значение false, значит не готов
        return false;
      }
    }
    return true;
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  // * Сбросить до нового ожидания
  reset() {
    var i, id, len, ref;
    // * Добавляем себя как готового всегда (тут не важент именно ID)
    // * В принципе можно и не добавлять, так как важнее другие игроки
    this._playersReady = {
      myActorId: true
    };
    ref = this._anotherPlayersIds;
    // * Добавляем всех игроков как изначально не готовых
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      this._playersReady[id] = false;
    }
    this.resetTimer();
  }

};


// Generated by CoffeeScript 2.6.1
// * Команды плагина
// * Нет класса или менеджера, так как только методы регистрации команд
(function() {
  var registerPluginCommandsMV, registerPluginCommandsMZ;
  // * Основной метод загрузки (регистрации команд плагина)
  ANET.loadPluginCommands = function() {
    if (KDCore.isMZ()) {
      registerPluginCommandsMZ('Alpha_NETZ');
      return registerPluginCommandsMZ('Alpha_NETZ_MZ');
    } else {
      return registerPluginCommandsMV();
    }
  };
  registerPluginCommandsMZ = function(pluginName) {
    PluginManager.registerCommand(pluginName, 'EventCommandSelector', function(args) {
      var e;
      try {
        return this.nSetCommandOptions(args);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
    PluginManager.registerCommand(pluginName, 'SharedBattle', function(args) {
      var e;
      try {
        return this.nSetSharedBattle(args.battleId);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
  };
  registerPluginCommandsMV = function() {
    var e;
    try {
      // * Этот метод только для MV существует
      return ANET.registerMVPluginCommands();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isActive, ALIAS__terminate, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //@[ALIAS]
  ALIAS__isActive = _.isActive;
  _.isActive = function() {
    if (ANNetwork.isBusy()) {
      return false;
    } else {
      return ALIAS__isActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (ANNetwork.isBusy()) {
      return ANGameManager.updateWaiting();
    } else {
      return ALIAS__update.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    // * Смена сцены
    if (ANNetwork.isConnected()) {
      ANGameManager.sendSceneChanging();
    }
    return ALIAS__terminate.call(this);
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {
    HUIManager.hideLoader();
    return SceneManager.goto(Scene_Title);
  };
  
  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  _.netOn_lobby_roomClosed = function() {
    // * По умолчанию из любой сцены выходит в главное меню
    return SceneManager.goto(Scene_Title);
  };
  // * Когда пришло какое-либо сообщение от сервера
  //?EVENT
  _.onServerEvent = function(name) {
    var eventMethod;
    if (SceneManager.isBusyForNetworkData()) {
      return;
    }
    eventMethod = "netOn_" + name;
    if (this[eventMethod] != null) {
      console.log("Call scene callback for event " + name);
      this[eventMethod]();
    }
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeInputWindow, ALIAS__commandFight, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateBattleProcess, ALIAS__updateBattleProcessMV, ALIAS__updateTpbAutoBattle, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS, STORED]
  _.ALIAS__NET_start = _.start;
  _.start = function() {
    // * Если бой в сетевом режиме и ещё не зарегестрирован, то сцена боя не отрисовывается
    if (ANNetwork.isConnected() && BattleManager.nIsNetworkBattle() && !ANBattleManager.isBattleRegistred()) {
      return;
    }
    // * Метод Start вызывается автоматически у SceneManager, поэтому когда
    // * данные прийдут, сцена старт
    _.ALIAS__NET_start.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleStarted();
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleEnd();
    }
  };
  //TODO: Есть проблема, ввод доступен, пока ждём сервер battleMethod
  //TODO: Может просто деактивировать все окна? Чтобы нельзя было выбирать действие

  // * Игрок не может видеть команды "ввода" персонажей других игроков
  //@[ALIAS]
  ALIAS__changeInputWindow = _.changeInputWindow;
  _.changeInputWindow = function() {
    ALIAS__changeInputWindow.call(this);
    if (ANNetwork.isConnected() && BattleManager.isInputting() && !$gameParty.isOneBattler()) {
      if (BattleManager.actor() != null) {
        if (BattleManager.actor() !== $gameParty.leader()) {
          this.endCommandSelection();
        }
      }
    }
  };
  
  //@[ALIAS]
  ALIAS__commandFight = _.commandFight;
  _.commandFight = function() {
    if (ANNetwork.isConnected()) {
      // * Игрок снова должен сделать выбор
      BattleManager._isShouldWaitMyNetworkAction = true;
    }
    ALIAS__commandFight.call(this);
  };
  // * Должен идти перед переопределением общим, поэтому в этом файле
  if (KDCore.isMV()) {
    //@[ALIAS]
    ALIAS__updateBattleProcessMV = _.updateBattleProcess;
    _.updateBattleProcess = function() {
      if (ANNetwork.isConnected()) {
        if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
          this.changeInputWindow();
        }
        return BattleManager.update(); // * Надо обновлять не зависимо от условия вверху
      } else {
        return ALIAS__updateBattleProcessMV.call(this);
      }
    };
  }
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    // * На данный момент, если игрок один в битве, то он ничего не отравляет на сервер
    if (ANNetwork.isConnected()) {
      if ($gameParty.isOneBattler()) {
        // * Только обновлять данные HP и MP другим игрокам
        $gameParty.leader().updateDataObserver();
      } else {
        // * Логика сетевого боя (общая для мастера и клиентов)
        this.nUpdateBattleProcess();
        if (ANGameManager.isBattleMaster()) {
          ANBattleManager.update();
          // * Если ждём сервер, то не обновляем BattleManager
          if (ANBattleManager.isShouldWaitServer()) {
            return;
          }
        } else {
          // * BattleManager update (ALIAS__updateBattleProcess) выполняет только мастер битвы
          if (!BattleManager.nIsLocalForceUpdatePhase()) {
            return;
          }
        }
      }
    }
    ALIAS__updateBattleProcess.call(this);
  };
  
  // * На всякий случай отключу автобитву
  //@[ALIAS]
  ALIAS__updateTpbAutoBattle = _.updateTpbAutoBattle;
  _.updateTpbAutoBattle = function() {
    if (ANNetwork.isConnected()) {

    } else {
      return ALIAS__updateTpbAutoBattle.call(this);
    }
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * Когда пришли данные о битве от сервера (регистрация, новый участник)
  // * Этот метод выполняется на клиентах, которые УЖЕ в битве (а не на тех, кто присоединился)
  _.netOn_battle_serverBattleData = function() {
    var battler, battlerId, i, j, len, len1, ref, ref1;
    if ($gameTemp._previousNetBattleActors == null) {
      $gameTemp._previousNetBattleActors = [];
    }
    ref = $gameParty.battleMembers();
    // * Для всех новых, надо выполнять некоторые методы
    for (i = 0, len = ref.length; i < len; i++) {
      battler = ref[i];
      if (!$gameTemp._previousNetBattleActors.contains(battler.actorId())) {
        battler.onBattleStart();
        battler.makeActions();
      }
    }
    ref1 = $gameTemp._previousNetBattleActors;
    // * Всех старых, надо удалить из битвы
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      battlerId = ref1[j];
      if (!ANBattleManager.battleData.actors.contains(battlerId)) {
        $gameParty.removeActor(battlerId);
        BattleManager.nSafeRemoveActor();
      }
    }
    $gameTemp._previousNetBattleActors = [];
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
    $gameTemp.requestBattleRefresh();
  };
  _.nOnBattleStarted = function() {
    // * Отправляем на сервер, что мы начали бой
    ANBattleManager.onBattleStarted();
  };
  _.nOnBattleEnd = function() {
    // * Отправляем на сервер, что мы покинули (закончили) бой
    ANBattleManager.onBattleEnd();
  };
  _.nUpdateBattleProcess = function() {
    var actor, enemy, i, j, len, len1, ref, ref1;
    // * За отправку данных отвечает только мастер боя
    if (ANGameManager.isBattleMaster()) {
      ref = $gameParty.battleMembers();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        actor.updateDataObserver();
      }
      ref1 = $gameTroop.members();
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        enemy = ref1[j];
        enemy.updateDataObserver();
      }
    }
  };
  _.nRefreshSharedBattle = function() {
    // * Обновить спрайты врагов
    return this._spriteset.nRefreshNetBattle();
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__start, _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
  // * Загружаем и инициализируем сетевой код
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    ANET.System.initSystem();
  };
  // * Перезагружаем параметры плагина
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this, ...arguments);
    //? Это нужно чтобы eval от Graphics.width выполнился правильно
    ANET.System.loadParameters();
  };
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Equip.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Equip.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Equip.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Item.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Item.prototype;
})();

// ■ END Scene_Item.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ItemBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__applyItem, _;
  //@[DEFINES]
  _ = Scene_ItemBase.prototype;
  //@[ALIAS]
  ALIAS__applyItem = _.applyItem;
  _.applyItem = function() {
    if (ANNetwork.isConnected()) {
      this.nPrepareApplyItemForNetwork();
    }
    ALIAS__applyItem.call(this);
    this.nClearApplyItemForNetwork();
  };
})();

// ■ END Scene_ItemBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ItemBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_ItemBase.prototype;
  //TODO: MV ???
  //TODO: Параметр? А как в PVP быть? Можно же "яд" применить на другого перед боем
  //TODO: На одной карте или нет? Куча параметров в общем!
  // * Когда нужно выполнить действие из меню на другого игрока (например применить зелье)
  _.nPrepareApplyItemForNetwork = function() {
    $gameTemp.netApplyItemUser = this.user();
    $gameTemp.netApplyItemItem = this.item();
  };
  // * Очищаем флаги, чтобы другим действиям не мешать
  _.nClearApplyItemForNetwork = function() {
    $gameTemp.netApplyItemUser = null;
    $gameTemp.netApplyItemItem = null;
  };
})();

// ■ END Scene_ItemBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onLoadFailure, ALIAS__terminate, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      if (KDCore.isMZ()) {
        this.nLoadNetworkGameFromSavefile(); // * В MV в одном потоке, не переключает сцену сразу после инициализации
      } else {
        setTimeout((() => {
          return this.nLoadNetworkGameFromSavefile();
        }), 1);
      }
    }
  };
  //@[ALIAS]
  ALIAS__onLoadFailure = _.onLoadFailure;
  _.onLoadFailure = function() {
    // * Своя обработка ошибки загрузки в сетевом режиме
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      this.nOnLoadFailure();
    } else {
      ALIAS__onLoadFailure.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    ALIAS__terminate.call(this);
    // * Сбросим флаг
    $gameTemp._nRequestLoadNetworkGame = false;
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV версии нету проверки на Enabled, так что доп. проверка
  //@[ALIAS]
  ALIAS__onSavefileOk = _.onSavefileOk;
  _.onSavefileOk = function() {
    // * Если сетевое сохранение, то НЕЛЬЗЯ загружать в обычной сцене загрузки
    if (DataManager.nIsNetworkSaveFile(this.savefileId())) {
      this.onLoadFailure();
    } else {
      ALIAS__onSavefileOk.call(this);
    }
  };
  
  // * В MV нету этого метода, добавим и будем использовать для загрузки сетевых сохранений
  //?[NEW]
  _.executeLoad = function(savefileId) {
    if (DataManager.loadGame(savefileId)) {
      this.onLoadSuccess();
    } else {
      this.onLoadFailure();
    }
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  _.nLoadNetworkGameFromSavefile = function() {
    var savefileId;
    savefileId = DataManager.nGetNetworkSaveFileIdByUniqueId(ANNetwork.room.uniqueSaveID);
    if (savefileId < 0) {
      this.nOnLoadFailure();
    } else {
      this.executeLoad(savefileId);
    }
  };
  _.nOnLoadFailure = function() {
    HUIManager.notifyError("Can't load Save file!");
    // * Через timeout а то не успевает, если сразу ошибка
    setTimeout((function() {
      return SceneManager.goto(Scene_Title);
    }), 1);
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createSpriteset, ALIAS__onMapLoaded, ALIAS__onMapTouch, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateCallMenu, _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //@[ALIAS]
  ALIAS__onMapLoaded = _.onMapLoaded;
  _.onMapLoaded = function() {
    ALIAS__onMapLoaded.call(this);
    if (ANNetwork.isConnected()) {
      ANGameManager.onMapLoaded();
      $gameParty.nRefreshNetworkActors();
      // * Сбрасываем режим "следовать"
      $gameTemp._netAutoFollowActorId = null;
    }
    // * Открыть (или нет) чат
    ANET.UI.openChatAfterMapLoaded();
    // * На всякий случай (для чата и торговли)
    $gameTemp.kdButtonUnderMouse = null;
    $gameTemp.floatingWindowUnderMouse = null;
    setTimeout((function() {
      $gameTemp.kdButtonUnderMouse = null;
      return $gameTemp.floatingWindowUnderMouse = null;
    }), 10);
  };
  
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS]
  // * Создаём интерфейс
  ALIAS__createSpriteset = _.createSpriteset;
  _.createSpriteset = function() {
    ALIAS__createSpriteset.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this._netUI = new ANET.Spriteset_UI();
    this.addChild(this._netUI);
    this.nCreateModalWindow();
  };
  // * Запрет движения при нажатии на UI элементы
  //@[ALIAS]
  ALIAS__onMapTouch = _.onMapTouch;
  _.onMapTouch = function() {
    if (ANNetwork.isConnected()) {
      if (ANET.UI.isUITouched()) {
        return;
      }
    }
    ALIAS__onMapTouch.call(this);
  };
  // * Закрываем интерфейс
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    ANET.System.clearSceneMapGEvents();
    ANET.UI.terminate();
  };
  //@[ALIAS]
  ALIAS__updateCallMenu = _.updateCallMenu;
  _.updateCallMenu = function() {
    if (TouchInput.isCancelled() && ANNetwork.isConnected()) {
      // * Если действие ANET, то НЕ вызываем меню
      if (this.nOnMapCancelTouchComplete()) {
        return;
      }
    }
    return ALIAS__updateCallMenu.call(this);
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    //TODO: Если игрок отключился, надо общее событие!
    $gameParty.nRefreshNetworkActors();
    $gameMap.refreshNetworkCharacters();
  };
  // * Модальное окно вопроса
  _.nCreateModalWindow = function() {
    //TODO: from parameters
    // * Добавляем на сцену карты (чтобы окно было всегда выше всех)
    this._netUI.netModalDialog = new FWindow_InGameModalDialog(this, 280, 120);
  };
  // * Проверка нажатия правой кнопки мыши
  // * Используется для выполнения своих действий (например открытия меню игрока)
  // * Сейчас этот метод отрабатывает только меню игрока
  // * Устанавливаем на Spriteset_UI, чтобы был доступ проще
  _.nOnMapCancelTouchComplete = function() {
    var e, netCharUnderCursor, x, y;
    if (!ANET.PP.isInGamePlayerMenuAllowed()) {
      return false;
    }
    try {
      if (ANET.UI.isPlayerMenuIsOpen()) {
        ANET.UI.closePlayerMenu();
        return true;
      } else {
        ({x, y} = TouchInput.toMapPoint());
        netCharUnderCursor = $gameMap.nGetNetCharXY(x, y);
        if (netCharUnderCursor == null) {
          return false;
        }
        ANET.UI.playClickEffect();
        ANET.UI.openNetPlayerMenuFor(netCharUnderCursor);
        return true; // * не открывать меню в этом случае
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Menu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Menu.prototype;
})();

// ■ END Scene_Menu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_MenuBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_MenuBase.prototype;
  //?EVENT
  // * Когда пришли какие-либо данные DataObserver
  _.netOn_game_observerData = function() {
    return this.refreshNetwork();
  };
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    var e, ref;
    try {
      $gameParty.nRefreshNetworkActors();
      // * Если есть окно с персонажами, обновить его
      // * Можно было вынести в класс Scene_Menu, но не хочу плодить одинаковые методы
      // * Так как тут в Scene_MenuBase тоже нужен метод
      if ((ref = this._statusWindow) != null) {
        ref.refresh();
      }
    } catch (error) {
      //TODO: Сделать как и в ALphaNET общий Refresh всех окон сцены
      e = error;
      ANET.w(e);
    }
  };
  // * Обновить все окна при изменениях данных из сети
  _.refreshNetwork = function() {
    var child, e, i, len, ref;
    if (!ANNetwork.isConnected()) {
      return;
    }
    try {
      this.updateActor();
      if (this._windowLayer == null) {
        return;
      }
      ref = this._windowLayer.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if ((child != null) && (child.refresh != null)) {
          child.refresh();
        }
      }
      return;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Scene_MenuBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена ввода сообщения для чата
var Scene_NetChatInput;

Scene_NetChatInput = class Scene_NetChatInput extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    this.settingsA = ANET.PP.getChatMessagesSettings();
    this.settingsB = ANET.PP.getChatInputSceneVisualSettings();
    if ($gameTemp._nChatLastChannelId == null) {
      $gameTemp._nChatLastChannelId = 0;
    }
    this._showNameInput();
    this._createGroupButtons();
    this._createOkButton();
    // * Делаем фокус ввода
    setTimeout((function() {
      return HUIManager.focusInput();
    }), 100);
  }

  stop() {
    $gameTemp._nChatLastChannelId = this.buttonsGroup.getSelectedIndex();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel()) {
      this.popScene();
    } else if (Input.isTriggered("ok")) {
      this.onOkClick();
    }
  }

  onOkClick() {
    var msg;
    msg = HUIManager.getInputValue();
    msg = this._filterTextLength(msg);
    msg = this._filterEscapeCharacters(msg);
    if (KDCore.isMZ()) {
      msg = this._applyIconsSize(msg);
    }
    if (String.any(msg)) {
      this._sendMessageToServer(msg);
    }
    return this.popScene();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetChatInput.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetChatInput.prototype;
  _._filterTextLength = function(msg) {
    var e, maxlength;
    try {
      maxlength = this.settingsA.maxlength;
      if (msg.length > maxlength) {
        msg = msg.substr(0, maxlength);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return msg;
  };
  _._filterEscapeCharacters = function(msg) {
    var char, e, forbidden, i, len;
    try {
      forbidden = this.settingsA.forbiddenEscapeCodes.split(",");
      for (i = 0, len = forbidden.length; i < len; i++) {
        char = forbidden[i];
        msg = this._removeEscapeCharacterFromText(char.trim(), msg);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return msg;
  };
  _._removeEscapeCharacterFromText = function(escapeChar, text) {
    text = text.replace("\\" + escapeChar, "");
    return text;
  };
  _._applyIconsSize = function(msg) {
    var e, size;
    try {
      size = this.settingsA.iconsSize;
      if (msg.contains("\\I[")) {
        msg = msg.replace(/\\I\[(\d+)\]/, "\\ISZ[$1," + size + ",0,0]");
        return this._applyIconsSize(msg);
      } else {
        return msg;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return msg;
    }
  };
  _._sendMessageToServer = function(msg) {
    var channelId, e;
    try {
      channelId = this.buttonsGroup.getSelectedIndex();
      console.log("Send message from chat: " + msg);
      if (ANNetwork.isConnected()) {
        ANGameManager.sendMyChatMessage(channelId, msg);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._showNameInput = function() {
    HUIManager.showInput("Enter your message...", ANET.PP.getChatMessagesSettings().maxlength);
    HUIManager.setInputValue("");
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
  _._createGroupButtons = function() {
    var all, map, x, y;
    ({x, y} = this.settingsB.allChannelButtonPosition);
    all = [x, y];
    ({x, y} = this.settingsB.mapChannelButtonPosition);
    map = [x, y];
    this.buttonsGroup = new KDCore.Sprite_ButtonsGroup([
      {
        image: "nzButton_ChatGroup_All",
        position: all
      },
      {
        image: "nzButton_ChatGroup_Map",
        position: map
      }
    ], $gameTemp._nChatLastChannelId, null);
    this.addChild(this.buttonsGroup);
  };
  _._createOkButton = function() {
    var x, y;
    ({x, y} = this.settingsB.inputSceneOkButtonPosition);
    if (KDCore.isMZ()) {
      this._okButton = new Sprite_Button("ok");
    } else {
      this._okButton = new KDCore.ButtonM("nzButton_ChatSendMV", false, "Alpha");
      this._okButton.addClickHandler(this.onOkClick.bind(this));
      this._okButton.anchor.x = 0.5;
    }
    this._okButton.x = x;
    this._okButton.y = y;
    this.addWindow(this._okButton);
  };
})();

// ■ END Scene_NetChatInput.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Используется базовая сцена Scene_Item (выбора предмета)
var Scene_NetItemsForTrade;

Scene_NetItemsForTrade = class Scene_NetItemsForTrade extends Scene_Item {
  constructor() {
    super();
  }

  //$[OVER]
  onItemOk() {
    this._nItem = this.item();
    this._nCount = 1;
    if ($gameParty.numItems(this._nItem) > 1) {
      this.nShowNumberInputWindow();
    } else {
      this._onItemOkFinal();
    }
  }

  _onItemOkFinal() {
    // * Remove Item handling
    if (this._nItem.id === 0) {
      this._makeChangeInTradeItems(null, 0);
      this.popScene();
    } else if (this._nCount >= 1) {
      this._makeChangeInTradeItems(this._nItem, this._nCount);
      this.popScene();
    } else {
      this._itemWindow.activate();
    }
  }

  _makeChangeInTradeItems(item, count) {
    return ANTradeManager.onTradeChange(item, count);
  }

  
    //?[NEW]
  nShowNumberInputWindow() {
    this._nNumberInputWindow = new Window_NTradeItemNumberInput();
    this.addWindow(this._nNumberInputWindow);
    this._nNumberInputWindow.setItem(this._nItem);
    this._nNumberInputWindow.setOkHandler(() => {
      this._nCount = this._nNumberInputWindow._number;
      return this._onItemOkFinal();
    });
    this._nNumberInputWindow.start();
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Scene_NetworkGameMenu;

Scene_NetworkGameMenu = class Scene_NetworkGameMenu extends Scene_MenuBase {
  constructor() {
    super();
    return;
  }

  create() {
    super.create();
    // * Например если вернулись "назад" на эту сцену, то не надо снова соединяться
    if (!ANNetwork.isConnected()) {
      this._initNetwork();
    } else {
      this._initSceneComponents();
      this.refreshWelcomeText();
    }
  }

  update() {
    var ref;
    super.update();
    this._updateBackButton();
    this._updateRandomJoin(); //2
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.update();
    }
  }

  stop() {
    HUIManager.removeInput();
    HUIManager.hideLoader();
    HUIManager.removeLobbyChat();
    return super.stop();
  }

  refreshWelcomeText() {
    var e, ref;
    try {
      return (ref = this._welcomeLine) != null ? ref.drawTextFull(ANET.LV("welcome", ANGameManager.myPlayerData().name)) : void 0;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  refreshPlayersCountText(count = 0) {
    var e;
    try {
      if (this._playerCountText == null) {
        return;
      }
      this._playerCountText.clear();
      return this._playerCountText.drawTextFull(ANET.LV("playersCount", count));
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  // * Данный метод используется чтобы  заблокировать нажатие кнопкоп под HTML чатом
  setInputAllowed(isAllowed) {
    if (isAllowed === false) {
      this._commandsWindow.deactivate();
    } else {
      this._commandsWindow.activate();
    }
  }

  //?EVENT
  netOn_lobby_changePlayerName() {
    var ref;
    this.refreshWelcomeText();
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.call();
    }
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  // * Этот метод тут, чтобы перекрыть Scene_MenuBase реализацию
  // * Так как пока нет необходимости $gameParty менять
  netOn_lobby_refreshRoomData() {} // * NOTHING

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._initNetwork = function() {
    HUIManager.showLoader();
    ANNetwork.initSystem();
    ANNetwork.setConnection(this._onConnectionStatus.bind(this));
  };
  //?EVENT
  // * 0 - error, 1 - connect
  _._onConnectionStatus = function(statusCode) {
    switch (statusCode) {
      case 0:
        this._onConnectionRefused();
        break;
      case 1:
        this._onConnectionGood();
    }
  };
  _._onConnectionRefused = function() {
    HUIManager.hideLoader();
    HUIManager.notifyError("Server not response in time");
    return this.popScene();
  };
  _._onConnectionGood = function() {
    //TODO: Server version check
    HUIManager.hideLoader();
    if (!ANGameManager.isInited()) {
      ANGameManager.init();
    }
    HUIManager.notifySucess("Connected to server");
    return this._initSceneComponents();
  };
  // * Отрисовка меню, если соединение  было установлено
  _._initSceneComponents = function() {
    this._createNetworkMenu(); //1
    this._createWelcomeText(); //1
    HUIManager.showInput("Room Name...");
    this._createServerPlayerCountText();
    this._createPlayerCountRefreshThread();
    if (ANET.PP.isShowLobbyChat()) {
      HUIManager.showLobbyChat();
    }
  };
  _._updateBackButton = function() {
    var ref;
    if (KDCore.isMV()) {
      return;
    }
    // * Тут может быть вылет, если нет проверки null (?)
    return (ref = this._cancelButton) != null ? ref.visible = !HUIManager.isLoaderActive() : void 0;
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._createWelcomeText = function() {
    //TODO: From UI Text Component with user settings
    this._welcomeLine = KDCore.Sprite.FromBitmap(400, 60);
    this._welcomeLine.bitmap.fontSize = 38;
    this._welcomeLine.x = Graphics.width / 2 - this._welcomeLine.bitmap.width / 2;
    this._welcomeLine.y = 80;
    return this.addChild(this._welcomeLine);
  };
  _._createNetworkMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    wh = this.calcWindowHeight(4, true);
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkGameMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('createRoom', this.commandCreateRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRoom', this.commandJoinRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRandRoom', this.commandJoinRandRoomMenu.bind(this)); //2
    this._commandsWindow.setHandler('settings', this.commandSettings.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _._createServerPlayerCountText = function() {
    this._playerCountText = KDCore.Sprite.FromBitmap(280, 40);
    this._playerCountText.bitmap.fontSize = 18;
    this._playerCountText.x = Graphics.width / 2 - this._playerCountText.bitmap.width / 2;
    this._playerCountText.y = this._commandsWindow.y + this._commandsWindow.height + 20;
    return this.addChild(this._playerCountText);
  };
  _._createPlayerCountRefreshThread = function() {
    var refreshMethod;
    refreshMethod = function() {
      //return if SceneManager.isSceneChanging()
      return ANNetwork.callback(NMS.Lobby("playersCountOnServ"), (count) => {
        var e;
        try {
          if (SceneManager.isSceneChanging()) {
            return;
          }
          return this.refreshPlayersCountText(count);
        } catch (error) {
          e = error;
          return ANET.w(e);
        }
      });
    };
    this._playerCountRefreshThread = new KDCore.TimedUpdate(300, refreshMethod.bind(this));
    this._playerCountRefreshThread.call();
  };
  _.commandCreateRoomMenu = function() {
    // * Сохраняем название команты
    $gameTemp._nLastRoomName = HUIManager.getInputValue();
    $gameTemp._nIsForwardTransitionToRoomTypeMenu = true;
    SceneManager.push(Scene_NetworkRoomTypeSelect);
  };
  _.commandJoinRoomMenu = function() {
    return SceneManager.push(Scene_NetworkRoomsList);
  };
  _.commandSettings = function() {
    return SceneManager.push(Scene_NetworkSettings);
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  // * Методы обработки подключения к случайной комнате
  _.commandJoinRandRoomMenu = function() {
    this.roomsList = null; // * Обнуляем список комнат
    this.requestRoomsListFromServer();
    this._waitRoomsForRandomJoin = true;
  };
  _.requestRoomsListFromServer = function() {
    ANNetwork.get(NMS.Lobby("getRoomsList"), (result) => {
      return this.roomsList = result;
    }, () => {
      // * Timeout
      console.log("Server not returns rooms list in time");
      return this._onCantJointRandomRoom();
    });
  };
  _._onCantJointRandomRoom = function() {
    this._waitRoomsForRandomJoin = false;
    this._commandsWindow.activate();
    HUIManager.notifyError("No available open rooms to join");
  };
  // * Ждём список комнат и пытаемся подключиться к случайной
  _._updateRandomJoin = function() {
    var randomRoomName;
    if (!this._waitRoomsForRandomJoin) {
      return;
    }
    if (this.roomsList == null) {
      return;
    }
    this._waitRoomsForRandomJoin = false;
    this.applyFiltersToRoomList();
    if (this.roomsList.length === 0) {
      this._onCantJointRandomRoom();
    } else {
      randomRoomName = this.roomsList.sample().name;
      this.joinToRoomRequest(randomRoomName);
    }
  };
  _.applyFiltersToRoomList = function() {
    if (this.roomsList == null) {
      this.roomsList = [];
    }
    if (this.roomsList.length === 0) {
      return;
    }
    this.roomsList = this.roomsList.filter((r) => {
      return this.isProperRoomToJoin(r);
    });
  };
  _.isProperRoomToJoin = function(roomData) {
    return NetRoomDataWrapper.isRoomProperToJoin(roomData);
  };
  _.joinToRoomRequest = function(roomName) {
    ANNetwork.get(NMS.Lobby("joinToRoom", roomName), (result) => {
      return this._onJoinedToRoom(result);
    }, () => {
      console.log("Can't join to Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._commandsWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkInGameTrade.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

//%[I] Сейчас сцена торговли использует доп. сцену выбора предметов (стандартную)
// * Это не очень правильно, стоит сделать всё на одной сцене!
var Scene_NetworkInGameTrade;

Scene_NetworkInGameTrade = class Scene_NetworkInGameTrade extends Scene_MenuBase {
  constructor() {
    super();
  }

  //?EVENT
  netOn_game_playersData() {}

  //?EVENT COMMON
  // * Изменились данные другого игрока, возможно он вышел из сцены торговли
  // * либо disconnect
  // * Тут можно делать доп. проверку
  netOn_common_forClients_trade_items() {
    this.onAnotherPlayerChangeItems();
  }

  //?EVENT COMMON
  netOn_common_forClients_trade_status() {
    this.onAnotherPlayerChangeStatus();
  }

  //?EVENT COMMON
  netOn_common_trade_complete() {
    setTimeout((() => {
      return this.onTradeCancel();
    }), 10);
  }

  create() {
    super.create();
    this._inReadyState = false;
    this._preloadResources();
    this._createBackgroundParts();
    this._createActorInfoA();
    this._createActorInfoB();
    this._createTradeWindowA();
    this._createTradeWindowB();
    this._createForegroundParts();
    this.checkAnotherPlayerSceneStateThread = new KDCore.TimedUpdate(30, this._checkAnotherPlayerSceneStateTick.bind(this));
  }

  //TODO: parameters
  getSettings() {
    return {
      tradeWindowSize: {
        w: 240,
        h: 300
      }
    };
  }

  //%[I] Показывать текущее количество золота игрока, чтобы было удобней
  onTradeCancel() {
    "CANCEL".p();
    return this.popScene();
  }

  //@[OUTER] Вызывается когда приходят данные с сервера в ANTradeManager
  onAnotherPlayerChangeItems() {
    // * Если я уже был готов, то сброс и снова активация окна
    if (this._inReadyState === true) {
      this._resetTradeReadyStatus();
    }
    // * Обновить список торговли (предметов) другого игрока
    this.tradeWindowB.sub().refresh();
  }

  //@[OUTER] Вызывается когда другой игро меняет свой статус (готов или нет)
  onAnotherPlayerChangeStatus() {
    // * Если я уже был готов и статус положительный, то торговля удалась
    if (this._inReadyState === true) {
      if ($gameTemp._netHisTradeReadyStatus === true) {
        ANTradeManager.onTradeShouldComplete();
        // * Так как Common - это broadcast, то у себя сам вызываю метод завершения торговли
        this.netOn_common_trade_complete();
      } else {
        this._resetTradeReadyStatus();
      }
    }
    this.tradeWindowB.sub().refresh();
  }

  update() {
    var ref;
    super.update();
    return (ref = this.checkAnotherPlayerSceneStateThread) != null ? ref.update() : void 0;
  }

  //! Этот метод вызывается и когда появляется сцена выбора предмета!
  stop() {
    var ref, ref1;
    super.stop();
    // * Косяк KDCore
    $gameTemp.kdButtonUnderMouse = null;
    // * Это надо обязательно, чтобы не остался в Game_Temp
    if ((ref = this.tradeWindowA) != null) {
      ref.close();
    }
    if ((ref1 = this.tradeWindowB) != null) {
      ref1.close();
    }
    // * На всякий случай
    HUIManager.hideWaitingInfo();
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkInGameTrade.prototype;
  _._checkAnotherPlayerSceneStateTick = function() {
    var e;
    try {
      if (!ANTradeManager.isTradeParticipantIsValid()) {
        return this.onTradeCancel();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._preloadResources = function() {
    //TODO: from parameters
    ImageManager.loadAA("nzTradeButton_00");
    ImageManager.loadAA("nzTradeButton_01");
    ImageManager.loadAA("nzTradeStatus_NotReady");
    ImageManager.loadAA("nzTradeStatus_Ready");
  };
  _._createBackgroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 216,
          y: 72
        }
      },
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 456,
          y: 72
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  // * {image, position {x, y}}
  _._createAndAddImage = function(item) {
    var img, x, y;
    img = new KDCore.UI.Sprite_UIImage({
      visible: true,
      image: item.image
    });
    x = eval(item.position.x);
    y = eval(item.position.y);
    img.x = x;
    img.y = y;
    this.addChild(img);
  };
  _._createActorInfoA = function() {
    var actor, actorAFace;
    actor = $gameParty.networkLeader();
    actorAFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: true,
      size: 130
    });
    actorAFace.move(220, 76);
    return this.addChild(actorAFace);
  };
  _._createActorInfoB = function() {
    var actor, actorBFace;
    actor = nAPI.getPlayerInfo("actor", "info", ANTradeManager.getTradeParticipantData());
    actorBFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: false,
      size: 130
    });
    actorBFace.move(462, 76);
    return this.addChild(actorBFace);
  };
  _._createTradeWindowA = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 0);
    tradeListWindow.setHandler('ok', this._onTradeWindowA_ok.bind(this));
    tradeListWindow.setHandler('cancel', this.onTradeCancel.bind(this));
    tradeListWindow.refresh();
    tradeListWindow.select(1); // * first slot for item
    tradeListWindow.activate();
    this.tradeWindowA = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowA.x = (Graphics.width / 2 - 240) - 30;
    this.tradeWindowA.y = (Graphics.height / 2) - 100;
    this.tradeWindowA.open();
  };
  //%[Обработка нажатия на пункт]
  _._onTradeWindowA_ok = function() {
    var index;
    index = this.tradeWindowA.sub().index();
    // * Запоминаем индекс выбранного пункта
    $gameTemp.__netTradeItemIndex = index;
    if (this.tradeWindowA.sub().isCurrentIndexTradeCommand()) {
      this._onTradeConfirmClick();
    } else if (this.tradeWindowA.sub().isCurrentIndexGoldCommand()) {
      this._nNumberInputWindow = new Window_NTradeItemNumberInput();
      this.addWindow(this._nNumberInputWindow);
      // * For Gold
      this._nNumberInputWindow.setItem({
        id: ANTradeManager.TradeGoldItemId
      });
      this._nNumberInputWindow.setOkHandler(() => {
        var count;
        count = this._nNumberInputWindow._number;
        return this._onGoldNumberChanged(count);
      });
      this.tradeWindowA.close();
      this.tradeWindowB.close();
      this._nNumberInputWindow.start();
    } else {
      SceneManager.push(Scene_NetItemsForTrade);
    }
  };
  _._onTradeConfirmClick = function() {
    var e, name;
    try {
      //%[I] Скрывать кнопку "Назад" при ожидании
      //%[I] Анимированный текст ... (три точки) в надписи ожидания
      name = ANTradeManager.getTradeParticipantData().name; // * get other trade parctipian name
      HUIManager.showWaitingInfo('Waiting ' + name, '');
      this._inReadyState = true;
      ANTradeManager.onTradeReady(true);
    } catch (error) {
      e = error;
      ANET.w(e);
      this.onTradeCancel();
    }
  };
  _._onGoldNumberChanged = function(count) {
    ANTradeManager.onTradeChange({
      id: ANTradeManager.TradeGoldItemId
    }, count);
    this.tradeWindowA.open();
    this.tradeWindowB.open();
    this.tradeWindowA.sub().refresh();
    this.tradeWindowA.sub().activate();
  };
  _._createTradeWindowB = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 1);
    tradeListWindow.refresh();
    this.tradeWindowB = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowB.x = (Graphics.width / 2) + 30;
    this.tradeWindowB.y = this.tradeWindowA.y;
    this.tradeWindowB.open();
  };
  _._createForegroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeHeader",
        position: {
          x: "Graphics.width / 2 - 334",
          y: -26
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  _._resetTradeReadyStatus = function() {
    this._inReadyState = false;
    HUIManager.hideWaitingInfo();
    this.tradeWindowA.sub().activate();
    return ANTradeManager.onTradeReady(false);
  };
})();

// ■ END Scene_NetworkInGameTrade.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Scene_NetworkRoom;

Scene_NetworkRoom = class Scene_NetworkRoom extends Scene_MenuBase {
  constructor() {
    super();
    this._startingGameTransition = false;
  }

  create() {
    super.create();
    this.room = ANNetwork.room;
    this.createRoomTitle();
    this.createCommands();
    this.createPlayersList();
    if (ANET.PP.isActorSelectionAllowed() && !this.isLoadGame()) {
      this.createActorSelectWindow();
    }
    if (this.isLoadGame()) {
      this.prepareSaveFile();
    }
    this.refreshRoom();
  }

  start() {
    super.start();
    ANNetwork.requestRoomRefresh();
    // * Так как есть искуственная задержка загрузки сцены на MV
    if (KDCore.isMV()) {
      setTimeout((function() {
        try {
          return ANNetwork.requestRoomRefresh();
        } catch (error) {

        }
      }), 300);
    }
  }

  isBottomHelpMode() {
    return false;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  refreshRoom() {
    this.room = ANNetwork.room;
    this._refreshRoomTitle();
    this._refreshPlayerList();
    this._refreshActorsList();
    return this._windowCommands.refresh();
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  netOn_lobby_refreshRoomData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  // * Когда игрок выбирает персонажа
  netOn_game_playersData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  netOn_lobby_startGame() {
    this._startingGameTransition = true;
    if (this.isLoadGame()) {
      this.loadAndStartGame();
    } else {
      this.startNewGame();
    }
  }

  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  netOn_lobby_roomClosed() {
    if (!this._shouldNotPopScene) {
      // * Из этой сцены мы возвращаемся в сетевое меню (если мы не мастер)
      // * Для мастера не надо, так как сцена и так закрывается сама и получается
      // * что возврат происходит на Scene_Title
      //TODO: Когда идёт запрос на подключение в запущенную игру надо его прервать!
      return this.popScene();
    }
  }

  update() {
    return super.update();
  }

  //TODO: Готов клиент или нет
  //if ANNetwork.isMasterClient() and Input.isTriggered('ok')
  //    ANNetwork.send(NMS.Lobby("startGame"))
  stop() {
    super.stop();
    // * Если TRUE - значит мы переходим на сцену с игрой и не надо закрывать коммнату
    if (this._startingGameTransition === true) {
      return;
    }
    if (ANNetwork.isMasterClient()) {
      this._shouldNotPopScene = true;
      return ANNetwork.closeRoom();
    } else {
      return ANNetwork.leaveRoom();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkRoom.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoom.prototype;
  _.startNewGame = function() {
    // * Сейчас нету _commandWindow, так что временно создадим его чтобы не было ошибки
    this._commandWindow = {
      close: function() {}
    };
    Scene_Title.prototype.commandNewGame.call(this);
  };
  _.loadAndStartGame = function() {
    // * Задаём флаг, что будем загружать сетевую игру
    $gameTemp._nRequestLoadNetworkGame = true;
    SceneManager.push(Scene_Load);
  };
  _.createRoomTitle = function() {
    this.createHelpWindow();
    return this._refreshRoomTitle();
  };
  _._refreshRoomTitle = function() {
    var ref, roomHostName;
    if (ANNetwork.isMasterClient()) {
      roomHostName = "\\C[1]" + ANGameManager.myPlayerData().name + " (you)";
    } else {
      if (this.room == null) {
        roomHostName = "Fetching...";
      } else {
        roomHostName = (ref = ANGameManager.getPlayerDataById(this.room.masterId)) != null ? ref.name : void 0;
      }
    }
    return this._helpWindow.setText("Room: %1, Host: %2".format(ANNetwork.room.name, roomHostName));
  };
  _._refreshPlayerList = function() {
    this._playersListWindow.refresh();
  };
  _.createCommands = function() {
    this._windowCommands = new Window_NetworkRoomCommands(new Rectangle(0, this._helpWindow.y + this._helpWindow.height, 600, 100));
    this._windowCommands.setHandler('cancel', this.popScene.bind(this));
    this._windowCommands.setHandler('leave', this.popScene.bind(this));
    this._windowCommands.setHandler('start', this._onStartRoomCommand.bind(this));
    this._windowCommands.setHandler('ready', this._onReadyInRoomCommand.bind(this));
    this._windowCommands.setHandler('character', this._onCharacterSelectCommand.bind(this));
    this._windowCommands.setHandler('joinInGame', this._onJoinAlreadyGameCommand.bind(this));
    this.addWindow(this._windowCommands);
    this._windowCommands.activate();
  };
  _._onStartRoomCommand = function() {
    if (this._isAllInRoomReady()) { // TODO: В Wrapper, так как окно тоже проверяет
      if (ANNetwork.isMasterClient()) {
        ANNetwork.send(NMS.Lobby("startGame"));
      }
    } else {
      this._windowCommands.activate();
    }
  };
  _._onReadyInRoomCommand = function() {
    var playerData;
    playerData = ANGameManager.myPlayerData();
    ANPlayersManager.sendPlayerInRoomReady(!playerData.isReadyInRoom);
    this._windowCommands.activate();
  };
  _._onCharacterSelectCommand = function() {
    this._windowActorsList.show();
    this._windowActorsList.open();
    this._windowActorsList.activate();
    return this._playersListWindow.close();
  };
  //TODO: Флаги готовности, сбрасывать при нажатии Character
  // * См. readyPlayersIds у данных комнаты
  _._isAllInRoomReady = function() {
    return true;
  };
  _.createActorSelectWindow = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._windowActorsList = new Window_NetworkActorsList(new Rectangle(wx, wy, ww, wh));
    this._windowActorsList.setHandler('cancel', this._onActorSelectCancel.bind(this));
    this._windowActorsList.setHandler('ok', this._onActorSelectOk.bind(this));
    this._windowActorsList.hide();
    return this.addWindow(this._windowActorsList);
  };
  _._onActorSelectCancel = function() {
    return this._cancelActorSelection();
  };
  _._cancelActorSelection = function() {
    this._windowActorsList.close();
    this._windowCommands.activate();
    return this._playersListWindow.open();
  };
  _._onActorSelectOk = function() {
    var selectedActorId;
    selectedActorId = this._windowActorsList.selectedActorId();
    if (selectedActorId <= 0) {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    } else {
      ANPlayersManager.sendBindActorFromLobby(selectedActorId, this._onBindActorResult.bind(this));
    }
  };
  _._onBindActorResult = function(resultFlag) {
    if (resultFlag === true) {
      this._cancelActorSelection();
    } else {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    }
    this.refreshRoom();
  };
  _._refreshActorsList = function() {
    var ref;
    return (ref = this._windowActorsList) != null ? ref.refresh() : void 0;
  };
  _.createPlayersList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._playersListWindow = new Window_NetworkRoomPlayersList(new Rectangle(wx, wy, ww, wh));
    this.addWindow(this._playersListWindow);
    this._refreshPlayerList();
  };
  _.prepareSaveFile = function() {
    var info;
    info = DataManager.nGetNetworkSaveInfoWithId(this.room.uniqueSaveID);
    if (info == null) {
      HUIManager.notifyError("Save file data not found!");
      console.warn("Save file with ID " + this.room.uniqueSaveID + " not found!");
      this.popScene.bind(this);
    } else {
      //TODO: На сервере нет проверки на занятость персонажа??? НЕТУ в 112
      ANPlayersManager.sendBindActorFromLobby(info.nMyActorId, this.onBindLoadedActorResult.bind(this));
    }
  };
  _.onBindLoadedActorResult = function(resultFlag) {
    if (resultFlag === false) {
      SoundManager.playBuzzer();
      HUIManager.notifyError("Can't load Actor data or Actor already used by another player");
      this.popScene.bind(this);
    } else {
      this.refreshRoom();
    }
  };
  _._onJoinAlreadyGameCommand = function() {
    console.log("Send request worldData");
    ANGameManager.sendStartedRoomGameDataRequest(this._onJoinedAlreadyStartedGameComplete.bind(this), () => {
      HUIManager.notifyError("Unable to join game");
      return this._windowCommands.activate();
    });
  };
  _._onJoinedAlreadyStartedGameComplete = function(data) {
    var content, e;
    "!!! JOINED TO THE GAME !!!".p();
    if (KDCore.isMZ()) {
      StorageManager.loadObjectFormNet(data).then((content) => {
        //console.info(content)
        return this._onJoinedAlreadyStartedGameSuccess(content);
      }).catch(() => {
        HUIManager.notifyError("Unable to join game");
        return this._windowCommands.activate();
      });
    } else {
      try {
        content = JsonEx.parse(data);
        this._onJoinedAlreadyStartedGameSuccess(content);
      } catch (error) {
        e = error;
        ANET.w(e);
        this._windowCommands.activate();
      }
    }
  };
  _._onJoinedAlreadyStartedGameSuccess = function(content) {
    this._startingGameTransition = true;
    // * Регистрируем себя в комнате (получаем Player Index)
    ANGameManager.sendJoinedToStartedGame();
    DataManager.createGameObjects();
    DataManager.extractSaveContents(content);
    if (KDCore.isMZ()) {
      DataManager.correctDataErrors();
    }
    ANGameManager.applyJoinedDataCorrects();
    SceneManager.goto(Scene_Map);
  };
})();

// ■ END Scene_NetworkRoom.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена со списком комнат на сервере
var Scene_NetworkRoomsList;

Scene_NetworkRoomsList = class Scene_NetworkRoomsList extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    //TODO: Потом сделать чтобы сервер сам отправлял когда меняется список комнат
    // * Сейчас опасно, так как может быть уже 4 из 4, а информация не обновилась
    this._refreshRoomsListThread = new KDCore.TimedUpdate(60, this._requestRoomsListFromServer.bind(this));
    this._createRoomsList();
    this._requestRoomsListFromServer();
  }

  refreshRooms() {
    if (ANET.PP.isRoomFilterON()) {
      this.applyFilterToRooms();
    }
    return this._roomsListWindow.refreshRooms(this.roomsList);
  }

  //?VERSION
  applyFilterToRooms() {}

  update() {
    super.update();
    return this._refreshRoomsListThread.update();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomsList.prototype;
  _._requestRoomsListFromServer = function() {
    // * В первый раз показываем Loader
    if (this.roomsList == null) {
      HUIManager.showLoader();
    }
    ANNetwork.callback(NMS.Lobby("getRoomsList"), (result) => {
      // * Если сцена была закрыта, а комнаты пришли
      if (!(SceneManager._scene instanceof Scene_NetworkRoomsList)) {
        return;
      }
      this.roomsList = result;
      if (this.roomsList == null) {
        return;
      }
      this.refreshRooms();
      return HUIManager.hideLoader();
    });
    this.refreshRooms();
  };
  _._createRoomsList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 140;
    wx = 50;
    wy = 70;
    this._roomsListWindow = new Window_NetworkRoomsList(new Rectangle(wx, wy, ww, wh));
    this._roomsListWindow.setHandler('cancel', this.popScene.bind(this));
    this._roomsListWindow.setHandler('ok', this._onJoinRoomCommand.bind(this));
    this._roomsListWindow.activate();
    return this.addWindow(this._roomsListWindow);
  };
  _._onJoinRoomCommand = function() {
    var roomData;
    roomData = this._roomsListWindow.getSelectedRoom();
    if (NetRoomDataWrapper.isRoomProperToJoin(roomData)) {
      ANNetwork.get(NMS.Lobby("joinToRoom", roomData.name), (result) => {
        return this._onJoinedToRoom(result);
      }, () => {
        console.log("Can't join to Room, server not response in time");
        return this._roomsListWindow.activate();
      });
    } else {
      SoundManager.playBuzzer();
      this._roomsListWindow.activate();
    }
  };
  
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._roomsListWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

//TODO: События на обработку: список комнат обновлися, успешное подключение, плохое подключение


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkRoomTypeSelect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Сцена выбора "Новая игра" или "Загрузить" после выбора "Создать комнату"

//TODO: Если опция по возможности сохранения отключена, надо сразу перепрыгивать эту сцену
var Scene_NetworkRoomTypeSelect;

Scene_NetworkRoomTypeSelect = class Scene_NetworkRoomTypeSelect extends Scene_MenuBase {
  constructor() {
    super();
  }

  //TODO: Заголовок какой-нибудь ???
  create() {
    super.create();
    // * Если параметр выключен (сохранять и загружать нельзя), то пропуск данной сцены
    if (!ANET.PP.isSaveLoadAllowed()) {
      // * Если мы входим в сцену, то пропуск сразу в комнату
      if ($gameTemp._nIsForwardTransitionToRoomTypeMenu === true) {
        $gameTemp._nIsForwardTransitionToRoomTypeMenu = null;
        this.commandNewGame();
      } else {
        this.popScene(); // * Выход, не нужны компоненты сцены
      }
      return;
    }
    this._initSceneComponents();
  }

};

(function() {  // ■ END Scene_NetworkRoomTypeSelect.coffee
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomTypeSelect.prototype;
  _._initSceneComponents = function() {
    this._createRoomTypeSelectMenu();
    return this._createGamesToLoadList();
  };
  _._createRoomTypeSelectMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    if (KDCore.isMV()) {
      wh = this.calcWindowHeight(2, true);
    } else {
      // * Хоть команды 2, используется 4, чтобы сразу под курсором была команда
      wh = this.calcWindowHeight(4, true);
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkRoomTypeMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('newGame', this.commandNewGame.bind(this));
    this._commandsWindow.setHandler('continue', this.commandContinue.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _.commandNewGame = function() {
    this._createNewRoom(null); // * новая игра
  };
  _.commandContinue = function() {
    this._commandsWindow.hide();
    this._listWindow.show();
    this._listWindow.activate();
  };
  _._createNewRoom = function(uniqueSaveId) {
    var newRoomData, roomName;
    // * Используем название команаты с предыдущей сцены
    roomName = $gameTemp._nLastRoomName;
    if (!String.any(roomName)) {
      roomName = "Room_" + Math.randomInt(1000);
    }
    $gameTemp._nLastRoomName = null; // * очищаем
    
    // * Собираем данные об новой комнате
    newRoomData = {
      name: roomName,
      gameInfo: ANNetwork.getNetworkGameInfoData(),
      uniqueSaveID: uniqueSaveId
    };
    // * Отправляем данные об текущей игре (клиенте)
    ANNetwork.get(NMS.Lobby("createRoom", newRoomData), (result) => {
      return this._onRoomCreated(result);
    }, () => {
      console.log("Can't create Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onRoomCreated = function(roomData) {
    if (roomData != null) {
      ANNetwork.setRoomMaster(roomData);
      // * Мастер всегда готов
      ANPlayersManager.sendPlayerInRoomReady(true);
      SceneManager.push(Scene_NetworkRoom);
    } else {
      HUIManager.notifyError("Can't create room with name: " + this._lastRoomName);
      this._commandsWindow.activate();
    }
  };
  _._createGamesToLoadList = function() {
    var rect, wh, ww, wx, wy;
    ww = Graphics.boxWidth - 100;
    if (KDCore.isMZ()) {
      wh = this.mainAreaHeight();
    } else {
      wh = Graphics.height - 20;
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._listWindow = new Window_SavefileList(rect);
    this._listWindow.setHandler("ok", this.onLoadFileSelected.bind(this));
    this._listWindow.setHandler("cancel", this.onLoadFileSelectCancel.bind(this));
    this._listWindow.setMode("loadNet", false);
    if (KDCore.isMZ()) {
      this._listWindow.selectSavefile(0);
    } else {
      this._listWindow.select(0);
    }
    this._listWindow.refresh();
    this._listWindow.hide();
    this.addWindow(this._listWindow);
  };
  _.onLoadFileSelected = function() {
    var info, savefileId;
    if (KDCore.isMZ()) {
      savefileId = this._listWindow.savefileId();
    } else {
      savefileId = this._listWindow.index() + 1;
    }
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      info = DataManager.nGetInfoForSavefileId(savefileId);
      this._createNewRoom(info.nUniqueSaveID);
    } else {
      SoundManager.playBuzzer();
      this._listWindow.activate();
    }
  };
  _.onLoadFileSelectCancel = function() {
    this._listWindow.hide();
    this._commandsWindow.show();
    this._commandsWindow.activate();
  };
})();


// Generated by CoffeeScript 2.6.1
// * Сцена настроек для сетевой игры

//TODO: Пока что просто ввод имени игрока
var Scene_NetworkSettings;

Scene_NetworkSettings = class Scene_NetworkSettings extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    this._showNameInput();
    if (KDCore.isMV()) {
      // * Делаем фокус ввода
      setTimeout((function() {
        return HUIManager.focusInput();
      }), 100);
    }
  }

  stop() {
    this._savePlayerName();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel() || Input.isTriggered('ok')) {
      return this.popScene();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkSettings.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkSettings.prototype;
  _._showNameInput = function() {
    HUIManager.showInput("Enter your name for network...");
    HUIManager.setInputValue(ANGameManager.myPlayerData().name);
  };
  _._savePlayerName = function() {
    var newName;
    newName = HUIManager.getInputValue();
    if (String.any(newName)) {
      ANGameManager.myPlayerData().name = newName;
      // * Отправим на сервер
      ANPlayersManager.sendPlayerName();
      ConfigManager.netPlayerName = newName;
      ConfigManager.save();
    }
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
})();

// ■ END Scene_NetworkSettings.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, ALIAS__stop, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  // * В MV нету метода executeSave, создадим его для совместимости
  if (KDCore.isMV()) {
    //?[NEW, from MZ]
    _.executeSave = function(savefileId) {
      $gameSystem.onBeforeSave();
      if (DataManager.saveGame(savefileId)) {
        this.onSaveSuccess();
      } else {
        this.onSaveFailure();
      }
    };
    // * Переопределим стандартный метод (только в МВ)
    // * Теперь в сетевом режиме он будет использовать новый метод executeSave
    //@[ALIAS]
    ALIAS__onSavefileOk = _.onSavefileOk;
    _.onSavefileOk = function() {
      if (ANNetwork.isConnected()) {
        Scene_File.prototype.onSavefileOk.call(this);
        this.executeSave(this.savefileId());
      } else {
        ALIAS__onSavefileOk.call(this);
      }
    };
  }
  //@[ALIAS, STORED]
  _.nALIAS__executeSave_43243 = _.executeSave;
  _.executeSave = function(savefileId) {
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isSaveOnlyInMenu()) {
        //TODO:
        //@nRequestClientsStatesForSave(savefileId)
        this.nExecuteNetworkSave(savefileId);
      } else {
        this.nExecuteNetworkSave(savefileId);
      }
    } else {
      _.nALIAS__executeSave_43243.call(this, savefileId);
    }
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    if (this.nSaveDataPool == null) {
      return;
    }
    this.nUpdateSavePool();
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    this.nClearTempSaveData();
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  _.nUpdateSavePool = function() {
    var ref;
    return (ref = this.nSaveDataPool) != null ? ref.update() : void 0;
  };
  _.nCreateTempSaveData = function() {
    // * Делаем глобальную переменную чтобы DataManager мог перехватить данные
    $gameTemp.nSaveData = this.nSaveDataPool;
    // * Чтобы у всех был одинаковый, нужно при опредлении какой файл загружать
    $gameTemp.nUniqueSaveID = ANET.Utils.generateSaveUniqueId();
  };
  _.nClearTempSaveData = function() {
    $gameTemp.nSaveData = null;
    return $gameTemp.nUniqueSaveID = null;
  };
  // * Запросить проверку статуса других игроков
  // * чтобы они не были "заняты" (например битва или событие)
  // * сейчас используется проверка, что все должны быть в меню
  _.nRequestClientsStatesForSave = function(savefileId) {};
  //TODO: пропустим пока что

  // * Отправить всем команду что нужны данные для сохранения
  _.nExecuteNetworkSave = function(savefileId) {
    // * Создаём пул данных сохранений для каждого игрока
    this.nSaveDataPool = new PlayersDataPool(function() {
      return ANGameManager.anotherPlayers();
    });
    // * Задаём сразу свои данные
    this.nSaveDataPool.setMyData(DataManager.makeSaveContents());
    // * Задаём методы callbacks
    this.nSaveDataPool.onFail(() => {
      return this.nOnWaitSaveDataDone(-1); // * fail
    });
    this.nSaveDataPool.onReady(() => {
      return this.nOnWaitSaveDataDone(savefileId);
    });
    this.nCreateTempSaveData();
    // * Посылаем запрос на сервер ($gameTemp.nUniqueSaveID должен быть уже создан)
    this.nSaveDataPool.register(function() {
      return ANGameManager.sendSaveDataRequest(savefileId);
    });
    this.nOnWaitSaveDataStart();
  };
  _.nOnWaitSaveDataStart = function() {
    return HUIManager.showLoader(600);
  };
  _.nOnWaitSaveDataDone = function(savefileId) {
    HUIManager.hideLoader();
    "SAVE DATA RECEIVED".p(savefileId);
    if (savefileId >= 0) {
      // * Вызываем стандартный метод
      _.nALIAS__executeSave_43243.call(this, savefileId);
    } else {
      this.onSaveFailure();
    }
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Skill.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Skill.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Skill.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Status.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, ALIAS__start, ALIAS__stop, _;
  //@[DEFINES]
  _ = Scene_Status.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме зависит от параметра
    if (ANNetwork.isConnected()) {
      // * Если в режиме просмотра статуса определённого игрока - нет
      if ($gameTemp._netRequestStatusForCertainActorId != null) {
        return false;
      } else {
        return ANET.PP.isOtherPlayersMenuStatusAllowed();
      }
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    var actor;
    ALIAS__start.call(this);
    // * Показываем статус определённого игрока по сети (для Player Menu опции)
    if (ANNetwork.isConnected() && $gameTemp._netRequestStatusForCertainActorId > 0) {
      actor = $gameActors.actor($gameTemp._netRequestStatusForCertainActorId);
      if (actor != null) {
        this._actor = actor;
        this.refreshActor();
      }
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    $gameTemp._netRequestStatusForCertainActorId = null;
  };
})();

// ■ END Scene_Status.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    if (ANNetwork.isConnected()) {
      ANNetwork.stop();
    }
    $gameTemp.nLobbyChatHistory = null;
    if (ANET.isDEV()) {
      "Precc C for fast connect".p();
    }
  };
  //@[ALIAS]
  //setTimeout (=>
  //        @nFastConnectToDevRoom()
  //    ), Math.random() * 1000
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANET.isDEV()) {
      //TODO: Добавить потом параметр плагина, чтобы люди могли тестить быстро
      return this.nUpdateDebugStart();
    }
  };
  (function() {    // * Добавляем команду сетевой игры в главное меню
    var ALIAS__calcWindowHeight, ALIAS__commandWindowRect, ALIAS__createCommandWindow;
    
    //@[ALIAS]
    ALIAS__createCommandWindow = _.createCommandWindow;
    _.createCommandWindow = function() {
      ALIAS__createCommandWindow.call(this);
      return this._commandWindow.setHandler("network", this.commandNetwork.bind(this));
    };
    //@[ALIAS]
    ALIAS__commandWindowRect = _.commandWindowRect;
    _.commandWindowRect = function() {
      // * little trick to not overwrite method
      this.___isOneMoreCommand = !Imported.VisuMZ_0_CoreEngine;
      return ALIAS__commandWindowRect.call(this);
    };
    //@[ALIAS]
    ALIAS__calcWindowHeight = _.calcWindowHeight;
    _.calcWindowHeight = function(numLines, selectable) {
      if (this.___isOneMoreCommand === true) {
        numLines += 1;
        if (!ANET.PP.isSinglePlayerAllowed()) {
          // * Если одиночная игра не доступна, то нет одной позиции в меню (Новая ира)
          numLines -= 1;
        }
      }
      return ALIAS__calcWindowHeight.call(this, numLines, selectable);
    };
  })();
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  (function() {    // DEV FAST GAME START
    // --------------------------------------------------------
    // * Метод только для отладки (быстрый старт на кнопку C)
    _.nUpdateDebugStart = function() {
      if (Input.isTriggered('c')) {
        this.nFastConnectToDevRoom();
      }
      if ($gameTemp._isDevNetGameWaitPlayers === true) {
        if (ANGameManager.playersData.length > 1) {
          return this.nFastGameStart();
        }
      }
    };
    //?EVENT
    _.netOn_lobby_startGame = function() {
      if ($gameTemp._isDevNetGameStart !== true) {
        return;
      }
      Scene_Title.prototype.commandNewGame.call(this);
    };
    _.nFastConnectToDevRoom = function() {
      if (ANET.PP.isActorSelectionAllowed()) {
        console.warn("Can't connect in Dev room in Actor Select mode");
        return;
      }
      ANNetwork.initSystem();
      return ANNetwork.setConnection(function(status) {
        if (status === 1) {
          HUIManager.notifySucess("Connected to server");
          ANGameManager.init();
          return ANNetwork.get(NMS.Lobby("createRoom", {
            name: "dev",
            gameInfo: ANNetwork.getNetworkGameInfoData()
          }), function(roomData) {
            if (roomData != null) {
              ANNetwork.setRoomMaster(roomData);
              return $gameTemp._isDevNetGameWaitPlayers = true;
            } else {
              return ANNetwork.get(NMS.Lobby("joinToRoom", "dev"), function(roomData) {
                $gameTemp._isDevNetGameStart = true;
                return ANNetwork.setRoomJoin(roomData);
              }, function() {
                return console.log("Can't join to Room, server not response in time");
              });
            }
          }, function() {
            return console.log("Can't create Room, server not response in time");
          });
        } else {
          return HUIManager.notifyError("Server not response in time");
        }
      });
    };
    _.nFastGameStart = function() {
      if (ANNetwork.isMasterClient()) {
        $gameTemp._isDevNetGameStart = true;
        return ANNetwork.send(NMS.Lobby("startGame"));
      }
    };
  })();
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {}; // * NOTHING
  _.commandNetwork = function() {
    this._commandWindow.close();
    return SceneManager.push(Scene_NetworkGameMenu);
  };
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeScene, ALIAS__isGameActive, _;
  //@[DEFINES]
  _ = SceneManager;
  //? Всегда требует активного статуса чтобы всегда принимать данные от сервера
  //@[ALIAS]
  ALIAS__isGameActive = _.isGameActive;
  _.isGameActive = function() {
    if (ANNetwork.isConnected()) {
      return true;
    } else {
      return ALIAS__isGameActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__changeScene = _.changeScene;
  _.changeScene = function() {
    if (ANNetwork.isConnected() && this.isSceneChanging()) {
      if (typeof HUIManager !== "undefined" && HUIManager !== null) {
        HUIManager.onGameSceneChanged();
      }
    }
    ALIAS__changeScene.call(this);
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = SceneManager;
  //? ONLY FOR MV
  _.isSceneReadyForNetwork = function() {
    return true;
  };
  // * Сцена занята для событий из сети (scene events) (общий метод для MV и MZ)
  _.isBusyForNetworkData = function() {
    return SceneManager.isSceneChanging() || !SceneManager.isSceneReadyForNetwork();
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Элементы интерфейса ANET Z на карте

// * Интерфейс AABS на карте
(function() {
  var Spriteset_UI;
  Spriteset_UI = class Spriteset_UI extends Sprite {
    constructor() {
      super();
      this._init();
      return;
    }

    isActive() {
      return this.visible === true;
    }

    show() {
      return this.visible = true;
    }

    hide() {
      return this.visible = false;
    }

    terminate() {
      this.visible = false;
    }

    // * Обновить все контроллеры и элементы
    refresh() {}

    onGameMessageStart() {}

    onGameMessageEnd() {}

  };
  ANET.link(Spriteset_UI);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Spriteset_UI.prototype;
  _._init = function() {
    // * Регестрирует себя в менеджере
    ANET.UI.setUI(this);
    // * Набор всех элементов
    this.elements = [];
    // * Набор всех контроллеров
    this.controllers = [];
    return this._create();
  };
  _._create = function() {
    this._createNormalUILayer();
    return this._createElements();
  };
  _._createNormalUILayer = function() {
    this.layer = new Sprite();
    return this.addChild(this.layer);
  };
  _._createElements = function() {
    if (ANET.PP.isInGamePlayerMenuAllowed()) {
      this._createInGamePlayerMenu();
    }
    if (ANET.PP.isGameChatAllowed()) {
      this._createInGameChat();
    }
  };
  // * Создаём меню игрока
  _._createInGamePlayerMenu = function() {
    var size;
    //TODO: from parameters
    size = new Rectangle(0, 0, 160, 160);
    this.playerMenuWindow = new FWindow_InGamePlayerMenu(this, size.width, size.height);
  };
  // * Создаём окно чата
  _._createInGameChat = function() {
    var params;
    params = ANET.PP.uiData("inGameChatWindow");
    this.chatWindow = new FWindow_InGameChat(this, params.size.w, params.size.h);
    this._addElementToUI(this.chatWindow);
  };
  // * Добавить элемент на обычный слой
  _._addElementToUI = function(sprite) {
    return this.layer.addChild(sprite);
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__retreat, _;
  //@[DEFINES]
  _ = Sprite_Actor.prototype;
  //TEMP
  //TODO: Временное врешение, работает только на мастере
  //@[ALIAS]
  ALIAS__retreat = _.retreat;
  _.retreat = function() {
    if (ANNetwork.isConnected()) {
      if ($gameParty.leader() === this._battler) {
        return this.startMove(300, 0, 30);
      } else {

      }
    } else {
      // * Другой персонаж не убегает
      return ALIAS__retreat.call(this);
    }
  };
})();

// ■ END Sprite_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__setCharacter, ALIAS__updateOther, _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //@[ALIAS]
  ALIAS__updateOther = _.updateOther;
  _.updateOther = function() {
    ALIAS__updateOther.call(this);
    this._updateNetworkCharacter();
    this._updateNetworkNameplate();
    this._updateNetworkOther();
  };
  
  //@[ALIAS]
  ALIAS__setCharacter = _.setCharacter;
  _.setCharacter = function(character) {
    ALIAS__setCharacter.call(this, character);
    this._isNetworkCharacter = ANNetwork.isConnected() && character instanceof NETCharacter;
    // * Смена методов
    if (this._isNetworkCharacter === true) {
      this._updateNetworkCharacter = this._updateNetworkCharacterMain;
    }
    // * У персонажа есть Nameplate
    if (ANET.PP.isShowNameplates() && ANNetwork.isConnected()) {
      KDCore.GEventsManager.subscribeFor("netzRefreshNameplate", this.nRefreshNameplate.bind(this));
      this.nRefreshNameplate();
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //?DYNAMIC
  // * Данный метод подключается только для NetChar
  _._updateNetworkCharacter = function() {}; // * DUMMY
  _._updateNetworkCharacterMain = function() {
    return this._updateNetworkStateIcon();
  };
  _._updateNetworkStateIcon = function() {
    if (this.netStateIcon == null) {
      this._createNetworkStateIcon();
    } else {
      this.netStateIcon.x = this.x;
      this.netStateIcon.y = this.y - this.height;
    }
  };
  _._createNetworkStateIcon = function() {
    var e, ref;
    this.netStateIcon = new ANET.Sprite_PlayerNetworkStatus(this);
    this.netStateIcon.setupNETCharacter(this._character);
    try {
      // * Не лучший способ
      if ((ref = SceneManager._scene._spriteset) != null) {
        ref.addNetworkStatusIconForCharacter(this.netStateIcon);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Данный метод работает для всех персонажей (NetChar, событие, игрок...)
  // ? Работает всегда, даже когда NOT CONNECTED
  _._updateNetworkOther = function() {}; // * EMPTY NOW
  
  // * Создать (удалить) табличку с именем персонажа
  _.nRefreshNameplate = function() {
    if (this.netNameplateSpr != null) {
      this._nDestroyNameplateSpr();
    }
    if ((this._character != null) && (this._character.nGetNameplate() != null)) {
      this._updateNetworkNameplate = this._updateNetworkNameplateMain;
    } else {
      this._updateNetworkNameplate = function() {}; // * EMPTY
    }
  };
  //?DYNAMIC
  _._updateNetworkNameplate = function() {};
  // * Метод обновления таблички (создание) и присвоение координат
  _._updateNetworkNameplateMain = function() {
    if (this.netNameplateSpr == null) {
      this._nCreateNameplateSpr();
    } else {
      this.netNameplateSpr.visible = this.visible;
      this.netNameplateSpr.opacity = this.opacity;
      this.netNameplateSpr.x = this.x;
      this.netNameplateSpr.y = this.y - this.height;
    }
  };
  _._nCreateNameplateSpr = function() {
    var e, ref;
    if (this._character == null) {
      return;
    }
    try {
      this.netNameplateSpr = new ANET.Sprite_NetCharNameplate();
      this.netNameplateSpr.setup(this._character.nGetNameplate());
      if ((ref = this.parent) != null) {
        ref.addChild(this.netNameplateSpr);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      this._updateNetworkNameplate = function() {}; // * DUMMY, no more errors spawn
    }
  };
  _._nDestroyNameplateSpr = function() {
    var e;
    try {
      this.netNameplateSpr.removeFromParent();
      return this.netNameplateSpr = null;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Gauge.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__smoothness, _;
  if (KDCore.isMV()) {
    return;
  }
  //@[DEFINES]
  _ = Sprite_Gauge.prototype;
  //@[ALIAS]
  ALIAS__smoothness = _.smoothness;
  _.smoothness = function() {
    // * Делаем более плавное заполнение для сетевой битвы, чтобы не было видно "рывков"
    // * Рывки есть так как с сервера данные обновляются примерно раз в секунду в бою
    if (ANNetwork.isConnected()) {
      if (this._statusType === "time" && $gameParty.inBattle()) {
        return 60;
      }
    }
    return ALIAS__smoothness.call(this);
  };
})();

// ■ END Sprite_Gauge.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_MapClickEffect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Эффект нажатия мышкой (на карте)
(function() {
  var Sprite_MapClickEffect;
  Sprite_MapClickEffect = class Sprite_MapClickEffect extends KDCore.Sprite {
    constructor(x, y) {
      super();
      this.bitmap = ImageManager.loadAA("nzClickEffect");
      this.anchor.set(0.5);
      this._create();
      this.move(x, y);
      return;
    }

    //TODO: From parameters
    getSettings() {
      return {
        initialSize: 0.08,
        endSize: 0.4,
        sizeChangeStep: 0.03,
        frameDelay: 1
      };
    }

    update() {
      var ref, ref1;
      super.update();
      if ((ref = this._changer) != null) {
        ref.update();
      }
      if ((ref1 = this._changer2) != null) {
        ref1.update();
      }
      this._refreshScale();
    }

    // * destroy
    onAnimationEnd() {
      var ref;
      this.visible = false;
      this._changer = null;
      this._changer2 = null;
      if ((ref = this.parent) != null) {
        ref.removeChild(this);
      }
    }

  };
  ANET.link(Sprite_MapClickEffect);
})();

(function() {
  var _;
  
  //@[DEFINES]
  _ = ANET.Sprite_MapClickEffect.prototype;
  _._create = function() {
    var p;
    p = this.getSettings();
    this._tScale = p.initialSize;
    this._refreshScale();
    this._changer = new KDCore.Changer(this);
    this._changer.change('_tScale').from(p.initialSize).to(p.endSize).step(p.sizeChangeStep).speed(p.frameDelay).start();
    this._changer2 = new KDCore.Changer(this);
    this._changer2.change('opacity').from(255).to(0).step(22).speed(1).delay(1).start().done(this.onAnimationEnd.bind(this));
  };
  _._refreshScale = function() {
    this.scale.x = this._tScale;
    this.scale.y = this.scale.x;
  };
})();

// ■ END Sprite_MapClickEffect.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_NetCharNameplate.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_NetCharNameplate, _;
  // * Табличка с именем над персонажем
  Sprite_NetCharNameplate = class Sprite_NetCharNameplate extends KDCore.Sprite {
    constructor() {
      super();
    }

    // * Задать подложку
    // Объект nameplate = { text, style }
    setup(nameplate) {
      var style, text;
      if (nameplate == null) {
        this.visible = false;
      } else {
        ({text, style} = nameplate);
      }
      return this.refreshAll(text, style);
    }

    // * Данный стиль определён в базовых параметрах плагина, но на всякий случай тут есть тоже
    getDefaultStyle() {
      return {
        id: "default",
        margins: {
          x: -27,
          y: -20
        },
        backImage: {
          image: "",
          visible: true
        },
        backImageMargins: {
          x: 0,
          y: 0
        },
        backRect: {
          visible: true,
          size: {
            w: 54,
            h: 18
          },
          fillColor: "#000000",
          fillOpacity: 120,
          borderColor: "#000000",
          borderThickness: 1,
          borderOpacity: 255
        },
        backRectMargins: {
          x: 0,
          y: 0
        },
        text: {
          visible: true,
          size: {
            w: 54,
            h: 18
          },
          alignment: "center",
          font: {
            face: null,
            size: 12,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF"
        }
      };
    }

    // * Получить стиль по его ID из параметров плагина
    getStyleById(style) {
      var e, styleData, styles;
      try {
        styles = ANET.PP.getNameplateStyles();
        styleData = styles.getById(style);
        // * Если стиль найден и имеет настройки текста (главные)
        if ((styleData != null) && (styleData.text != null)) {
          return styleData;
        } else {
          return this.getDefaultStyle();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return this.getDefaultStyle();
      }
    }

    // * Обновить всё
    refreshAll(text, styleId) {
      if (String.any(styleId)) {
        this.applyStyle(this.getStyleById(styleId));
      } else {
        this.applyDefaultStyle();
      }
      this.drawText(text);
      if (KDCore.isMV()) {
        this.z = 100;
      }
    }

    // * Обновить текст
    drawText(text) {
      var e, ref;
      try {
        if (!String.any(text)) {
          text = "";
        }
        return (ref = this.textElement) != null ? ref.draw(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Применить стиль (по сути пересоздать все элементы)
    applyStyle(style) {
      var e;
      try {
        return this._reCreateAllElements(style);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Применить стандартный стиль (если не указан конкретный)
    applyDefaultStyle() {
      return this.applyStyle(this.getStyleById("default"));
    }

  };
  ANET.link(Sprite_NetCharNameplate);
  //@[DEFINES]
  _ = ANET.Sprite_NetCharNameplate.prototype;
  _._reCreateAllElements = function(styleData) {
    this._destroyElements();
    if (styleData == null) {
      return;
    }
    this._elements = new Sprite();
    this._elements.move(styleData.margins);
    this.addChild(this._elements);
    this._createElements(styleData);
  };
  _._destroyElements = function() {
    var e;
    try {
      this.textElement = null;
      this.imageElement = null;
      this.rectElement = null;
      if (this._elements != null) {
        return this.removeChild(this._elements);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createElements = function(styleData) {
    var e;
    try {
      if ((styleData.backImage != null) && styleData.backImage.visible === true) {
        this._createBackImage(styleData);
      }
      if ((styleData.backRect != null) && styleData.backRect.visible === true) {
        this._createBackRect(styleData);
      }
      if ((styleData.text != null) && styleData.text.visible === true) {
        return this._createMainText(styleData);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createBackImage = function(styleData) {
    var e;
    try {
      this.imageElement = new KDCore.UI.Sprite_UIImage(styleData.backImage);
      this._elements.addChild(this.imageElement);
      return this.imageElement.move(styleData.backImageMargins);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createBackRect = function(styleData) {
    var e;
    try {
      this.rectElement = new KDCore.UI.Sprite_UIRect(styleData.backRect);
      this._elements.addChild(this.rectElement);
      return this.rectElement.move(styleData.backRectMargins);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createMainText = function(styleData) {
    var e, params;
    try {
      params = styleData.text;
      this.textElement = new KDCore.UI.Sprite_UIText(params);
      return this._elements.addChild(this.textElement);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Sprite_NetCharNameplate.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сообщение в чате
(function() {
  var Sprite_NetChatTextLine;
  Sprite_NetChatTextLine = class Sprite_NetChatTextLine extends KDCore.Sprite {
    constructor() {
      super();
      this.params = this.getSettings();
      this._needAnimation = false;
      this._create();
      return;
    }

    getSettings() {
      return ANET.PP.uiData("netChatTextLine");
    }

    // * Применить стиль задника А (по умолчанию)
    applyBackgroundStyleA() {
      return this._applyBackgroundStyle(this.params.backgroundA);
    }

    // * Применить стиль задника Б (чтобы легче было видно, каждый чётный)
    applyBackgroundStyleB() {
      return this._applyBackgroundStyle(this.params.backgroundB);
    }

    // * Написать сообщение
    drawChatMessage(channelId, actorId, text) {
      var actorName, channelIdText, playerName, textFormat;
      if (this._textSpr == null) {
        return;
      }
      // * Не хочет загружать из параметров!!!
      if (this.params.textFormatForPlayer == null) {
        this.params.textFormatForPlayer = "\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3";
      }
      if (this.params.textFormatForSystem == null) {
        this.params.textFormatForSystem = "\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3";
      }
      // * Не правильно загржает!
      if (this.params.textFormat.contains("*3") && !this.params.textFormat.contains("%3")) {
        this.params.textFormat = "\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3";
      }
      if (this.isMyActorMessage(actorId)) {
        textFormat = this.params.textFormatForPlayer;
      } else {
        if (actorId <= 0) {
          textFormat = this.params.textFormatForSystem;
        } else {
          textFormat = this.params.textFormat;
        }
      }
      channelIdText = this._convertChannelIdToText(channelId); //1
      actorName = this._getActorName(actorId); //2
      playerName = this._getPlayerName(actorId); //4
      this._textSpr.drawTextWithFormat(textFormat, channelIdText, actorName, text, playerName);
    }

    // * Сообщение от меня (текущего клиента), имеет отдельный формат
    isMyActorMessage(actorId) {
      if (ANNetwork.isConnected()) {
        return ANGameManager.myActorId() === actorId;
      } else {
        return false;
      }
    }

    // * Сдвинуть эту строчку выше
    moveUp() {
      this.y -= this.params.size.h;
    }

    // * Анимированное появление сообщения (справа "едет")
    animate() {
      this._textSpr.x = -this.params.textLine.size.w;
      this._needAnimation = true;
    }

    update() {
      super.update();
      this._updateAnimation();
    }

  };
  ANET.link(Sprite_NetChatTextLine);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Sprite_NetChatTextLine.prototype;
  _._applyBackgroundStyle = function(params) {
    if (this._background == null) {
      return;
    }
    this._background.fillAll(params.color);
    this._background.opacity = params.opacity;
  };
  _._create = function() {
    this._createBackground();
    this._createTextLine();
  };
  _._createBackground = function() {
    this._background = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
    this.applyBackgroundStyleA();
    return this.add(this._background);
  };
  _._createTextLine = function() {
    this._textSpr = new KDCore.UI.Sprite_UITextExt(this.params.textLine);
    return this.add(this._textSpr);
  };
  _._updateAnimation = function() {
    if (this._needAnimation === false) {
      return;
    }
    if (this.params.animationSpeedInPx === 0) {
      this._textSpr.x = 0; // * Сразу, без анимации
    } else {
      this._textSpr.x += this.params.animationSpeedInPx;
    }
    if (this._textSpr.x > 0) { // * Граница
      this._textSpr.x = 0;
    }
    this._needAnimation = this._textSpr.x !== 0;
  };
  _._convertChannelIdToText = function(channelId) {
    if (channelId <= 0) {
      return this.params.channelAll;
    }
    return this.params.channelMap;
  };
  _._getActorName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    return (ref = $dataActors[actorId]) != null ? ref.name : void 0;
  };
  _._getPlayerName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    if (ANNetwork.isConnected()) {
      return (ref = ANGameManager.getPlayerDataByActorId(actorId)) != null ? ref.name : void 0;
    } else {
      return this._getActorName(actorId);
    }
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_PlayerNetworkStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_PlayerNetworkStatus;
  Sprite_PlayerNetworkStatus = class Sprite_PlayerNetworkStatus extends Sprite_Balloon {
    constructor() {
      super();
      this.visible = false;
      return;
    }

    setupNETCharacter(_character) {
      this._character = _character;
      return this._checkStateThread = new KDCore.TimedUpdate(10, this._updateStateCheck.bind(this));
    }

    loadBitmap() {
      this.bitmap = ImageManager.loadAA("PlayerStateIcons");
      return this.setFrame(0, 0, 0, 0);
    }

    setup(iconId) {
      if (iconId == null) {
        if (this.visible === true) {
          this.reset();
        }
      } else {
        if (this._balloonId === iconId) {
          return;
        }
        this._balloonId = iconId;
        this.visible = true;
        this.restart();
      }
    }

    restart() {
      return this._duration = 5 * this.speed() + this.waitTime();
    }

    reset() {
      this._duration = 0;
      this._balloonId = -1;
      return this.visible = false;
    }

    // * Не используется, так как прикрепляется к персонажу
    updatePosition() {} // * EMPTY

    update() {
      super.update();
      this._checkStateThread.update();
      // * Начинается снова
      if (this._balloonId >= 0 && this._duration <= 0) {
        this._firstStep = true;
        return this.restart();
      }
    }

    frameIndex() {
      var frameIndex, index;
      index = (this._duration - this.waitTime()) / this.speed();
      frameIndex = 4 - Math.max(Math.floor(index), 0);
      if (this._firstStep == null) {
        return frameIndex;
      } else {
        if (frameIndex === 0) {
          return 1;
        } else {
          return frameIndex;
        }
      }
    }

    // * PRIVATE =====================================================
    _updateStateCheck() {
      if (this._character == null) {
        return;
      }
      this.setup(this._character.networkStateIcon);
    }

  };
  ANET.link(Sprite_PlayerNetworkStatus);
})();

// ■ END Sprite_PlayerNetworkStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Battle.prototype;
  // * Началась битва
  // * Проверим и спрячем "dead" врагов (если мы присоединились)
  _.nRefreshNetBattle = function() {
    var e, i, len, ref, ref1, s;
    try {
      // * Если мы мастер, то не надо, значит мы НЕ присоединились
      if (ANBattleManager.isBattleMaster()) {
        return;
      }
      ref = this._enemySprites;
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        if (s == null) {
          continue;
        }
        if (!((ref1 = s._enemy) != null ? ref1.isAlive() : void 0)) {
          s.hide();
        }
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Spriteset_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createCharacters, _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  //@[ALIAS]
  ALIAS__createCharacters = _.createCharacters;
  _.createCharacters = function() {
    ALIAS__createCharacters.call(this);
    if (ANNetwork.isConnected()) {
      this._createNetworkCharacters();
      this._createNetworkCharactersInfo();
    }
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  _._createNetworkCharacters = function() {
    // * Отдельный массив для удобства
    this._networkCharacterSprites = [];
    this.refreshNetworkCharacters();
  };
  _.refreshNetworkCharacters = function() {
    var char, i, j, len, len1, ref, ref1, spr;
    ref = this._networkCharacterSprites;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      this._removeNetCharInfo(char);
      this._characterSprites.delete(char);
      this._tilemap.removeChild(char);
    }
    this._networkCharacterSprites = [];
    ref1 = $gameMap.netChars();
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      char = ref1[j];
      spr = new Sprite_Character(char);
      this._characterSprites.push(spr);
      this._networkCharacterSprites.push(spr);
      this._tilemap.addChild(spr);
    }
    KDCore.GEventsManager.call("netzRefreshNameplate");
  };
  
  // * Специальный слой для иконок статусов и имён сетевых персонажей
  _._createNetworkCharactersInfo = function() {
    this._networkCharactersInfoSprites = [];
    this._networkCharactersInfoLayer = new Sprite();
    this._networkCharactersInfoLayer.z = 9;
    this._tilemap.addChild(this._networkCharactersInfoLayer);
  };
  // * Добавить иконку статуса для персонажа
  _.addNetworkStatusIconForCharacter = function(iconSpr) {
    this._destroyNetStatusIconDuplicate(iconSpr);
    this._networkCharactersInfoSprites.push(iconSpr);
    this._networkCharactersInfoLayer.addChild(iconSpr);
  };
  
  // * Надо найти и удалить, если икона уже существует для персонажа
  // * при refreshNetworkCharacters, их иконки не удаляются с ними
  // * так как находятся на другом слое
  _._destroyNetStatusIconDuplicate = function(iconSpr) {
    var i, len, ref, spr;
    if (iconSpr == null) {
      return;
    }
    ref = this._networkCharactersInfoSprites;
    //TODO: Возможно после создания таблиц имён надо разлелить метод
    // так как сейчас удаляется любой спрайт из массива с соответсвием персонажа
    for (i = 0, len = ref.length; i < len; i++) {
      spr = ref[i];
      if (spr == null) {
        continue;
      }
      if (spr._character === iconSpr._character) {
        this._networkCharactersInfoLayer.removeChild(spr);
        this._networkCharactersInfoSprites.delete(spr);
      }
    }
  };
  // * Удаляет все связанные с персонажем спрайты информации (статус, имя)
  _._removeNetCharInfo = function(char) {
    if (char == null) {
      return;
    }
    return this._destroyNetStatusIconDuplicate(char.netStateIcon);
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ StorageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = StorageManager;
  _.saveObjectForNet = function(object) {
    return this.objectToJson(object).then((json) => {
      return this.jsonToZip(json);
    }).then(function(zip) {
      return $gameTemp._startedRoomGameDataResponse = zip;
    });
  };
  _.loadObjectFormNet = function(object) {
    return this.zipToJson(object).then((json) => {
      return this.jsonToObject(json);
    });
  };
})();

// ■ END StorageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addText, ALIAS__clear, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (this.isNeedSendLogToServer()) {
      return ANBattleManager.sendWindowLogMessage("clear", null);
    }
  };
  //@[ALIAS]
  ALIAS__addText = _.addText;
  _.addText = function(text) {
    ALIAS__addText.call(this, text);
    if (this.isNeedSendLogToServer()) {
      ANBattleManager.sendWindowLogMessage("add", text);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__showNormalAnimation, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__showNormalAnimation = _.showNormalAnimation;
  _.showNormalAnimation = function(targets, animationId, mirror) {
    ALIAS__showNormalAnimation.call(this, targets, animationId, mirror);
    if (this.isNeedSendLogToServer() && KDCore.isMV()) {
      ANBattleManager.sendWindowLogAnimation(targets, animationId, mirror);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  _.isNeedSendLogToServer = function() {
    return ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler();
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__update, _;
  //@[DEFINES]
  _ = Window_BattleStatus.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if ($gameTemp.isBattleRefreshRequested()) {
      this.refresh();
      $gameTemp.clearBattleRefreshRequest();
    }
  };
})();

// ■ END Window_BattleStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCancelEnabled, ALIAS__isCursorMovable, ALIAS__isOkEnabled, ALIAS__processCancel, ALIAS__processOk, ALIAS__select, ALIAS__start, ALIAS__update, _;
  //TODO: ПРОВЕРИТЬ НА MV

  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  //@[ALIAS]
  ALIAS__isCursorMovable = _.isCursorMovable;
  _.isCursorMovable = function() {
    if (this.nIsNetworkSelection()) {
      return ANInterpreterManager.isSharedEventMaster();
    } else {
      return ALIAS__isCursorMovable.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__isOkEnabled = _.isOkEnabled;
  _.isOkEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isOkEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__isCancelEnabled = _.isCancelEnabled;
  _.isCancelEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isCancelEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.nIsNetworkSelection()) {
      this.nUpdateNetworkSelection();
    }
  };
  // * Можно это тоже, но не обязательно, и так выбор не может сделать второй игрок
  //@[ALIAS]
  //ALIAS__processHandling = _.processHandling
  //_.processHandling = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processHandling.call(@)

  //@[ALIAS]
  //ALIAS__processTouch = _.processTouch
  //_.processTouch = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processTouch.call(@)

  //@[ALIAS]
  ALIAS__select = _.select;
  _.select = function(index) {
    if (this.nIsNetworkSelection()) {
      // * Если мастер, то выбор проходит и отправляем всем выбор
      if (ANInterpreterManager.isSharedEventMaster()) {
        ALIAS__select.call(this, index);
        return this.nSendNetworkSelection(index);
      } else {
        // * Если не мастер, но выбор пришёл с сервера (т.е. есть флаг), то ставим выбор
        if (this.nIsSelectFromNetworkMaster === true) {
          this.nIsSelectFromNetworkMaster = false;
          return ALIAS__select.call(this, index);
        } else {

        }
      }
    } else {
      // * NOTHING
      // * Клиент сам не может менять выбор
      return ALIAS__select.call(this, index);
    }
  };
  
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      this.nSetNetworkSelectMode(false);
    }
  };
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    if (ANNetwork.isConnected()) {
      this.nPrepareNetworkSelection();
    }
    ALIAS__start.call(this);
  };
  
  //@[ALIAS]
  ALIAS__processOk = _.processOk;
  _.processOk = function() {
    ALIAS__processOk.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('ok');
    }
  };
  //@[ALIAS]
  ALIAS__processCancel = _.processCancel;
  _.processCancel = function() {
    ALIAS__processCancel.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('cancel');
    }
  };
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  (function() {    // * Выбор (только одного игрока) в общем событии
    // -----------------------------------------------------------------------
    // * Подготовка окна к выбору по сети
    _.nPrepareNetworkSelection = function() {
      // * Обнуляем действие из сети
      $gameTemp.nSelectionActionFromNetwork = null;
      this.nSetNetworkSelectMode($gameTemp.nRequireChoiceOnlyForMaster);
      // * Сбрасываем флаг (чтобы не повторился на следующем выборе)
      $gameTemp.nRequireChoiceOnlyForMaster = false;
      // * При открытии окна, первый выбор Default всегда проходит (не запрещён) на клиенте
      // * Поэтому ставим разрешающий флаг (якобы от сервера первый выбор)
      this.nIsSelectFromNetworkMaster = true;
      // * Очищаем последний отправленный индекс
      this.__nLastSentIndex = null;
    };
    _.nSetNetworkSelectMode = function(_networkSelectMode) {
      this._networkSelectMode = _networkSelectMode;
    };
    _.nIsNetworkSelection = function() {
      return this._networkSelectMode === true && ANNetwork.isConnected();
    };
    // * Отправить на сервер индекс выбора
    _.nSendNetworkSelection = function(index) {
      // * Чтобы не спамить
      if (this.__nLastSentIndex === index) {
        return;
      }
      this.__nLastSentIndex = index;
      ANInterpreterManager.sendChoiceSelection(index, null);
    };
    // * Отправить на сервер действие (ОК, отмена)
    _.nSendNetworkSelectionAciton = function(action) {
      ANInterpreterManager.sendChoiceSelection(this.index(), action);
    };
    // * Ожидание действие от сервера (не мастер)
    return _.nUpdateNetworkSelection = function() {
      var action, index;
      if ($gameTemp.nSelectionActionFromNetwork == null) {
        return;
      }
      if (ANInterpreterManager.isSharedEventMaster()) {
        return;
      }
      ({action, index} = $gameTemp.nSelectionActionFromNetwork);
      this.nIsSelectFromNetworkMaster = true;
      if (index != null) {
        // * Всегда ставим выбор аналогичный масетеру (пришёл от сервера который), затем уже действия
        this.select(index);
      }
      switch (action) {
        case 'ok':
          this.processOk();
          break;
        case 'cancel':
          this.processCancel(); // select
          break;
      }
      // * Ничего, выбор всегда идёт
      // * Флаг обработан, очищаем
      $gameTemp.nSelectionActionFromNetwork = null;
    };
  })();
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawItem, ALIAS__isEnabled, ALIAS__makeItemList, _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function() {
    if (ANTradeManager.isInTrade()) {
      return true; // * В режиме NetTrade можно продавать все вещи
    } else {
      return ALIAS__isEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__makeItemList = _.makeItemList;
  _.makeItemList = function() {
    ALIAS__makeItemList.call(this);
    if (ANTradeManager.isInTrade()) {
      this.nMakeItemListForTrading();
    }
  };
  //@[ALIAS]
  ALIAS__drawItem = _.drawItem;
  _.drawItem = function(index) {
    if (ANTradeManager.isInTrade() && index === 0) {
      this.nDrawEmptyTradeItem(index);
      return;
    }
    return ALIAS__drawItem.call(this, index);
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  // * Фильтруем список предметов для торговли
  // * 1. Добавляем "пустой" предмет (чтобы убрать позицию)
  // * 2. Удаляем из списка уже выбранные ранее предметы
  _.nMakeItemListForTrading = function() {
    var i, item, len, ref;
    //%[I] Добавлять кнопку Remove только если в слоте что-то есть
    // смотри $gameTemp.__netTradeItemIndex
    this._data.unshift(this.nEmptyTradeItem());
    ref = $gameTemp._netMyTradeItems;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (item == null) {
        continue;
      }
      if (this._data.contains(item[0])) {
        this._data.delete(item[0]);
      }
    }
  };
  // * Тут использую много полей, чтобы не было вылетов с другими плагинами
  // * Например Visu Equip Core использует некоторые поля
  _.nEmptyTradeItem = function() {
    return {
      id: 0,
      animationId: 0,
      note: "",
      meta: {},
      categories: [],
      iconIndex: 0,
      itypeId: 1,
      name: "",
      price: 0,
      occassion: 0,
      description: "\\Chex[#f5c842]Remove Item from current Trade slot"
    };
  };
  _.nDrawEmptyTradeItem = function(index) {
    var e, item, rect;
    try {
      item = this.itemAt(index);
      if (item == null) {
        return;
      }
      rect = this.itemLineRect(index);
      this.changeTextColor("#f5c842");
      this.drawText("[Remove]", rect.x, rect.y, rect.width, 'center');
      //@drawItemName(item, rect.x, rect.y, rect.width)
      return this.resetTextColor();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isFormationEnabled, ALIAS__isSaveEnabled, _;
  //@[DEFINES]
  _ = Window_MenuCommand.prototype;
  // * Команда Formation запрещена в сетевой игре всегда
  //@[ALIAS]
  ALIAS__isFormationEnabled = _.isFormationEnabled;
  _.isFormationEnabled = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__isFormationEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__isSaveEnabled = _.isSaveEnabled;
  _.isSaveEnabled = function() {
    if (ANNetwork.isConnected()) {
      // * Если параметр включён
      return ANET.PP.isSaveLoadAllowed();
    } else {
      return ALIAS__isSaveEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCurrentItemEnabled, _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function(rect) {
    ALIAS__initialize.call(this, rect);
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isOtherPlayersVisibleInMenu() === false) {
        this.setOnlyMyPlayerInMenuMode();
      }
    }
  };
  //@[ALIAS]
  ALIAS__isCurrentItemEnabled = _.isCurrentItemEnabled;
  _.isCurrentItemEnabled = function() {
    if (ANNetwork.isConnected()) {
      return this.isCurrentItemEnabledInNetworkGame();
    } else {
      return ALIAS__isCurrentItemEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  (function() {    // * Команды Skill, Statis, Equip
    // -----------------------------------------------------------------------
    _.isCurrentItemEnabledInNetworkGame = function() {
      if (this.isSymbolOnlyForMyNetActor()) {
        return this.isCurrentActorIsMyNetActor();
      } else {
        return true;
      }
    };
    // * Набор команд, которые доступны только для текущего игрока (персонажа)
    _.isSymbolOnlyForMyNetActor = function() {
      var e, isOnlyForMyActor, symbol;
      try {
        // * Плохой вариант получения команды, но работает
        symbol = SceneManager._scene._commandWindow.currentSymbol();
        // * Навыки и экипировка - только для моего персонажа
        isOnlyForMyActor = symbol === 'skill' || symbol === 'equip';
        if (ANET.PP.isOtherPlayersMenuStatusAllowed() === false) {
          isOnlyForMyActor = isOnlyForMyActor || (symbol === 'status');
        }
        return isOnlyForMyActor;
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
    
    // * Выбранный (Index) персонаж принадлежит мне? (мой персонаж)
    return _.isCurrentActorIsMyNetActor = function() {
      var actor, e;
      try {
        actor = $gameParty.members()[this.index()];
        if (ANET.PP.isMultiActorsMode()) {
          if (actor.isMyNetworkActor()) {
            return true;
          } else if ($gameParty.nIsIOwnedSharedActor(actor.actorId())) {
            return true;
          }
        } else {
          return actor.isMyNetworkActor();
        }
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
  })();
  (function() {    // * Cписок игроков
    // -----------------------------------------------------------------------
    
    // * Будет видно только моего персонажа
    return _.setOnlyMyPlayerInMenuMode = function() {
      this.maxItems = function() {
        return 1;
      };
      this.actor = function(index) {
        return $gameParty.leader();
      };
      return this.selectLast = function() {
        return this.smoothSelect(0);
      };
    };
  })();
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------

// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__startMessage, ALIAS__terminateMessage, _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  //@[ALIAS]
  ALIAS__startMessage = _.startMessage;
  _.startMessage = function() {
    ALIAS__startMessage.call(this);
    return ANET.UI.onGameMessageStart();
  };
  
  //TODO: Тут мерцание происходит. Как быть? Timeout?
  //@[ALIAS]
  ALIAS__terminateMessage = _.terminateMessage;
  _.terminateMessage = function() {
    ALIAS__terminateMessage.call(this);
    return ANET.UI.onGameMessageEnd();
  };
})();

// ■ END Window_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkActorsList;

Window_NetworkActorsList = class Window_NetworkActorsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this.select(0);
  }

  maxItems() {
    return this.actorsForNetwork().length;
  }

  maxCols() {
    return 2;
  }

  actorsForNetwork() {
    return ANET.PP.actorsForNetwork();
  }

  isCurrentItemEnabled() {
    var e;
    try {
      return this.isEnable(this.index());
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  }

  selectedActorId() {
    if (!this.isCurrentItemEnabled()) {
      return 0;
    }
    return this.getActorData(this.index()).id;
  }

  isEnable(index) {
    var actorId;
    actorId = this.getActorData(index).id;
    return !ANGameManager.playersData.some(function(pl) {
      return pl.actorId === actorId;
    });
  }

  drawItem(index) {
    var actorData, faceBitmap, rect;
    actorData = this.getActorData(index);
    if (actorData == null) {
      return;
    }
    rect = this.itemRect(index);
    faceBitmap = ImageManager.loadFace(actorData.faceName);
    faceBitmap.addLoadListener(() => {
      return this._drawActor(rect, actorData, index);
    });
  }

  itemHeight() {
    return 110;
  }

  getActorData(index) {
    return $dataActors[this.actorsForNetwork()[index]];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkActorsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkActorsList.prototype;
  _._drawActor = function(rect, a, index) {
    this.changePaintOpacity(this.isEnable(index));
    this._drawActorInfo(rect, a);
    this._drawActorClass(rect, a);
    if (!this.isEnable(index)) {
      this._drawNetworkStatus(rect);
    }
    this.changePaintOpacity(1);
  };
  _._drawActorInfo = function(rect, a) {
    this.drawFaceWithCustomSize(a.faceName, a.faceIndex, rect.x + 4, rect.y + 2, this.itemHeight() - 8);
    return this.drawText(a.name, rect.x + 120, rect.y + 4, 168);
  };
  _._drawActorClass = function(rect, a) {
    var aClass, className, e;
    try {
      aClass = $dataClasses[a.classId];
      if (aClass != null) {
        className = aClass.name;
      } else {
        className = "";
      }
      if (KDCore.isMV()) {
        this.changeTextColor(this.crisisColor());
      } else {
        this.changeTextColor(ColorManager.crisisColor());
      }
      this.contents.fontSize -= 8;
      this.drawText(className, rect.x + 132, rect.y + 44, 168);
      this.contents.fontSize += 8;
      this.resetTextColor();
    } catch (error) {
      e = error;
      AA.warning(e);
    }
  };
  _._drawNetworkStatus = function(rect) {
    if (KDCore.isMV()) {
      this.changeTextColor(this.deathColor());
    } else {
      this.changeTextColor(ColorManager.deathColor());
    }
    this.contents.fontSize -= 8;
    this.drawText('Picked', rect.x + 270, rect.y + 4);
    this.contents.fontSize += 8;
    this.resetTextColor();
  };
})();

// ■ END Window_NetworkActorsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkGameMenu;

Window_NetworkGameMenu = class Window_NetworkGameMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand(ANET.LV("createRoom"), "createRoom");
    this.addCommand(ANET.LV("joinRoom"), "joinRoom");
    if (ANET.PP.isJoinRandomRoomAllowed()) {
      this.addCommand(ANET.LV("joinRandomRoom"), "joinRandRoom");
    }
    this.addCommand(ANET.LV("Settings"), "settings");
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkGameMenu.prototype;
})();

// ■ END Window_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkRoomCommands;

Window_NetworkRoomCommands = class Window_NetworkRoomCommands extends Window_HorzCommand {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  maxCols() {
    return 3;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  isCanSelectActors() {
    return ANET.PP.isActorSelectionAllowed() && !this.isLoadGame();
  }

  makeCommandList() {
    var leaveCommandName;
    if (ANNetwork.isMasterClient()) {
      this.addCommand(ANET.LV("start"), 'start', this._isStartEnabled());
    } else {
      // * Если комната в режиме "В игре"
      if (this.isStartedRoom()) {
        this.addCommand(ANET.LV("joinGame"), 'joinInGame', this._isJoinInAlreadyGameEnabled());
      } else {
        if (ANET.PP.isCheckPlayerReadyState()) {
          this.addCommand(ANET.LV("ready"), 'ready', this._isReadyEnabled());
        }
      }
    }
    if (this.isCanSelectActors()) {
      this.addCommand(ANET.LV("character"), 'character', this._isCharSelectEnabled());
    }
    leaveCommandName = ANNetwork.isMasterClient() ? ANET.LV("close") : ANET.LV("leave");
    this.addCommand(leaveCommandName, 'leave');
  }

};

(function() {  
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomCommands.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomCommands.prototype;
  _._myActorId = function() {
    return ANGameManager.myPlayerData().actorId;
  };
  _._isAllPlayersSelectActors = function() {
    return ANGameManager.playersData.every(function(pl) {
      return pl.actorId !== 0;
    });
  };
  _._isStartEnabled = function() {
    if (!ANET.PP.isSingleActorNetworkGameAllowed()) {
      if (ANGameManager.playersData.length === 1) {
        return false;
      }
    }
    // * Надо выбрать персонажа, потом можно начинать игру
    if (this.isCanSelectActors() || this.isLoadGame()) {
      //TODO: Разрешить загружаться меньшему количеству игроков??? Опция или НЕТ?
      // * Сейчас может загрузить игру два игрока, если играло 3 или более например
      return this._isAllPlayersSelectActors() && this._isAllPlayersReady();
    } else {
      return this._isAllPlayersReady();
    }
  };
  _._isReadyEnabled = function() {
    if (this.isCanSelectActors()) {
      return !this._isCharSelectEnabled();
    } else {
      return true;
    }
  };
  _._isCharSelectEnabled = function() {
    return this._myActorId() <= 0;
  };
  _._isJoinInAlreadyGameEnabled = function() {
    if (!ANET.PP.isJoinStartedRoomAllowed()) {
      return false;
    }
    if (this.isCanSelectActors()) {
      return this._isAllPlayersSelectActors();
    } else {
      return true; // * Тут сразу можно, без Ready, т.е. игра уже запущена, никого ждать не надо
    }
  };
  
  // * Проверка, что все игроки готовы (только визуальная)
  _._isAllPlayersReady = function() {
    if (ANET.PP.isCheckPlayerReadyState()) {
      // * У себя (хоста) автоматически ставится флаг готов при создании комнаты
      return ANGameManager.playersData.every(function(pl) {
        return pl.isReadyInRoom === true;
      });
    } else {
      return true; // * Всегда да, если параметр отключён
    }
  };
})();

// ■ END Window_NetworkRoomCommands.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Список игроков в комнате
//TODO: Пока нельзя выделять игрока и что-то с ним делать
//TODO: Возможно добавить возможность кикнуть игрока
var Window_NetworkRoomPlayersList;

Window_NetworkRoomPlayersList = class Window_NetworkRoomPlayersList extends Window_Selectable {
  constructor(rect) {
    super(rect);
  }

  //@setBackgroundType ANET.VD.getWindowBackgroundType()
  maxItems() {
    return ANGameManager.playersData.length;
  }

  drawItem(index) {
    var playerData, rect;
    playerData = this.playerData(index);
    if (playerData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawPlayerInfo(rect, playerData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return true;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  playerData(index) {
    return ANGameManager.playersData[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomPlayersList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomPlayersList.prototype;
  _._drawPlayerInfo = function(rect, playerData) {
    var text;
    text = playerData.name;
    if (playerData.id === ANNetwork.room.masterId) {
      text = "\\C[1]" + text;
    } else if (playerData.id === ANNetwork.myId()) {
      text = "\\C[3]" + text;
    }
    if (ANET.PP.isActorSelectionAllowed() || this.isLoadGame()) {
      text += this._getActorName(playerData);
    }
    if (this.isStartedRoom() && NetPlayerDataWrapper.isHaveCharacterInGame(playerData)) {
      text += " \\C[4]\\}[In Game]";
    }
    if (ANET.PP.isCheckPlayerReadyState()) {
      if (playerData.isReadyInRoom === true) {
        text += " \\C[5]\\}[Ready]";
      }
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width, 'left');
  };
  _._getActorName = function(playerData) {
    var actorName;
    actorName = "...";
    if (playerData.actorId > 0) {
      actorName = $dataActors[playerData.actorId].name;
    }
    return "\\C[0] [%1]".format(actorName);
  };
})();

// ■ END Window_NetworkRoomPlayersList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//TODO: Отключить комнаты других игр (параметр или от сервера зависит)
var Window_NetworkRoomsList;

Window_NetworkRoomsList = class Window_NetworkRoomsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this._createNoRoomsMessage();
    this.refreshRooms([]);
    return;
  }

  maxItems() {
    if (this.isHaveAnyRoom()) {
      return this.roomsList.length;
    } else {
      return 0;
    }
  }

  drawItem(index) {
    var rect, roomData;
    roomData = this.roomData(index);
    if (roomData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawRoomInfo(rect, roomData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return NetRoomDataWrapper.isRoomProperToJoin(this.roomData(index));
  }

  isCurrentRoomEnabled() {
    return this.isEnabled(this.index());
  }

  getSelectedRoom() {
    return this.roomData(this.index());
  }

  refreshRooms(roomsList) {
    this.roomsList = roomsList;
    //TODO: @_noRoomsTextSpr мелькает
    this._noRoomsTextSpr.visible = !this.isHaveAnyRoom();
    if (this._noRoomsTextSpr.visible === true) {
      this.select(-1);
    }
    this.refresh();
  }

  isHaveAnyRoom() {
    if (this.roomsList != null) {
      return this.roomsList.length > 0;
    } else {
      return false;
    }
  }

  roomData(index) {
    return this.roomsList[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomsList.prototype;
  _._createNoRoomsMessage = function() {
    var params;
    params = KDCore.UI.Sprite_UIText.prototype.defaultParams();
    params.size.w = this.width;
    params.size.h = this.height;
    params.font.size = 32;
    params.outline.width = 3;
    this._noRoomsTextSpr = new KDCore.UI.Sprite_UIText(params);
    this._noRoomsTextSpr.visible = false;
    this._noRoomsTextSpr.drawText("There are no rooms on server");
    return this.addChild(this._noRoomsTextSpr);
  };
  _._drawRoomInfo = function(rect, roomData) {
    var loadGame, roomText, rpgVersion, state;
    rpgVersion = roomData.rpgVersion === 0 ? 'MZ' : 'MV';
    state = roomData.inGame === true ? 'In Game' : 'In Lobby';
    loadGame = NetRoomDataWrapper.isLoadGameRoom(roomData) ? '[from Savefile]' : '';
    // * [VER](GAME NAME) RoomName 0\X (inGame|inLobby)
    roomText = "\\}\\C[1][%1]\\C[3](%2)\\{\\C[0]   %3   \\C[4]%4/%5 \\}\\C[5](%6) \\C[6]%7".format(rpgVersion, roomData.gameTitle, roomData.name, roomData.playersIds.length, roomData.maxPlayers, state, loadGame);
    this.drawTextEx(roomText, rect.x, rect.y, rect.width, 'left');
  };
})();

// ■ END Window_NetworkRoomsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkRoomTypeMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkRoomTypeMenu;

Window_NetworkRoomTypeMenu = class Window_NetworkRoomTypeMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand("New Game", "newGame");
    this.addCommand("Load Game", "continue", this.isHaveSavedGames());
  }

  isHaveSavedGames() {
    return true; //TODO: првоерка наличия сетевых сохранений
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomTypeMenu.prototype;
})();

// ■ END Window_NetworkRoomTypeMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NPlayerCommandsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NPlayerCommandsList;

Window_NPlayerCommandsList = class Window_NPlayerCommandsList extends Window_Selectable {
  constructor(rect) {
    super(...arguments);
    this.setBackgroundType(this);
  }

  //%[Главный метод по обновлению списка команд]
  setCommandsFor(char) {
    this.char = char;
    return this.refresh();
  }

  maxCols() {
    return 1;
  }

  maxItems() {
    if (this._items != null) {
      return this._items.length;
    } else {
      return 0;
    }
  }

  itemAt(index) {
    return this._items[index];
  }

  isCurrentItemEnabled() {
    return this.isEnabled(this.index());
  }

  selectedItem() {
    return this.itemAt(this.index());
  }

  isEnabled(index) {
    var item;
    item = this.itemAt(index);
    // * Проверка дистанции (общая)
    if (item.minDist > 0) {
      if (this._distance > item.minDist) {
        return false;
      }
    }
    // * Проверка переключателя (общая)
    if (item.switchId > 0) {
      if ($gameSwitches.value(item.switchId) === false) {
        return false;
      }
    }
    switch (item.action) {
      case "trade":
        if (this.char != null) {
          return ANTradeManager.isPlayerAvailableForTrade(this.char.playerData());
        } else {
          return false;
        }
        break;
      case "status":
        return true;
      case "follow":
        return true;
      default:
        return true; // * user - можно, если проверки выше пройдены
    }
  }

  drawItem(index) {
    var e, item, rect;
    item = this.itemAt(index);
    if (item == null) {
      return;
    }
    rect = this.itemLineRect(index);
    try {
      this.changePaintOpacity(this.isEnabled(index));
      this.drawTextExInCenter(item.text, rect.x, rect.y, rect.width, rect.height);
      this.changePaintOpacity(1);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  refresh() {
    this._prepareCommandsForCurrentChar();
    Window_Selectable.prototype.refresh.call(this);
  }

  resetFontSettings() {
    super.resetFontSettings();
    this.contents.fontSize = 16;
  }

  //TODO: Настройки из параметров
  lineHeight() {
    if (KDCore.isMZ()) {
      return 16;
    } else {
      return 22;
    }
  }

  itemPadding() {
    return 6;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NPlayerCommandsList.prototype;
  _._prepareCommandsForCurrentChar = function() {
    var c, defCommands, i, j, len, len1, userCommands;
    this._distance = this._getDistanceFromPlayerToBindedCharacter();
    this._items = [];
    defCommands = ANET.PP.getPlayerMenuDefaultCommands();
    for (i = 0, len = defCommands.length; i < len; i++) {
      c = defCommands[i];
      this._items.push(c);
    }
    userCommands = ANET.PP.getPlayerMenuUserCommands();
    for (j = 0, len1 = userCommands.length; j < len1; j++) {
      c = userCommands[j];
      this._items.push(c);
    }
  };
  _._getDistanceFromPlayerToBindedCharacter = function() {
    var dist, x, y;
    if (this.char == null) {
      return 0;
    }
    ({x, y} = $gamePlayer);
    dist = $gameMap.distance(x, y, this.char.x, this.char.y);
    if (dist <= 0) {
      dist = 1;
    }
    if (dist === 2) { // * Возможно диагональ
      if ($gamePlayer.kdInDiagonalPointRelativeTo(this.char)) {
        return 1;
      }
    } else {
      return dist;
    }
  };
})();

// ■ END Window_NPlayerCommandsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NTradeItemNumberInput;

Window_NTradeItemNumberInput = class Window_NTradeItemNumberInput extends Window_NumberInput {
  constructor() {
    super();
  }

  // * Предмет для которого будет считать количество
  setItem(_item) {
    this._item = _item;
  }

  isGoldItem() {
    return this._item.id === ANTradeManager.TradeGoldItemId;
  }

  // * Внешний метод обработки конечного результата
  setOkHandler(_okHandler) {
    this._okHandler = _okHandler;
  }

  changeDigit(up) {
    var maxNumber;
    super.changeDigit(up);
    maxNumber = this.isGoldItem() ? $gameParty.gold() : $gameParty.numItems(this._item);
    if (this._number > maxNumber) {
      this._number = maxNumber;
      SoundManager.playBuzzer();
    } else {
      if (this._number < 0) {
        this._number = 0;
        SoundManager.playBuzzer();
      }
    }
    this.refresh();
  }

  //$[OVER]
  start() {
    var itemMax;
    itemMax = this.isGoldItem() ? $gameParty.maxGold() : $gameParty.maxItems();
    this._maxDigits = itemMax.toString().length;
    if (this.isGoldItem() && $gameParty.gold() <= 0) {
      this._number = 0; // * Если нет золота, то 0
    } else {
      // * Иначе (предмет) или есть золото, то 1
      this._number = 1;
    }
    this.updatePlacement();
    this.placeButtons();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(this._maxDigits - 1);
  }

  //$[OVER]
  updatePlacement() {
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
  }

  //$[OVER]
  processOk() {
    this.playOkSound();
    this.updateInputData();
    this.deactivate();
    this.close();
    if (this._okHandler != null) {
      this._okHandler();
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NTradeItemsList;

Window_NTradeItemsList = class Window_NTradeItemsList extends Window_Selectable {
  constructor(rect, side) {
    super(...arguments);
    this.side = side;
    this.setBackgroundType(2);
    return;
  }

  //TODO: from parameters
  getSettings() {
    return {
      maxTradeItems: 4,
      selectItemText: "\\I[16]\\FS[20]\\CHEX[#2ab8d1] <Select item>",
      emptyItemText: "\\I[16]\\FS[18]\\CHEX[#646869] -nothing-",
      goldItemText: "\\I[163]\\CHEX[#ffea08] Gold: %0",
      goldEmptyText: "\\I[16]\\FS[20]\\CHEX[#f7ed81] <Add gold>"
    };
  }

  // * Является ли окно окном данного игрока (можно управлять)
  isOwnerWindow() {
    return this.side === 0;
  }

  maxCols() {
    return 1;
  }

  // * +2 - для кнопки Trade и золота
  maxItems() {
    return this.getSettings().maxTradeItems + 2;
  }

  // * Последний индекс
  tradeCommandIndex() {
    return this.maxItems() - 1;
  }

  // * Первый индекс
  goldCommandIndex() {
    return 0;
  }

  tradeItems() {
    return this._items;
  }

  isCurrentIndexTradeCommand() {
    return this.tradeCommandIndex() === this.index();
  }

  isCurrentIndexGoldCommand() {
    return this.goldCommandIndex() === this.index();
  }

  isEnabled(index) {
    if (this.isOwnerWindow()) {
      return true; // * Всегда можно
    } else {
      if (index === this.tradeCommandIndex()) {
        return $gameTemp._netHisTradeReadyStatus === true;
      } else {
        return true; // * Для прозрачности 255
      }
    }
  }

  refresh() {
    this._refreshTradeItems();
    Window_Selectable.prototype.refresh.call(this);
  }

  drawItem(index) {
    var e, item;
    try {
      this.changePaintOpacity(this.isEnabled(index));
      if (index === this.tradeCommandIndex()) {
        return this._drawTradeCommand();
      } else if (index === this.goldCommandIndex()) {
        return this._drawGoldCommand();
      } else {
        item = this.tradeItems()[index];
        if (item == null) {
          return this._drawEmptyItem(index);
        } else {
          return this._drawTradeItem(index);
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  drawItemBackground(index) {} // * NOTHING

  itemRect(index) {
    var rect;
    rect = Window_Selectable.prototype.itemRect.call(this, index);
    if (index === this.tradeCommandIndex()) {
      rect.x += 40;
      rect.y += 8;
      rect.height = 44;
      rect.width = 114;
    }
    return rect;
  }

  refreshCursor() {
    if (this.index() === this.tradeCommandIndex()) {
      this.setCursorRect(0, 0, 0, 0);
      this.redrawItem(this.index());
      return this._shouldRedrawButton = true;
    } else {
      if (this._shouldRedrawButton === true) {
        this.redrawItem(this.tradeCommandIndex());
        this._shouldRedrawButton = false;
      }
      return Window_Selectable.prototype.refreshCursor.call(this);
    }
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NTradeItemsList.prototype;
  _._refreshTradeItems = function() {
    var e;
    try {
      if (this.isOwnerWindow()) {
        this._items = $gameTemp._netMyTradeItems;
      } else {
        this._items = $gameTemp._netHisNetTradeItems;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this._items = [];
    }
  };
  _._drawTradeCommand = function() {
    var b, e, index, rect;
    index = this.tradeCommandIndex();
    rect = this.itemRect(index);
    try {
      if (this.isOwnerWindow()) {
        if (this.index() === index) {
          b = ImageManager.loadAA("nzTradeButton_01");
        } else {
          b = ImageManager.loadAA("nzTradeButton_00");
        }
      } else {
        if (this.isEnabled(index)) { // * Player B is ready
          b = ImageManager.loadAA("nzTradeStatus_Ready");
        } else {
          b = ImageManager.loadAA("nzTradeStatus_NotReady");
        }
      }
      b.addLoadListener(() => {
        return this.contents.drawOnMe(b, rect.x, rect.y, 114, 44);
      });
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCommand = function() {
    var e, index, item;
    index = this.goldCommandIndex();
    try {
      item = this.tradeItems()[index];
      if (item != null) {
        this._drawGoldCount(index, item[1]);
      } else {
        if (this.isOwnerWindow()) {
          this._drawGoldCount(index, 0);
        } else {
          this._drawEmptyItem(index);
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCount = function(index, count) {
    var rect, text;
    rect = this.itemLineRect(index);
    if (count <= 0) {
      text = this.getSettings().goldEmptyText;
    } else {
      text = this.getSettings().goldItemText.replace("%0", count);
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width);
  };
  _._drawEmptyItem = function(index) {
    var e, rect, text;
    rect = this.itemLineRect(index);
    try {
      if (this.isOwnerWindow()) {
        text = this.getSettings().selectItemText;
      } else {
        text = this.getSettings().emptyItemText;
      }
      this.drawTextEx(text, rect.x, rect.y, rect.width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawTradeItem = function(index) {
    var count, item, itemObj, numberWidth, rect;
    item = this.tradeItems()[index];
    if (item == null) {
      return;
    }
    itemObj = item[0];
    if (itemObj == null) {
      return;
    }
    count = item[1] || 1;
    numberWidth = Window_ItemList.prototype.numberWidth.call(this);
    rect = this.itemLineRect(index);
    this.drawItemName(itemObj, rect.x, rect.y, rect.width - numberWidth);
    this.drawItemNumber(count, rect.x, rect.y, rect.width);
  };
  _.drawItemNumber = function(count, x, y, width) {
    this.drawText(":", x, y, width - this.textWidth("00"), "right");
    this.drawText(count, x, y, width, "right");
  };
})();

// ■ END Window_NTradeItemsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawTitle, ALIAS__isEnabled, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function(savefileId) {
    // * Нельзя загружать сетевые сохранения из обычного меню загрузки
    if (this._mode === 'load' && DataManager.nIsNetworkSaveFile(savefileId)) {
      return false;
    } else if (this._mode === 'loadNet') {
      return DataManager.nIsNetworkSaveFile(savefileId);
    } else {
      return ALIAS__isEnabled.call(this, savefileId);
    }
  };
  
  //TODO: Добавить кастомизацию или опцию на отключение
  //@[ALIAS]
  ALIAS__drawTitle = _.drawTitle;
  _.drawTitle = function(savefileId, x, y) {
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      return this.drawText(TextManager.file + " " + savefileId + " [Network game]", x, y, 240);
    } else {
      return ALIAS__drawTitle.call(this, savefileId, x, y);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawGameTitle, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__drawGameTitle = _.drawGameTitle;
  _.drawGameTitle = function(info, x, y, width) {
    var text;
    if ((info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      text = "";
      if (info.title != null) {
        text = info.title;
      }
      text += " [Network game]";
      return this.drawText(text, x, y, width + 100);
    } else {
      return ALIAS__drawGameTitle.call(this, info, x, y, width);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeCommandList, _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  //@[ALIAS]
  ALIAS__makeCommandList = _.makeCommandList;
  _.makeCommandList = function() {
    ALIAS__makeCommandList.call(this);
    this.addCommand(ANET.LV("network"), "network");
    this._nRearangeNetworkCommand();
    if (!ANET.PP.isSinglePlayerAllowed()) {
      this._nRemoveNewGameCommand();
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  // * Чтобы не была последнией, меняю местами с командой options
  _._nRearangeNetworkCommand = function() {
    var e, netCmd, netCommandIndex, optionsCmd, optionsCommandIndex;
    try {
      optionsCommandIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "options";
      }));
      if (optionsCommandIndex < 0) {
        return;
      }
      netCommandIndex = this._list.length - 1;
      optionsCmd = this._list[optionsCommandIndex];
      netCmd = this._list[netCommandIndex];
      this._list[optionsCommandIndex] = netCmd;
      return this._list[netCommandIndex] = optionsCmd;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._nRemoveNewGameCommand = function() {
    var e, newGameIndex;
    try {
      newGameIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "newGame";
      }));
      return this._list.splice(newGameIndex, 1);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Parameters Manager Extension.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Реализация загрузки настроек визуальных компонентов из параметров

  //@[DEFINES]
  _ = ANET.ParamsManager.prototype;
})();

// ■ END Parameters Manager Extension.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addActor, ALIAS__initialize, ALIAS__removeActor, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Game_Party.prototype;
  // * В MZ этот метод разделён на setup
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this._data = []; // * Нет follower'ов
    }
  };
  
  //@[ALIAS]
  ALIAS__addActor = _.addActor;
  _.addActor = function(actorId) {
    var actor;
    ALIAS__addActor.call(this, actorId);
    // * Обновить окно статуса битвы
    $gameTemp.requestBattleRefresh();
    // * Код из MZ, инициализация битвы для новенького
    if (this.inBattle()) {
      actor = $gameActors.actor(actorId);
      if (this.battleMembers().includes(actor)) {
        actor.onBattleStart();
      }
    }
  };
  // * Если игрок выйдет, чтобы обновился экран битвы тоже
  //@[ALIAS]
  ALIAS__removeActor = _.removeActor;
  _.removeActor = function() {
    ALIAS__removeActor.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  // * Задать стиль для персонажа
  //?VERSION
  _.nSetNameplateStyleForActor = function(actorId, style) {
    var e;
    this.nInitNameplatesStylesForActors();
    try {
      if ((style != null) && String.any(style)) {
        this.nActorsNameplatesStyles[actorId] = style;
      } else {
        delete this.nActorsNameplatesStyles[actorId];
      }
      // * Синхронизируем сразу данные между всеми игроками
      if (ANNetwork.isConnected()) {
        ANPlayersManager.sendNameplatesStyles();
      }
      // * Обновляем таблички
      KDCore.GEventsManager.call("netzRefreshNameplate");
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Получить текущий стиль данного персонажа
  //?VERSION
  _.nGetNameplateStyleForActor = function(actorId) {
    var e;
    this.nInitNameplatesStylesForActors();
    try {
      if (this.nActorsNameplatesStyles[actorId] != null) {
        return this.nActorsNameplatesStyles[actorId];
      } else {
        return null; // * default
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__updateBattleProcess, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * Чтобы окно открывалось при передаче управления игроку
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp._isBattleSceneShouldBeRefreshed === true) {
        this.changeInputWindow();
        $gameTemp._isBattleSceneShouldBeRefreshed = false;
      }
      if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
        this.changeInputWindow();
      }
    }
    return ALIAS__updateBattleProcess.call(this);
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkRoomsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomsList.prototype;
  _.applyFilterToRooms = function() {
    if (this.roomsList == null) {
      return;
    }
    // * Применяем фильтр по gameId
    this.roomsList = this.roomsList.filter(function(room) {
      return room.gameId === ANET.VD.getGameVersion();
    });
  };
})();

// ■ END Scene_NetworkRoomsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__goto, _;
  //@[DEFINES]
  _ = SceneManager;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__goto = _.goto;
  _.goto = function(sceneClass) {
    if ((typeof $gameTemp !== "undefined" && $gameTemp !== null) && (sceneClass != null)) {
      $gameTemp.__sceneChanging = true;
      setTimeout((function() {
        return typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__sceneChanging = false : void 0;
      }), 100);
    }
    return ALIAS__goto.call(this, sceneClass);
  };
  
  // * В MV плохо работает проверка isSceneChanging, поэтому сделал дополнительную проверку
  _.isSceneReadyForNetwork = function() {
    if (!ANNetwork.isConnected()) {
      return true;
    }
    if ($gameTemp.__sceneChanging == null) {
      return true;
    }
    return !$gameTemp.__sceneChanging;
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemNumberInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Window_NTradeItemNumberInput.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    return setTimeout((() => {
      return this.updateButtonsVisiblity();
    }), 50);
  };
  //$[OVER]
  _.updateButtonsVisiblity = function() {
    this.placeButtons();
    this.showButtons();
  };
  //$[OVER]
  // * Код из MZ для MV
  _.buttonY = function() {
    return this.itemHeight() + 32;
  };
})();

// ■ END Window_NTradeItemNumberInput.coffee
//---------------------------------------------------------------------------

//Plugin Alpha_NETZ builded by PKD PluginBuilder 2.1 - 21.06.2022