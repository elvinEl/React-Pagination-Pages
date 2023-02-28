import React from 'react'
import { useState, useEffect } from 'react'
import Users from './components/users';
import Pagination from './components/pagination';


const App = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(5)


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            const res = await fetch('https://randomuser.me/api/?page=3&results=50&seed=abc')
            const data = await res.json()
            console.log(data)
            setLoading(false)
            setUsers(data.results)
        }
        fetchUsers()
    }, [])

    const handleClick = num =>{
        setPage(num)
    }

    return (
        <div>
            <p>Pagination App</p>
            {
                loading ? <p>Loading...</p> : <>
                    <Users users={users} page={page} />
                    <Pagination totalPages={totalPages} handleClick={handleClick} />
                </>
            }
        </div>
    )
}

export default App