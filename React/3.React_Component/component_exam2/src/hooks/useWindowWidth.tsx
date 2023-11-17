import * as React from 'react';

function useWindowWidth(){
   const [width, setWidth] = React.useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
   React.useEffect(
    ()=>{
        window.addEventListener('resize', handleResize);
    });

    return width;
}

export default useWindowWidth;