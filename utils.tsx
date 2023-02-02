import axios from 'axios'



const api = axios.create({
    baseURL: "https://tarot-api-k1ed.onrender.com/api"
})

export const getEntries = (id: string) => {
return api.get(`/entries`, {headers: {authorization: `Bearera ${id}`}})
.then((res) => {
    const journalEntries = res.data.entries
    return journalEntries
}).catch((err)=>{
    console.log(err.message)
})
}