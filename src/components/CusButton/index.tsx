import React, { Component, Fragment, type FC, ReactNode } from 'react';
import { Button } from 'antd';

class CusButton extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    let { ...other } = this.props;
    return <Button {...other}></Button>;
  }
}

export default CusButton;
