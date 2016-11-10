import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

const AppContainer = (props) => {
    let children = null;
    if(props.children){
        children = React.cloneElement(props.children, {
            auth: props.route.auth,
        })
    }
    return (
        <div>
            <LoadingBar />
            {children}
        </div>
    );
};

export default AppContainer;