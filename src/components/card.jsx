import React from 'react';
import classes from "./style.module.css";
const Card = (props) => {
    const perc = Math.round(props.step / props.questArr.length * 100);
    return (
        <div className={classes.container}>
            <p className={classes.nav}>{props.step} из {props.questArr.length}</p>
            <div className={classes.progress}>
                <div className={classes.progress_line} style={{width: `${perc}%`}}></div>
            </div>
            <div className={classes.content}>
                <p className={classes.title}>{props.quest.title}</p>
                <ul className={classes.list}>
                    {props.quest.vars.map((i,index) => {
                        return <li onClick={() => props.chooseVar(index)} className={classes.list_item} key={index}>{i}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Card;