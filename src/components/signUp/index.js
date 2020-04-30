import React from "react";
import styled from "styled-components";
import {Checkbox} from "react-formalized";
import {Link} from "react-router-dom";
import {Form, Title, Input, SignButton, Rights, Option, Logo} from "../signIn";
import logo from "../img/padlock.png";

const InputsContainer = styled.div`
display: flex;
width: 350px;
margin: 0 auto;
flex-direction: row;
justify-content: space-between;
`;
export const CheckboxDiv = styled.div`
margin: 0 auto;
width: 405px;
transform: scale(0.9);
`;

export default class SignUp extends React.Component{
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : '',
        checked: true,
        emailValid : false,
        passwordValid : false,
        firstNameValid : false,
        lastNameValid : false,
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
        let {emailValid,passwordValid,firstNameValid,lastNameValid} = this.state;
        switch(fieldName){
            case 'email':
                emailValid = value.match(/^...+@..+\...+$/)!=null;
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)!=null;
                break;
            case  'firstName':
                firstNameValid = value.match(/^...+$/)!=null;
                break;
            case  'lastName':
                lastNameValid = value.match(/^...+$/)!=null;
                break;
            default:
                break;
        }
        this.setState({emailValid: emailValid,
            passwordValid: passwordValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid
        });

    };
    sentData = ()=> {
        if (this.state.emailValid && this.state.passwordValid
        &&this.state.lastNameValid && this.state.firstNameValid) {
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                wantToReceive : this.state.checked
            };
            this.setState({
                firstName : '',
                lastName: '',
                email: '',
                password: '',
                checked: false,
                firstNameValid:false,
                lastNameValid:false,
                emailValid: false,
                passwordValid: false,
                formValid: false
            });
            console.log(data);

        }
        else alert("Please write right data");
    };

    render() {
        return(
            <Form style={{height : '540px'}}>
                <Logo><img src={logo} alt=""/></Logo>
                <Title>Sign Up</Title>
                <InputsContainer>
                    <Input placeholder="First Name *"
                           style={{width : '150px'}}
                           name = "firstName"
                           empty={this.state.firstName===''}
                           hasError={this.state.firstNameValid}
                           value = {this.state.firstName}
                           onChange={this.handleInputChange}/>
                    <Input placeholder="Last Name *"
                           style={{width : '150px'}}
                           name = "lastName"
                           empty={this.state.lastName===''}
                           hasError={this.state.lastNameValid}
                           value = {this.state.lastName}
                           onChange={this.handleInputChange}/>
                </InputsContainer>
                <Input placeholder='Email Address *'
                       style={{width:'325px'}}
                       name = "email"
                       empty={this.state.email===''}
                       hasError={this.state.emailValid}
                       value = {this.state.email}
                       onChange={this.handleInputChange}/>
                <Input type = "password"
                       placeholder="Password *"
                       style={{width:'325px'}}
                       name = "password"
                       empty = {this.state.password===''}
                       hasError = { this.state.passwordValid}
                       value={this.state.password}
                       onChange={this.handleInputChange}/>
                <CheckboxDiv>
                    <Checkbox
                        checked={!this.state.checked}
                        label="I want to receive inspiration, marketing promoting  and updates via email."
                        onChange={this.handleCheckboxChange}/>
                </CheckboxDiv>
                <SignButton type = "button"
                            style={{width:'325px'}}
                          onClick={this.sentData}>
                    Sign Up</SignButton>
                <Link to="/" style={{textDecoration:'none'}} >
                    <Option style = {{marginLeft : '240px'}}>Already have an account? Sign In</Option>
                </Link>
                <Rights>Copyright &#169; Your website 2020</Rights>

            </Form>

        )
    }

}