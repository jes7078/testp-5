import React from 'react'
import p5 from 'p5'
import ReactDom from 'react-dom'
import Sketch from 'react-p5'

const Page = () => {
  let x = 200
  let y = 100
  let r = 0
  let g = 0
  let b = 0
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 800).parent(canvasParentRef)
  }
  const draw = p5 => {
    p5.background(0, 0, 0)

    p5.noStroke()
    p5.fill(r, g, b)
    p5.beginShape()
    p5.vertex(100, 200)
    p5.vertex(100, 100)
    p5.vertex(150, 100)
    p5.vertex(150, 200)
    p5.endShape(p5.CLOSE)
    p5.beginShape()
    p5.vertex(50, 250)
    p5.vertex(50, 200)
    p5.vertex(150, 200)
    p5.vertex(150, 250)
    p5.endShape(p5.CLOSE)
    p5.beginShape()
    p5.vertex(30, 250)
    p5.vertex(30, 150)
    p5.vertex(80, 150)
    p5.vertex(80, 250)
    p5.endShape(p5.CLOSE)

    p5.textSize(48)
    p5.fill(p5.color(r, g, b))
    p5.text('s', x, y)

    // y1 = 50 * p5.sin(i) + 400
    // y2 = 50 * p5.sin(i + 10) + 500
    // y3 = 50 * p5.sin(i + 20) + 100
    // i += 0.1
    if (x < 600) {
      x += 2
    } else {
      x = 200
    }
    if (y < 300) {
      y += 1
    } else {
      y = 100
    }
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
  }

  return (
    <section className="container">
      <section className="mainDrawing">
        <Sketch setup={setup} draw={draw} />
      </section>
    </section>
  )
}

export default Page
