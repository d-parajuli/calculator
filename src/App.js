import './App.css';
import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
import Display from './display.jsx';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      input: "" ,
      second_round: "",
      operator:"" ,
      first_input: "",
      second_input:"",
      result:""
    }
  }

addToInput = (e) => {
       if (this.state.operator == ''){
        this.setState({ input: this.state.input + e.target.value, first_input: ''}, function() {
          return this.state.input
        })
       }
       else {
         this.setState({ second_round: this.state.second_round + e.target.value }, function() {
           return this.state.second_round
         })
       }
     }


setOperator = (e) =>
{
  console.log("first input" + this.state.first_input)
  if(this.state.first_input === ''){
    this.setState({operator: e.target.value, first_input: this.state.input, input: ''}, function ()
    {
      //console.log("OPERATOR IS " + this.state.operator + "FIRST INPUT IS " + this.state.first_input)
    })
  }
else if(this.state.first_input != '' &&  this.state.second_round != '' ){
  var second = parseFloat(this.state.second_round)
  var first = parseFloat(this.state.first_input)
  console.log(first + second)
  if (this.state.operator === "+"){
    var result = first + second;
  }
  else if(this.state.operator === "-"){
    var result = first - second;
  }
  else if(this.state.operator === "*"){
    var result = first * second;
  }
  else if(this.state.operator === "/"){
    var result = first / second;
  }
  this.setState({result: result, first_input: result, second_round: '', operator: e.target.value}, function(){
    console.log("RESULT:" + this.state.result + "FIRST_INPUT:" + this.state.first_input)
    return this.state.first_input
    //this value is not being returned
  })
}
  else {
    this.setState({operator: e.target.value, result: ''}, function ()
    {
      console.log("OPERATOR IS " + this.state.operator)
    })
  }
}

calculate = (e) =>{
  var second = parseFloat(this.state.second_round)
  var first = parseFloat(this.state.first_input)
  if (this.state.operator === "+"){
    var result = first + second;
  }
  else if(this.state.operator === "-"){
    var result = first - second;
  }
  else if(this.state.operator === "*"){
    var result = first * second;
  }
  else if(this.state.operator === "/"){
    var result = first / second;
  }
this.setState({result: result, first_input: result, second_round: '', operator: e.target.value}, function(){
  console.log("RESULT:" + this.state.result + "FIRST_INPUT:" + this.state.first_input)
  return this.state.first_input
  //this value is not being returned
})
}



reset = (e) => {
  this.setState ({
    input: "" ,
    second_round: "",
    operator:"" ,
    first_input: "",
    second_input:"",
    result:""
  }
  )}

    render() {
      return (
    <div className="calc-wrapper" >
      <div className= "calc mt-5">
        <Display input={this.state.input} first={this.state.first_input} input_two={this.state.second_round} operator={this.state.operator} result={this.state.result}/>
      <div className="keypad">
       <ButtonToolbar>
      <Button value="clear" type='button' onClick={this.reset} size="lg" bsPrefix= 'reset'>Reset</Button>
      <Button  value ="*" type = "operator" onClick={this.setOperator} size="lg" bsPrefix ='operator'>*</Button>
      </ButtonToolbar>


      <ButtonToolbar>
      <Button  value ="7" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>7</Button>
     <Button  value ="8" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>8</Button>
     <Button  value ="9" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>9</Button>
      <Button value ="/" type="operator" onClick={this.setOperator} size="lg" bsPrefix ='operator'>/</Button>

      </ButtonToolbar>

      <ButtonToolbar>
       <Button value ="4" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>4</Button>
       <Button  value ="5" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>5</Button>
       <Button  value ="6" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>6</Button>
      <Button value ="-" type="operator" onClick={this.setOperator} size="lg" bsPrefix ='operator'>-</Button>
      </ButtonToolbar>

      <ButtonToolbar>
       <Button value= "1" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>1</Button>
       <Button value= "2" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>2</Button>
      <Button value= "3" type="number" onClick={this.addToInput} size="lg" bsPrefix ='num'>3</Button>
      <Button value ="+" type="operator" onClick={this.setOperator} size="lg" bsPrefix ='operator'>+</Button>
        </ButtonToolbar>


      <ButtonToolbar>
       <Button  value ="0" type="number" onClick={this.addToInput} size="lg" bsPrefix ='zero'>0</Button>
      <Button  value ="." type="decimal" onClick={this.addToInput} size="lg" bsPrefix ='num' >.</Button>
      <Button value= "" onClick={this.calculate} size="lg" bsPrefix ='operator'>=</Button>
      </ButtonToolbar>
      </div>
      </div>
</div>





  );
    }
  }

  export default App;
