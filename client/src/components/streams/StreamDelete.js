import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";
import {Link} from "react-router-dom";

/*MIND the syntax! A shorthand of <React.Fragment> is just empty tag <></>
Both tags might be used interchangeably*/
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.stream) return <div></div>;
    const { title } = this.props.stream;
    return (
      <Modal
        title={`Delete Stream ${title}`}
        content="Are you sure you want to delete the stream"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream,
})(StreamDelete);
