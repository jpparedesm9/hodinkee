import React, { Component } from 'react';
import '../../common/css/style.css';
import spinner from '../../common/img/spinner.gif';

class Spinner extends Component {

    render() {
        return (
            <div className="loader"><img src={spinner} width="40px"/> Loading Content ....</div>
        );
    }
}
export default Spinner;