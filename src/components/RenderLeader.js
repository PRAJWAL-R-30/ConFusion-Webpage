import React from 'react';
import { Media } from 'reactstrap';

function renderLeader({leader}) {
    return (
        <div className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt='Image Not Found!' />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    );
}

export default renderLeader;