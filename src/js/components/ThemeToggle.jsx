import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleTheme from "../actions/toggleTheme";

class ThemeToggle extends Component {

    componentDidMount() {
        document.documentElement.setAttribute("data-darkTheme", this.props.darkTheme);
    }

    componentDidUpdate(prevProps) {
        if (this.props.darkTheme !== prevProps.darkTheme) {
            document.documentElement.setAttribute("data-darktheme", this.props.darkTheme);
        }
    }

    render() {
        return (
            <div className="ThemeToggle">
                <div className="theme">
                    <input className="theme-input" type="checkbox" checked={this.props.darkTheme} onChange={() => this.props.dispatch(toggleTheme())} />
                    <div className="theme-bg"></div>
                    <div className="theme-switch">
                        <div className="theme-switch-figure"></div>
                        <div className="theme-switch-figureAlt"></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        darkTheme: state.darkTheme,
    };
};

export default connect(mapStateToProps)(ThemeToggle);