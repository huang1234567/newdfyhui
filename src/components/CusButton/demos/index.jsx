// import React, { useState } from 'react';
import React, { Component, Fragment } from 'react';
// import { CusButton } from 'newdfyhui';
import { Button } from 'antd';

function cusButtonDemo() {
  return (
    <div>
      <Button
        type="primary"
        style={{ marginRight: '10px' }}
        onClick={() => alert(5566)}
      >
        按钮1
      </Button>
      <Button shape="circle" icon="search" style={{ marginRight: '10px' }} />
      <Button type="danger" style={{ marginRight: '10px' }}>
        按钮3
      </Button>
      <Button type="primary">antd按钮1</Button>
    </div>
  );
}

export default cusButtonDemo;
