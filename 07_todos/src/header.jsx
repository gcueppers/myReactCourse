var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text} 
        onChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        type="text" className="form-control" />
      <span className="input-group-btn">
        <button 
        onClick={this.handleClick}
          className="btn btn-default" type="button">
          Add
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    // sent value of text input to firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    
    this.setState({text: ""});
  },
  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  },
  handleKeyDown: function(evt) {
    if (evt.keyCode == 13 ) {
        return this.handleClick();
    }
  }
})