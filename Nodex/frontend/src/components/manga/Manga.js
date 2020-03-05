import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getManga, deleteManga } from "../../actions/manga";

export class Manga extends Component {
  static propTypes = {
    manga: PropTypes.array.isRequired,
    getManga: PropTypes.func.isRequired,
    deleteManga: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getManga();
  }

  render() {
    return (
      <Fragment>
        <h2>Manga</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.manga.map(manga => (
              <tr key={manga.id}>
                <td>{manga.title}</td>
                <td>{manga.descr}</td>
                <td>
                  <button
                    onClick={this.props.deleteManga.bind(this, manga.id)}
                    className="btn btn-danger btn-sm"
                  >
                    BEGONE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  manga: state.manga.manga
});

export default connect(mapStateToProps, { getManga, deleteManga })(Manga);
