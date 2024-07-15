import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ currency }) => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(value, 10),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                className="form-control"
                style={{ display: 'inline-block', width: 'auto', marginLeft: '10px' }}
            />
        </div>
    );
};

export default Budget;
