import Header from '../header';
import { saidebarStatus } from '../../store/saidebarStatus';

export default function DefaultLayout({ children }) {
  const TogleSaidbar = saidebarStatus();

  return (
    <>
      <Header props={TogleSaidbar} />

      <div onClick={() => TogleSaidbar.Hide()} className="h-screen">
        {children}
      </div>
    </>
  );
}
