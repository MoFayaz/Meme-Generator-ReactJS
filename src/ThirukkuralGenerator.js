import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cgisiessydgjpuzaafjq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODIwNDU3MCwiZXhwIjoxOTMzNzgwNTcwfQ.SLIfnO7supG19QAUdLf8eBG38A5ppgfcwi0GuLGdtO0'
const supabase = createClient(supabaseUrl, supabaseKey)

export const ThirukkuralGenerator = () => {
    const [nAme, setNAme] = useState('')
    const [nameArray, setNameArray] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            // let { data: todos, error } = await supabase
            //     .from('todos')
            //     .select('id')

            let { data: todos, error } = await supabase
                .from('Invoices')
                .select('*')

            // const merged = [].concat.apply([], todos);

            setNameArray(todos.concat(todos))
            console.log(nameArray)
        }
        fetchdata()



    }, [])

    const uploadData = async () => {
        const { data: todos, error } = await supabase
            .from('Invoices')
            .insert([
                { NAme: nAme },
            ])
        console.log(todos, error)
        setNAme('')
    }
    return (
        <div style={{textAlign:'center'}}>
            <input value={nAme} onChange={(e) => setNAme(e.target.value)} />
            <button onClick={uploadData}>amukku</button>
        </div>
    )
}