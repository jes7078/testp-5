import React from 'react'
import p5 from 'p5'
import ReactDom from 'react-dom'
import Sketch from 'react-p5'

const HomePage = () => {
  let y1 = 400
  let y2 = 500
  let y3 = 100
  let i = 0
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 800).parent(canvasParentRef)
  }

  const draw = p5 => {
    p5.background(253, 254, 36)
    p5.noStroke()
    p5.fill(30)
    p5.beginShape()
    p5.vertex(50, p5.height)
    p5.vertex(50, y1)
    p5.vertex(300, y2)
    p5.vertex(p5.width, y3)
    p5.vertex(p5.width, p5.height)
    p5.endShape(p5.CLOSE)
    y1 = 50 * p5.sin(i) + 400
    y2 = 50 * p5.sin(i + 10) + 500
    y3 = 50 * p5.sin(i + 20) + 100
    i += 0.1
  }

  return (
    <section className="container">
      <section className="mainDrawing">
        <Sketch setup={setup} draw={draw} />
      </section>
    </section>
  )
}

export default HomePage
