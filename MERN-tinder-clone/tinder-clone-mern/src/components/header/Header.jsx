import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosButton from "@material-ui/icons/ArrowBackIos";
function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosButton fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
      )}
      <Link to='/'>
        <img
          className='header__logo'
          src='https://www.pinclipart.com/picdir/big/495-4957694_logo-cat-paw-logo-clipart.png'
        />
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
