import { useState } from 'react';
import { Timer } from './components/Timer';
import {Filter} from "./components/Filter";


export const App = () => {

    return (
        <div>
            <Filter />
            {/* <Timer/> */}
        </div>
    );
}