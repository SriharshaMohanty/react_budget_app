import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    const [currency, setCurrency] = useState('$'); // Default currency

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='form-group'>
                    <label htmlFor='currencyDropdown'>Select Currency:</label>
                    <select 
                        id='currencyDropdown' 
                        className='form-control' 
                        value={currency} 
                        onChange={handleCurrencyChange}
                    >
                        <option value='$'>Dollar ($)</option>
                        <option value='£'>Pound (£)</option>
                        <option value='€'>Euro (€)</option>
                        <option value='₹'>Rupee (₹)</option>
                    </select>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget currency={currency} />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget currency={currency} />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal currency={currency} />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList currency={currency} />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={currency} />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
