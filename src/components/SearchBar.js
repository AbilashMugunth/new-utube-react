import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.proponFormSubmit(this.state.term);
  };

  render() {
    return (
      <section>
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input
                value={this.state.term}
                type="text"
                onChange={this.onInputChange}
                placeholder="Search videos here"
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchBar;
