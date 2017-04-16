var app = new Vue({ 
	el: '#app', 
	data: { 
		book: { 
			id: 0, 
			author: '', 
			name: '', 
			price: '' 
		}, 
		books:	
		[	
			{ id: 1, author: '曹雪芹', name: '红楼梦', price: 32.0 }, 
			{ id: 2, author: '施耐庵', name: '水浒传', price: 30.0 }, 
			{ id: 3, author: '罗贯中', name: '三国演义', price: 24.0 }, 
			{ id: 4, author: '吴承恩', name: '西游记', price: 20.0 }
		] 
	} ,
	methods:{
		addBook: function(){
			this.book.id = this.books.length+1;
			this.books.push(this.book);
			this.book = '';
		},
		deleteBook:function(book){
			this.books.$remove(book);
		}

	}
})

var myname = new Vue({
	el: '#myname',
	data: {
		myname: "this is my first vue display!"
	}
})

var app2 = new Vue({
	el:"#app-2",
	data:{
		myname2:"页面加载与"+new Date()
	}
})

var app3 = new Vue({
	el:"#app-3",
	data:{
		see: false
	}
})

var app4 = new Vue({
	el: "#app-4",
	data:{
		todos:[
		{text:"this is a new"},
		{text:"my first list"},
		{text: "this is a order lists"}
		]
	}
})

var app5 = new Vue({
	el:"#app-5",
	data:{
		message:"this is a test sentence!"
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split("").reverse().join("");
		}
	}
})

var app6 = new Vue({
	el:"#app-6",
	data:{
		message:"this is hello to Vue"
	}
})

Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var app7 = new Vue({
	el:"#app-7",
	data:{
		groceryList:[
		{text:"fruit"},
		{text:"bind"},
		{text:"others"}]
	}
})

var app8 = new Vue({
	el:"#app-8",
	data:{
		firstName: "jas",
		lastName:"more",
		fullName:"jas more"
	},
	computed:{
		fullName:{
			//getter
			get:function(){
				return this.firstName +" "+this.lastName;
			},
			//setter
			set:function(newValue){
				var names = newValue.split(" ");
				this.firstName = names[0];
				this.lastName = names[names.length-1];
			}
		}
	}
})

var app9 = new Vue({
	el:"#app-9",
	data:{
		message: 'Hello vuejs version 2.0'
	},
	computed:{
		now: function(){
			return Date.now();
		}
	}
})

var app10 = new Vue({
	el:"#app-10",
	data:{
		counter: 0
	}
})