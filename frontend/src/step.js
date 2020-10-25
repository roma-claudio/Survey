import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";

class Step extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        }
    }

    componentDidMount() {
        //First time load
        this.fetchData();
    }
    
    fetchData = () => {
        fetch("http://localhost:8080/?id="+this.state.step).then( response => response.json() ).then( (response) => {
            this.setState({
                question: response.questions,
                answer: response.answers
            })
        });
    }

    redirect = () => {
        if (this.state.step === 4) {
            this.props.history.push('/endScreen');
            return;
        }

        var nextStep = this.state.step + 1;
        fetch("http://localhost:8080/?id="+nextStep).then( response => response.json() ).then( (response) => {
            this.setState({
                step: nextStep,
                highlightedCard: null,
                question: response.questions,
                answer: response.answers
            })
        });
    }

    toggleColor = (e) => {
        this.setState({
            highlightedCard: e
        })
    }

    render() {
        if (this.state.answer) {
            return(
                <Fragment>
                    <div className="container h-100 position-absolute bg-grey">
                        <div className="row justify-content-center mt-4">
                            <div className="col-2 text-center pl-2 pr-2">
                                <div className="progress square bg-light-pink" style={{"height": ".5rem"}}>
                                    <div className="progress-bar bg-pink" role="progressbar" style={{"width": (this.state.step * 25) + "%", "ariaValuenow": "75", "ariaValuemin": "0", "ariaValuemax": "100"}}></div>
                                </div>
                                <small className="grey">Diet</small>
                            </div>
                            <div className="col-2 text-center pl-2 pr-2">
                                <div className="progress square bg-dark-grey" style={{"height": ".5rem"}}></div>
                                <small className="grey">Home</small>
                            </div>
                            <div className="col-2 text-center pl-2 pr-2">
                                <div className="progress square bg-dark-grey" style={{"height": ".5rem"}}></div>
                                <small className="grey">Travel</small>
                            </div>
                            <div className="col-2 text-center pl-2 pr-2">
                                <div className="progress square bg-dark-grey" style={{"height": ".5rem"}}></div>
                                <small className="grey">Other</small>
                            </div>
                        </div>
                        <div className="row align-items-start mt-3">
                            <div className="col-6 my-auto">
                                <small className="grey">Question {this.state.step} of 24</small>
                            </div>
                        </div>
                        <div className="row align-items-start mt-2">
                            <div className="col-8 my-auto">
                                <b>{this.state.question}</b>
                            </div>
                        </div>
                        <div className="row align-items-center mt-4 h-25">
                            <div className="col mx-auto text-center d-flex h-50">
                                <div className={this.state.highlightedCard === 0 ? "card w-100 bg-pink white shadow" : "card w-100 bg-white shadow"} onClick={ () => {this.toggleColor(0)}}>
                                    <div className="my-auto p-1">
                                        <small className="fw-5">{this.state.answer[0]}</small>
                                    </div>
                                </div>
                            </div>    
                            <div className="col mx-auto text-center d-flex h-50">
                                <div className={this.state.highlightedCard === 2 ? "card w-100 bg-pink white shadow" : "card w-100 bg-white shadow"} onClick={ () => {this.toggleColor(2)}}>
                                    <div className="my-auto p-1">
                                        <small className="fw-5">{this.state.answer[2]}</small>
                                    </div>
                                </div>
                            </div> 
                            <div className="w-100 mt-3"></div>
                            <div className="col mx-auto text-center d-flex h-50">
                                <div className={this.state.highlightedCard === 1 ? "card w-100 bg-pink white shadow" : "card w-100 bg-white shadow"} onClick={ () => {this.toggleColor(1)}}>    
                                    <div className="my-auto p-1">
                                        <small className="fw-5">{this.state.answer[1]}</small>
                                    </div>
                                </div>
                            </div> 
                            <div className="col mx-auto text-center d-flex h-50">
                                <div className={this.state.highlightedCard === 3 ? "card w-100 bg-pink white shadow" : "card w-100 bg-white shadow"} onClick={ () => {this.toggleColor(3)}}>
                                    <div className="my-auto p-1">
                                        <small className="fw-5">{this.state.answer[3]}</small>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row align-items-center fixed-bottom h-25">
                            <div className="col-11 mx-auto mb-4 text-center">
                                <button onClick={this.redirect} type="button" className="btn btn-block" style={{'backgroundColor': '#48B07A', 'borderColor': '#48B07A', 'borderRadius': '0'}}><small className="white">Next question</small></button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="container h-100 position-absolute bg-grey">
                    </div>
                </Fragment>
            );
        }    
            
        
    }
}

export default withRouter(Step);
