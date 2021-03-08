import React from "react";
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  /*InitialValues - is a special props of ReduxForm*/
  render() {
    if (!this.props.stream) return <div></div>;
    
    const {title, description} = this.props.stream
    
    return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
              initialValues={{title, description}}
              onSubmit={this.onSubmit}
          />
        </div>
    );
  }
}
/*remember! mapStateToProps has two parameters!*/
const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);