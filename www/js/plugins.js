// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{ "name": "Community_Basic", "status": true, "description": "Plugin used to set basic parameters.", "parameters": { "cacheLimit": "20", "screenWidth": "816", "screenHeight": "624", "changeWindowWidthTo": "", "changeWindowHeightTo": "", "renderingMode": "auto", "alwaysDash": "on" } },
{ "name": "RS_MessageAlign", "status": true, "description": "(v1.0.12) This plugin allows you to align the text in the message system.", "parameters": {} },
{ "name": "YEP_CoreEngine", "status": true, "description": "v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.", "parameters": { "---Screen---": "", "Screen Width": "1296", "Screen Height": "768", "Scale Battlebacks": "true", "Scale Title": "true", "Scale Game Over": "true", "Open Console": "false", "Reposition Battlers": "true", "GameFont Load Timer": "0", "Update Real Scale": "false", "Collection Clear": "true", "---Gold---": "", "Gold Max": "99999999", "Gold Font Size": "20", "Gold Icon": "313", "Gold Overlap": "A lotta", "---Items---": "", "Default Max": "99", "Quantity Text Size": "20", "---Parameters---": "", "Max Level": "99", "Actor MaxHP": "9999", "Actor MaxMP": "9999", "Actor Parameter": "999", "Enemy MaxHP": "999999", "Enemy MaxMP": "9999", "Enemy Parameter": "999", "---Battle---": "", "Animation Rate": "1", "Flash Target": "false", "Show Events Transition": "true", "Show Events Snapshot": "true", "---Map Optimization---": "", "Refresh Update HP": "true", "Refresh Update MP": "true", "Refresh Update TP": "false", "---Font---": "", "Chinese Font": "SimHei, Heiti TC, sans-serif", "Korean Font": "Dotum, AppleGothic, sans-serif", "Default Font": "GameFont, Verdana, Arial, Courier New", "Font Size": "23", "Text Align": "left", "---Windows---": "", "Digit Grouping": "true", "Line Height": "36", "Icon Width": "32", "Icon Height": "32", "Face Width": "144", "Face Height": "144", "Window Padding": "18", "Text Padding": "6", "Window Opacity": "192", "Gauge Outline": "true", "Gauge Height": "18", "Menu TP Bar": "true", "---Window Colors---": "", "Color: Normal": "0", "Color: System": "16", "Color: Crisis": "17", "Color: Death": "18", "Color: Gauge Back": "19", "Color: HP Gauge 1": "20", "Color: HP Gauge 2": "21", "Color: MP Gauge 1": "22", "Color: MP Gauge 2": "23", "Color: MP Cost": "23", "Color: Power Up": "24", "Color: Power Down": "25", "Color: TP Gauge 1": "28", "Color: TP Gauge 2": "29", "Color: TP Cost Color": "29" } },
{ "name": "YEP_MessageCore", "status": true, "description": "v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.", "parameters": { "---General---": "", "Default Rows": "4", "Default Width": "810", "Face Indent": "Window_Base._faceWidth + 24", "Fast Forward Key": "pagedown", "Enable Fast Forward": "true", "Word Wrapping": "true", "Description Wrap": "false", "Word Wrap Space": "false", "Tight Wrap": "false", "---Font---": "", "Font Name": "GameFont", "Font Name CH": "SimHei, Heiti TC, sans-serif", "Font Name KR": "Dotum, AppleGothic, sans-serif", "Font Size": "26", "Font Size Change": "12", "Font Changed Max": "96", "Font Changed Min": "12", "Font Outline": "4", "Maintain Font": "false", "---Name Box---": "", "Name Box Buffer X": "-28", "Name Box Buffer Y": "0", "Name Box Padding": "this.standardPadding() * 4", "Name Box Color": "0", "Name Box Clear": "false", "Name Box Added Text": "\\c[6]", "Name Box Auto Close": "false" } },
{ "name": "YEP_LoadCustomFonts", "status": true, "description": "v1.01 Load custom fonts from the /fonts/ folder. This will\nallow you to use custom fonts without installing them.", "parameters": { "Font Filenames": "MaterhornNF.ttf,BLKCHCRY.TTF,ArgosGeorge.ttf,Allura-Regular.ttf,AnnieUseYourTelescope-Regular.ttf", "Font Families": "Materhorn NF,BlackChancery,Argos George,Allura,Annie Use Your Telescope" } },
{ "name": "TitleCommandPosition", "status": true, "description": "Changes the position of the title command window.", "parameters": { "Offset X": "0", "Offset Y": "70", "Width": "300", "Background": "2" } },
{ "name": "YEP_ExternalLinks", "status": false, "description": "v1.01 Link back to your home page through the title screen\nand also be able to link your players from within the game.", "parameters": { "Home Page URL": "https://www.nlt-media.com/", "Home Page Text": "    Be a Supporter", "Popup Blocker Notice": "The link was blocked by a pop-up blocker." } },
{ "name": "YEP_X_MessageSpeedOpt", "status": true, "description": "v1.00 (Requires YEP_MessageCore.js) Let your places adjust the\nspeed the message window displays text.", "parameters": { "OptionsCommand": "消息速度", "DefaultSpeed": "11", "InstantText": "瞬间" } },
{ "name": "GALV_RollCredits", "status": true, "description": "(v.1.5) A plugin that calls a new scene to display scrolling information located in an external text file.", "parameters": { "Folder": "data", "Skippable": "true", "Block Skipping": "true", "Title Menu": "        赞助者答谢", "Title Credits Music": "Scary" } },
{ "name": "SavesInLocalData", "status": true, "description": "Causes desktop save files to be saved in/loaded from local application directories rather than alongside game data.", "parameters": {} },
{ "name": "SRD_FullscreenToggleOption", "status": true, "description": "Adds a Fullscreen Toggle to the Options Window", "parameters": { "Option Name": "全屏显示", "Position": "Middle", "Default Value": "false", "Persist Default?": "false" } },
{ "name": "ALOE_ItemSkillSortPriority", "status": true, "description": "Allows items, weapons, armors, and skills to appear in an\norder defined by the developer through notetags.", "parameters": {} },
{"name":"ALOE_MobileUI","status":false,"description":"v1.4.0 Creates buttons on the screen for touch input","parameters":{"dPadSettings":"","keyButtonSettings":"","controlButtonSettings":"","fadeDuration":"20","disableTouchWindows":"[\"Scene_Menu\"]","disableTouchMovement":"false","enableDiagonalInput":"false"}},
{"name":"DestinationSprite","status":true,"description":"v1.2.3 - With this plugin you can change the destination place sprite of the mouse\\touch input.\r\n<DestinationSprite>","parameters":{"Sprite Figure":"Custom","Custom Image":"destination","Animation mode":"blink","Fade speed":"12","Sprite Size":"48","Sprite Color":"#ffffff","Sprite Opacity":"120","Sprite Blend":"1"}},
{"name":"Galv_ImageCache","status":true,"description":"(v.1.1) Pre-cache images that cause issues when loading during gameplay","parameters":{"Folder 1":"pictures|white,Sun1,Sun2,MSG-DarkFarBG,GUI-Alia,GUI-Clare,GUI-Diana,GUI-Emily,GUI-Kaley,GUI-Madalyn,GUI-Naomi,GUI-Pricia,GUI-Sofia,GUI-Tasha,MSG-Window,MSG-LightBack,black,Phone,HINT-Top,HINT-Evie,HINT-Bottom,Phone-Menu,BG-Sky,KSPAGE-Middle,PopUp-Arrow,StatusWindow","Folder 2":"characters|$EmilyKneel,$JoeyThrow,$BrokenGlass,$SilverCoin,$Scanner,$ScannerGlitch","Folder 3":"","Folder 4":"","Folder 5":"","Folder 6":"","Folder 7":"","Folder 8":"","Folder 9":"","Folder 10":"","Folder 11":"","Folder 12":"","Folder 13":"","Folder 14":"","Folder 15":"","Folder 16":"","Folder 17":"","Folder 18":"","Folder 19":"","Folder 20":"","Folder 21":"","Folder 22":"","Folder 23":"","Folder 24":"","Folder 25":""}},
{"name":"Aetherflow_PreloadEverything","status":true,"description":"v1.0.2 Preload All The Things. (IF YOU HAVE v1.6.1)","parameters":{"ReleaseMapChange":"true","PreloadSystem":"true","ImageCacheSize":"10 * 1000 * 1000","AudioCacheSize":"20 * 1000 * 1000","PreloadGlobal":"","PreloadMaps":""}},
{"name":"TDDP_AnimationCurves","status":true,"description":"1.0.3b Apply animation curves (easing functions) to Move Picture commands using simple Plugin Commands","parameters":{"Demo hotkey":"122","Plugin Command key":"AnimationCurve"}},
{"name":"GALV_CharacterFrames","status":true,"description":"Enables map character sheets to have more frames per character.","parameters":{"Frame Speed Modifier":"f * 0.8"}},
{"name":"TitleVideo","status":true,"description":"Adds a video above the static image for the main title screen.","parameters":{"Video Name":"Title","Muted":"no","Volume":"0","Width":"auto","Height":"auto","X":"0","Y":"0","Loop":"yes","Playback Rate":"1.0","Blend Mode":"NORMAL","Opacity":"1.0","Tint":"0xffffff","Loop Start":"0","Loop End":"end","Debug":"no"}},
{"name":"YSP_VideoPlayer","status":true,"description":"v1.0.0 Plugin used for playing video.","parameters":{}},
{"name":"$MUSH_LaunchSceneOpening_P1","status":false,"description":"[v.1.02] Adds 2 scenes on launch and a opening.","parameters":{"---------------------":"","Scene 1":"true","Scene 1 Top Type":"none","Scene 1 Top Info":"none","Scene 1 Top Position":"","Scene 1 Mid Type":"none","Scene 1 Mid Info":"MushroomCake28 presents","Scene 1 Mid Position":"","Scene 1 Low Type":"none","Scene 1 Low Info":"none","Scene 1 Low Position":"","Scene 1 Background":"Splash","Scene 1 Back Stretch":"false","Scene 1 Fade Time":"60","Scene 1 Text Fade":"90","Scene 1 Wait Message":"5","Scene 1 Wait":"90","Scene 1 Input Skip":"true","Scene 2":"false","Scene 2 Top Type":"none","Scene 2 Top Info":"none","Scene 2 Top Position":"","Scene 2 Mid Type":"text","Scene 2 Mid Info":"The Launch Scene Opening Plugin","Scene 2 Mid Position":"","Scene 2 Low Type":"text","Scene 2 Low Info":"(version 1.02)","Scene 2 Low Position":"","Scene 2 Background":"none","Scene 2 Back Stretch":"false","Scene 2 Fade Time":"60","Scene 2 Text Fade":"60","Scene 2 Wait Message":"60","Scene 2 Wait":"300","Scene 2 Input Skip":"true","Scene Op":"true","Scene Op Movie":"NLTLogo","Scene Op Input Skip":"false"}},
{"name":"OrangeHud","status":true,"description":"<OrangeHud> 2.1 - Creates a custom HUD based on the params","parameters":{"DefaultFontFace":"Verdana","DefaultFontSize":"30","DefaultFontColor":"#ffcc00","DefaultFontItalic":"false","HudWidth":"0","HudHeight":"0","HudX":"0","HudY":"0","HudOpacity":"0","SwitchId":"0","WindowMargin":"4","WindowPadding":"18","ShowOnMap":"true","ShowOnBattle":"false","ShowOnMenu":"false","ShowOnTitle":"false","ShowUnderTintLayer":"false","AutoRefresh":"true"}},
{"name":"OrangeHudLine","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"51","SwitchId":"184","X":"310","Y":"170","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineShrine1","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"230","SwitchId":"46","X":"315","Y":"560","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudVariableIcon","status":true,"description":"Adds a new Variable Icon to Orange Hud","parameters":{"GroupName":"main","VariableId":"229","SwitchId":"46","X":"280","Y":"560","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineShrine2","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"232","SwitchId":"46","X":"677","Y":"560","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"","VariableY":""}},
{"name":"OrangeHudVariableIcon2","status":true,"description":"Adds a new Variable Icon to Orange Hud","parameters":{"GroupName":"main","VariableId":"231","SwitchId":"46","X":"643","Y":"560","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineShrine3","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"234","SwitchId":"46","X":"315","Y":"610","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudVariableIcon3","status":true,"description":"Adds a new Variable Icon to Orange Hud","parameters":{"GroupName":"main","VariableId":"233","SwitchId":"46","X":"280","Y":"610","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineShrine4","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"236","SwitchId":"46","X":"677","Y":"610","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudVariableIcon4","status":true,"description":"Adds a new Variable Icon to Orange Hud","parameters":{"GroupName":"main","VariableId":"235","SwitchId":"46","X":"643","Y":"610","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus1","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"261","SwitchId":"304","X":"10","Y":"712","FontFace":"","FontSize":"17","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus2","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"262","SwitchId":"304","X":"203","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus3","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"263","SwitchId":"304","X":"342","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus4","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"264","SwitchId":"304","X":"540","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus5","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"265","SwitchId":"304","X":"692","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus6","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"266","SwitchId":"304","X":"837","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineStatus7","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"267","SwitchId":"304","X":"1029","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"Galv_ScreenButtons","status":true,"description":"(v.1.3) Show buttons on screen that can be touched or clicked.","parameters":{"Precache Buttons":"Skip,Hide","Disable Mouse Move":"false","Button Fade":"30"}},
{"name":"OrangeHudLine2","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"51","SwitchId":"186","X":"10","Y":"690","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"YEP_PictureCommonEvents","status":false,"description":"v1.06 Causes common events to run when certain pictures\nare clicked while on the map.","parameters":{"---General---":"","Enable Touch Move":"true","Hide Message":"false","---Picture 1---":"","Picture 1 Click":"0","Picture 1 Repeat":"0","Picture 1 Hold":"0","Picture 1 Release":"0","---Picture 2---":"","Picture 2 Click":"0","Picture 2 Repeat":"0","Picture 2 Hold":"0","Picture 2 Release":"0","---Picture 3---":"","Picture 3 Click":"0","Picture 3 Repeat":"0","Picture 3 Hold":"0","Picture 3 Release":"0","---Picture 4---":"","Picture 4 Click":"0","Picture 4 Repeat":"0","Picture 4 Hold":"0","Picture 4 Release":"0","---Picture 5---":"","Picture 5 Click":"0","Picture 5 Repeat":"0","Picture 5 Hold":"0","Picture 5 Release":"0","---Picture 6---":"","Picture 6 Click":"0","Picture 6 Repeat":"0","Picture 6 Hold":"0","Picture 6 Release":"0","---Picture 7---":"","Picture 7 Click":"0","Picture 7 Repeat":"0","Picture 7 Hold":"0","Picture 7 Release":"0","---Picture 8---":"","Picture 8 Click":"0","Picture 8 Repeat":"0","Picture 8 Hold":"0","Picture 8 Release":"0","---Picture 9---":"","Picture 9 Click":"0","Picture 9 Repeat":"0","Picture 9 Hold":"0","Picture 9 Release":"0","---Picture 10---":"","Picture 10 Click":"0","Picture 10 Repeat":"0","Picture 10 Hold":"0","Picture 10 Release":"0","---Picture 11---":"","Picture 11 Click":"0","Picture 11 Repeat":"0","Picture 11 Hold":"0","Picture 11 Release":"0","---Picture 12---":"","Picture 12 Click":"0","Picture 12 Repeat":"0","Picture 12 Hold":"0","Picture 12 Release":"0","---Picture 13---":"","Picture 13 Click":"0","Picture 13 Repeat":"0","Picture 13 Hold":"0","Picture 13 Release":"0","---Picture 14---":"","Picture 14 Click":"0","Picture 14 Repeat":"0","Picture 14 Hold":"0","Picture 14 Release":"0","---Picture 15---":"","Picture 15 Click":"0","Picture 15 Repeat":"0","Picture 15 Hold":"0","Picture 15 Release":"0","---Picture 16---":"","Picture 16 Click":"0","Picture 16 Repeat":"0","Picture 16 Hold":"0","Picture 16 Release":"0","---Picture 17---":"","Picture 17 Click":"0","Picture 17 Repeat":"0","Picture 17 Hold":"0","Picture 17 Release":"0","---Picture 18---":"","Picture 18 Click":"0","Picture 18 Repeat":"0","Picture 18 Hold":"0","Picture 18 Release":"0","---Picture 19---":"","Picture 19 Click":"0","Picture 19 Repeat":"0","Picture 19 Hold":"0","Picture 19 Release":"0","---Picture 20---":"","Picture 20 Click":"0","Picture 20 Repeat":"0","Picture 20 Hold":"0","Picture 20 Release":"0","---Picture 21---":"","Picture 21 Click":"0","Picture 21 Repeat":"0","Picture 21 Hold":"0","Picture 21 Release":"0","---Picture 22---":"","Picture 22 Click":"0","Picture 22 Repeat":"0","Picture 22 Hold":"0","Picture 22 Release":"0","---Picture 23---":"","Picture 23 Click":"0","Picture 23 Repeat":"0","Picture 23 Hold":"0","Picture 23 Release":"0","---Picture 24---":"","Picture 24 Click":"0","Picture 24 Repeat":"0","Picture 24 Hold":"0","Picture 24 Release":"0","---Picture 25---":"","Picture 25 Click":"0","Picture 25 Repeat":"0","Picture 25 Hold":"0","Picture 25 Release":"0","---Picture 26---":"","Picture 26 Click":"0","Picture 26 Repeat":"0","Picture 26 Hold":"0","Picture 26 Release":"0","---Picture 27---":"","Picture 27 Click":"0","Picture 27 Repeat":"0","Picture 27 Hold":"0","Picture 27 Release":"0","---Picture 28---":"","Picture 28 Click":"0","Picture 28 Repeat":"0","Picture 28 Hold":"0","Picture 28 Release":"0","---Picture 29---":"","Picture 29 Click":"0","Picture 29 Repeat":"0","Picture 29 Hold":"0","Picture 29 Release":"0","---Picture 30---":"","Picture 30 Click":"0","Picture 30 Repeat":"0","Picture 30 Hold":"0","Picture 30 Release":"0","---Picture 31---":"","Picture 31 Click":"0","Picture 31 Repeat":"0","Picture 31 Hold":"0","Picture 31 Release":"0","---Picture 32---":"","Picture 32 Click":"0","Picture 32 Repeat":"0","Picture 32 Hold":"0","Picture 32 Release":"0","---Picture 33---":"","Picture 33 Click":"0","Picture 33 Repeat":"0","Picture 33 Hold":"0","Picture 33 Release":"0","---Picture 34---":"","Picture 34 Click":"0","Picture 34 Repeat":"0","Picture 34 Hold":"0","Picture 34 Release":"0","---Picture 35---":"","Picture 35 Click":"0","Picture 35 Repeat":"0","Picture 35 Hold":"0","Picture 35 Release":"0","---Picture 36---":"","Picture 36 Click":"0","Picture 36 Repeat":"0","Picture 36 Hold":"0","Picture 36 Release":"0","---Picture 37---":"","Picture 37 Click":"0","Picture 37 Repeat":"0","Picture 37 Hold":"0","Picture 37 Release":"0","---Picture 38---":"","Picture 38 Click":"0","Picture 38 Repeat":"0","Picture 38 Hold":"0","Picture 38 Release":"0","---Picture 39---":"","Picture 39 Click":"0","Picture 39 Repeat":"0","Picture 39 Hold":"0","Picture 39 Release":"0","---Picture 40---":"","Picture 40 Click":"0","Picture 40 Repeat":"0","Picture 40 Hold":"0","Picture 40 Release":"0","---Picture 41---":"","Picture 41 Click":"0","Picture 41 Repeat":"0","Picture 41 Hold":"0","Picture 41 Release":"0","---Picture 42---":"","Picture 42 Click":"0","Picture 42 Repeat":"0","Picture 42 Hold":"0","Picture 42 Release":"0","---Picture 43---":"","Picture 43 Click":"0","Picture 43 Repeat":"0","Picture 43 Hold":"0","Picture 43 Release":"0","---Picture 44---":"","Picture 44 Click":"0","Picture 44 Repeat":"0","Picture 44 Hold":"0","Picture 44 Release":"0","---Picture 45---":"","Picture 45 Click":"0","Picture 45 Repeat":"0","Picture 45 Hold":"0","Picture 45 Release":"0","---Picture 46---":"","Picture 46 Click":"0","Picture 46 Repeat":"0","Picture 46 Hold":"0","Picture 46 Release":"0","---Picture 47---":"","Picture 47 Click":"0","Picture 47 Repeat":"0","Picture 47 Hold":"0","Picture 47 Release":"0","---Picture 48---":"","Picture 48 Click":"0","Picture 48 Repeat":"0","Picture 48 Hold":"0","Picture 48 Release":"0","---Picture 49---":"","Picture 49 Click":"0","Picture 49 Repeat":"0","Picture 49 Hold":"0","Picture 49 Release":"0","---Picture 50---":"","Picture 50 Click":"0","Picture 50 Repeat":"0","Picture 50 Hold":"0","Picture 50 Release":"0","---Picture 51---":"","Picture 51 Click":"0","Picture 51 Repeat":"0","Picture 51 Hold":"0","Picture 51 Release":"0","---Picture 52---":"","Picture 52 Click":"0","Picture 52 Repeat":"0","Picture 52 Hold":"0","Picture 52 Release":"0","---Picture 53---":"","Picture 53 Click":"0","Picture 53 Repeat":"0","Picture 53 Hold":"0","Picture 53 Release":"0","---Picture 54---":"","Picture 54 Click":"0","Picture 54 Repeat":"0","Picture 54 Hold":"0","Picture 54 Release":"0","---Picture 55---":"","Picture 55 Click":"0","Picture 55 Repeat":"0","Picture 55 Hold":"0","Picture 55 Release":"0","---Picture 56---":"","Picture 56 Click":"0","Picture 56 Repeat":"0","Picture 56 Hold":"0","Picture 56 Release":"0","---Picture 57---":"","Picture 57 Click":"0","Picture 57 Repeat":"0","Picture 57 Hold":"0","Picture 57 Release":"0","---Picture 58---":"","Picture 58 Click":"0","Picture 58 Repeat":"0","Picture 58 Hold":"0","Picture 58 Release":"0","---Picture 59---":"","Picture 59 Click":"0","Picture 59 Repeat":"0","Picture 59 Hold":"0","Picture 59 Release":"0","---Picture 60---":"","Picture 60 Click":"0","Picture 60 Repeat":"0","Picture 60 Hold":"0","Picture 60 Release":"0","---Picture 61---":"","Picture 61 Click":"0","Picture 61 Repeat":"0","Picture 61 Hold":"0","Picture 61 Release":"0","---Picture 62---":"","Picture 62 Click":"0","Picture 62 Repeat":"0","Picture 62 Hold":"0","Picture 62 Release":"0","---Picture 63---":"","Picture 63 Click":"0","Picture 63 Repeat":"0","Picture 63 Hold":"0","Picture 63 Release":"0","---Picture 64---":"","Picture 64 Click":"0","Picture 64 Repeat":"0","Picture 64 Hold":"0","Picture 64 Release":"0","---Picture 65---":"","Picture 65 Click":"0","Picture 65 Repeat":"0","Picture 65 Hold":"0","Picture 65 Release":"0","---Picture 66---":"","Picture 66 Click":"0","Picture 66 Repeat":"0","Picture 66 Hold":"0","Picture 66 Release":"0","---Picture 67---":"","Picture 67 Click":"0","Picture 67 Repeat":"0","Picture 67 Hold":"0","Picture 67 Release":"0","---Picture 68---":"","Picture 68 Click":"0","Picture 68 Repeat":"0","Picture 68 Hold":"0","Picture 68 Release":"0","---Picture 69---":"","Picture 69 Click":"0","Picture 69 Repeat":"0","Picture 69 Hold":"0","Picture 69 Release":"0","---Picture 70---":"","Picture 70 Click":"0","Picture 70 Repeat":"0","Picture 70 Hold":"0","Picture 70 Release":"0","---Picture 71---":"","Picture 71 Click":"0","Picture 71 Repeat":"0","Picture 71 Hold":"0","Picture 71 Release":"0","---Picture 72---":"","Picture 72 Click":"0","Picture 72 Repeat":"0","Picture 72 Hold":"0","Picture 72 Release":"0","---Picture 73---":"","Picture 73 Click":"0","Picture 73 Repeat":"0","Picture 73 Hold":"0","Picture 73 Release":"0","---Picture 74---":"","Picture 74 Click":"0","Picture 74 Repeat":"0","Picture 74 Hold":"0","Picture 74 Release":"0","---Picture 75---":"","Picture 75 Click":"0","Picture 75 Repeat":"0","Picture 75 Hold":"0","Picture 75 Release":"0","---Picture 76---":"","Picture 76 Click":"0","Picture 76 Repeat":"0","Picture 76 Hold":"0","Picture 76 Release":"0","---Picture 77---":"","Picture 77 Click":"0","Picture 77 Repeat":"0","Picture 77 Hold":"0","Picture 77 Release":"0","---Picture 78---":"","Picture 78 Click":"0","Picture 78 Repeat":"0","Picture 78 Hold":"0","Picture 78 Release":"0","---Picture 79---":"","Picture 79 Click":"0","Picture 79 Repeat":"0","Picture 79 Hold":"0","Picture 79 Release":"0","---Picture 80---":"","Picture 80 Click":"0","Picture 80 Repeat":"0","Picture 80 Hold":"0","Picture 80 Release":"0","---Picture 81---":"","Picture 81 Click":"0","Picture 81 Repeat":"0","Picture 81 Hold":"0","Picture 81 Release":"0","---Picture 82---":"","Picture 82 Click":"0","Picture 82 Repeat":"0","Picture 82 Hold":"0","Picture 82 Release":"0","---Picture 83---":"","Picture 83 Click":"0","Picture 83 Repeat":"0","Picture 83 Hold":"0","Picture 83 Release":"0","---Picture 84---":"","Picture 84 Click":"0","Picture 84 Repeat":"0","Picture 84 Hold":"0","Picture 84 Release":"0","---Picture 85---":"","Picture 85 Click":"185","Picture 85 Repeat":"0","Picture 85 Hold":"0","Picture 85 Release":"0","---Picture 86---":"","Picture 86 Click":"186","Picture 86 Repeat":"0","Picture 86 Hold":"0","Picture 86 Release":"0","---Picture 87---":"","Picture 87 Click":"187","Picture 87 Repeat":"0","Picture 87 Hold":"0","Picture 87 Release":"0","---Picture 88---":"","Picture 88 Click":"188","Picture 88 Repeat":"0","Picture 88 Hold":"0","Picture 88 Release":"0","---Picture 89---":"","Picture 89 Click":"189","Picture 89 Repeat":"0","Picture 89 Hold":"0","Picture 89 Release":"0","---Picture 90---":"","Picture 90 Click":"190","Picture 90 Repeat":"0","Picture 90 Hold":"0","Picture 90 Release":"0","---Picture 91---":"","Picture 91 Click":"191","Picture 91 Repeat":"0","Picture 91 Hold":"0","Picture 91 Release":"0","---Picture 92---":"","Picture 92 Click":"192","Picture 92 Repeat":"0","Picture 92 Hold":"0","Picture 92 Release":"0","---Picture 93---":"","Picture 93 Click":"193","Picture 93 Repeat":"0","Picture 93 Hold":"0","Picture 93 Release":"0","---Picture 94---":"","Picture 94 Click":"194","Picture 94 Repeat":"194","Picture 94 Hold":"194","Picture 94 Release":"194","---Picture 95---":"","Picture 95 Click":"195","Picture 95 Repeat":"0","Picture 95 Hold":"0","Picture 95 Release":"0","---Picture 96---":"","Picture 96 Click":"0","Picture 96 Repeat":"0","Picture 96 Hold":"0","Picture 96 Release":"0","---Picture 97---":"","Picture 97 Click":"0","Picture 97 Repeat":"0","Picture 97 Hold":"0","Picture 97 Release":"0","---Picture 98---":"","Picture 98 Click":"0","Picture 98 Repeat":"0","Picture 98 Hold":"0","Picture 98 Release":"0","---Picture 99---":"","Picture 99 Click":"0","Picture 99 Repeat":"0","Picture 99 Hold":"0","Picture 99 Release":"0","---Picture 100---":"","Picture 100 Click":"0","Picture 100 Repeat":"0","Picture 100 Hold":"0","Picture 100 Release":"0"}},
{"name":"Choices","status":true,"description":"","parameters":{}},
{"name":"DreamX_Options","status":false,"description":"v1.9 Options for the option menu","parameters":{"--General Options--":"","Switches":"","Persistent Switches":"","Persistent Variables":"","Common Event":"0","ON Text":"ON","OFF Text":"OFF","--Window Options--":"","Recommended Window Settings":"false","Window X":"(Graphics.boxWidth - this.width) / 2","Window Y":"(Graphics.boxHeight - this.height) / 2","Window Width":"400","Window Height":"this.fittingHeight(Math.min(this.numVisibleRows(), 12));","Status Width":"120","Show Help Text":"false","Help X":"0","Help Y":"0","Help Width":"200","Help Height":"","Help Lines":"2","--Json Options--":"","Json Filename":"DreamX_Options","Json Folder":"data/","--Video Options--":"","Resolution Option":"false","Resolution Option Text":"Resolution","Fullscreen Option":"false","Fullscreen Option Text":"Fullscreen","Resize Everything":"false","--Default Options--":"","Default Options First":"true","Show Always Dash":"true","Show Command Remember":"true","Show BGM Volume":"true","Show BGS Volume":"true","Show ME Volume":"true","Show SE Volume":"true"}},
{"name":"OrangeHudLineStatus8","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"268","SwitchId":"304","X":"1201","Y":"712","FontFace":"","FontSize":"15","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"HIME_PreTitleEvents","status":true,"description":"Build your own sequence of events that should occur before\r\nthe title screen begins","parameters":{"Pre-Title Map ID":"47","Use As Title":"false\r"}},
{"name":"MOG_TitleSplashScreen","status":true,"description":"(v1.0) Adiciona logos antes da tela de título.","parameters":{"Splash Frames":"1","Slash Duration":"60","Splash Fade Duration":"10","Full Screen Mode":"false"}},
{"name":"ChapterWarp","status":false,"description":"Additional Load Screen for Save Games","parameters":{"Title Menu Text":"    Chapter Select","Number of Chapters":"51","Chapters Per Page":"6"}},
{"name":"OrangeHudLineFish1","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"275","SwitchId":"333","X":"964","Y":"149","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineFish2","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"276","SwitchId":"333","X":"964","Y":"234","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineFish3","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"277","SwitchId":"333","X":"964","Y":"321","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineFish4 ","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"278","SwitchId":"333","X":"964","Y":"406","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineFish5","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"279","SwitchId":"333","X":"964","Y":"491","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLineFish6","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"%1","VariableId":"280","SwitchId":"333","X":"964","Y":"577","FontFace":"","FontSize":"37","FontColor":"#FFFFFF","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"CloudSave","status":false,"description":"Additional Load Screen for Cloud Save Games","parameters":{"Title Menu Text":"Resume from Cloud","Number of Saves":"20","Display per page":"4"}},
{"name":"FollowersThrough","status":true,"description":"Party followers will never block events. Party _LEADER_ will still block events.","parameters":{}},
{"name":"GraphicsRenderFix","status":true,"description":"","parameters":{}},
{"name":"Archeia_Steamworks","status":true,"description":"Plugin Description <Archeia_Steamworks>","parameters":{"Steamworks Debug":"false"}},
{"name": "RS_Window_KorNameEdit", "status": true, "description": "This plugin provides a keyboard that allows\nyou to type in korean or other native language in the Name Input Proccessing", "parameters": { "windowWidth": "600", "windowCenter": "ture", "editWindow_Opacity": "225", "askingText": "请输入你的角色名字", "outlineWidth": "1", "outlineColor": "black", "fontColor": "white", "standardFontSize": "24" } },
{"name":"LovenseIntegration","status":true,"description":"Enables interaction with Lovense devices","parameters":{"Option Menu Text":"爱感连接"}}
];