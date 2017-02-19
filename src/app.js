class CommentBox extends React.Component {
    render() {
	return( <p>This is a test.</p> );
    }
}

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function() {
	console.timeEnd('react-app')
    }
  );
})
