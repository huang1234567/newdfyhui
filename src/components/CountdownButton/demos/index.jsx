import React, { Component,} from 'react';
import { CountdownButton } from 'newdfyhui';

class cusButtonDemo extends Component {
    constructor(props) {
        super(props);
    }
    getCode() {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(123);
            }, 1000)
       })
    }
    render() {
        return (
            <div>
                <CountdownButton onClick={this.getCode}>{'获取验证码'}</CountdownButton>
            </div>
        );
    }
}
  export default cusButtonDemo;