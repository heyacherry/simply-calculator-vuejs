
var app = new Vue({
  el: '#calculator',
  data: {
    formula :"",
    result : 0 
  },

  methods:{
  	operate:function(element){
  		console.log("operate..");
  		this.formula +=element;
  		// console.log("this.formula:");
  		// console.log(this.formula);
  	},

  	equal:function(){
  		console.log("equal..");
  		this.result = eval(this.formula);
  		// console.log("this.formula:");
  		// console.log(this.formula);
  	},

  	cleanResult:function(){
  		console.log("cleanResult..");
  		this.result = 0;
  	},

  	cleanAll:function(){
  		console.log("cleanAll..");
  		this.formula = "";
  		this.result = 0;
  	},

  	drop:function(){
        console.log("drop..");
        this.formula = this.formula.slice(0, -1);
  	},

  	square:function(){
        console.log("square..");
        console.log(eval(this.formula));
        eval(this.formula)<0? this.formula = "Can not suqre the negative value" : this.result=Math.sqrt(eval(this.formula));
   },

   devided:function(){
   	    console.log("devided.."); 
   	    this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula="1/("+this.formula+")";this.equal();
   },

   toggle:function(){
   	    console.log("toggle.."); 


   	    this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula.startsWith("-")?this.formula = Math.abs(eval(this.formula)).toString(): this.formula="-("+this.formula+")";
        this.equal();
   }

}

})