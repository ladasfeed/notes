import React from 'react';
import {connect} from 'react-redux'
import App from "../App";
import {initializeApp} from "../redux/actionCreators/actionCreators";

const mapStateToProps = (state) => {
    return {
        initialized: state.appReducer.initialized
    }
};

const dispatchProps = {initializeApp};

export default connect(mapStateToProps, dispatchProps)(App);
