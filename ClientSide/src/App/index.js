import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import {Spinner}from 'react-bootstrap';
import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import SignIn from '../Demo/Authentication/SignIn/SignIn1';
import axios from 'axios';
import { withCookies } from 'react-cookie';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    state= {
        loading : true,
        logged : false
    };
    componentDidMount(){
        const {cookies} = this.props ;
        if (cookies.get('jwt'))
        {
            axios({
                method:"POST",
                url:"http://localhost:5200/admin/verifyAuth",
                headers:{
                    authorization: "Bearer "+cookies.get('jwt')
                }
            }).then((res) => {   
                if (res.data.type==='Err'){
                    this.setState({
                        loading:false
                    });
                }
                else{
                    this.setState({
                        loading:false,
                        logged:true
                    });
                }
            });
        }
        else
        {
            this.setState({
                loading:false
            });
        }
    }
    setLogged = ()=>{
        this.setState({
            logged:true
        }, ()=>{
            console.log (this.state.logged);
        })
    }
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            {
                                this.state.loading ?
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>  :
                                this.state.logged? 
                                <Route path="/" component={AdminLayout} /> : 
                                <SignIn setLogged={this.setLogged.bind(this)}></SignIn>
                            }
                            
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}
export default withCookies(App);
