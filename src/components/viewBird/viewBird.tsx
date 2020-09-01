import React, { useRef, useEffect, RefObject } from 'react';
import {connect} from 'react-redux';
import birdsData from '../../data/birdsData';
import style from './viewBird.module.scss';
import AudioPlayer from 'react-h5-audio-player';

function ViewBird(props: any) {

  const viewData = birdsData[props.levelIndex][props.viewBirdIndex - 1];

  return (
    <div className={style.viewBirdContainer}>
      <div className={style.birdDetails}>
      { Boolean(props.viewBirdIndex) ? (
      <>
      <div className={style.mainBirdInfo}>
        <img src={viewData.image} className={style.viewBirdImg}></img>
        <div className={style.cardBody}>
            <h3>{viewData.name}</h3>
          <hr className={style.underLine}/>
            <h3 className={style.species}>{viewData.species}</h3>
          <hr className={style.underLine}/>
          <AudioPlayer
            showJumpControls={false}
            src={viewData.audio}
            autoPlayAfterSrcChange={false}

            className={style.audioPlayerWrapper}>
          </AudioPlayer>
        </div>
      </div>

      <div className={style.descriptionContainer}>
        {viewData.description}
      </div>
      </>

      ):(
        <>
        <span>Послушайте плеер</span>
        <span>Выберите птицу из списка</span>
        </>
      )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    levelIndex: state.level.levelIndex,
    viewBirdIndex: state.level.viewBirdIndex,
    isRight : state.level.isRight,
  };
};


export default connect(mapStateToProps, null)(ViewBird);
