import style from './style.module.css';

export function DisplayBox(props) {
    return (
        <div className={`${style.box} ${style.dFlex}`} >
            {props.diffLevel}
        </div>
    );
};