import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()
const baseUrl = 'https://google-search74.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(`${baseUrl}${url}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                },
            })

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            const data = await res.json()
            console.log(data)

            setResults(data)
        } catch (error) {
            console.error('Error fetching results:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <StateContext.Provider
            value={{ getResults, results, searchTerm, setSearchTerm, loading }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
