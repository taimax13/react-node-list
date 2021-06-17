import React, { useState } from 'react';

export function Temp(props) {
    // const [counter, setCounter] = useState(0);
    const { counter, increaseCounter, decreaseCounter } = useTalexState();

    return <div>
        <button onClick={() => { /* setCounter(counter + 1) */ increaseCounter() }}>
            +
        </button>
        <span>{counter + ' ' + props.text}</span>
        <button onClick={() => { /* setCounter(counter - 1) */ decreaseCounter() }}>
            -
        </button>
    </div>
}

// export class Temp extends React.Component {
//     state = {
//         counter: 0
//     }

//     increaseCounter() {
//         this.setState({ ...this.state, counter: this.state.counter + 1 })
//     }

//     decreaseCounter() {
//         this.setState({ ...this.state, counter: this.state.counter - 1 })
//     }

//     render() {
//         return <div>
//             <button onClick={increaseCounter}>
//                 +
//             </button>
//             <span>{counter}</span>
//             <button onClick={decreaseCounter}>
//                 -
//             </button>
//         </div>
//     }
// }

export function useTalexState() {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('Talex');

    function increaseCounter() {
        setCounter(counter + 1);
    }

    function decreaseCounter() {
        setCounter(counter - 1);
    }

    return {
        counter,
        increaseCounter,
        decreaseCounter
    }
}