define(["mymodel"],function(MyModel){
	describe("mymodel",function(){
		describe("when instantiating",function(){
			describe("with no mood",function(){
				it("should default to 0",function(){
					var newmodel = new MyModel();
					expect(newmodel.get("mood")).toEqual(0);
				});
			});
			describe("with given mood",function(){
				it("should use that mood",function(){
					var newmodel = new MyModel({mood:3});
					expect(newmodel.get("mood")).toEqual(3);
				});
			});
		});
		describe("the getMoodDescription function",function(){
			describe("when mood is negative",function(){
				it("should return 'sad'",function(){
					var model = new MyModel({mood:-2});
					expect(model.getMoodDescription()).toEqual("sad");
				});
			});
			describe("when mood is zero",function(){
				it("should return 'neutral'",function(){
					var model = new MyModel();
					expect(model.getMoodDescription()).toEqual("neutral");
				});
			});
			describe("when mood is positive",function(){
				it("should return 'happy'",function(){
					var model = new MyModel({mood:2});
					expect(model.getMoodDescription()).toEqual("happy");
				});
			});
		});
	});
});