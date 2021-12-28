import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

// function nameComponent(){

//     // const counter = useSelector(state => state.counter);
//     console.log("thiihihihihi", this.props.reminders);
  
//     return(
//       <div>
//         <p>This is the nUmber in Name Component -  {myCounter}</p>
//       </div>
//     );
  
//   }
  
  // export default nameComponent;

   class nameComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        valArray : []
      };

      // console.log("thiihihihihi", this.props.reminders);
    }

    componentDidUpdate() {
      console.log("componentDidUpdate", this.props.reminders);
    }

    

    

    onsubmit(e) {
      e.preventDefault();

      this.props.dispatch(updateState(key, value)).then(()=>{
        alert(this.props.reminders)
     })
  
      // console.log("this is the form text", this.props.reminders);
      this.setState({
        valArray: this.props.reminders,
      })
  
    }


    render() {
      
        return (
            <div>
                <p style={{color:'red'}}>This is the Name Widget.</p>
                <p>{this.props.reminders}</p><br/>
                <button type="submit" onClick={e => {this.onsubmit(e)}}>Submit</button><br/>
                <p>Search Value - {this.state.valArray}</p><br/>
            </div>
        )
    }
}

  
  const mapStateToProps = (state) => ({
    reminders: state.reminders
  });

  export default connect(mapStateToProps)(nameComponent);

// export default class nameComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <p style={{color:'red'}}>This is the Name Widget.</p>
//                 <p>Display text here</p>
//             </div>
//         )
//     }
// }


// onUpdated = () => {
//   console.log("onUpdated", this.props.reminders);
// }

// componentDidMount() {
//   console.log("componentDidMount", this.props.reminders);
// }

// componentDidUpdate() {
//   console.log("componentDidUpdate", this.props.reminders);
// }

// shouldComponentUpdate() {
//   console.log("shouldComponentUpdate", this.props.reminders);
// }

// static getDerivedStateFromProps(props, state) {
//   return {favoritecolor: props.favcol };
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//   console.log("getSnapshotBeforeUpdate", this.props.reminders);
//   console.log("getSnapshotBeforeUpdate prevProps", prevProps);
//   console.log("getSnapshotBeforeUpdate prevState", prevState);
// }

// shouldComponentUpdate(nextProps, nextState){
//   console.log("shouldComponentUpdate", this.props.reminders);
//   console.log("shouldComponentUpdate nextProps", nextProps);
//   console.log("shouldComponentUpdate nextState", nextState);
// }

// componentWillUnmount(){
//   console.log("componentWillUnmount", this.props.reminders);
// }

// componentDidCatch(error, info){
//   console.log("componentDidCatch", this.props.reminders);
//   console.log("componentDidCatch info", info);
//   console.log("componentDidCatch error", error);
// }
