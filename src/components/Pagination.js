import React from 'react';

function Pagination({toTheNextPage, toThePreviousPage}) {
    return (
        <>
            <button onClick={toThePreviousPage}>previous</button>
            <button onClick={toTheNextPage}>next</button>

        </>
    );
}

export default Pagination;