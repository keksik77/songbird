import React, { useEffect, useState, useMemo, useRef} from 'react';
import {Header, ProgressBar, Riddle, Inputs, ViewBird, Massage} from './components';
import {connect} from 'react-redux';
import birdsData from './data/birdsData';
import {SET_IS_RIGHT,
  SET_NEXT_LEVEL_ACTION,
  SET_RIDDLE_INDEX,
  SET_VIEW_BIRD_INDEX,
  SET_SCORE,
} from './redux/actions'


const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}



function App(props: any) {
  const [isEnd, setIsEnd] = useState(false);
  const controlBtn = useRef<HTMLDivElement>(null);

  useEffect (() => {
    props.SET_RIDDLE_INDEX(getRandomNumber(birdsData[props.level].length));
  }, []);

  useEffect (() => {
    if (!isEnd) {
      controlBtn.current!.textContent = 'Следующий уровень';
    } else {
      controlBtn.current!.textContent = 'Играть еще раз';
    }
  }, [isEnd]);

  useEffect (() => {
    if (props.level >= (birdsData.length - 1)) {
      controlBtn.current!.textContent = 'Показать статистику';
    }
    if (props.isRight) {
      controlBtn.current?.classList.add('activeControlBtn');
    } else {
      controlBtn.current?.classList.remove('activeControlBtn');
    }
  }, [props.isRight]);

  const handlerControlBtn = () => {
    if (props.isRight){
      if (props.level < (birdsData.length - 1)) {
        props.SET_NEXT_LEVEL_ACTION(true);
        props.SET_RIDDLE_INDEX(getRandomNumber(birdsData[props.level].length));
        props.SET_IS_RIGHT(false);
        props.SET_VIEW_BIRD_INDEX(0);
      } else {
        props.SET_RIDDLE_INDEX(getRandomNumber(birdsData[props.level].length));
        props.SET_VIEW_BIRD_INDEX(0);
        setIsEnd(true);
      }
    }
    if (isEnd) {
      props.SET_NEXT_LEVEL_ACTION(false);
      setIsEnd(false);
      props.SET_SCORE(0);
      props.SET_IS_RIGHT(false);
    }
  }

  return (
    <>
    <div className='appWrapper'>
      <Header/>
      <ProgressBar/>
      {!isEnd ? (
        <>
        <Riddle/>
        <div className='rowContainer'>
          <Inputs/>
          <ViewBird/>
        </div>
        </>
      ):(
        <Massage/>
      )}
      <div ref={controlBtn}
        onClick={handlerControlBtn}
        className={'controlBtn'}>
      </div>
      </div>
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
  SET_VIEW_BIRD_INDEX,
  SET_SCORE,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
