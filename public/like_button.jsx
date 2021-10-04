'use strict';

const e = React.createElement;

// export default LikeButton = (props) => {
//     this.state = { liked: false };

//     if (this.state.liked) {
//         return 'You liked this.';
//     }

//     // Display a "Like" <button>
//     return (
//         <button onClick={() => this.setState({ liked: true })}>
//             Like
//         </button>
//     );
// }

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        // Display a "Like" <button>
        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);