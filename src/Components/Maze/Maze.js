import React from 'react'
import "./Maze.css"

const Maze = () => {

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
        console.log(matrix)
    }

    return(
        <div>
            <button onClick={()=> generateMaze(4,4)}>click me</button>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
        </div>
    )
}

export default Maze