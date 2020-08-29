import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import birdsData from '../../data/birdsData';
import style from './viewBird.module.scss';



function ViewBlock(props: any) {
  useEffect(() => {

  }, props.viewBirdIndex);
  console.log(birdsData[props.levelIndex][props.viewBirdIndex]);
  return (
    <div className={style.viewBirdContainer}>

    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    level: state.level.levelIndex,
    viewBirdIndex: state.level.viewBirdIndex,
  };
};


export default connect(mapStateToProps, null)(ViewBlock);
