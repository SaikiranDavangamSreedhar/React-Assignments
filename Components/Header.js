import React from "react";


const Header = () => {

    return (
        <div className='header-container'>
            <div className="logo-container">
                <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food-4-scaled.jpg" className="logo"/>
            </div>

            <div className="search-bar-container">
                <input type="text" placeholder="Search..." className="search-input"/>
                <button className="search-button">Search</button>


            </div>

            <div className="user-icon-container">
                <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"className="user-icon"/>

            </div>
            
            

              
            


        </div>
    )

};


export default Header;