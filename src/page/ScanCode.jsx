import React, { Component } from "react";
import phone from "../page/img/Vectary texture.png";
import QRCodeBook from "qrcode.react";
class ScanCode extends Component {
  state = {
    value: "https://www.gog.com/",
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="scan">
            <div className="left">
              <div className="content_left">
                <h1 className="title_scan">Scan Code QR</h1>
                <h4 className="about_game">We care about games</h4>
                <p className="info_page">
                  GOG.com is a digital distribution platform with a curated
                  selection of games, a "you buy it, you own it" philosophy, and
                  utmost care about customers.
                </p>
                <p className="description">
                  "GOG has continuously improved since it started adding new
                  games to its libraryPC GAMER"
                </p>
              </div>
            </div>

            <div className="right">
              <img className="img_phone" src={phone} alt="qrphone" />

              <div className="scaner_container">
                <QRCodeBook value={this.state.value} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ScanCode;
