import React, {useState} from 'react';
import classes from "./style.module.css";

const Result = (props) => {
    const [modal, setModal] = useState(false)
    const emodjArr = ['😀', '🙂', '🤪', '🔥']
    let emodj
    const answersModal = () => {
        return (
            <div className={classes.correct_container}>
                <div className={classes.x} onClick={() => setModal(false)}>X</div>
                <div className={classes.answers_list}>
                    {props.questArr.map((i, index) => {
                        return (
                            <div key={index} className={classes.answers_item}>{index + 1}. {i.vars[i.correct]}</div>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (props.corr < 9) {
        emodj = emodjArr[2]
    } else if (props.corr < 14) {
        emodj = emodjArr[1]
    } else if (props.corr < 19) {
        emodj = emodjArr[3]
    } else {
        emodj = emodjArr[0]
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <p className={classes.congrats}>Вы отгадали {props.corr} из {props.questArr.length}{emodj}</p>
                    <p className={classes.answers} onClick={() => setModal(true)}>Посмотреть ответы</p>
                    <a href={''} className={classes.btn}>Попробовать еще</a>
                </div>
                {modal && (
                    answersModal()
                )}
            </div>
        </div>
    );
};

export default Result;