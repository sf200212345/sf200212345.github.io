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
                        <button className='exit-btn' onClick={() => setClicked(false)}><i className="fa-solid fa-x"></i></button>
                        <div className='img-container'><img src={require('../images/headshot.jpg')} alt='headshot.jpg' /></div>
                        <div className='text-container'>
                            <h3>{info.title}</h3><span className='date'>{info.date}</span><br />
                            <span className='italic'>{info.for}</span>
                            <p className='desc'>{info.desc}</p>
                            <span className='builtWith'>{info.builtWith}</span>
                            <div className='icon-links'>
                                {info.links.map(curr => (<a key={curr.link} href={curr.link} target="_blank" rel="noopener noreferrer"><i className={curr.class}></i></a>))}
                            </div>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>)
            : (<></>)
        }
    </div>
  );
};

export default ProjectsPopup;