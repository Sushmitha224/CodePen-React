import { useEffect, useState } from "react";

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(() => {
        const jasonValue = localStorage.getItem(prefixedKey);

        if(jasonValue != null) return JSON.parse(jasonValue)

        if(typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey,value])

    return [value, setValue];
}