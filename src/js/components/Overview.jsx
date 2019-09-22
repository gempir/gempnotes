import React, { Component } from 'react';
import Notes from "./Notes";
import SelectedNote from "./SelectedNote";
import { connect } from "react-redux";
import loadGmailApi from "../actions/loadGmailApi";
import setSelectedNote from "../actions/setSelectedNote";

class Overview extends Component {

    state = {
        selectedNote: null,
    }

    componentDidMount() {
        this.props.dispatch(loadGmailApi()).catch(console.error);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes.length === 0 && this.props.notes.length > 0 && this.state.selectedNote === null) {
            this.props.dispatch(setSelectedNote(this.props.notes[0]));
        }
    }

    render() {
        return (
            <div className={"Overview"}>
                {!this.props.isLoggedIn &&
                    <div className={"Login"} onClick={() => gapi.auth2.getAuthInstance().signIn()}>Login with Gmail</div>}
                <Notes/>
                <SelectedNote/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        notes: state.notes,
        selectedNote: state.selectedNote,
    };
};

export default connect(mapStateToProps)(Overview);