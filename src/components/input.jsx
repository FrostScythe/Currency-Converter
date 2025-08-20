import { useState } from 'react';

function InputBox() {
    const [value, setValue] = useState('');

    return (
        <div className="p-4">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Amount"
                className="p-2 border border-gray-300 rounded"
            />
        </div>
    );
}

export default InputBox;