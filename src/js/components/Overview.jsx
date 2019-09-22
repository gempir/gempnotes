import React, { Component } from 'react';
import Notes from "./Notes";
import SelectedNote from "./SelectedNote";
import { connect } from "react-redux";
import loadGmailApi from "../actions/loadGmailApi";

class Overview extends Component {

    componentDidMount() {
        this.props.dispatch(loadGmailApi()).catch(console.error);
    }

    render() {
        return (
            <div className={"Overview"}>
                {!this.props.isLoggedIn &&
                    <div className={"Login"} onClick={() => gapi.auth2.getAuthInstance().signIn()}>Login with Gmail</div>}
                <Notes notes={this.props.notes} />
                <SelectedNote />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        notes: state.notes,
    };
};

export default connect(mapStateToProps)(Overview);