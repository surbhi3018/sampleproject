
import { Component } from 'react';
 import { Link, Switch, Route } from 'react-router-dom';

import Details from '../../screens/details/Details';
import Home from '../../screens/home/Home';
import './Header.css';
import ReactLogo from './logo.svg';

class Header extends Component {
    
  
    render() { 
        return (<><div className="header">
            <img src={ReactLogo} alt="Logo" className="logo" />
           
             
           <Link to="/"></Link> 
           <Link to="/details"></Link>
           </div>
         
            <Switch>    
           <Route exact path="/" ><Home/></Route> 

              <Route path="/details" ><Details /></Route>        
                       
                  </Switch> 
                 </>
          
            
           
            
          
              );
    }
}
 
export default Header;