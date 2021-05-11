import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.log("onRemove not defined"),
  };

  render() {
    const { data, onRemove } = this.props;
    const list = data.map((info) => <PhoneInfo key={info.id} info={info} onRemove={onRemove} />);
    return <div>{list}</div>;
  }
}
