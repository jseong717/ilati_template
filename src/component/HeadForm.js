import React from 'react';
import './HeadForm.css';

const HeadForm = ({NickName}) =>
{
    return (
        <div className="HeadForm__Panel">
            <div className="HeadForm__Top__Panel">
                <text className="HeadForm__beforeID__Text">Hi, </text>
                <text className="HeadForm__ID__Text">{NickName}</text>
                <button className="HeadForm__LogOut__Button">Log Out</button>
            </div>
            <div className="HeadForm__Bottom__Panel">
            </div>
        </div>
    );
};

export default HeadForm;