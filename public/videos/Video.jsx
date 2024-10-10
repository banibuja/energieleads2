import React from 'react'
import backgroundvideo from './Flowing+Neon+Curve+Lines_1.mp4';
import './Video.css'


export default function Video() {
  return (
<div className="video-background">
        <video className="background-video" loop autoPlay muted playsInline>
          <source src={backgroundvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>  )
}
