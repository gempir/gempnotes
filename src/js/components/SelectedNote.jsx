import React, { Component } from 'react';
import {connect} from "react-redux";
import fixEncoding from "../helper/fixEncoding";

class SelectedNote extends Component {
    render() {
        if (!this.props.selectedNote) {
            return null;
        }

        const data = this.processData(this.props.selectedNote.payload.body.data);

        return (
            <div className={"SelectedNote"}>
                <div className="SelectedNote-Content" dangerouslySetInnerHTML={{__html: data}}/>
            </div>
        );
    }

    processData = (data) => {
        return fixEncoding(window.atob(data.replace(/-/g, '+').replace(/_/g, '/')));
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        notes: state.notes,
        selectedNote: state.selectedNote,
    };
};

export default connect(mapStateToProps)(SelectedNote);