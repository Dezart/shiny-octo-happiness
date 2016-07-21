// var React = require('react'),
	// ReactDOM = require('react-dom');

let buttonStyles = {
	color:'red',
	backgroundColor:'green'
};	

var ClickButton = React.createClass({
	render: function(){
		return (
			<button className='btn' style={{}} onClick={this.handleClick}> {this.props.label}</button>
		)
	}
});



var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
});

var FriendsContainer = React.createClass({
	render:function(){
		var name = "Dime",
			friends = ['no', 'nope', 'etc'];
		return(
				<div>
					<div>Testing react elements</div>
					<ClickButton label={'Отправить'}></ClickButton>
					<h3>Name = {name}</h3>
					<ShowList names={friends} />
				</div>
		);



	}
});

var ShowList = React.createClass({
	render : function() {
		var listItems = this.props.names.map(function(friend){
			return <li key= {friend} >{friend}</li>;
		});
		return (
			<div>
				<h3>Friends</h3>
			<ul>
				{listItems}
			</ul>
			</div>
		);

	}
});


ReactDOM.render(<FriendsContainer  />, document.getElementById('app'));