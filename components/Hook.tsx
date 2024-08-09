"use client"

import { FC, useState, useEffect } from "react";

interface Props{
    initHook: number;
}

const Hook: FC<Props> = ({ initHook }) => {
    const [count, setCount] = useState<number>(initHook);
    const [data, setDate] = useState();

    
    useEffect(()=>{
        setCount(initHook);
        
        const url = "https://dataapi.moc.go.th/products?keyword=มะพร้าว";
          fetch(url)
           .then((res) => res.json())
           .then((data) => {
            setData(data);
            console.log(data);
        });
    }, [count]);

    const inc = (num: number) => {
        return num + 1;
    };

    const dnc = (num: number) => {
        return num - 1;
    };

    return (
        <>
          <p>Hook</p>
           <div>{count}</div>
           <button onClick={() => setCount(inc(count))}>Increase</button>
           <button onClick={() => setCount(dnc(count))}>Decrease</button>
        </>
    );
};  

Hook.defaultProps = {
    initHook: 0,
};

export default Hook;