import React, { useRef, useEffect } from 'react';
import style from './riddle.module.scss';
import unknownBird from '../../mistaryBird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import birdsData from '../../data/birdsData'
import { connect } from 'react-redux';
import H5AudioPlayer from 'react-h5-audio-player';

const Riddle:React.FC = (props: any) => {

  const audioRef = useRef<H5AudioPlayer>(null);

  useEffect(()=> {
    if (props.isRight && audioRef.current?.audio.current != undefined) {
      audioRef.current.audio.current.pause();
    }
  }, [props.isRight]);


  const riddleImgSrc = props.isRight ?
    birdsData[props.level][props.riddleIndex].image : unknownBird;


  return(
    <div className={style.riddleContainer}>
      <img src={riddleImgSrc} className={style.riddleImg}></img>
      <div className={style.discriptionContainer}>
        <div>
        { props.isRight ? (
          <h3>{birdsData[props.level][props.riddleIndex].name}</h3>
        ) : (
          <h3>{'•'.repeat(6)}</h3>
        )}
        </div>
      <hr className={style.underLine}/>
      <AudioPlayer
        ref={audioRef}
        showJumpControls={false}
        src={birdsData[props.level][props.riddleIndex].audio}
        autoPlayAfterSrcChange={false}
        className={style.audioPlayerWrapper}></AudioPlayer>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    level: state.level.levelIndex,
    isEnd: state.level.isEnd,
    riddleIndex: state.level.riddleIndex,
    isRight: state.level.isRight,
  };
};

export default connect(mapStateToProps, null)(Riddle);
