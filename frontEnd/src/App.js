import React from 'react'
import Header from './components/layout/Header/Header/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import './output.css'

const App = () => {
  return (
    <>
      <Header
        className={'header'}
      >
      </Header>
      <Main
        className={'main'}
      >
      </Main>
      <Footer className={'footer'}></Footer>
    </>
  )
}

export default App
