import { useState } from 'react'
import mapGif from './assets/map-creation.gif'
import dummyGif01 from './assets/Pacman_AI.gif'
import dummyGif02 from './assets/Pacman_Grid_02.gif'
import dummyGif03 from './assets/Pacman_Level.gif'
import dummyGif04 from './assets/dummyGif04.gif'
import logo from './assets/LogoImg3.png'
import pacmanLabel from './assets/course_label_pacman.png'
import './App.css'
import CourseTopic from "./components/CourseTopic.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <div className="container">
                <div className="top">
                    <div className="logo">
                        <img src={logo}  alt="Vite logo"/>
                        <h1>ReverseMechanics</h1>
                    </div>
                </div>
                <div className="middle">

                    <div className="content-container">
                        <CourseTopic imgSrc={dummyGif03} translate={{x:'-20%', y:'-25%'}} scale={'0.2'}></CourseTopic>
                        <div style={{
                            margin: '50px',
                            width: '150px',            // Viewport width
                            height: '150px',           // Viewport height
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img src={pacmanLabel} /*className="course-label"*//>
                        </div>
                        <CourseTopic imgSrc={dummyGif02} translate={{x:'-45%', y:'-33%'}} scale={'0.7'}></CourseTopic>
                        <CourseTopic imgSrc={mapGif} translate={{x:'-15%', y:'-48%'}} scale={'0.7'}></CourseTopic>
                        <CourseTopic imgSrc={dummyGif01} translate={{x:'-22%', y:'-9%'}} scale={'0.4'} ></CourseTopic>
                        <CourseTopic imgSrc={dummyGif04} translate={{x:'-88%', y:'-75%'}} scale={'0.7'}></CourseTopic>
                    </div>

                </div>
                <div className="bottom">
                    <h1>Learn Intermediate Unity The Smart Way</h1>
                </div>
            </div>
        </>
    )
}

export default App
