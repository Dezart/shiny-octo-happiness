'use strict';

// var React = require('react'),
// ReactDOM = require('react-dom');

var buttonStyles = {
	color: 'red',
	backgroundColor: 'green'
};

var ClickButton = React.createClass({
	displayName: 'ClickButton',

	render: function render() {
		return React.createElement(
			'button',
			{ className: 'btn', style: {}, onClick: this.handleClick },
			' ',
			this.props.label
		);
	}
});

var HelloWorld = React.createClass({
	displayName: 'HelloWorld',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'Hello ',
			this.props.name,
			'!'
		);
	}
});

var FriendsContainer = React.createClass({
	displayName: 'FriendsContainer',

	render: function render() {
		var name = "Dime",
		    friends = ['no', 'nope', 'etc'];
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				'Testing react elements'
			),
			React.createElement(ClickButton, { label: 'Отправить' }),
			React.createElement(
				'h3',
				null,
				'Name = ',
				name
			),
			React.createElement(ShowList, { names: friends })
		);
	}
});

var ShowList = React.createClass({
	displayName: 'ShowList',

	render: function render() {
		var listItems = this.props.names.map(function (friend) {
			return React.createElement(
				'li',
				{ key: friend },
				friend
			);
		});
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'Friends'
			),
			React.createElement(
				'ul',
				null,
				listItems
			)
		);
	}
});

ReactDOM.render(React.createElement(FriendsContainer, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLElBQUksZUFBZTtBQUNsQixRQUFNLEtBRFk7QUFFbEIsa0JBQWdCO0FBRkUsQ0FBbkI7O0FBS0EsSUFBSSxjQUFjLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNuQyxTQUFRLGtCQUFVO0FBQ2pCLFNBQ0M7QUFBQTtBQUFBLEtBQVEsV0FBVSxLQUFsQixFQUF3QixPQUFPLEVBQS9CLEVBQW1DLFNBQVMsS0FBSyxXQUFqRDtBQUFBO0FBQWdFLFFBQUssS0FBTCxDQUFXO0FBQTNFLEdBREQ7QUFHQTtBQUxrQyxDQUFsQixDQUFsQjs7QUFVQSxJQUFJLGFBQWEsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDLFNBQVEsa0JBQVU7QUFDaEIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFZLFFBQUssS0FBTCxDQUFXLElBQXZCO0FBQUE7QUFBQSxHQURGO0FBR0Q7QUFMZ0MsQ0FBbEIsQ0FBakI7O0FBUUEsSUFBSSxtQkFBbUIsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ3hDLFNBQU8sa0JBQVU7QUFDaEIsTUFBSSxPQUFPLE1BQVg7QUFBQSxNQUNDLFVBQVUsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLEtBQWYsQ0FEWDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBRUMsdUJBQUMsV0FBRCxJQUFhLE9BQU8sV0FBcEIsR0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQVk7QUFBWixJQUhEO0FBSUMsdUJBQUMsUUFBRCxJQUFVLE9BQU8sT0FBakI7QUFKRCxHQURGO0FBV0E7QUFmdUMsQ0FBbEIsQ0FBdkI7O0FBa0JBLElBQUksV0FBVyxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDaEMsU0FBUyxrQkFBVztBQUNuQixNQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFxQixVQUFTLE1BQVQsRUFBZ0I7QUFDcEQsVUFBTztBQUFBO0FBQUEsTUFBSSxLQUFNLE1BQVY7QUFBb0I7QUFBcEIsSUFBUDtBQUNBLEdBRmUsQ0FBaEI7QUFHQSxTQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUVBO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFGQSxHQUREO0FBU0E7QUFkK0IsQ0FBbEIsQ0FBZjs7QUFrQkEsU0FBUyxNQUFULENBQWdCLG9CQUFDLGdCQUFELE9BQWhCLEVBQXVDLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUF2QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxyXG5cdC8vIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcblxyXG5sZXQgYnV0dG9uU3R5bGVzID0ge1xyXG5cdGNvbG9yOidyZWQnLFxyXG5cdGJhY2tncm91bmRDb2xvcjonZ3JlZW4nXHJcbn07XHRcclxuXHJcbnZhciBDbGlja0J1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJyBzdHlsZT17e319IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PiB7dGhpcy5wcm9wcy5sYWJlbH08L2J1dHRvbj5cclxuXHRcdClcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG52YXIgSGVsbG9Xb3JsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PkhlbGxvIHt0aGlzLnByb3BzLm5hbWV9ITwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgRnJpZW5kc0NvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcclxuXHRcdHZhciBuYW1lID0gXCJEaW1lXCIsXHJcblx0XHRcdGZyaWVuZHMgPSBbJ25vJywgJ25vcGUnLCAnZXRjJ107XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxkaXY+VGVzdGluZyByZWFjdCBlbGVtZW50czwvZGl2PlxyXG5cdFx0XHRcdFx0PENsaWNrQnV0dG9uIGxhYmVsPXsn0J7RgtC/0YDQsNCy0LjRgtGMJ30+PC9DbGlja0J1dHRvbj5cclxuXHRcdFx0XHRcdDxoMz5OYW1lID0ge25hbWV9PC9oMz5cclxuXHRcdFx0XHRcdDxTaG93TGlzdCBuYW1lcz17ZnJpZW5kc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblxyXG5cclxuXHJcblx0fVxyXG59KTtcclxuXHJcbnZhciBTaG93TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRyZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBsaXN0SXRlbXMgPSB0aGlzLnByb3BzLm5hbWVzLm1hcChmdW5jdGlvbihmcmllbmQpe1xyXG5cdFx0XHRyZXR1cm4gPGxpIGtleT0ge2ZyaWVuZH0gPntmcmllbmR9PC9saT47XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGgzPkZyaWVuZHM8L2gzPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0e2xpc3RJdGVtc31cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8RnJpZW5kc0NvbnRhaW5lciAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
