import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStreams} from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderOwnership(stream) {
    if (stream.userId === this.props.currentUserId)
      return (
          <div className="right floated content">
            <Link 
              to={`/streams/edit/${stream.id}`}
              className="ui button primary"
            >
              Edit
            </Link>
            <button className="ui button negative">Delete</button>
          </div>
      );
  }

  renderList() {
    return this.props.streams.map((item) => (
        <div className="item" key={item.id}>
          {this.renderOwnership(item)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {item.title}
            <div className="description">{item.description}</div>
          </div>
        </div>
    ));
  }

  renderCreate() {
    if (this.props.isSignedIn)
      return (
          <div style={{textAlign: "right"}}>
            <Link to="/streams/new" className="ui button primary">
              Create Stream
            </Link>
          </div>
      );
  }

  render() {
    return (
        <div>
          <h2>Stream</h2>
          <div className="ui celled list">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);