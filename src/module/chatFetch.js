import axios from "axios"

const chatFetch = async ( message ) => {
    const res = await axios({
        url: "https://api.openai.com/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${ process.env.REACT_APP_OPENAI_API_KEY }`
        },
        data: JSON.stringify({
            model: "gpt-3.5-turbo",
            max_tokens: 4000,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            messages: [ { role: "user", content: message } ] 
        })
    })

    console.log(res)

    return {
        data: res.data.choices[ 0 ].message,
        status: res.status
    }
}

export default chatFetch