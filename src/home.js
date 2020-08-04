import React from "react";
// import fire from './config/fire';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

    this.state = {};
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>you are logged in!</h1>
        <button>Logout</button>
      </div>
    );
  }
}
export default Home;
