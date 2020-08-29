import React, { ReactElement, MouseEventHandler } from 'react';
import style from './progressBar.module.scss';
import { connect } from 'react-redux';
import birdsData from '../../data/birdsData';


const ProgressBar:React.FC = (props: any) => {

  const handlerMenu = (event: React.MouseEvent<HTMLElement>) => {
      event.currentTarget.firstElementChild?.classList.add(style.active);
  }

  return(
      <ul className={style.progressBarContainer} onClick={handlerMenu}>
        { birdsData.map(function(item, index){
            const activeClass = props.level >= index ? style.active : '';
            return <li className={activeClass} key={index}><p>Level {index+1}</p></li>
        })}
      </ul>
  );
}

const mapStateToProps = (state: any) => {
  return {
    level: state.level.levelIndex,
  };
};


export default connect(mapStateToProps, null)(ProgressBar);
