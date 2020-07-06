import React from "react";
import { RpsType } from "../rpsType";

interface Props {
  clickHand?: (val: RpsType) => void;
  selectHand?: RpsType;
  handType: RpsType;
  selected: Boolean;
}

export default class Index extends React.Component<Props> {
  render() {
    const imgSize = 100;
    const handType = RpsType[this.props.handType];

    return (
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            this.setState({ opacity: 1.0 })
            this.props.clickHand && this.props.clickHand(this.props.handType);
          }}
        >
          <img
            src={`images/${handType}.jpeg`}
            alt="rock"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.props.selected ? '1.0' : '0.3',
            }}
          />
        </button>
      </div>
    );
  }
}
