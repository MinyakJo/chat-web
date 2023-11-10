import chatErrorCode from "./chatErrorCode"

const hasData = ({ data, status }, [ state, setState ], setLoading ) => {
    
    const statusCode = chatErrorCode( status )

    if( statusCode === true ){
        const list = [ ...state ]
        
        list.pop()
        list.push( { role: "assistant", message: data.content, loading: false } )
        setState( list )
    }else{
        const list = [ ...state ]

        list.pop()
        list.push( { role: "assistant", message: statusCode, loading: false, err: true } )
        setState( list )
    }

    setLoading( false )
}

export default hasData