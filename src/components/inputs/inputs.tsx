import React, { useEffect, useState, useMemo } from 'react';
import style from './inputs.module.scss';
import birdsData from '../../data/birdsData'
import { connect } from 'react-redux';
import {SET_IS_RIGHT, SET_SCORE} from '../../redux/actions'


const Inputs:React.FC = (prop: any) => {
  const [listClick, setListClick] = useState<Object>([]);
  const birds = birdsData[prop.level];
  const [sessionScore,setSessionScore] = useState(5);

  useEffect(()=> {
    if (Array.isArray(listClick) && (listClick.length > 0)) {
      listClick.forEach((element) => {
        element.className = style.liBtn;
      });
      setListClick([]);
      prop.SET_SCORE(prop.score + sessionScore);
      setSessionScore(5);
    }
  }, [prop.level])

  const handlerListItemClick = (event: React.MouseEvent<HTMLElement>) => {
    if ((Number(event.currentTarget.firstElementChild?.classList.length) <= 1) && !prop.isRight) {

      if (Array.isArray(listClick)) {
        setListClick(listClick.concat([event.currentTarget.firstElementChild]));
      }

      if (event.currentTarget.id === prop.riddle.toString()) {
        event.currentTarget.firstElementChild?.classList.add(style.rightAns);
        prop.SET_IS_RIGHT(true);
      } else {
        event.currentTarget.firstElementChild?.classList.add(style.errorAns);
        if (sessionScore > 0) setSessionScore(sessionScore - 1);
      }
    } else {
      console.log('вы кто такие, я вас не звал, идите нахуй');
    }
  }

  return(
    <div className={style.riddleContainer}>
      <ul className={style.itemList} id='itemListOfRiddles'>
        { birds.map(function(item, i){
            return <li key={i} id={i.toString()} className={style.listGroupItem} onClick={handlerListItemClick}>
              <span className={style.liBtn}></span>{item.name}
              </li>
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    level: state.level.levelIndex,
    riddle: state.level.riddleIndex,
    isRight: state.level.isRight,
    score: state.level.score,
  };
};

const mapDispatchToProps = {
  SET_IS_RIGHT,
  SET_SCORE,
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
