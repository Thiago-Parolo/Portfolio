import { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import "./styles.css"

export function ProjectSlide({name, images, descriptions}) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const slide = document.getElementById(`${name}_slide_${currentImage}`);

        images.forEach((img, i) => {
            document.getElementById(`${name}_slide_${i}`).style.display = "none";
        });

        slide.style.display = "flex";
    }, [currentImage, images, name]);

    return (
        <div className="ProjectSlide">
            <p>{name}</p>
            <div>
                <button onClick={() => {
                    if (currentImage === 0) return;

                    setCurrentImage(currentImage - 1)
                }} id="previous_button"><MdArrowBackIos /></button>
                {images.map((img, i) => (
                    <span key={i} id={`${name}_slide_${i}`}>
                        <img src={img} alt={`${name}_img_${i}`}/>
                        <p>{descriptions[i]}</p>
                    </span>
                ))}
                <button onClick={() => {
                    if (currentImage === (images.length - 1)) return;

                    setCurrentImage(currentImage + 1)
                }} id="next_button"><MdArrowForwardIos /></button>
            </div>
        </div>
    );
  }
