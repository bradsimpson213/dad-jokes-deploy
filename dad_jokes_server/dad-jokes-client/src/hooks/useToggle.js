import { useState } from "react";

const useToggle = (initialVal) => {
    const [ state, setState ] = useState(initialVal);
    const toggle = () => {
        setState(!state)
    };
    return [ state, toggle ]
};

export default useToggle;