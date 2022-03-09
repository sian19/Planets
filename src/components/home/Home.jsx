import React from 'react';

import './home.css';

function Home() {
    return (
        <div className='container home'>

            <div className='flex-home'>
                <div className='text-title'>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>

                    <div className='container-text'>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>

                <div className='ball'>
                    <div className='big-ball'>
                        <div className='center-ball'><p>EXPLORE</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;