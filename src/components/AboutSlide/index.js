import { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import "./styles.css"

export function AboutSlide({ titles, descriptions }) {
    const [currentAbout, setCurrentAbout] = useState(0);

    useEffect(() => {
        const slide = document.getElementById(`aboutSlide_${currentAbout}`);
        const colors = {0: "#1c1c1c", 1: "#dbdbdb"};

        titles.forEach((title, i) => {
            document.getElementById(`aboutSlide_${i}`).style.display = "none";
        });

        slide.style.display = "flex";
        document.getElementById("AboutSlide").style.backgroundColor = colors[currentAbout % 2];
        slide.style.color = !(currentAbout % 2) ? "white" : "black";

        document.getElementById("previous_button").style.color = !(currentAbout % 2) ? "white" : "black";
        document.getElementById("next_button").style.color = !(currentAbout % 2) ? "white" : "black";
    }, [currentAbout, titles]);

    return (
        <div id="AboutSlide" className="AboutSlide">
            <div>
                <button onClick={() => {
                    if (currentAbout === 0) return;

                    setCurrentAbout(currentAbout - 1)
                }} id="previous_button"><MdArrowBackIos /></button>
                {titles.map((title, i) => (
                    <span key={i} id={`aboutSlide_${i}`}>
                        <p>{title}</p>
                        <p>{descriptions[i]}</p>
                    </span>
                ))}
                <button onClick={() => {
                    if (currentAbout === (titles.length - 1)) return;

                    setCurrentAbout(currentAbout + 1)
                }} id="next_button"><MdArrowForwardIos /></button>
            </div>
        </div>
    );
  }
