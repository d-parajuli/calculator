import './App.css';
import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
import Display from './display.jsx';


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
  if(this.state.first_input == ''){
    this.setState({operator: e.target.value, first_input: this.state.input, input: ''}, function ()
    {
      console.log("OPERATOR IS " + this.state.operator + "FIRST INPUT IS " + this.state.first_input)
    })
  }
  else{
    this.setState({operator: e.target.value}, function(){
      console.log(this.state.operator + "RESULT" + this.state.first_input);
      //this is the issue: this.state.first_input doesnt have value?
    })

    var second = parseInt(this.state.second_round)
    var first = parseInt(this.state.first_input)
    if (this.state.operator == "+"){
      var result = first + second;
    }
    else if(this.state.operator == "-"){
      var result = first - second;
    }
    else if(this.state.operator == "*"){
      var result = first * second;
    }
    else if(this.state.operator == "/"){
      var result = first / second;
    }
  this.setState({result: result, first_input: result, second_round: ''})

  }
}

calculate = (e) =>{
  var second = parseInt(this.state.second_round)
  var first = parseInt(this.state.first_input)
  if (this.state.operator == "+"){
    var result = first + second;
  }
  else if(this.state.operator == "-"){
    var result = first - second;
  }
  else if(this.state.operator == "*"){
    var result = first * second;
  }
  else if(this.state.operator == "/"){
    var result = first / second;
  }
this.setState({result: result, first_input: result, second_round: '', operator: ''}, function(){
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
      <div className="App-header">

      <Display input={this.state.input} first={this.state.first_input} input_two={this.state.second_round} operator={this.state.operator} result={this.state.result}/>
      <div className="Buttons">
      <Row>
      <Col> <Button variant="danger"  value="clear" type="clear" onClick={this.reset} size="lg">Reset</Button> </Col>
      <Col> <Button variant="danger"  value ="*" type = "operator" onClick={this.setOperator} size="lg">*</Button> </Col>
      </Row>
      <Row>
      <Col> <Button variant="secondary" value ="7" type="number" onClick={this.addToInput} size="lg">7</Button> </Col>
      <Col> <Button variant="secondary" value ="8" type="number" onClick={this.addToInput} size="lg">8</Button> </Col>
      <Col> <Button variant="secondary" value ="9" type="number" onClick={this.addToInput} size="lg">9</Button> </Col>
      <Col> <Button variant="danger" value ="/" type="operator" onClick={this.setOperator} size="lg">/</Button> </Col>
      </Row>
      <Row>
      <Col> <Button variant="secondary" value ="4" type="number" onClick={this.addToInput} size="lg">4</Button> </Col>
      <Col> <Button variant="secondary" value ="5" type="number" onClick={this.addToInput} size="lg">5</Button> </Col>
      <Col> <Button variant="secondary" value ="6" type="number" onClick={this.addToInput} size="lg">6</Button> </Col>
      <Col> <Button variant="danger" value ="-" type="operator" onClick={this.setOperator} size="lg">-</Button> </Col>
      </Row>
      <Row>
      <Col> <Button variant="secondary" value= "1" type="number" onClick={this.addToInput} size="lg">1</Button> </Col>
      <Col> <Button variant="secondary" value= "2" type="number" onClick={this.addToInput} size="lg">2</Button> </Col>
      <Col> <Button variant="secondary"  value= "3" type="number" onClick={this.addToInput} size="lg">3</Button> </Col>
      <Col> <Button variant="danger" value ="+" type="operator" onClick={this.setOperator} size="lg">+</Button> </Col>
      </Row>
      <Row>
      <Col> <Button variant="secondary"  value ="0" type="number" onClick={this.addToInput} size="lg">0</Button> </Col>
      <Col> <Button variant="secondary"  value ="." type="decimal" onClick={this.addToInput} size="lg" >.</Button> </Col>
      <Col> <Button variant="danger" value= "=" onClick={this.calculate} size="lg">=</Button> </Col>
      </Row>
      </div>
      </div>
  );
    }
  }

  export default App;
