import { useState, useEffect, useCallback } from "react";

const useImgResize = (parent) => {
    const [imgWidth, setImgWidth] = useState(0);

    const handleImgResize = useCallback(
      e => {
        if(parent.current === null) {
            setImgWidth(window.innerWidth/2)
        } else {
            setImgWidth(parent.current.offsetWidth)
        }
      }, [imgWidth]);
  
    useEffect(() => {
        setImgWidth(parent.current.offsetWidth)
        window.addEventListener('resize', handleImgResize)
  
        return () => {
          window.removeEventListener('resize again', handleImgResize)
        }
    }, [handleImgResize, window.innerWidth])

    return imgWidth
};

export default useImgResize;