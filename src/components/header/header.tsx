import React from 'react';
import style from './header.module.scss';
import logo from './SongBird2.png';
import { connect } from 'react-redux';

const Header:React.FC = (props: any) => {

  return(
      <div className={style.headerContainer}>
        <div className={style.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={style.scoreContainer}>
          <p>Score: {props.score}</p>
        </div>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    score: state.level.score,
  };
};

export default connect(mapStateToProps, null)(Header);
