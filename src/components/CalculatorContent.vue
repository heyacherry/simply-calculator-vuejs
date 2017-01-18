<template>
 <div class="calculator-border">
        <div class="calculator-display">
          <div class="calculator-formula" v-cloak>{{ formula }}</div>
          <div class="calculator-result" v-cloak>{{ result }}</div>
        </div>
            
          <div class="calculator-items">
          <div class="calculator-row-1">
          <div class="calculator-item" @click="drop()">←</div>
          <div class="calculator-item" @click="cleanResult()">CE</div>
          <div class="calculator-item" @click="cleanAll()">C</div>
          <div class="calculator-item" @click="toggle()">±</div>
          <div class="calculator-item" @click="square()">√</div>
          </div>
                
           <div class="calculator-row-2">
          <div class="calculator-item" @click="operate(7)">7</div>
          <div class="calculator-item" @click="operate(8)">8</div>
          <div class="calculator-item" @click="operate(9)">9</div>
          <div class="calculator-item" @click="operate('/')">/</div>
          <div class="calculator-item" @click="operate('%')">%</div>
          </div>

          <div class="calculator-row-3">
          <div class="calculator-item" @click="operate(4)">4</div>
          <div class="calculator-item" @click="operate(5)">5</div>
          <div class="calculator-item" @click="operate(6)">6</div>
          <div class="calculator-item" @click="operate('*')">*</div>
          <div class="calculator-item" @click="devided()">1/x</div>
          </div>
                
          <div class="calculator-row-4">
          <div class="calculator-item" @click="operate(1)">1</div>
          <div class="calculator-item" @click="operate(2)">2</div>
          <div class="calculator-item" @click="operate(3)">3</div>
          <div class="calculator-item" @click="operate('-')">-</div>
          <div class="calculator-item" @click="operate('+')">+</div>
          </div>
                
          <div class="calculator-row-5">
          <div class="calculator-item" @click="operate(0)">0</div>
          <div class="calculator-item" @click="operate('.')">.</div>
          <div class="calculator-item" @click="equal()">=</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'CalculatorContent',
  data () {
    return {
     formula :"",
     result : 0 
    }
  },

  methods:{
    operate(element){
      console.log("operate..");
      this.formula +=element;
      // console.log("this.formula:");
      // console.log(this.formula);
    },

    equal(){
      console.log("equal..");
      this.result = eval(this.formula);
      // console.log("this.formula:");
      // console.log(this.formula);
    },

    cleanResult(){
      console.log("cleanResult..");
      this.result = 0;
    },

    cleanAll(){
      console.log("cleanAll..");
      this.formula = "";
      this.result = 0;
    },

    drop(){
        console.log("drop..");
        this.formula = this.formula.slice(0, -1);
    },

    square(){
        console.log("square..");
        console.log(eval(this.formula));
        eval(this.formula)<0? this.formula = "Can not suqre the negative value" : this.result=Math.sqrt(eval(this.formula));
   },

   devided(){
        console.log("devided.."); 
        this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula="1/("+this.formula+")";this.equal();
   },

   toggle(){
        console.log("toggle.."); 


        this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula.startsWith("-")?this.formula = Math.abs(eval(this.formula)).toString(): this.formula="-("+this.formula+")";
        this.equal();
   }

 }
}
</script>

<style>
/*vue*/
[v-cloak] { display: none; }	

.calculator .calculator-border .calculator-display{
  border: 0.15rem solid #b9b4b4;
  background-color: #f5f8f8;
  margin:1rem;
  /*width: 24rem;*/
  height: 7rem;
  width: 92.3%;
  font-size: 2rem;
  /*height:18.4%;*/
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  border-radius: 0.4rem;: 
  -webkit-box-shadow: 1rem 1rem 0.5rem #b55858;
  box-shadow: 0.1rem 0.1rem 0.5rem #b55858;
}

.calculator .calculator-border .calculator-formula{
  /*border: 1px solid red;*/
  width: 100%;
  height: 42.9%;
  text-align: right;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  color: #ce3b3b;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

.calculator .calculator-border .calculator-result{
  /*border: 1px solid blue;*/
  width: 100%;
  height: 57.1%;
  text-align: right;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  color: #2A363B;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

.calculator .calculator-border .calculator-items{
  /*border: 1px solid black;*/
  margin:3rem 1rem;
  text-align: left;
  width: 92.3%;
  height: auto;
}

.calculator .calculator-border .calculator-items .calculator-row-1,
.calculator .calculator-border .calculator-items .calculator-row-2,
.calculator .calculator-border .calculator-items .calculator-row-3,
.calculator .calculator-border .calculator-items .calculator-row-4,
.calculator .calculator-border .calculator-items .calculator-row-5{
  /*border: 1px solid blue;*/
  margin-bottom: 2.3%;
  width: 100%
}

.calculator .calculator-border .calculator-items .calculator-item{
  border: 0.1rem solid rgba(166, 98, 98, 0.74);
  width: 16.666%;
  height: 4rem;
  display: inline-block;
  text-align: center;
  line-height: 4rem;
  margin-right: 2.1%;
  color: #2a363b;
  cursor: pointer;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
  border-radius: 0.5rem;: 
  background-color: rgba(244, 135, 135, 0.78);
  -webkit-box-shadow: 0.1rem 0.1rem 0.3rem rgb(85, 65, 65);
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(85, 65, 65);
  transition: all 0.1s;
  -webkit-transition: all 0.1s;

}

.calculator .calculator-border .calculator-items .calculator-item:hover{
  color: #f1f5f7;
  -webkit-box-shadow: 0.3rem 0.3rem 0.5rem #b55858;
  box-shadow: 0.3rem 0.3rem 0.5rem #b55858;

}

.calculator .calculator-border .calculator-items .calculator-item:active{
  transform: translate(0.05rem,0.05rem);
  -moz-transform: translate(0.05rem,0.05rem);
    -webkit-transform: translate(0.05rem,0.05rem);
    
}



.calculator .calculator-border .calculator-row-5 .calculator-item:nth-child(odd){
  width: 37.2%;

}

.calculator .calculator-border .calculator-row-1 .calculator-item:nth-child(5),
.calculator .calculator-border .calculator-row-2 .calculator-item:nth-child(5),
.calculator .calculator-border .calculator-row-3 .calculator-item:nth-child(5),
.calculator .calculator-border .calculator-row-4 .calculator-item:nth-child(5) ,
.calculator .calculator-border .calculator-row-5 .calculator-item:nth-child(3){
  margin-right: 0;

}


</style>