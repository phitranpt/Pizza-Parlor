import React, {Component} from 'react';
import { connect } from 'react-redux';

class OrderTotal extends Component {
    render() {
        return (
            <div>
                <h1>Order Total: ${this.props.reduxState.orderReducer.total}</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(OrderTotal);