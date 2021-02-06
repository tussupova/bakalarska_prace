import React from 'react'
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return <div>
        Not found.
        <Link to='/'>Go back</Link>
    </div>
}
