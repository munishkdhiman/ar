(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RSTest_atlas_", frames: [[1082,779,250,634],[1082,0,263,777],[0,0,1080,1920]]}
];


// symbols:



(lib.bottle = function() {
	this.initialize(ss["RSTest_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rsBox = function() {
	this.initialize(ss["RSTest_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SingaporeBG = function() {
	this.initialize(ss["RSTest_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-219,-555.4,1.752,1.752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-555.4,438,1110.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SingaporeBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1080,1920), null);


(lib.boxBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rsBox();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.4686,1.4686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386.3,1141.1);


(lib.BottleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(219,555.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438,1110.8);


(lib.bottleButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BottleBtn();
	this.instance.parent = this;
	this.instance.setTransform(219,555.4,1,1,0,0,0,219,555.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438,1110.8);


// stage content:
(lib.RSTest = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		this.stop();
		
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.play();
		}
		
		this.bottleBtn.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			this.play();
		}
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(16).call(this.frame_55).wait(1));

	// Layer_1
	this.button_1 = new lib.boxBtn();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(539.95,1027.25,1,1,0,0,0,193.1,570.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({y:1103.55},0).wait(1).to({y:1179.85},0).wait(1).to({y:1256.2},0).wait(1).to({y:1332.5},0).wait(1).to({y:1408.85},0).wait(1).to({y:1485.15},0).wait(1).to({y:1561.5},0).wait(1).to({y:1637.8},0).wait(1).to({y:1714.1},0).wait(1).to({y:1790.45},0).wait(1).to({y:1866.75},0).wait(1).to({y:1943.1},0).wait(1).to({y:2019.4},0).wait(1).to({y:2095.75},0).wait(1).to({y:2172.05},0).wait(1).to({y:2248.35},0).wait(1).to({y:2324.7},0).wait(1).to({y:2401},0).wait(1).to({y:2477.35},0).wait(1).to({y:2553.65},0).wait(1).to({y:2630},0).wait(1).to({y:2706.3},0).wait(1).to({y:2782.65},0).to({_off:true},1).wait(32));

	// Layer_2
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(312,474,1.752,1.752);

	this.bottleBtn = new lib.bottleButton();
	this.bottleBtn.name = "bottleBtn";
	this.bottleBtn.parent = this;
	this.bottleBtn.setTransform(531.1,1029.5,1,1,0,0,0,219.1,555.5);
	this.bottleBtn._off = true;
	new cjs.ButtonHelper(this.bottleBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.bottleBtn}]},23).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[{t:this.bottleBtn}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.bottleBtn).wait(23).to({_off:false},0).wait(1).to({regX:219,regY:555.4,scaleX:1.0215,scaleY:1.0215,x:531.05},0).wait(1).to({scaleX:1.0429,scaleY:1.0429,x:531.15,y:1029.7},0).wait(1).to({scaleX:1.0644,scaleY:1.0644,x:531.25,y:1029.85},0).wait(1).to({scaleX:1.0858,scaleY:1.0858,x:531.3,y:1030},0).wait(1).to({scaleX:1.1073,scaleY:1.1073,x:531.4,y:1030.2},0).wait(1).to({scaleX:1.1288,scaleY:1.1288,x:531.5,y:1030.35},0).wait(1).to({scaleX:1.1502,scaleY:1.1502,x:531.6,y:1030.5},0).wait(1).to({scaleX:1.1717,scaleY:1.1717,x:531.65,y:1030.65},0).wait(1).to({scaleX:1.1931,scaleY:1.1931,x:531.75,y:1030.8},0).wait(1).to({scaleX:1.2146,scaleY:1.2146,x:531.85,y:1031},0).wait(1).to({scaleX:1.2361,scaleY:1.2361,x:531.95,y:1031.15},0).wait(1).to({scaleX:1.2575,scaleY:1.2575,x:532,y:1031.3},0).wait(1).to({scaleX:1.279,scaleY:1.279,x:532.1,y:1031.45},0).wait(1).to({scaleX:1.3004,scaleY:1.3004,x:532.2,y:1031.6},0).wait(1).to({scaleX:1.3219,scaleY:1.3219,x:532.25,y:1031.75},0).wait(1).to({scaleX:1.3434,scaleY:1.3434,x:532.35,y:1031.95},0).wait(1).to({scaleX:1.4885,scaleY:1.4885,x:532.45,y:1032.1,alpha:0.9533},0).wait(1).to({scaleX:1.6337,scaleY:1.6337,x:532.5,y:1032.25,alpha:0.9067},0).wait(1).to({scaleX:1.7788,scaleY:1.7788,x:532.6,y:1032.4,alpha:0.86},0).wait(1).to({scaleX:1.924,scaleY:1.924,x:532.65,y:1032.6,alpha:0.8133},0).wait(1).to({scaleX:2.0691,scaleY:2.0691,x:532.75,y:1032.75,alpha:0.7667},0).wait(1).to({scaleX:2.2143,scaleY:2.2143,x:532.85,y:1032.9,alpha:0.72},0).wait(1).to({scaleX:2.3595,scaleY:2.3594,x:532.9,y:1033.1,alpha:0.6733},0).wait(1).to({scaleX:2.5046,scaleY:2.5046,x:533.05,y:1033.2,alpha:0.6267},0).wait(1).to({scaleX:2.6498,scaleY:2.6497,x:533.1,y:1033.35,alpha:0.58},0).wait(1).to({scaleX:2.7949,scaleY:2.7949,x:533.2,y:1033.55,alpha:0.5333},0).wait(1).to({scaleX:2.9401,scaleY:2.9401,x:533.3,y:1033.65,alpha:0.4867},0).wait(1).to({scaleX:3.0852,scaleY:3.0852,x:533.35,y:1033.8,alpha:0.44},0).wait(1).to({scaleX:3.2304,scaleY:3.2304,x:533.45,y:1034,alpha:0.3933},0).wait(1).to({scaleX:3.3756,scaleY:3.3755,x:533.5,y:1034.15,alpha:0.3467},0).wait(1).to({scaleX:3.5207,scaleY:3.5207,x:533.6,y:1034.3,alpha:0.3},0).to({_off:true},1).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(540,960,1,1,0,0,0,540,960);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,540,2393.2);
// library properties:
lib.properties = {
	id: '915C8EDA631B1346829223006BCE3919',
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#A20033",
	opacity: 1.00,
	manifest: [
		{src:"images/RSTest_atlas_.png", id:"RSTest_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['915C8EDA631B1346829223006BCE3919'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;