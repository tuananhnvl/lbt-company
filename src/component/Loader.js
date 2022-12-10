import {useEffect,useState,useRef} from 'react'

export default function Loader() {
    const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


 // useLocoScroll(!preloader);

  // Run FC after loader end (preloader = false )
  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }

    AnimationDom()

  }, [preloader]);

  const [timer, setTimer] = useState(0);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
    {preloader ? (
        <div className='loader-wrapper'>LBT Imports Pty Ltd</div>
      ) : (<p>Loadder loading</p>)}

    </>
    
  )
}
