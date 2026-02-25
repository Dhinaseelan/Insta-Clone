import React from 'react'

function Menu() {
    return (
        <div className='m-4'>
            <div className='d-flex flex-column gap-3'>
                <img className='logo-z' src="src/assets/images/insta-text-logo1.png" alt="insta-text-logo" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-play-btn"></i>Reels</div>
                <div><i className="bi bi-chat-left-text"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notifications</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person"></i>Profile</div>
            </div>
            <div className='position-fixed bottom-0 mb-2 d-flex flex-column gap-3'>
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>
        </div>
    )
}

export default Menu