package {
	import devarai.games.searchPuzzle.SearchPuzzle;
	
	import flash.display.LoaderInfo;
	import flash.display.MovieClip;
	import flash.events.Event;
	
	public class SearchPuzzleMain extends MovieClip {
		
		private var sp:SearchPuzzle;
		var puzzleUrl:String;
		
		public function SearchPuzzleMain() {
			
			var params:Object = LoaderInfo(this.root.loaderInfo).parameters;
			
			puzzleUrl = params["puzzleUrl"];
			
			if (!puzzleUrl) {
				puzzleUrl = "wordsearchpuzzle.xml";
			}
			
			if (stage) resizer(null);
			
		}
		
		private function resizer(evt:Event):void {

			sp = new SearchPuzzle(stage.stageWidth, stage.stageHeight-45,puzzleUrl);
			this.addChild(sp);

			stage.addEventListener(Event.RESIZE, resize);
			resize(null);

		}
		
		private function resize(evt:Event):void {
			background_mc.x = 0;
			background_mc.y = 0;
			header.width = stage.stageWidth+40;
			background_mc.width = stage.stageWidth;
			background_mc.height = stage.stageHeight;
			sp.x = stage.stageWidth/2-sp.width/2;
			sp.y = 45+(stage.stageHeight-42)/2-sp.height/2;
		}
				
	}
	
}