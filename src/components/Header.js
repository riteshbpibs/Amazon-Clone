import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useItemValue } from './StateProvider';

const Header = () => {

    const [{ basket }, dispatch] = useItemValue()

    return (
        <header>
            {/* Top Nav */}
            <div className="header">
                <Link to="/">
                    <img
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        className="header__logo"
                        alt="" />
                </Link>
                <div className="header__search">
                    <input type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <div className="header__option header_navCountry">
                        <img src="https://www.wallpapertip.com/wmimgs/233-2330428_tiranga-wallpaper-galleries.jpg" alt="" />
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In
                        </span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Return
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingCartIcon />
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="header__bottom">
                <MenuIcon className="header__bottomIcon" />
                <p className="header__bottomLink">Prime Video</p>
                <p className="header__bottomLink">Amazon Buisness</p>
                <p className="header__bottomLink">Today's Deals</p>
                <p className="header__bottomLink hidden">Electronics</p>
                <p className="header__bottomLink hidden">Food & Grocery</p>
                <p className="header__bottomLink hidden">Buy Again</p>
                <p className="header__bottomLink hidden">Shopper Toolkit</p>
                <p className="header__bottomLink hidden">Health & Personal Care</p>
            </div>
        </header >
    )
}

export default Header
