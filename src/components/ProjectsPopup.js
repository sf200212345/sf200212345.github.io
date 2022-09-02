import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const ProjectsPopup = ({ info }) => {
    const [isClicked, setClicked] = useState(false);

  return (
    <div>
        <div className='thumbnail' onClick={() => setClicked(true)}>
            <img src={require('../images/headshot.jpg')} alt='headshot.jpg' />
        </div>
        { isClicked ? 
            (<div className='popup-wrapper'>
                <OutsideClickHandler onOutsideClick={() => setClicked(false)}>
                    <div className='popup'>
                        {info.mainImage}
                        {info.title}-{info.for}{info.date}
                    </div>
                </OutsideClickHandler>
            </div>)
            : (<></>)
        }
    </div>
  );
};

export default ProjectsPopup;