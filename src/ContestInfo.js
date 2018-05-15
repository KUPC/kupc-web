import React, { Component } from 'react';
import './ContestInfo.css'
import Data from './data';
import ClassNames from 'classnames';
import OnsiteInfo from './OnsiteInfo';
import Footer from './Footer';

class ContestInfo extends Component {
  isUpcomingContest() {
    if (!this.props.data.date) return true;
    return new Date().setHours(0, 0, 0, 0) <= new Date(this.props.data.date).setHours(0, 0, 0, 0);
  }
  render() {
    return (
      <div className="ContestInfo">
        <Title suffix={this.props.data.suffix} />
        <Menu selectedKey={this.props.data.suffix} />
        {this.isUpcomingContest() ?
          <UpcomingContestInfo data={this.props.data} />
          : <OldContestInfo data={this.props.data} />
        }
      </div>
    );
  }
}
class Title extends Component {
  render() {
    return (
      <header className="Title">
        京都大学プログラミングコンテスト {this.props.suffix}
      </header>
    );
  }
}
class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        {Data.contest.map(contest =>
          <li key={contest.suffix} className={ClassNames({ selected: contest.suffix === this.props.selectedKey })}>
            <a href={`/${contest.suffix}/`}>
              {contest.suffix}
            </a>
          </li>
        )}
      </ul>
    );
  }
}
class UpcomingContestInfo extends Component {
  render() {
    const data = this.props.data;
    const {suffix} = data;
    if ('date' in data) data.date = new Date(data.date);
    return (
      <div className="OldContestInfo">
        {'date' in data ?
          <div className="date">KUPC {suffix} は{data.date.getFullYear()}年{data.date.getMonth()+1}月{data.date.getDate()}日に行われます.</div>
        : ''}
        <OnsiteInfo data={data} />
        {'links' in data ?
          <div className="links">
            <header>コンテストページ</header>
            <ul>
              {data.links.map(link =>
                <li key={link.url}>
                  <a href={link.url}>
                    {link.icon ?
                      <img src={link.icon} />
                    : ''}
                    <div>{link.title}</div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        : ''}
        { 'staffs' in data ?
          <div className="staffs">
            <header>運営</header>
            <div>KUPC {suffix} は京都大学の学生によって構成される以下のメンバーで運営されています.</div>
            <ul className="staffs">
            { data.staffs.map(staffName =>
              <li key={staffName}>{staffName}</li>
            )}
            </ul>
          </div>
        : ''}
      </div>
    );
  }
}
class OldContestInfo extends Component {
  tryGetEditorial(fname) {
    try {
      return require(`./editorials/${this.props.data.suffix}/${fname}`);
    }
    catch (err) {}
  }
  // returns: [{id, title, url}]
  getEditorials() {
    const res = [];
    // summary
    const summaryPdf = this.tryGetEditorial('summary.pdf');
    if (summaryPdf) res.push({ id: 'summary', title: '講評', url: summaryPdf });
    // problem editorials
    const {problems} = this.props.data;
    if (problems) {
      for (const {id, title} of problems) {
        const probPdf = this.tryGetEditorial(`${id}.pdf`);
        if (probPdf) res.push({ id: `prob${id}`, title: `${id}: ${title}`, url: probPdf });
      }
    }
    return res;
  }
  render() {
    const data = this.props.data;
    const {suffix} = data;
    if ('date' in data) data.date = new Date(data.date);
    const editorials = this.getEditorials();
    return (
      <div className="OldContestInfo">
        {'date' in data ?
          <div className="date">KUPC {suffix} は{data.date.getFullYear()}年{data.date.getMonth()+1}月{data.date.getDate()}日に行われました.</div>
        : ''}
        {'links' in data ?
          <div className="links">
            <header>問題・結果</header>
            <ul>
              {data.links.map(link =>
                <li key={link.url}>
                  <a href={link.url}>
                    {link.icon ?
                      <img src={link.icon} />
                    : ''}
                    <div>{link.title}</div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        : ''}
        <div className="editorials">
          <header>解説</header>
          { editorials.length > 0 ?
            <ul>
              {editorials.map(({id, title, url}) =>
                  <li key={id}><a href={url}>
                    {title}
                  </a></li>
              )}
            </ul>
            : <div>準備中です.</div>
          }
        </div>
        { 'staffs' in data ?
          <div className="staffs">
            <header>運営</header>
            <div>KUPC {suffix} は以下のメンバーで運営されました.</div>
            <ul className="staffs">
            { data.staffs.map(staffName =>
              <li key={staffName}>{staffName}</li>
            )}
            </ul>
          </div>
        : ''}
        <Footer />
      </div>
    );
  }
}

export default ContestInfo;