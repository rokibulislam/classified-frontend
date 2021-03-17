import React, { useState, useEffect } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import {getActiveLanguage} from '../util/function'
import FlagNor from '../images/svg/flag-nor'
import FlagEn from '../images/svg/flag-en'

const Language: React.FC<{}> = props => {
  const { t } = useTranslation()
  const [activeLang, updateActiveLang] = useState( getActiveLanguage() )

  function handleClick(lang) {
    i18n.changeLanguage(lang)
    updateActiveLang(lang)
  }

  useEffect(() => {
    localStorage.setItem("activeLanguage", activeLang);
  }, [activeLang])

  return (
    <div id={'mw-lang-switch'} {...props}>
      {activeLang === 'nor' ? (
        <button className={'btn-lang active'} onClick={() => handleClick('en')}>
          <span className='text'>NOR</span>
          <span className='lang-icon'>
            <FlagNor />
          </span>
        </button>
      ) : (
        <button className={'btn-lang active'} onClick={() => handleClick('nor')}>
          <span className='text'>EN</span>
          <span className='lang-icon'>
            <FlagEn />
          </span>
        </button>
      )}
    </div>
  )
}

export default Language
