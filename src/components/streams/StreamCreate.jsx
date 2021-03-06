import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component{

  renderError({ error, touched }){
    if(touched && error){
      return(
        <div className='ui error message'>
        <div className='header'>
          {error}
        </div>
        </div>
      )
    }
  };

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render(){
    return(
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name='description' component={this.renderInput} label="Enter Title"/>
        <button className='ui button primary'> Submit </button>
      </form>
    );
  };
};

const validate = (formValues) => {
  const error = {};
  if(!formValues.title){
    error.title = 'You must enter a title';
  };

  if(!formValues.description){
    error.description = 'You must enter a description';
  };
  return error;
};

const mapStateToProps = (state) => {
  return {
    actionCreator: state
  }
};

const formWrapped = reduxForm({
  form: 'StreamCreate',
  validate
})(StreamCreate);

export default connect(mapStateToProps, { createStream })(formWrapped);
