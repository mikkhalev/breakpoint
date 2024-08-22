import React, {useState} from 'react';
// @ts-ignore
import classes from './input.module.scss';
interface inputCfg {
    type:string,
    placeholder:string,
    defaultValue:string
}
const Input = ({type, placeholder, defaultValue}:inputCfg) => {

    const [value, setValue] = useState(defaultValue)
    return (
        <input
            className={`${classes.input}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};

export default Input;