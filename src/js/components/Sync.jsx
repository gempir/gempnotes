import React, { Component } from 'react';
import { connect } from 'react-redux';
import CloudSync from '../icons/CloudSync';

class Sync extends Component {
    render() {
        return (
            <div className={"Sync"}>
                <CloudSync loading={this.props.isLoading} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps)(Sync);