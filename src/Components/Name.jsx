import { Button, Input } from '@mantine/core'
import { useState } from 'react'
import { FaUser, FaPlus } from 'react-icons/fa'
const Name = () => {
    const [books, setBooks] = useState([])
    const [bookName, setBookName] = useState('')
    const [openInput, setOpenInput] = useState(false)
    const generateRandomColor = () => {

    }
    const handleChange = (e) => {
        if(e.key === 'Enter'){
           const  newButton = <Button leftIcon={<FaUser />} color='green' variant='outline' fullWidth>{bookName}</Button>

            setBooks([...books, newButton])
            setOpenInput(prev => !prev)
        }
    }
    return (
        <>
            <Button onClick={() => setOpenInput(prev => !prev)} variant='subtle' color='blue'  leftIcon={<FaPlus size={18}/>} fullWidth>ADD NEW BOOK</Button>
            <br />
            {openInput &&
                <Input
                 variant='filled'
                 onChange={(e) => setBookName(e.target.value.trim())}
                 onKeyDown={handleChange}
                 />
            }
            <br />
            <Button leftIcon={<FaUser />} color='green' variant='outline' fullWidth >Pull Request</Button>
            <br />
            {books.length > 0 && books.map((book, i) => {
                return(
                <div key={i}>
                {book}
                <br />
                </div>
                )
            })}

            <br />


            </>
    )
}
export { Name }
