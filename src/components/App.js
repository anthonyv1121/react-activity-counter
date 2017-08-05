import { Component } from 'react';
import { ConcertDayCount } from './ConcertDayCount';
import { ConcertDayList } from './ConcertDayList';
import { AddConcertForm } from './AddConcertForm';
import { Menu } from './Menu';

export class App extends Component{
  constructor(props){
      super(props);
      this.state = {
          allConcertDays:
        		[
        			{
        				venue: "Madision Square Garden",
        				date: "2016-01-02",
        				soldout: true,
        				vip: false
        			}
        		]
      };
      //console.log(this.props.params);
      this.addConcert = this.addConcert.bind(this)
  }
  addConcert(newConcert){
    this.setState({
      allConcertDays:[
        ...this.state.allConcertDays,
        newConcert
      ]
    })
  }
  countDays(filter){
    return this.state.allConcertDays.filter(function(day){
      if(filter){
          return day[filter]
      } else{
          return day
      }
    }).length
  }
  //Cleaner ES6 Approach
/*  countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}, */
  render(){
    return(
      <div className="app">
      <Menu />
      { (this.props.location.pathname === "/") ?
      <ConcertDayCount total ={this.countDays()}
                       soldout={this.countDays('countDays')}
                      vip={this.countDays('vip')}
                      /> :
      (this.props.location.pathname === "/add-concert") ? <AddConcertForm onNewConcert = {this.addConcert} /> :
      <ConcertDayList days = {this.state.allConcertDays} filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
