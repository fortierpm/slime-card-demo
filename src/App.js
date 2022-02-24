import { useState, useEffect, useRef } from 'react';

import './App.css';

import arrow from "./svg/arrow.svg";

function App() {

  const cardBgColor = "#1f3a74";

  const [cardState, setCardState] = useState("");

  const cardFront = useRef(null);
  const cardBack = useRef(null);
  const screen = useRef(null);
  
  
  const handleSwitch = (e) => {
    (cardState === "open") ? setCardState("") : setCardState("open");
  }

  useEffect(() => {

  },[cardFront, cardBack, screen]);


	return (
		<div className="App">

      <div ref={screen} className="screen">

        <article className="card">

          <div className="card-content">

            <div ref={cardFront} className={`card-front ${cardState}`}>
              <h2 className="card-title">Card Title</h2>
              <p className="card-prompt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, odit.
              </p>
              <button onClick={handleSwitch} className={`card-switch ${cardState}`}>
                <img src={arrow} alt="" />
              </button>
            </div>

            <div ref={cardBack} className={`card-back ${cardState}`}>
              <p className="card-reply">
                Asperiores quae repellat nulla. Dolorem, porro iste.
              </p>
            </div>

          </div>

        </article>

        <article className="next-card left"></article>
        <article className="next-card right"></article>

        <svg className="card-morph"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 900 1600`}>
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
            <filter id="flattenBlur">
              <feComponentTransfer>
                <feFuncR type="identity"></feFuncR>
                <feFuncG type="identity"></feFuncG>
                <feFuncB type="identity"></feFuncB>
                <feFuncA type="discrete" tableValues="0 1"></feFuncA>
              </feComponentTransfer>
            </filter>
          </defs>
          <g>
            <g filter="url(#flattenBlur)">{/*filter="url(#blur)"*/}
              <g filter="url(#blur)">{/*filter="url(#blur)"*/}
                {/* Full background rect; required for proper filter effect*/}
                <rect x="0" y="0" width="100%" height="100%" fill="#fff0" />
                  
                <rect 
                  className="top-rect"
                  x={90}
                  y={cardState ? 325 : 460} // cardState ? "open" : ""
                  width={720}
                  height={cardState? 500 : 680}
                  rx={95}
                  fill={cardBgColor}/>
                <rect 
                  className="bottom-rect"
                  x={90}
                  y={cardState ? 1022 : 854}
                  width={720}
                  height={286}
                  rx={95}
                  fill={cardBgColor}/>

                <rect 
                  x={cardState ? (140 + 20 + 80) : 140}
                  y={780}
                  width={cardState ? 0 : 40}
                  height={280}
                  fill={cardBgColor}/>
                <rect
                  x={cardState ? (220 + 40 + 40) : 220}
                  y={780}
                  width={cardState ? 0 : 80}
                  height={280}
                  fill={cardBgColor}/>
                <rect
                  x={cardState ? (320 + 50 + 20) : 320}
                  y={780}
                  width={cardState ? 0: 100}
                  height={280}
                  fill={cardBgColor}/>
                <rect
                  x={cardState ? (440 + 80) : 440}
                  y={780}
                  width={cardState ? 0 : 160}
                  height={280}
                  fill={cardBgColor}/>
                <rect
                  x={cardState ? (620 + 10 - 40) : 620}
                  y={780}
                  width={cardState ? 0 : 20}
                  height={280}
                  fill={cardBgColor}/>
                <rect
                  x={cardState ? (680 + 40 - 60) : 680}
                  y={780}
                  width={cardState ? 0 : 80}
                  height={280}
                  fill={cardBgColor}/>
              </g>
            </g>
            {/* Non-blurred content here/below */}
          </g>
        </svg>

      </div>

      <footer>
        <div className="name">Peter Fortier</div>
        <time dateTime="2021">2021</time>
        <div className="accounts">@fortierpm</div>
      </footer>

		</div>
	);
}

export default App;
