import React from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>じゃんけんに挑戦しよう！</h1>
        <Link to="/rps">
          <h1>じゃんけんページへ</h1>
        </Link>
      </div>
    );
  }
}
