import React from 'react';

export default class TextSetting extends React.Component {

    onChangeSize(value) {
        this.props.onReceiveSize(value);
    }

    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.textsetting}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.onChangeSize(-1)}>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={() => this.onChangeSize(1)}>Tăng</button>
                </div>
            </div>

        );
    }
}
