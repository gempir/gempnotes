import React, { Component } from 'react';

export default class CloudSync extends Component {
    render() {
        return (
            <svg className={`CloudSync` + (this.props.loading ? " CloudSync-Loading" : "")} height="32px" viewBox="0 0 32 32" width="32px">
                <g fill="none" fillRule="evenodd" id="Icons new Arranged Names" stroke="none" strokeWidth="1">
                    <g fill="#000000" id="52 Cloud Sync"><path d="M16,26 C18.4189531,26 20.4367034,24.2822474 20.8999819,22 L22.9291112,22 C22.4438852,25.392291 19.5264743,28 16,28 C13.5555272,28 11.4037064,26.7470086 10.1517571,24.8482429 L9,26 L9,25 L9,23 L9,22 L9.07088885,22 L11.1000181,22 L13,22 L11.6081371,23.3918629 C12.456236,24.945806 14.1050078,26 16,26 Z M20.8999819,20 L20,20 L19,20 L20.3918749,18.6081591 C19.5438006,17.0542175 17.8950132,16 16,16 C13.5810469,16 11.5632966,17.7177526 11.1000181,20 L9.07088885,20 C9.55611479,16.607709 12.4735257,14 16,14 C18.4444875,14 20.5963196,15.2530065 21.8482706,17.151799 L23,16.0000977 L23,20 L22.9291112,20 Z M0,19 C0,16.7828376 1.20753986,14.8416411 3.00211353,13.8029948 C3.10690617,8.92340284 7.0952729,5 12,5 C15.2334976,5 18.0687214,6.70521161 19.6554699,9.26543329 C20.2402065,9.09270496 20.859277,9 21.5,9 C24.2845531,9 26.6601501,10.7509485 27.5858427,13.2118973 C30.129704,13.9074543 32,16.2353674 32,19 C32,22.3069658 29.3136299,25 25.9998243,25 L24.0644804,25 C24.3768209,24.3714946 24.617851,23.701298 24.7769836,23 L26.0031611,23 C28.2105543,23 30,21.2046438 30,19 C30,16.790861 28.2058797,15 26.0031611,15 L25.9725356,15 C25.7238035,12.7500155 23.8162709,11 21.5,11 C20.4427534,11 19.4706636,11.3645993 18.7026063,11.974922 C17.8340685,9.0963276 15.1618462,7 12,7 C8.13400656,7 5,10.1340066 5,14 C5,14.3757911 5.0296122,14.7446659 5.08663046,15.1044183 C3.31778819,15.5175755 2,17.1080834 2,19 C2,21.209139 3.79412025,23 5.99683887,23 L7,23 L7,25 L6.00017566,25 C2.68697795,25 0,22.3137085 0,19 Z M0,19" id="Rectangle 1 copy 4" />
                    </g>
                </g>
            </svg>
        );
    }
}