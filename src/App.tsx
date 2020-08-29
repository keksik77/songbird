import React, { useEffect, useState} from 'react';
import {Header, ProgressBar, Riddle, Inputs} from './components';
import {connect} from 'react-redux';
import birdsData from './data/birdsData';
import {SET_IS_RIGHT, SET_NEXT_LEVEL_ACTION, SET_RIDDLE_INDEX} from './redux/actions'

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function App(props: any) {
  const [isEnd, setIsEnd] = useState(false);

  useEffect (() => {
    props.SET_RIDDLE_INDEX(getRandomNumber(birdsData[props.level].length));
  }, []);

  const handlerControlBtn = () => {
    if (props.isRight && (props.level < (birdsData.length - 1))) {
      props.SET_NEXT_LEVEL_ACTION(true);
      props.SET_RIDDLE_INDEX(getRandomNumber(birdsData[props.level].length));
      props.SET_IS_RIGHT(false);
    } else if (isEnd) {
    } else {
      setIsEnd(true);
    }
  }

  return (
    <>
      <Header/>
      <ProgressBar/>
      <Riddle/>
      <Inputs/>
      <div onClick={handlerControlBtn} className='controlBtn'>Next</div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    level: state.level.levelIndex,
    riddleIndex: state.level.riddleIndex,
    isRight: state.level.isRight,
  };
};

const mapDispatchToProps = {
  SET_RIDDLE_INDEX,
  SET_NEXT_LEVEL_ACTION,
  SET_IS_RIGHT,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
