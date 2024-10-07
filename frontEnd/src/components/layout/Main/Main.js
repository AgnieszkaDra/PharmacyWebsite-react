import React from 'react'
import Section from '../Section/Section'
import { NavLink } from 'react-router-dom'
import drug from '../../../images/leki.webp'
import PropTypes from 'prop-types'
import Typography from '../../ui/Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMortarPestle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Main = (props) => {
  const {
    className
  } = props

  const listDescription = [
    'Złożone zamówienie nie zobowiązuje do wykupienia. Bez problemu możesz zrezygnować, wybrać zamiennik lub zrealizować kolejną receptę',
    'W razie niejasności będziemy się z Panią/Panem kontaktować drogą mailową'
  ]

  const renderListItem = (element, index) => {
    return (
      <li
        className={'headline--h4'}
        key={index}
      >
        {element}
      </li>
    )
  }

  const howToBook = {
    list: [
      {
        id: 1,
        icon: faEnvelope,
        description: 'Wypełnij formularz'
      },
      {
        id: 2,
        icon: faEnvelope,
        description: 'Potwierdź złożenie zamówienia'
      },
      {
        id: 3,
        icon: faEnvelope,
        description: 'Czekaj na informację o przygotowanym zamówienie i zrealizuj je w aptece'
      }
    ]
  }

  const renderElementsItem = (element, index) => {
    return (
      <div
        className={'order-conditions__item'}
        key={index}
      >
        <div className={'order-conditions__item__icon'}>
          <div className={'number'}>
            {element.id + '.'}
          </div>
          <FontAwesomeIcon icon={element.icon}></FontAwesomeIcon>
        </div>
        <Typography
          variant={'h4'}
          className={'order-conditions__item__title'}
        >
          {element.description}
        </Typography>
      </div>
    )
  }

  return (
    <main
      className={className}
    >
      <div className={'flex justify-between'}>
        <Section
          className={'border--pink width-350'}
        >
          <Typography
            variant={'h2'}
            className={'color--main'}
          >
            Złóż rezerwację na leki i odbierz je w aptece
          </Typography>
          <Typography variant={'h3'}>
            W celu złożenia rezerwacji wypełnij formularz
          </Typography>
          <button
            className={'button'}
          >
            <NavLink
              className={'link'}
              to={'/form'}
            >
              Złóż zamówienie
            </NavLink>
            <a
              className={'link'}
              href={'./form.html'}
              id={'myHref'}
            >
            </a>
          </button>
        </Section>
        <Section
          background={drug}
          className={'section border--pink hidden md:block width-350'}
        />
      </div>
      <Section
        className={'mt-6'}
      >
        <Typography
          variant={'h2'}
          className={'color--main text-center'}
        >
          Jak to działa?
        </Typography>
        <div className={'order-conditions'}>
          { howToBook.list.map((element, index) => {
            return renderElementsItem(element, index)
          })}
        </div>
      </Section>
      <div className={'mt-6'}>
        <Typography
          variant={'h2'}
          className={'color--main text-center'}
        >
          Warunki
        </Typography>
        <ul className={'list'}>
          {listDescription.map((item, index) => {
            return renderListItem(item, index)
          })}
        </ul>
      </div>
      <div className={'flex justify-between flex-col md:flex-row'}>
        <Section
          className={'border--pink flex justify-center items-center width-350'}
        >
          <div>
            <FontAwesomeIcon
              icon={faClock}
              className={'icon'}
            />
            <Typography
              variant={'strong'}
              className={'strong'}
            >
              Apteka otwarta
            </Typography>
            <br></br>
            Od poniedziałku do soboty
            <br></br>
            w godzinach
            <br></br>
            od < span > 8:00 do 20:00</span >
          </div>
        </Section>
        <Section
          className={'border--pink flex justify-center items-center width-350'}
        >
          <div>
            <FontAwesomeIcon
              icon={faMortarPestle}
              className={'icon'}
            />
            <Typography
              variant={'strong'}
              className={'strong'}
            >
              Apteka
              <br></br>
              Non-Stop
              <br></br>
              Jelcz-Laskowice
            </Typography>
            <br></br>
            ul. Józefa Bożka 9
            <br></br>
            55-220 Jelcz-Laskowice
            <br></br>
            tel. <span>89078990</span>
          </div>
        </Section>
      </div>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default Main
