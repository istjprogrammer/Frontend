import * as React from 'react';

type useToggleReturnType = [boolean, ()=>void];

function useToggle(): useToggleReturnType{
    const [hideCount, setHideCount] =React.useState(false);
    const toggle = () => setHideCount(!hideCount);
    
    return [hideCount, toggle]
}

export default useToggle;