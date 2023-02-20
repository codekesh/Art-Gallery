import React,{useState} from 'react'

const Sponsors = () => {
    const [index, setIndex]=useState(0)
    const length=4;

    const handlePrevious=()=>{
        const newIndex=length-1;
        setIndex(newIndex>=length)
    }
    const sponsor1 = require('./images/google.png');
    const sponsor2 = require('./images/meta.png');
    const sponsor3 = require('./images/instagram.png');
    const sponsor4 = require('./images/React.png');
    return (
        <div className="sponsors">
            <img src={sponsor1} alt="sponsors" />
            <img src={sponsor2} alt="sponsors" />
            <img src={sponsor3} alt="sponsors" />
            <img src={sponsor4} alt="sponsors" />
        </div>
    )
}

export default Sponsors
