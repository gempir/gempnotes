import React, { Component } from 'react';
import Notes from "./Notes";
import SelectedNote from "./SelectedNote";
import { connect } from "react-redux";
import initializeNoteClient from "../actions/initializeNoteClient";
import setSelectedNote from "../actions/setSelectedNote";
import ThemeToggle from "./ThemeToggle";
import Sync from "./Sync";

class Overview extends Component {

    state = {
        selectedNote: null,
    }

    componentDidMount() {
        this.props.dispatch(initializeNoteClient()).catch(console.error);

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes.length === 0 && this.props.notes.length > 0 && this.state.selectedNote === null) {
            this.props.dispatch(setSelectedNote(this.props.notes[0]));
        }
    }

    render() {
        return (
            <div className={"Overview"}>
                {!this.props.isLoggedIn && <div className={"Login"} onClick={() => gapi.auth2.getAuthInstance().signIn()}>Login with Gmail</div>}
                <Notes />
                <SelectedNote />
                <ThemeToggle />
                <Sync />
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