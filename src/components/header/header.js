import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/utility';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.styles";

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer className='options'>
            <OptionLink className='option' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink className='option' to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                    <OptionDiv className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    ) : (
                    <OptionDiv className='option' to='/signin'>
                        SIGN IN
                    </OptionDiv>
                )}
                <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);