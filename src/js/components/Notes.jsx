import React, { Component } from 'react';
import { connect } from 'react-redux';
import setSelectedNote from '../actions/setSelectedNote';

class Notes extends Component {
    render() {
        return (
            <div className={"Notes"}>
                {this.props.notes.map(note =>
                    <div className={`Note` + (this.isSelectedNote(note) ? " Note-Selected" : "")} key={note.id} onClick={() => this.handleSelect(note)}>
                        {note.snippet}
                    </div>
                )}
            </div>
        );
    }

    handleSelect = (note) => {
        this.props.dispatch(setSelectedNote(note));
    }

    isSelectedNote(note) {
        return this.props.selectedNote && this.props.selectedNote.id === note.id;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        notes: state.notes,
        selectedNote: state.selectedNote,
    };
};

export default connect(mapStateToProps)(Notes);