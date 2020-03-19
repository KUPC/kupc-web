import React, { Component } from 'react';
import './OnlineInfo.css'
import ClassNames from 'classnames';

class OnlineInfo extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className={ClassNames("OnlineInfo", this.props.className)}>
        <div className="participate">
          <h3>参加方法</h3>
          <ol>
            <li>
              <h4>オンライン参加</h4>
              <div>
                <p>オンサイトでの開催はございません．そのため，事前申し込みの必要はございません．</p>
                <p><a href={data.url_open_contest}>コンテストページ</a> より直接ご参加下さい．</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default OnlineInfo;
