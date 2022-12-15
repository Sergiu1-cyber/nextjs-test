import Header from "../header"
import {SaidbarState} from '../../store/contexts/SaidbarContext'

export default function DefaultLayout({children}) {
  return (
    <>
    <SaidbarState >
      <Header />
      <div>
        {children}
      </div>
    </SaidbarState>
    </>
  )
}