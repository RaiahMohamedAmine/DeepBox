import React from 'react';
import {NavLink} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import axios from 'axios';
import { withCookies } from 'react-cookie';
import {toast} from 'react-toastify';
import config from '../../../middleware/config';

class SignUp1 extends React.Component {
    state ={
        saveCredantials :false
    }

    onClick () {
        const {username,pass}= this.refs;
        axios({
            method:"POST",
            url:"http://localhost:5200/admin/login",
            data: {
                username :username.value,
                pass :pass.value
            }
        }).then((res) => {
            if (res.data.type==='Err'){
                toast.error(res.data.message,config.TOAST_OPTIONS)
            }
            else{
               // if (this.state.saveCredantials) {
                    const {cookies} = this.props;
                    cookies.set('jwt',res.data.token);
             //   }
                this.props.setLogged();
            }
        })
    }
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <h5 className="mb-4"> Crisis Alert</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username" ref='username'/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" ref='pass'/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" onChange={e=>  this.setState({
                                            saveCredantials :!this.state.saveCredantials
                                        })} />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.onClick.bind(this)}>Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withCookies(SignUp1);


