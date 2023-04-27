import React from 'react';

function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Tehran'
        },
        {
            id: 3,
            title: 'Bologna'
        },
        {
            id: 4,
            title: 'New York'
        },


    ];

    return (

        <div className="flex flex-wrap items-center justify-around my-6 sm:my-3 ">

            {cities.map((city) => (
                <button key={city.id} className="text-white text-la font-medium transition ease-out hover:scale-125 "
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))
            }
        </div>


    );
}

export default TopButtons;