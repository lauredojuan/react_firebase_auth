import React from 'react';
import fire from './config/fire';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.login= this.login.bind(this);
        
        this.state={
            email: "",
            password: "",
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);

        })
    }
    handleChange(e){
        this.setState({
           [e.target.name] : e.target.value
        })
    }
    render(){
        return (
            <div>
                <form>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter email address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input 
                     type="password"
                     name="password"
                     onChange={this.handleChange}
                     id="password"
                     placeholder="enter password"
                     value={this.state.password}
                     />
                     <button onClick={this.login}>Login</button>
                     <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}