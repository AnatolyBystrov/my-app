import React from "react";
import { useSelector } from 'react-redux';
type Props = {
    factor: number
}
export const CounterMultiply: React.FC<Props> = ({ factor }) => {
    const counter = useSelector<any, number>(state => state.count.counter)
    return <div>
        <p>counter value is {counter}, factor value is {factor}
        ; counter * factor is {counter * factor}</p>
    </div>
}
