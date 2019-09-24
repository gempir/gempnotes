import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleTheme from "../actions/toggleTheme";

class ThemeToggle extends Component {

    componentDidMount() {
        document.documentElement.setAttribute("data-darkTheme", this.props.darkTheme);
        document.querySelector("meta[name=theme-color]").setAttribute("content", this.props.darkTheme ? "#212121" : "#e8ecee");
    }

    componentDidUpdate(prevProps) {
        if (this.props.darkTheme !== prevProps.darkTheme) {
            document.documentElement.setAttribute("data-darktheme", this.props.darkTheme);
            document.querySelector("meta[name=theme-color]").setAttribute("content", this.props.darkTheme ? "#212121" : "#e8ecee");
        }
    }

    render() {
        return (
            <div className="ThemeToggle">
                <div className="theme-license" dangerouslySetInnerHTML={{
                    __html: `<!--
                Copyright (c) 2019 by Jason Tyler (https://codepen.io/jsndks/pen/qEXzOQ)

                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                -->` }} />
                <div className="theme">
                    <input className="theme-input" type="checkbox" checked={this.props.darkTheme} onChange={() => this.props.dispatch(toggleTheme())} />
                    <div className="theme-bg" />
                    <div className="theme-switch">
                        <div className="theme-switch-figure" />
                        <div className="theme-switch-figureAlt" />
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