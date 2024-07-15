import React, {useState} from 'react';

function Incrementor02({begin, step}) {
    const [val, setVal] = useState(begin);
    // const [val2, setVal2] = useState(20);

    return (
        <div>
            <button onClick={() => {
                setVal(val + step);
            }}>
                <strong>
                    {'+'}
                </strong>
            </button>
            {' '}
            <span>
                {val}
            </span>
        </div>
    );
}

export default Incrementor02