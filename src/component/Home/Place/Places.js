import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import PlaceHero from '../Hero/PlaceHero'
import Place from './Place';


const Places = () => {
    const { data: places, isLoading, refetch } = useQuery('places', () => fetch('https://comming-italy.onrender.com/places', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>

    }


    return (
        <div className='mt-6'>
            <div className=''>
                <h1 className="text-3xl text-center mb-6 text-primary font-bold">ITALY  <span className="text-black">PLACE</span></h1>
                <PlaceHero></PlaceHero>
            </div>

            <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                
                {places.slice(0,6).map((place =>

                    <Place key={place._id} place={place} refetch={refetch}></Place>
                ))}

            </div>





        </div>
    );
};

export default Places;