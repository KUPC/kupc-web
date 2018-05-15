import React, { Component } from 'react';
import './OnsiteInfo.css'

class OnsiteInfo extends Component {
  render() {
    return (
      <div className="OnsiteInfo">
        <div>
          <header>参加方法</header>
          <ol>
            <li>
              <header>会場参加</header>
              <div>
                <p>オンサイト会場は東京会場と京都会場の２つの会場が設けられます.</p>
                <p>ATNDにて参加を受け付けておりますので、以下のリンクから登録をお願いします.</p>
                <ul>
                  <li><a href="https://atnd.org/events/90551">京都大学プログラミングコンテスト2017 ~東京オンサイト~</a></li>
                  <li><a href="https://atnd.org/events/90552">京都大学プログラミングコンテスト2017 ~京都オンサイト~</a></li>
                </ul>
                <p>当日の集合場所やスケジュール等の情報につきましては、各ATNDページをご参照下さい.</p>
              </div>
            </li>
            <li>
              <header>オンライン参加</header>
              <div>
                <p>オンラインで参加される場合は事前申し込みは必要ございません.</p>
                <p>AtCoder より直接ご参加下さい.</p>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <header>連絡事項</header>
          <div><p>会場には無線LANが使用可能なノートPCを持参してください.</p></div>
        </div>
      </div>
    );
  }
}

export default OnsiteInfo;
