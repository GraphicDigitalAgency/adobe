(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
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


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKjmQBSAtA8BHQA9BGAiBWIntC8g");
	this.shape.setTransform(24.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,49.3,46.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWnaQCnBwB4CiQB3CiA4DAIxHFBg");
	this.shape.setTransform(54.8,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,109.6,95), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9AcQgrh3AAiCILRgXIooHpQhShhgsh4g");
	this.shape.setTransform(36.1,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,72.2,49), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqhUQBDhTBcg2QBag2BpgVIBzJRg");
	this.shape.setTransform(23.5,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,47,59.4), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhmcQCVgdCUAYQCWAYCDBJImfLtg");
	this.shape.setTransform(29,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,57.9,85.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai/juIF/EtQg2BEhJAtQhIAthUASg");
	this.shape.setTransform(19.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,38.3,47.8), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_0, null, null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEEoQhpgPhfgyIEeoUIB6JPQg9AMg9AAQgrAAgrgGg");
	this.shape.setTransform(20.5,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.9,60.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBIQhjhLh2gmIBEjTQCbAyCABkQCBBjBXCJIi8B2QhChohghMg");
	this.shape.setTransform(28.4,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,56.8,50.5), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKjmQBSAtA8BHQA9BGAiBWIntC8g");
	this.shape_1.setTransform(24.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,49.3,46.1), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABWnaQCnBwB4CiQB3CiA4DAIxHFBg");
	this.shape_1.setTransform(54.8,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,109.6,95), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak9AcQgrh3AAiCILRgXIooHpQhShhgsh4g");
	this.shape_1.setTransform(36.1,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,72.2,49), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjqhUQBDhTBcg2QBag2BpgVIBzJRg");
	this.shape_1.setTransform(23.5,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,47,59.4), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkhmcQCVgdCUAYQCWAYCDBJImfLtg");
	this.shape_1.setTransform(29,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,57.9,85.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai/juIF/EtQg2BEhJAtQhIAthUASg");
	this.shape_1.setTransform(19.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,38.3,47.8), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_0_1, null, null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEEoQhpgPhfgyIEeoUIB6JPQg9AMg9AAQgrAAgrgGg");
	this.shape_1.setTransform(20.5,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,40.9,60.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBIQhjhLh2gmIBEjTQCbAyCABkQCBBjBXCJIi8B2QhChohghMg");
	this.shape_1.setTransform(28.4,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,56.8,50.5), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("Aiep7QD5AfDcB7IptRcg");
	this.shape_2.setTransform(31.1,63.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,62.2,127.1), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_0_2, null, null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("ArughQBjkZC+jnIUdQzI6fAQQgCkqBjkZg");
	this.shape_2.setTransform(84.8,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,169.6,109.3), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5D5D5").s().p("AgGJoQjagVjGheIIVxhIE4SxQibAoidAAQg7AAg6gFg");
	this.shape_3.setTransform(42.3,62.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,84.5,124.3), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5D5D5").s().p("ApJh6QCPjODMiRQDMiRDwhDIF7Vag");
	this.shape_2.setTransform(58.6,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,117.1,137.1), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5D5D5").s().p("AyCG1Ievy5QDVFbBSGOQBSGNg8GTg");
	this.shape_3.setTransform(115.5,77.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,231.1,154.6), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5D5D5").s().p("AniLZIB022INRSsQjSCVj6BFQi+A1jGAAQg6AAg7gFg");
	this.shape_4.setTransform(48.3,73.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,96.7,146.8), null);


(lib.CompoundShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(28.4,25.2,1,1,0,0,0,28.4,25.2);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundShape, new cjs.Rectangle(0,0,56.8,50.5), null);


(lib.CompoundShape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.4,25.2,1,1,0,0,0,28.4,25.2);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundShape_1, new cjs.Rectangle(0,0,56.8,50.5), null);


(lib.blades5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7E7E7","#ADADAD"],[0,1],-15.1,63.4,80.8,-40.8).s().p("AjCAJQAahLAthFIE+DLQgVAggNAkg");
	this.shape.setTransform(41.8,70.1);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(89.8,95);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.7,125.2,1,1,0,0,0,20.4,30.2);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(109.1,118.9,1,1,0,0,0,19.2,23.9);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.CompoundShape();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139.6,32.1,1,1,0,0,0,28.4,25.2);
	this.instance_3.alpha = 0.801;

	this.instance_4 = new lib.Path_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(102.5,52,1,1,0,0,0,28.9,42.9);
	this.instance_4.alpha = 0.801;

	this.instance_5 = new lib.Path_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(66.2,64.1,1,1,0,0,0,23.4,29.7);
	this.instance_5.alpha = 0.801;

	this.instance_6 = new lib.Path_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(53.5,119.5,1,1,0,0,0,36.1,24.4);
	this.instance_6.alpha = 0.801;

	this.instance_7 = new lib.Path_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(144.6,47.5,1,1,0,0,0,54.8,47.5);
	this.instance_7.alpha = 0.801;

	this.instance_8 = new lib.Path_6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(114.6,72,1,1,0,0,0,24.7,23.1);
	this.instance_8.alpha = 0.801;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C1C1C1","#989898","#424242"],[0,0.525,1],145.1,51.6,-54.9,-15.9).s().p("AhsgRQA0iVBjh7IBzBeQhQBigrB2QgrB7AACEIAAAMIiVACQgCieAziVg");
	this.shape_1.setTransform(15.8,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.4,155.5);


(lib.blades4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.parent = this;
	this.instance.setTransform(72.4,95);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.3,125.2,1,1,0,0,0,20.4,30.2);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.7,118.9,1,1,0,0,0,19.2,23.9);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.CompoundShape_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.2,32.1,1,1,0,0,0,28.4,25.2);
	this.instance_3.alpha = 0.801;

	this.instance_4 = new lib.Path_2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.1,52,1,1,0,0,0,28.9,42.9);
	this.instance_4.alpha = 0.801;

	this.instance_5 = new lib.Path_3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.8,64.1,1,1,0,0,0,23.4,29.7);
	this.instance_5.alpha = 0.801;

	this.instance_6 = new lib.Path_4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(36.1,119.5,1,1,0,0,0,36.1,24.4);
	this.instance_6.alpha = 0.801;

	this.instance_7 = new lib.Path_5_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(127.2,47.5,1,1,0,0,0,54.8,47.5);
	this.instance_7.alpha = 0.801;

	this.instance_8 = new lib.Path_6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(97.2,72,1,1,0,0,0,24.7,23.1);
	this.instance_8.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,155.5);


(lib.blades3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D5D5D5","#676767"],[0,1],-55.3,65.6,-118.7,-133.6).s().p("AkFEAQBHigAAiwQAAh1gghyIGwh+QBADZgPDhQgPDihbDPg");
	this.shape.setTransform(272,134.9);

	this.instance = new lib.Path_0_2();
	this.instance.parent = this;
	this.instance.setTransform(169.5,126.9);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200.6,63.6,1,1,0,0,0,31.1,63.6);

	this.instance_2 = new lib.Path_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.8,73.9,1,1,0,0,0,84.8,54.6);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.2,178.7);


(lib.blades2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_9();
	this.instance.parent = this;
	this.instance.setTransform(42.2,62.1,1,1,0,0,0,42.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,124.3);


(lib.blades1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(153.7,210.5,1,1,0,0,0,48.3,73.4);

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.9,93.5,1,1,0,0,0,115.5,77.2);

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.6,68.5,1,1,0,0,0,58.6,68.5);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,348.4,283.9);


// stage content:
(lib._171018segmentsanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghAAg/QtrtqAAzVQAAzVNrtrQNrtrTVAAQTUAANqNrQNuNrAATVQAATVtuNqQtqNtzUAAQzVAAtrttgApUpUQj2D3AAFdQAAFcD2D3QD4D4FcAAQFdAAD3j4QD4j3gBlcQABldj4j3Qj3j3ldAAQlcAAj4D3g");
	mask.setTransform(319.7,320.1);

	// FlashAICB
	this.instance = new lib.blades3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320.3,320.5,1,1,0,0,0,169.8,127);
	this.instance.alpha = 0.75;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180,y:320.4},120,cjs.Ease.quadInOut).to({rotation:359,x:320.2,y:320.5},119,cjs.Ease.quadInOut).wait(1));

	// FlashAICB
	this.instance_1 = new lib.blades4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(319.4,320.2,1,1,-1,0,0,72.9,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-180,x:319.3,y:320.1},120).to({regX:72.8,rotation:-359,x:319.4,y:320.2},119).wait(1));

	// FlashAICB
	this.instance_2 = new lib.blades5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(319.3,319.9,1,1,-1,0,0,90.5,94.2);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-180},59,cjs.Ease.quadOut).to({rotation:-359,y:320},61,cjs.Ease.quadIn).wait(1).to({rotation:-361,y:319.9},0).to({rotation:-540},59,cjs.Ease.quadOut).to({rotation:-719,y:320},59,cjs.Ease.quadIn).wait(1));

	// FlashAICB
	this.instance_3 = new lib.blades2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.7,319.9,1,1,0,0,0,53.4,-0.1);
	this.instance_3.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:180,x:319.6},120,cjs.Ease.quadOut).to({rotation:359},119,cjs.Ease.quadIn).wait(1));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EggbAgcQtctcAAzAQAAy/NctcQNctcS/AAQTAAANcNcQNcNcAAS/QAATAtcNcQtcNczAAAQy/AAtctcgApwpQQkHEGAAFyQAAFzEHEGQEGEHFyAAQFzAAEGkHQEHkGAAlzQAAlykHkGQkGkHlzAAQlyAAkGEHg");
	mask_1.setTransform(319.2,316);

	// FlashAICB
	this.instance_4 = new lib.blades1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.2,320,1,1,0,0,0,117.2,137.2);
	this.instance_4.alpha = 0.75;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:180,y:320.1},120,cjs.Ease.quadIn).to({regY:137.3,rotation:359,y:320},119,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(470.5,502.8,400,283.9);
// library properties:
lib.properties = {
	id: '95DFC5A2902E4C90A4F2CF0843599CA8',
	width: 640,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['95DFC5A2902E4C90A4F2CF0843599CA8'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;