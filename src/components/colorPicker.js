import React from 'react';

export default class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'green', 'blue', 'yellow']
        };
    }

    onSetBgColor(color) {
        return {
            backgroundColor: color
        };
    }

    onSetActiveColor = (color) => {
        this.props.onReceiveColor(color);
    }

    render() {

        var elmColor = this.state.color.map((color, index) => {
            return <span key={index} style={this.onSetBgColor(color)} className={this.props.color === color ? 'active' : ''} onClick={() => this.onSetActiveColor(color)} ></span>
        });

        return (

            <div className="col-lg-6 col-md-6 col-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColor}
                        <hr />
                    </div>
                </div>
            </div>

        );
    }
}
