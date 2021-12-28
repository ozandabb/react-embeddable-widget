import React, { Component } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , myCounter } from '../Redux/actions';
import { addReminder } from '../Redux/actions/nameAction';
import { connect } from 'react-redux';

class searchComponent extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
    };
  }

  onChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate", this.props.reminders);
  //   this.props.reminders.push(this.state.name);
  // }


  // updated(){
  //   console.log("updated", this.props.reminders);
  //   this.props.reminders.push(this.state.name);
  //   // this.props.addReminder(this.state.name)
  // }
  

  onsubmit(e) {
    e.preventDefault();

    console.log("this is the form text", this.props.reminders);
    // this.props.reminders.push(this.state.name);
    this.props.addReminder(this.state.name)

  }

  render () {
    return (
      <div>
          <form>
            <input 
            type="text" 
            value={this.state.name}
            onChange={e => this.onChange(e)} />
            <br/><br/>
            <button type="submit" onClick={e => {this.onsubmit(e)}}>Submit</button>
          </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  reminders: state.reminders
});

export default connect(mapStateToProps, {addReminder})(searchComponent);

// export default searchComponent;


// function searchComponent(){

//   const counter = useSelector(state => state.counter);
//   const dispatch = useDispatch();
  

//   return(
//     <div>
//       <h1>Hi -  {counter}</h1>
//       <button onClick={() => dispatch(increment(2))}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );

// }

// export default searchComponent;

