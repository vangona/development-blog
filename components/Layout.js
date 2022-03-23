import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import MobileNavBar from "./nav/MobileNavBar";
import PcNavBar from "./nav/PcNavBar";

export default function Layout({ children }) {
  const [mobileState, setMobileState] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  useEffect(() => {
    if(isMobile) {
      setMobileState(isMobile);
    } else {
      setMobileState(isMobile);
    }
  }, [isMobile])

  return (
    <>
      {mobileState 
        ? <MobileNavBar /> 
        : <PcNavBar />
      }
      <div>{children}</div>
    </>
  )
}