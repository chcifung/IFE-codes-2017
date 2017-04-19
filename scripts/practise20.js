 function Observer(data){
 	return new Proxy(data,{
 		get:function(target,key){
 			if(key in target){
 				console.log("you visit the " +key);
 				return target[key];
 			}else{
 				 throw new Error("you have the wrong visit");
 			}
 		},
 		set:function(target,key,newVal){
 			console.log("you set a new " +key);
 			console.log("new" + key + "=" +newVal);
 			target[key]=newVal;
 		}
 	})
 }