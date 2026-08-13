"use client"
import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
export default function Technologies({lang, icon, onClick}){
	const [active, setActive] = useState(false); 
return (
    <StyledWrapper>
      <div className="button-container">
       <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // prevents navigation
            onClick(lang);
	    setActive(!active);
          }}
	   className={`brutalist-button button-2 ${active ? "active" : ""}`} 
        >         
      <div className="openai-logo">
              <img
  src={`https://icon.icepanel.io/Technology/svg/${icon}.svg`}
  alt="Next.js"
  className="openai-icon"
/>     
      </div>
          <div className="button-text">
            <span>{lang}</span>
          </div>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* Common styles */
  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 142px;
    color: #e5dede;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Button 2 */
  .button-2 {
    width: 142px;
    height: 142px;
    background-color: #171A21;
    border: 3px solid #292E38;
    border-radius: 8px;
    padding: 14px 14px;
    box-shadow: 4px 4px 0px #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Black circle animation */
  .button-2::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    background-color: #20252D;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.5s ease-out;
  }

  /* Hover + clicked */
  .button-2:hover::before,
  .button-2.active::before {
    transform: translateX(-50%) scale(1);
    background-color: #6366F1;
  }

  /* Glass animation */
  .button-2::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    pointer-events: none;
    opacity: 0;
  }

  .button-2:hover::after {
    animation: glassPass 0.8s ease-in-out 0.5s forwards;
  }

  @keyframes glassPass {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      opacity: 0.7;
    }

    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
      opacity: 0;
    }
  }

  /* Hover + clicked button movement */
  .button-2:hover,
  .button-2.active {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
    
  }

  /* Actual click/press effect */
  .button-2:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  /* Keep content above pseudo-elements */
  .button-2 .openai-logo,
  .button-2 .button-text {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  /* Logo */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  /* Logo hover + active */
  .brutalist-button:hover .openai-logo,
  .brutalist-button.active .openai-logo {
    transform: translateY(-10px);
  }

  /* Icon */
  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Icon hover + active */
  .brutalist-button:hover .openai-icon,
  .brutalist-button.active .openai-icon {
    width: 40px;
    height: 40px;
    animation: spin-and-zoom
      2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  /* OpenAI text */
  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  /* Text hover + active */
  .brutalist-button:hover .openai-text,
  .brutalist-button.active .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Button text */
  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  /* Button text hover + active */
  .brutalist-button:hover .button-text,
  .brutalist-button.active .button-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: normal;
  }

  .button-text span:last-child {
    font-size: 16px;
  }

  
  /* Clicked icon/text */
  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }
`;
