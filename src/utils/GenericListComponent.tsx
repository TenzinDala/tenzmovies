import React, { ReactElement } from 'react'
import Loading from './Loading';

export default function GenericListComponent(props : genrericListProps) {

    if(!props.list) {
        if (props.loadingUI){
            return props.loadingUI
        }
        return <Loading/>
    }
    else if(props.list.length==0) {
        if(props.emptyListUI) {
            return props.emptyListUI
        }
        return  <>There are no elements to Display</>
    }
    else {
        return (
            <>
            {props.children}
            </>
          )
    }
    
 
}

interface genrericListProps {
    list : any;
    loadingUI? : ReactElement;
    emptyListUI? : ReactElement;
    children : ReactElement;
}
