import React from 'react';

export default class Result extends React.Component {

    onSetResultColor() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontsize
        }
    }

    render() {
        return (

            <div className="col-lg-12 col-md-12 col-12">
                <p>Color : {this.props.color} - Fontsize : {this.props.fontsize}px</p>
                <div id="content" style={this.onSetResultColor()} >
                    Nội dung setting
                </div>
            </div>

        );
    }
}
