import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import AppAlert from './Alert';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {logout} from '../actions/auth';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';


const navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    
    const auth_links =(
      <Button color="inherit" onClick={logout}>Logout</Button>
    )
    const guest_links =(
      <Fragment>
        <Link  to='/login'><Button color="inherit">Sign In</Button></Link>
        <Link  to='/signup'><Button color="inherit">Sign Up</Button></Link>
      </Fragment>
    );
    return(
      <Fragment>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" >
                <Link to="/"><PermDeviceInformationIcon/> Personal Data Classification</Link>
              </Typography>
              <Button color="inherit"><Link  to='/'>Home </Link></Button>
              {!loading && (<Fragment>{ isAuthenticated? auth_links : guest_links}</Fragment>)}
              
            </Toolbar>
          </AppBar>
          
        </div>
        <div className="container mt-4">
          <AppAlert/>
        </div>
      </Fragment>
    )

};
navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const  mapStateToProps = state =>({
  auth: state.auth 
});
export default connect(mapStateToProps, {logout})(navbar);
