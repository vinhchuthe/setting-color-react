import React from 'react';

export default class Reset extends React.Component {

    onResetDefault = () => {
        this.props.onSettignDefault(true);
    }

    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
        );
    }
}
