import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addManga } from "../../actions/manga";

export class Form extends Component {
  state = {
    title: "",
    descr: "",
    completed: false
  };

  static propTypes = {
    addManga: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { title, descr, completed } = this.state;
    const manga = { title, descr, completed };
    this.props.addManga(manga);
    this.setState({
      title: "",
      descr: "",
      completed: false
    });
  };
  render() {
    const { title, descr, completed } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add manga</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="descr"
              onChange={this.onChange}
              value={descr}
            />
          </div>
          <div className="checkbox">
            <label>Is complete? </label>
            <input
              className="checkbox"
              type="checkbox"
              name="completed"
              onChange={this.onChange}
              value={true}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addManga })(Form);
