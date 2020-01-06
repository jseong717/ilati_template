import React from 'react';
import MenuTreePanel from './MenuTreePanel'

import './LeftMenuForm.css';
import logo from '../asset/ILATI_Logo.png';
import AppMenuIcon from '../asset/Applications_Icon.png';
import PagesMenuIcon from '../asset/Pages_Icon.png';
import FormsMenuIcon from '../asset/Forms_Icon.png';

const LeftMenuForm = () =>
{
    return (
        <div className="LeftMenu__Panel">
            <div className="ILATILogo__Panel">
                <img src={logo} 
                     alt='sorry'
                     style={{width:'88px', height:'21px'}}
                     className="ILATILogo__Image"/>
            </div>
            <div className="LeftMenuCustom__Panel">
                <div className="LeftMenuCustom__TextPanel">
                    <text className="LeftMenuCustom__TextPanel__Text">CUSTOM</text>
                </div>
                <div className="LeftMenuCustom__Application__Panel">
                    <MenuTreePanel image={ AppMenuIcon } text="Applications"/>
                </div>
                <div className="LeftMenuCustom__Pages__Panel">
                    <MenuTreePanel image={ PagesMenuIcon } text="Pages"/>
                </div>
                <div className="LeftMenuCRUD__TextPanel">
                    <text className="LeftMenuCRUD__TextPanel__Text">CRUD</text>
                </div>
            </div>

            <div className="LeftMenuCRUD__Forms__Panel">
                <MenuTreePanel image={ FormsMenuIcon } text="Forms"/>
            </div>
        </div>
    );
};

export default LeftMenuForm;