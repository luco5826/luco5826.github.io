import React from 'react';
import TextBox from './TextBox';
import 'tachyons';
import { greetings } from './greetings';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: '',
        };
    }

    isPalindrome = (string) => {
        if (string.length < 1) {
            return false;
        }
        string = string.replace(/ /g, '');
        for (let i = 0, j = string.length - 1; i < string.length; i++ , j--) {
            if (string[i] !== string[j]) {
                return false;
            }
        }
        return true;
    }

    onInputChange = (event) => {
        this.setState({ textInput: event.target.value });
    }

    render() {

        // When the page gets re-rendered, we check wether or not the word is palindrome
        // and tell the TextBox component
        let borderColor;
        let showGreeting;
        if (this.isPalindrome(this.state.textInput.toLowerCase())) {
            borderColor = "b--green";
            showGreeting = greetings[Math.floor(Math.random() * 100) % greetings.length];
            console.log(showGreeting);

        } else {
            borderColor = "b--red";
        }

        return (
            <div className='tc ma4 pa3'>
                <TextBox
                    textInputChange={this.onInputChange}
                    border={borderColor}
                    greeting={showGreeting} />
            </div>
        );
    }
}
export default App;