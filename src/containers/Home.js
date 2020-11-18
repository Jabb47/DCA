import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import axios from 'axios';


class Home extends Component {

    state = {
        data: {},
        data_file : null,
        file_type: "",
    }
    onChange = e => this.setState({[e.target.name]: e.target.value });
    onSubmit = e => async dispatch => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let data_file = this.state.data_file
        let file_type = this.state.file_type
        console.log(data_file)
        console.log(file_type)
        console.log(this.props.isAuthenticated)
    
        const body = JSON.stringify({ data_file, file_type });

        if (this.props.isAuthenticated)
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/data/classify/', body, config);
                dispatch(setAlert('File uploaded Succesfully', 'success'));
                console.log(res.data)
                
            } catch (err) {
                console.log("Did not go through")
                dispatch(setAlert('Error Uploading the file: ' + err , 'error'));
            }
        else
            console.log("Did not go through")
            dispatch(setAlert("You have to be logged in to upload a data file", 'error'));
            return <Redirect to='/login' />;
        
    
      
     
    };
    render() {
        return (
            <React.Fragment>
            <Helmet>
                <title>Data - Classification - Home</title>
                <meta
                    name='description'
                    content='Home page'
                />
            </Helmet>
            <CssBaseline />
            <Container>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
              <form onSubmit={e => this.onSubmit(e)}>
                  <input name="data_file" type="file"  value={this.state.data_file} onChange={e => this.onChange(e)}/>
                  <input name='file_type' type="text" value={this.state.file_type} onChange={e => this.onChange(e)}/>
                  <button >Submit</button>
              </form>
              </Typography>
            </Container>
          </React.Fragment>
        )
    }
};
Home.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(Home);
