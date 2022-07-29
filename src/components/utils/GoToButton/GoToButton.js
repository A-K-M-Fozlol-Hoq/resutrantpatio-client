import React from 'react';
import './GoToButton.css'
import {useHistory} from "react-router-dom"
const GoToButton = () => {
    const history = useHistory();
    return (
        <div className='mt-3 btn btn-primary goto-abut-us' onClick={()=>history.push('/calculator')}>       
            GET QUOTATION
        </div>
    );
};

export default GoToButton;