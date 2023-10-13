import style from './style.module.css';
import {MenuListItem} from "../MenuListItem";
import {Fragment} from "react";
import {levels} from "../../utils/constants";

export function MenuList(props) {

    return (
        <div className={style.box} >
            {
                levels.map((level, index) => (
                    <Fragment key={index} >
                        <MenuListItem 
                            isActive={ props.diffLevel === level }
                            // isActive = { 'MEDIUM' === 'EASY' }
                            setDiffLevel={props.setDiffLevel}
                            level={level} 
                        />
                    </Fragment>
                ))
            }
        </div>
    );
};