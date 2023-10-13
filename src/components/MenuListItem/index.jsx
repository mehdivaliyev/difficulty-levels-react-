import style from "../MenuList/style.module.css";
import {Fragment, useState} from "react";

export function MenuListItem(props) {
    const {level, setDiffLevel, isActive} = props;

    // let isHovered = false;
    const [isHovered, setIsHovered] = useState(false); // async

    function active() {
        // isHovered = true;
        setIsHovered(true);
    }

    function inactive() {
        // isHovered = false;
        setIsHovered(false);
    }

    return (
            <div
                onClick={() => setDiffLevel(level)}
                className={style.item}
                onMouseEnter={active}
                onMouseLeave={inactive}
                style={{backgroundColor: isActive || isHovered ? '#FFFFFF' : '#BEDCFE'}}
            >
                {level}
            </div>
    );
};