define(["backbone"],function(Backbone){
	return Backbone.RelationalModel.extend({
		initialize: function(opts){
			this.set("mood",(opts && opts.mood) || 0);
		},
		getMoodDescription: function(){
			var mood = this.get("mood");
			return mood > 0 ? "happy" : mood < 0 ? "sad" : "neutral";
		}
	});
});
