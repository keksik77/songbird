import React, { useMemo, useEffect } from 'react';
import style from './massage.module.scss';
import rankData from '../../data/rank'
import { connect } from 'react-redux';
import {SET_IS_RIGHT, SET_SCORE, SET_VIEW_BIRD_INDEX} from '../../redux/actions'


const Massage:React.FC = (props: any) => {

  const soundSuccess = useMemo(() =>
    new Audio('https://raw.githubusercontent.com/keksik77/soundSongbird/master/success.mp3'),
  []);

  const rankObj = useMemo(() =>
    rankData[Math.floor(props.score / 6)],
  []);

  useEffect(() => {
    soundSuccess.play();
  }, []);


  return(
    <div className={style.massageContainer}>
      <p className={style.rankName}>
        Ты достиг звания <strong>
          {rankObj.name}
        </strong>! со счетом <strong>
          {props.score}
        </strong>
      </p>
      <div className={style.descriptionRank}>
        <img src={rankObj.image}></img>
        <p>{rankObj.description}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    score: state.level.score,
  };
};

const mapDispatchToProps = {
  SET_IS_RIGHT,
  SET_SCORE,
  SET_VIEW_BIRD_INDEX
}

export default connect(mapStateToProps, mapDispatchToProps)(Massage);
