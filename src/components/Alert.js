import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Alert from '@material-ui/lab/Alert';



const AppAlert = ({alerts}) => alerts != null && alerts.length > 0 && alerts.map(alert =>(
    <div key={alert.id}>
      <Alert variant="outlined" severity= {alert.alertType} >
        {alert.msg}
      </Alert>
     
    </div>
));



Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(AppAlert);


 