import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './appcard'


export const GetData = () =>{
    const [peopleData, setPeopleData] = useState()
    useEffect(() => {

        axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                console.log(res.data.results)
                setPeopleData(res.data.results)
                
                
                

            })
            .catch(error => {
                console.log('fetch error: ' + error)
            })
    }, [])

    if (!peopleData) {
        return <h1>loading</h1>
    } else {

    return (
        <div className="cards">
            {
                peopleData.map(person => {
                    return (
                    
                    
                    <Card name={person.name} height={person.height} mass={person.mass} hair_color={person.hair_color} skin_color={person.skin_color} gender={person.gender} birth_year={person.birth_year} />
                    
                    )
                   })
            }


        </div>
    )
    
}
}