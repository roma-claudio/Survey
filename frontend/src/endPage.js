import React from 'react';
import { withRouter } from "react-router-dom";

class EndPage extends React.Component {

  redirect = () => {
    this.props.history.push('/step')
  }

  render() {
    return(
    <div className="container h-100 position-absolute">
        <div className="row align-items-center h-25 bg-pink">
            <div className="col-10 mx-auto text-center white">
                <h1><b>Diet</b></h1>
                Your score
            </div>
        </div>
        <div className="row align-items-center h-33 bg-grey">
            <div className="col-10 mx-auto text-center">
                <div className="row align-items-center">
                    <div className="col-10 mx-auto text-center">
                        <small><b>UK National average:</b> 2.9 Tons<br/>
                        of CO2 produced per year</small>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-12 mx-auto text-center">
                        <div className="progress bg-white shadow" style={{"height": "2rem"}}>
                            <div className="progress-bar bg-pink m-1" role="progressbar" style={{"borderRadius": ".25rem","width": "75%", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-12 mx-auto text-center">
                        <small><b>Your using 3.2 Tons of CO2 / year</b></small>
                    </div>
                </div>
            </div>
        </div>
        <div className="row align-items-center h-33">
            <div className="col-10 mx-auto text-center">
                <h8><b>Lets take a look at how you look in the <i className="green">Home</i> category...</b></h8><br/>
                <button type="button" className="btn btn-lg btn-block mt-3" style={{'background-color': '#48B07A', 'border-color': '#48B07A', 'color': '#fff', 'border-radius': '0'}}>Continue</button>
            </div>
        </div>
    </div>
    );}
}

export default withRouter(EndPage);
