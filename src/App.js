
import Widget from './component/Widget'
import GridCustom from './component/GridCustom'
import './App.css'

import './styles/bootstrap-grid.css'

import NavbarRouters from "./routers/NavbarRouters"

import './font/NewYork.ttf'

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <GridCustom />
      <NavbarRouters />
      <Widget />

    </>

  )
}
