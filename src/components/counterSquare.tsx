import React from "react";
import {useSelector} from 'react-redux';

export const CounterSquare: React.FC = () => {
    const counter = useSelector<any, number>(state=>state.count.counter);
    return <div>
        <p>counter value is {counter}, counter ** 2 is {counter ** 2}</p>
    </div>
}