import chatErrorCode from "./chatErrorCode"

const hasData = ({ data, status }, [ state, setState ], setLoading ) => {
    
    const statusCode = chatErrorCode( status )

    if( statusCode === true ){
        console.log("success")

        const list = [ ...state ]
        
        list.pop()
        list.push( { role: "assistant", message: data.content, loading: false } )
        setState( list )
    }else{
        console.log("failed")

        const list = [ ...state ]

        list.pop()
        list.push( { role: "assistant", message: statusCode, loading: false, err: true } )
        setState( list )
    }

    setLoading( false )
}

export default hasData