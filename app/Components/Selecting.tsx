import React from "react";
import styled from "styled-components";
import { useState } from "react";
interface props {
  Techs: string;
}
export default function Selecting({ Techs }: props) {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTechs(e.target.checked); // true if selected, false if not
    console.log(selectedTechs);
  };
  return (
    <StyledWrapper>
      <div className="checkbox-wrapper-16">
        <label className="checkbox-wrapper">
          <input className="checkbox-input" type="checkbox" onChange={Change} />
          <span className="checkbox-tile">
            <span className="checkbox-icon">
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                height={192}
                width={192}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height={256} width={256} />
                <polygon
                  strokeWidth={12}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  points="72 40 184 40 240 104 128 224 16 104 72 40"
                />
                <polygon
                  strokeWidth={12}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  points="177.091 104 128 224 78.909 104 128 40 177.091 104"
                />
                <line
                  strokeWidth={12}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  y2={104}
                  x2={240}
                  y1={104}
                  x1={16}
                />
              </svg>
            </span>
            <span className="checkbox-label">{Techs}</span>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper-16 *,
  .checkbox-wrapper-16 *:after,
  .checkbox-wrapper-16 *:before {
    box-sizing: border-box;
  }

  .checkbox-wrapper-16 .checkbox-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .checkbox-wrapper-16 .checkbox-input:checked + .checkbox-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #2260ff;
  }

  .checkbox-wrapper-16 .checkbox-input:checked + .checkbox-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #2260ff;
    border-color: #2260ff;
    color: #fff;
    content: "✓";
  }

  .checkbox-wrapper-16 .checkbox-input:checked + .checkbox-tile .checkbox-icon,
  .checkbox-wrapper-16
    .checkbox-input:checked
    + .checkbox-tile
    .checkbox-label {
    color: #2260ff;
  }

  .checkbox-wrapper-16 .checkbox-input:focus + .checkbox-tile {
    border-color: #2260ff;
    box-shadow:
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 0 0 4px #b5c9fc;
  }

  .checkbox-wrapper-16 .checkbox-input:focus + .checkbox-tile:before {
    transform: scale(1);
    opacity: 1;
  }

  .checkbox-wrapper-16 .checkbox-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7rem;
    min-height: 7rem;
    border-radius: 0.5rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
  }

  .checkbox-wrapper-16 .checkbox-tile:before {
    content: "";
    font-size: 12px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #b5bfd9;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
  }

  .checkbox-wrapper-16 .checkbox-tile:hover {
    border-color: #2260ff;
  }

  .checkbox-wrapper-16 .checkbox-tile:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  .checkbox-wrapper-16 .checkbox-icon {
    transition: 0.375s ease;
    color: #494949;
  }

  .checkbox-wrapper-16 .checkbox-icon svg {
    width: 3rem;
    height: 3rem;
  }

  .checkbox-wrapper-16 .checkbox-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
  }
`;
