import './UserCard.css'
import React from 'react';
import PropTypes from 'prop-types'

const UserCard = ({data}) => {
    console.log(data)
    return(
        <div className='user-card'>
            {
                data.map((user, index) =>{
                    return <div className='card'>
                        
                        <img style={{width: '50px', height: '50px'}} src = {user.avatar} alt= {user.name} />
                        
                        <div className='info'>
                            {user.name}<br />
                            <br />
                            {user.email}
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default UserCard;