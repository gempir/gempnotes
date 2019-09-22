import React, { Component } from 'react';

export default class Notes extends Component {
    render() {
        console.log(this.props.notes);
        return (
            <div className={"Notes"}>
                {this.props.notes.map(note =>
                    <div className="Note" key={note.id}>
                        {note.snippet}
                    </div>
                )}
            </div>
        );
    }
}