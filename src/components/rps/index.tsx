import React from "react";
import { Link } from "react-router-dom";
import Hand from "./hand";
import { RpsType } from "./rpsType";

interface Props {}
interface State {
  selectHand: RpsType | undefined;
  enemyHand: RpsType | undefined;
  resultString: string;
  winCount: number;
  battleCount: number;
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectHand: undefined,
      enemyHand: undefined,
      resultString: "最初はグーじゃんけん",
      winCount: 0,
      battleCount: 0,
    };
  }

  componentDidMount() {
    alert("手を選ぶと、勝敗が決まるよ！\n手を選んでね！");
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      this.state.selectHand !== undefined &&
      prevState.selectHand !== this.state.selectHand
    ) {
      const enemyHand: RpsType = Math.floor(Math.random() * 3);
      this.setState({ enemyHand: enemyHand });
      this.resultbattle(this.state.selectHand, enemyHand);
    }
  }

  componentWillUnmount() {
    alert(
      `【戦績】\n${this.state.battleCount}戦中、${this.state.winCount}勝でした。`
    );
  }

  handleOnClick(val: RpsType) {
    this.setState({ selectHand: val });
  }

  resultbattle(selectHand: RpsType, enemyHand: RpsType) {
    this.setState({ battleCount: this.state.battleCount + 1 });
    if (selectHand === enemyHand) {
      return this.setState({ resultString: "あいこで" });
    }
    switch (selectHand) {
      case RpsType.rock:
        if (enemyHand === RpsType.scissors) {
          this.setState({
            resultString: "勝ち",
            winCount: this.state.winCount + 1,
          });
        } else {
          this.setState({ resultString: "負け" });
        }
        break;
      case RpsType.scissors:
        if (enemyHand === RpsType.paper) {
          this.setState({
            resultString: "勝ち",
            winCount: this.state.winCount + 1,
          });
        } else {
          this.setState({ resultString: "負け" });
        }
        break;
      case RpsType.paper:
        if (enemyHand === RpsType.rock) {
          this.setState({
            resultString: "勝ち",
            winCount: this.state.winCount + 1,
          });
        } else {
          this.setState({ resultString: "負け" });
        }
        break;
    }
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
        <h1>じゃんけんページ</h1>
        <h2>自分の手</h2>
        <Hand
          selectHand={this.state.selectHand}
          clickHand={(val: RpsType) => this.handleOnClick(val)}
        />
        <h1 style={{ color: "red" }}>{this.state.resultString}</h1>
        <h2 style={{ marginTop: 10 }}>相手の手</h2>
        <Hand enemyHand={this.state.enemyHand} />
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}
