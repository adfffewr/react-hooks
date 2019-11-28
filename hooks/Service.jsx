import React , {  } from 'react';

import UseState from './UseState';
import UseInput from './UseInput';
import UseTabs from './UseTabs';
import UseEffect from './UseEffect';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseConfirm from './UseConfirm';
import UsePreventLeave from './UsePreventLeave';
import UseBeforeLeave from './UseBeforeLeave';
import UseFadeIn from './UseFadeIn';
import UseNetwork from './UseNetwork';

const Service = () => {
    

    return(
        <>
            <UseState></UseState>
            <UseInput></UseInput>
            <UseTabs></UseTabs>
            <UseEffect></UseEffect>
            <UseTitle></UseTitle>
            <UseClick></UseClick>
            <UseConfirm></UseConfirm>
            <UsePreventLeave></UsePreventLeave>
            <UseBeforeLeave></UseBeforeLeave>
            <UseFadeIn></UseFadeIn>
            <UseNetwork></UseNetwork>
        </>
    );
}

export default Service;