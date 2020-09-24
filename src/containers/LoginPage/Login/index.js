import React from 'react';
import {connect} from 'react-redux'
import LoginPageComp from './../../../components/LoginPage/index.js'
import { login, setPushMessage} from './actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        if(!(localStorage.getItem('auth') === undefined || localStorage.getItem("auth") === "" || localStorage.getItem('auth') === null)){
            if (localStorage.getItem('role') === "ROLE_ADMIN") {
                this.props.history.push('/dashboardAdmin')
            } else {
                this.props.history.push('/dashboard')
            }
        }
    }

    goLogin = (event) => {
        this.props.login(event).then(() => {
            if (localStorage.getItem('role') === 'ROLE_ADMIN') {
                this.props.history.push('/dashboardAdmin')
            } else {
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {
        return (
            <div className="container-fluid min-vh-100"
                 style={{ background: "#ffffff"}}>
                <div className="row min-vh-100 justify-content-center align-content-center">
                    <div className="col-md-4"
                         style={{background: "#cdcfd6",  border: "2px", 'border-radius': "12px", padding:"2em"}}>
                        <LoginPageComp onSubmit={(values) => this.goLogin(values)}/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        pushMessage: state.loginPage.pushMessage,
        userRole: state.loginPage.userRole,
    }
}


export default connect(mapStateToProps, {setPushMessage, login})(LoginPage);
