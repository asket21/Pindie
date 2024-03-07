'use client';
import Styles from "./Header.module.css"
import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Header = (props) => {
  const pathname = usePathname();
  const [popupIsOpened,setPopupIsOpened] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true);
  }

  const closePopup = () => {
    setPopupIsOpened(false);
  }


    return (
      <header className={Styles["header"]}>
        
        {pathname === "/" ? <img className={`${Styles["logo"]} ${Styles["logo__image"]}`} src="/images/logo.svg" alt="Логотип Pindie"/> : <Link href="/" className={Styles["logo"]}><img className={Styles["logo__image"]} src="/images/logo.svg" alt="Логотип Pindie"/></Link>}
        
      
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link href="/new" className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""}`}>
              Новинки
              </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/popular" className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : "" }`}>Популярные</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/shooter" className={`${Styles["menu__link"]} ${pathname === "/shooter" ? Styles["menu__link_active"] : ""}`}>Шутеры</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/runner" className={`${Styles["menu__link"]} ${pathname === "/runner" ? Styles["menu__link_active"] : ""}`}>Ранеры</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/pixel" className={`${Styles["menu__link"]} ${pathname === "/pixel" ? Styles["menu__link_active"] : ""}`}>Пиксельные</Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/TDS" className={`${Styles["menu__link"]} ${pathname === "/TDS" ? Styles["menu__link_active"] : ""}`}>TDS</Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          <button  className={Styles["auth__button"]} onClick={openPopup}>
            Войти
            </button>
        </div>
      
      </nav>
      {popupIsOpened && <><Overlay closePopup = {closePopup} isOpen = {popupIsOpened}/>
      <Popup closePopup = {closePopup} isOpen = {popupIsOpened}/></>}
      </header>
    
    )
  }
  