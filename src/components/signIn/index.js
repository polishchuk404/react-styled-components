import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {CheckboxDiv} from "../signUp";
import logo from '../img/padlock.png'
import {Checkbox} from "react-formalized";

export const Form = styled.form`
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  background-color: #121212;
  color: #e5e5e5;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  padding-top: 40px;
`;
export const Logo = styled.div`
display: flex;
align-item: center;
justify-content: center;
text-align: center;
width: 60px;
height: 60px;
padding: 15px;
margin: 0 auto;
background-color: #f08daf;
border-radius: 100%;
`;
export const Title = styled.h5`
margin-top: 20px;
 text-align: center;
 margin-bottom: 20px;
`;
export const Input = styled.input`
  display: flex;
  height: 40px;
  border-radius: 3px;
  width: 300px;
  border: ${
    props=>props.hasError ? '2px solid green': props.empty? '2px solid #6a6a6a' : '2px solid red' };
  background: transparent;
  color : #6a6a6a;
  padding-left: 5px;
  margin: 0 auto 20px;
`;
export const SignButton = styled.button`
display: block;
    width: 300px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    background: #90caf9;
    border-radius: 3px;
    height: 35px;
    margin: 20px auto 0;
    color: #121212;
    cursor: pointer;
    transition : .5s;
   
:hover{
background-color: aqua;
}
   
`;
const Options = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 300px;
margin: 10px auto ;
`;
export const Option = styled.span`
font-family: 'Roboto', sans-serif;
color: #90caf9;
font-size: 10px;
cursor: pointer;
margin-top: 0;
transition : .3s;
:hover{
color: white;
}
`;
export const Rights = styled.p`
color: #474747;
text-align: center;
font-size: 12px;
margin: 40px auto;
`;

export default class SignIn extends React.Component {
    state = {
        email : '',
        password : '',
        checked: false,
        emailValid : false,
        passwordValid : false,
        formValid : false
    };
    handleCheckboxChange = event => {
        this.setState(state=>{return{checked: !state.checked}})
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},()=>this.validateField(name,value));
    };
    validateField = (fieldName,value)=>{
      let {emailValid,passwordValid} = this.state;
      switch(fieldName){
          case 'email':
              emailValid = value.match(/^...+@..+\...+$/)!=null;
              break;
          case 'password':
              passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)!=null;
                break;
          default:
              break;
        }
        this.setState({emailValid: emailValid,passwordValid: passwordValid});

    };
    sentData = ()=> {
        if (this.state.emailValid && this.state.passwordValid) {
            const data = {
                email: this.state.email,
                password: this.state.password,
                remember : this.state.checked
            };
            if(this.state.checked) {
                localStorage.setItem('user', JSON.stringify(data));
            }
            this.setState({
                email: '',
                password: '',
                checked: false,
                emailValid: false,
                passwordValid: false,
                formValid: false
            });
            console.log(data);

        }
        else alert("Please write right data");
    };
    render() {
        return (

            <Form>
                <Logo><img src={logo} alt=""/></Logo>
                <Title>Sign In</Title>
                <Input name = "email"
                       empty={this.state.email===''}
                       hasError={this.state.emailValid}
                       value = {this.state.email}
                       placeholder='Email Address *'
                       onChange={this.handleInputChange}/>
                <Input name = "password"
                       empty = {this.state.password===''}
                       hasError = { this.state.passwordValid}
                       value={this.state.password}
                       placeholder='Password *'
                       type = "password"
                       onChange={this.handleInputChange}/>
                <CheckboxDiv>
                    <Checkbox
                        style={{marginLeft : '15px'}}
                        checked={!this.state.checked}
                        label="Remember me"
                        onChange={this.handleCheckboxChange}/>
                </CheckboxDiv>
                <SignButton type="button"  onClick={this.sentData}>SIGN IN</SignButton>
                <Options>
                    <Option style={{paddingTop: '12px'}}>Forgot password</Option>
                    <Link to="/register" style={{textDecoration: 'none'}}> 
                        <Option> Don't have an account? Sign Up</Option>
                    </Link>
                </Options>
                <Rights>Copyright &#169; Your website 2020</Rights>
            </Form>
        )
    }
}