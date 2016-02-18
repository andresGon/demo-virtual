package {
	import devarai.games.searchPuzzle.SearchPuzzle;
	
	import fl.transitions.Tween;
	import fl.transitions.easing.None;
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public class Preview extends MovieClip {
		
		var sp:SearchPuzzle;
		
		public function Preview() {
			
			example1_mc.focusRect = false;
			example1_mc.mouseChildren = false;
			example1_mc.buttonMode = true;
			example2_mc.focusRect = false;
			example2_mc.mouseChildren = false;
			example2_mc.buttonMode = true;
			example3_mc.focusRect = false;
			example3_mc.mouseChildren = false;
			example3_mc.buttonMode = true;
			
			example1_mc.addEventListener(MouseEvent.CLICK, example1);
			example2_mc.addEventListener(MouseEvent.CLICK, example2);
			example3_mc.addEventListener(MouseEvent.CLICK, example3);
			
			if (stage) {
				resizer(null);				
			}
			
		}
		
		private function resizer(evt:Event):void {
			sp = new SearchPuzzle(stage.stageWidth, stage.stageHeight-44,"puzzle.xml");
			this.addChild(sp);
			sp.y = 35;
			stage.addEventListener(Event.RESIZE, resize);
			resize(null);

		}
		
		private var oldsp:SearchPuzzle;
		private var tw:Tween = null;
		private var twn:Tween = null;
		
		private function setup(file:String):void {
			if (tw) {
				tw.stop();
				if (oldsp!=null) {
					if (this.contains(oldsp)) this.removeChild(oldsp);
				}
			}
			oldsp = sp;
			sp = new SearchPuzzle(stage.stageWidth, stage.stageHeight-44,file);
			sp.alpha =  0;
			this.addChild(sp);
			
			if (twn) twn.stop();
			twn = new Tween(sp,"alpha",None.easeIn,sp.alpha,1,0.8,true);
			
			tw = new Tween(oldsp,"alpha",None.easeIn,oldsp.alpha,0,0.8,true);
			tw.addEventListener("motionFinish", removeoldSp);
			resize(null);
			
		}
		
		private function example1(evt:Event):void {
			setup("puzzle.xml");
						
		}
		
		private function example2(evt:Event):void {
			setup("puzzleHeb.xml");
			
		}

		private function example3(evt:Event):void {
			setup("puzzleGer.xml");
			
		}

		private function removeoldSp(evt:Event):void {
			if (oldsp!=null) {
				if (this.contains(oldsp)) this.removeChild(oldsp);
			}			
		}
		private function resize(evt:Event):void {
			background_mc.x = 0;
			background_mc.y = 0;
			background_mc.width = stage.stageWidth;
			background_mc.height = stage.stageHeight;
			sp.x = stage.stageWidth/2-sp.width/2;
			sp.y = 40+(stage.stageHeight-40)/2-sp.height/2;
		}
				
	}
	
}