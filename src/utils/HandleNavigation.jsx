import React, { useCallback, useState } from 'react'
import React from 'react'

function HandleNavigation() {
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
        //   console.log('y: ',y,window.innerHeight)
          
          if (y > window.scrollY) {
          //   console.log("scrolling up");
          } else if (y < window.scrollY) {
          //   console.log("scrolling down");
          }
          setY(window.scrollY);
        }, [y]
      );
      
      useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
      
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);
    
  return (
    <div>HandleNavigation</div>
  )
}

export default HandleNavigation

