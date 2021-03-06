import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  }
  /*this key word is annoying. An arrow fn makes the trick!*/
  renderInput = ({ input, label, meta }) => {
    const error = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={error}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {}

  /*important note: whenever we customize a field like injecting new props label
ReduxForm doesn't know what to do with it passing it through this.renderInput
Mind semantic of a form. error by default won't pop up. State explicitly.*/
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Button</button>
      </form>
    );
  }
}
/*in order to process errors error properties must be exactly the same as
 fields properties of the form like title and description*/
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
