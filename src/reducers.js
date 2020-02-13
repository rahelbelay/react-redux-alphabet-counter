
import {
    INCREMENT,
    DECREMENT,
    RESET
} from "./actions";
export function count(state = "m", action) {
    const Alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newState = state;
    console.log('count')
    console.log(action.type)


    switch (action.type) {
        case INCREMENT:
            console.log('increment')

            let letterIndexInc = Alphabets.indexOf(state)
            letterIndexInc += 1
            if (letterIndexInc === Alphabets.length) {
                letterIndexInc = 0
            }
            newState = Alphabets[letterIndexInc]
            break;

        case DECREMENT:
            console.log('decrement')
            let letterIndexDec = Alphabets.indexOf(state)
            letterIndexDec -= 1
            if (letterIndexDec < 0) { //wrap
                letterIndexDec = Alphabets.length - 1
            }
            newState = Alphabets[letterIndexDec]
            break;

        case RESET:
            console.log('reset')

            newState = "m";
            break;

        default:
            break;

    }
    return (
        newState
    )
}