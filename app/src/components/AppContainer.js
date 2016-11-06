import React from 'react';

const AppContainer = (props) => {
    let children = null;
    if(props.children){
        children = React.cloneElement(props.children, {
            auth: props.route.auth,
        })
    }
    return <div> {children} </div>;
};

export default AppContainer;