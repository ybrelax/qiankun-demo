import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Demo1 extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log('props:', this.props)
    return <div>{this.props.store.count}234</div>;
  }
}

export default Demo1;
