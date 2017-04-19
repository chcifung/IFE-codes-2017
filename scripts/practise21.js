function Observer(data){
	this.data =data;
	this.makeObserver(data);
}

Observer.prototype.setterAndGetter = function(key,val){
	Object.defineProperty(this.data,key,{
		enumerable:true,
		configurable:true,
		get:function(){
			console.log('you visit the ' +key);
			return val;
		},
		set:function(newVal){
			if(typeof newVal ==='object'){
				new Observer(val);
			}
			console.log("you set the new " +key);
			console.log("the new " +key +"is" +newVal);
			val = newVal;
		}
	})
}

Observer.prototype.makeObserver = function(obj){
	let val;
	for(key in obj){
		if(obj.hasOwnProperty(key)){
		val = obj[key];

			if(typeof val === 'object'){
				new Observer(val);
			}
		}
			this.setterAndGetter(key,val);
	}
}