import React from 'react'
import './MenuTreePanel.css'

const MenuTreePanel = ({image, text, color}) =>
{
    return (
        <div className="MenuTree__Panel" style={{backgroundColor:`${color}`}}>
            <img src={image}
                 alt="Sorry"
                 style={{width:'32px', height:'32px'}}
                 className="MenuTree__Image"/>
            <text className="MenuTree__Text">{text}</text>
        </div>
    );
}

export default MenuTreePanel;