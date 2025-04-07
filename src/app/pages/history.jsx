import React, { useEffect, useState } from 'react'
import useLocalstorage from '../../hooks/useLocalstorage'
import { Link } from 'react-router-dom';

function History() {
    const [searchHistory, setSearchHistory] = useLocalstorage('searchHistory');
    const [history, setHistory] = useState([])
    useEffect(() => {
        console.log(searchHistory)
        if (searchHistory) {
            setHistory(searchHistory)
        }
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Search History</h1>

            <div className="bg-white rounded-lg p-4">
                {
                    history.length === 0 ? <div>
                        <p className="text-center text-gray-500 font-semibold my-8">No history yet</p>
                    </div> :

                        <div className="flex flex-col">
                            {history.map((user, index) => (
                                <div key={user.login} className={`${index === (history.length - 1) ? "" : "border-b-2 border-gray-100"} p-4 w-full flex flex-col md:flex-row justify-between items-center`}>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <img className='w-16 h-16 rounded-full mr-4' src={user.avatar_url} alt={user.login} />
                                        <div className='flex flex-col'>
                                            <h4 className='text-lg font-semibold'>{user.login}</h4>
                                            <a href={user.html_url} className='text-gray-500'>{user.html_url}</a>
                                        </div>
                                    </div>
                                    <Link to={`/${user.login}`} className='bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 md:mt-0'>View Profile</Link>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}

export default History
