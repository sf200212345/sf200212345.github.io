import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const ProjectsPopup = ({ info }) => {
    const [isClicked, setClicked] = useState(false);
    const [isHovered, setHovered] = useState(false);

  return (
    <div>
        <div className='thumbnail' onClick={() => setClicked(true)} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            <img src={require('../images/' + info.thumbnail )} alt={info.thumbnail} />
            { isHovered ? (<div className='dark-hover'>
                <h4>{info.title}</h4>
                <span>{info.for}</span>
                <span>Click to learn more!</span>
            </div>) : (<></>) }
        </div>
        { isClicked ? 
            (<div className='popup-wrapper'>
                <OutsideClickHandler onOutsideClick={() => setClicked(false)}>
                    <div className='popup'>
                        <button className='exit-btn' onClick={() => setClicked(false)}><i className="fa-solid fa-x"></i></button>
                        <div className='img-container'><img src={require('../images/' + info.mainImage)} alt={info.mainImage} /></div>
                        <div className='text-container'>
                            <h3>{info.title}</h3><span className='date'>{info.date}</span><br />
                            <span className='italic'>{info.for}</span>
                            <p className='desc'>{info.desc}</p>
                            <span className='builtWith'>{info.builtWith}</span>
                            <div className='icon-links'>
                                {info.links.map(curr => (<a key={curr.id} href={curr.link} target="_blank" rel="noopener noreferrer"><i className={curr.class}></i></a>))}
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