import React, { Component } from "react";
import Leaderboard from "../components/Leaderboard";
import Container from "../components/Container";
import Firebase, { auth, provider } from '../utils/Firebase';
import firebase from 'firebase';
import _ from 'lodash';

class Score extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userround: 0,
        userscore: 0,
        username: '',
        items: []
      }
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sortByScore = this.sortByScore.bind(this);
      this.sortByRound = this.sortByRound.bind(this);
    }
  
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const itemsRef = firebase.database().ref('Users');
      const item = {
        user: this.state.username,
        round: this.state.userround,
        score: this.state.userscore,
        avatar: this.state.avatar
      }
      itemsRef.push(item);
      this.setState({
        username: '',
        userround: 0,
        userscore: 0
      });
    }
  
    componentDidMount(){
      const itemsRef = firebase.database().ref('Users');
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        let counter = 0;
        for (let item in items) {
          if (counter > 49) break;
          newState.push({
            id: item,
            user: items[item].user,
            round: items[item].round,
            score: items[item].score,
            avatar: items[item].avatar
          });
          counter += 1;
        }
          newState.sort(function (a, b) {
          return b.score - a.score;
        });
        this.setState({
          items: newState
        });
      });
    }
//how do you change an element's orientation in React?
    sortByScore() {
      let items = this.state.items
      items.sort(function (a, b) {
        return b.score - a.score;
      });
      this.setState({
        items: items
      });
    }

    sortByRound() {
      let items = this.state.items
      items.sort(function (a, b) {
        return b.round - a.round;
      });
      this.setState({
        items: items
      });
    }

    render() {
      return (
        <div className='container'>
          <header>
              <div className="wrapper">
                <h1>Leaderboard</h1>         
              </div>
          </header>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th></th>
                        <th scope="col">Username</th>
                        <th scope="col">
                          <span onClick={this.sortByRound}>Rounds Completed&nbsp;
                            <i className="fa fa-angle-up" style={{fontSize : "24px"}}></i>
                          </span>
                        </th>
                        <th scope="col">
                          <span onClick={this.sortByScore}>Score&nbsp;
                            <i className="fa fa-angle-down" style={{fontSize : "24px"}}></i>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody className="LeaderTable">
                    {this.state.items.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td><img src={item.avatar} style={{borderRadius : "50%", height : "50px", width : "auto"}}></img></td>
                                <td>{item.user}</td>
                                <td>{item.round}</td>
                                <td>{item.score}</td>
                            </tr>
                        )                
                    })}
                </tbody>
            </table>
        </div>
      );
    }
  }
  
  export default Score;