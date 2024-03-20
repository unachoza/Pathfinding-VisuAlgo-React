import React, { useState } from 'react'
import "./Maze.css"

const Maze = () => {
 const [gridMaze, setGridMaze] = useState([])
 
    const generateMaze = (height, width) => {
        let matrix = []
        for(let i = 0; i < height; i++ ){
            let row = []
            for(let j = 0; j < width; j++){
                let cell = Math.random()
               cell < .5 ? row.push("wall") : row.push("path")
            }
            matrix.push(row)
        }
        setGridMaze(matrix)
    }

    return(
        <div>
            <button onClick={()=> generateMaze(4,4)}>click me</button>
            {gridMaze.map((row, rowIndex) => (
                <div className='row'>
                    {row.map((cell, cellIndex) => (
                         <div className={`cell ${cell}`}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Maze