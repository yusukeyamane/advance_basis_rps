import React from "react";
import rock from "../../../images/rock.jpeg";
import scissors from "../../../images/scissors.jpeg";
import paper from "../../../images/paper.jpeg";
import { RpsType } from "../rpsType";

interface Props {
  clickHand?: (val: RpsType) => void;
  selectHand?: RpsType;
  enemyHand?: RpsType;
}

export default class Index extends React.Component<Props> {
  handTypes: RpsType[] = [RpsType.rock, RpsType.scissors, RpsType.paper];

  getOpacity(hand: RpsType, handType?: RpsType) {
    if (this.props.enemyHand !== undefined) {
      return 1;
    }
    switch (hand) {
      case RpsType.rock:
        if (handType !== RpsType.rock) {
          return 0.3;
        }
        break;
      case RpsType.scissors:
        if (handType !== RpsType.scissors) {
          return 0.3;
        }
        break;

      case RpsType.paper:
        if (handType !== RpsType.paper) {
          return 0.3;
        }
        break;
    }
  }

  getHand(handType: RpsType) {
    const imgSize = 100;

    switch (handType) {
      case RpsType.rock:
        return (
          <img
            src={rock}
            alt="rock"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.getOpacity(RpsType.rock, this.props.selectHand),
            }}
          />
        );
      case RpsType.scissors:
        return (
          <img
            src={scissors}
            alt="scissors"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.getOpacity(RpsType.scissors, this.props.selectHand),
            }}
          />
        );
      case RpsType.paper:
        return (
          <img
            src={paper}
            alt="paper"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.getOpacity(RpsType.paper, this.props.selectHand),
            }}
          />
        );
    }
  }

  renderHand() {
    const listItems = this.handTypes.map((handType: RpsType) => (
      <button
        onClick={() => {
          this.props.clickHand && this.props.clickHand(handType);
        }}
        key={handType}
      >
        {this.getHand(handType)}
      </button>
    ));
    return listItems;
  }

  renderEnemyHand() {
    if (this.props.enemyHand !== undefined) {
      return <div>{this.getHand(this.props.enemyHand)}</div>;
    }
    return null;
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.enemyHand === undefined && this.renderHand()}
        {this.props.enemyHand !== undefined && this.renderEnemyHand()}
      </div>
    );
  }
}
