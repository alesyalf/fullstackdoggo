import React from 'react';
import './App.css';
import doggo from "./doggo.jpg"
import ReactDOM from 'react-dom';
import meme1 from "./components/Memes/MemesImages/meme1.jpg";

const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), beg_date: new Date(), loaded: false,
            logged_in: localStorage.getItem('token') ? true : false,
            username: localStorage.getItem('username'),
        }
    }

    componentDidMount() {
        this.state.loaded = true
     //   this.setState({loaded: true});
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
                localStorage.setItem('token', json.token);
                localStorage.setItem('username', data.username)
                if ('token' in json) {
                    this.setState({
                        logged_in: true,
                        username: data.username,
                    });
                } else {
                    alert('Wrong username or password')
                }
            });
    };

    handle_logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.setState({ logged_in: false, username: '' });
    };

    display_form = form => {
        this.setState({
            displayed_form: form
        });
    };

    render() {
        let form;
        if (this.state.logged_in === true) {
            form =  <LogoutBox handle_logout={this.handle_logout} />;
        } else {
            form = <LoginBox handle_login={this.handle_login} />;
        }
        if (!this.state.loaded) {
            return (

                <div className="wrap">
                    <div className="loading">
                        <div className="bounceball"></div>
                        <div className="text">NOW LOADING</div>
                    </div>
                </div>
            );
        }
        sleep(500)
        return (
            <div className="App">
                <nav
                    logged_in={this.state.logged_in}
                    handle_logout={this.handle_logout}
                />
                <h3> LOL </h3>
                <h3>
                    {this.state.logged_in
                        ? `Hello, ${this.state.username}`
                        : 'Please Log In'}
                </h3>
                {form}
                <img src={doggo} alt="meme1" />
            </div>
        );
    }
}

class LoginBox extends React.Component {
    state = {
        username: "",
        password: ""
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {}

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={e => this.props.handle_login(e, this.state)}>
                <h4>Log In</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        );
    }

}

class LogoutBox extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <button
                type="button"
                className="logout-btn"
                onClick={e => this.props.handle_logout(e, this.state)}>Logout</button>
        );
    }
}

function App() {
    return (
        <div>
            <Loader/>
        </div>
    );
}

export default App;

ReactDOM.render(
    <App />, document.getElementById("root"));