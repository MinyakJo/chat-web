import chatErrorCode from "./chatErrorCode"

const hasData = ({ data, status }, [ state, setState ] ) => {
    
    const statusCode = chatErrorCode( status )

    if( statusCode === true ){
        console.log("success")

        const list = [ ...state ]
        console.log(list)
        list.pop()
        list.push( { role: "assistant", message: data.content, loading: false } )
        setState( list )
    }else{
        console.log("failed")

        const list = [ ...state ]

        list.pop()
        list.push( { role: "assistant", message: status, loading: false } )
        setState( list )
    }
}

export default hasData