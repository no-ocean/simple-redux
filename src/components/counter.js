import React from 'react';
import { connect } from 'react-redux';
import { inc, dec, rnd } from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                className="btn btn-primary btn-lg"
                onClick={dec}>DEC</button>
            <button 
                className="btn btn-primary btn-lg"
                onClick={inc}>INC</button>
            <button 
                className="btn btn-primary btn-lg"
                onClick={rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            dispatch(rnd(randomValue)); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);