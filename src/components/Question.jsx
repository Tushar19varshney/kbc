import React, { Component } from 'react';
import './src/css/Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            seconds: 60,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event)
    {
        console.log(event)
    }
    componentDidMount()
    {
        let countdownTime = 60;
        let x = setInterval(() =>
            {
                countdownTime--;
                this.setState({
                    seconds:countdownTime
                })
                if (countdownTime <= 0) {
                    clearInterval(x);
                }
            }, 1000);
    }
    render() {
        return (
            <div className="question-main-div">
                <div className="timer-main-div">
                    <p>{this.state.seconds}</p>
                </div>
                <div className="question-div">
                    This is the question?
                </div>
                <div className="options-div">
                    <p name="option1" value={this.state.option1} onClick={() => this.handleChange('option1')}>Option1</p>
                <p name="option2" value={this.state.option2} onClick={() => this.handleChange('option2')}>Option2</p>
            <p name="option3" value={this.state.option3} onClick={() => this.handleChange('option3')}>Option3</p>
        <p name="option4" value={this.state.option4} onClick={() => this.handleChange('option4')}>Option4</p>
    </div>
            </div>
        );
    }
}

export default Question;
