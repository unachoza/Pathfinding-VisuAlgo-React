import React, { useState } from 'react'
import "./Maze.css"

const Maze = () => {
    let defaultMaze = [
       ['wall', 'wall', 'wall', 'wall'],
       ['wall', 'path', 'wall', 'wall'],
       ['wall', 'path', 'wall', 'wall'],
       ['wall', 'wall', 'path', 'path']
    ]

    const [gridMaze, setGridMaze] = useState(defaultMaze)
 
    const generateMaze = (height, width) => {
        let matrix = []
        for(let i = 0; i < height; i++ ){
            let row = []
            for(let j = 0; j < width; j++){
                let cell = Math.random()
                row.push("wall") 
            }
            matrix.push(row)
        }

    const dirs = [ 
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]

    const isCellValid = (x,y) => {
        return (y>=0 && x>=0 && x <width && y < height && matrix[y][x] === 'wall')
    }

    const carvePath = (x, y) => {
        matrix[y][x] = "path"

        const directions = dirs.sort(() => Math.random() - 0.5)
        for (let [dx, dy] of directions){
            const nx = x + dx * 2;
            const ny = y + dy * 2;
            if (isCellValid(nx, ny)){
                matrix[y+dy][x+dx] = "path"
                carvePath(nx, ny)
            }
        }
    }

    carvePath(1,1)

    matrix[1][0] = "start"
    matrix[height-2][width-1] = "end"

    setGridMaze(matrix)
    
    }

    return(
        <div>
            <button onClick={()=> generateMaze(10,10)}>Generate New Maze</button>
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