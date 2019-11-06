import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_Reminder, remove_Reminder ,clear_Reminders} from './actions/index';
import './App.css';
import './index.css'
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from './j.thenx.png'
class App extends Component {
state = {
  text : '',
  date: new Date()
}


render_Reminders = () => {
  const {reminders} = this.props;
  return(
    <ul className='list-group'>
            {
          reminders.map(rem => {
            return (
              <li className='list-group-item' key={rem.id}>
                <div >{rem.text} </div>
                <div >{ moment (new Date(rem.date)).fromNow()} </div>
                <div className='btn btn-danger closeIcon' onClick={()=> this.props.remove_Reminder(rem.id)}>X</div>
              </li>
            )
          }
          )
            }
          </ul>
      )
  console.log(reminders)
}
        
render() {
  console.log(this.props)
    return (
      <div className=' App container'>
        <h1 className='reminder-title'>What Should You Do</h1>
        <img src={img} alt='' />
        <input type='text'
         placeholder='Add A Reminder....?' 
         className='form-control'   value={this.state.text}
         onChange={(e) => {this.setState({text: e.target.value})}}
          />
        
           <DatePicker 
            className='form-control'
            value={this.state.date}
            selected={this.state.date}
            onChange={(date) => {this.setState({date})}}
            showTimeSelect
            timeFormat= 'HH:mm'
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption='Jaloooooooooo'
           />
           {this.render_Reminders()}
        <button
          className=' btn btn-primary btn-block' 
          onClick={() =>  { 
            this.props.add_Reminder(this.state.text, this.state.date)
             this.setState({
               text:'',
               date: ''
             })
          }}
          >
            Add Reminder
        </button>
        
        <button className='btn btn-danger btn-block' onClick={()=> this.props.clear_Reminders()} >Clear Reminder</button>
      </div>
    )
  }
}
 
// const mapDispatchToProps = dispatch => {
//   return {
//     add_reminder = () => dispatch(add_reminder())
//   }
// }
// }
// const mapStateToProps = (state) =>  {
//   return {
//     reminders :  state
//   }
// }

export default connect(state => {
  return {
    reminders : state
  }
},{add_Reminder, remove_Reminder,clear_Reminders})(App)
