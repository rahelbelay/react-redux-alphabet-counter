export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export function actionIncrement() {
    return ({
        type: INCREMENT
    })
}
export function actionDecrement() {
    return ({
        type: DECREMENT
    })
}
export function actionReset() {
    return ({
        type: RESET
    })
}
