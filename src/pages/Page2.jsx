import React from 'react'
import p5 from 'p5'
import ReactDom from 'react-dom'
import Sketch from 'react-p5'

const Page2 = () => {
	let p1x = 200
	let p1y = 400
	let p2x = 400
	let p2y = 400
	let speed = 10
	let dir = 1

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(600, 800).parent(canvasParentRef)
	}

	const draw = (p5) => {
		p5.background(231, 119, 5)
		p5.noStroke()
		p5.fill(30)
		p5.beginShape()
		p5.vertex(0, 300)
		p5.vertex(p1x, p1y)
		p5.vertex(400, 0)
		p5.vertex(p5.width, 0)
		p5.vertex(p5.width, 500)
		p5.vertex(p2x, p2y)
		p5.vertex(200, p5.height)
		p5.vertex(0, p5.height)
		p5.endShape(p5.CLOSE)
		p1x += speed * dir
		p2x += speed * dir
		if (p1x > 350 || p1x < 80) {
			dir *= -1
		}
	}

	return (
		<section className="container">
			<section className="mainDrawing">
				<Sketch setup={setup} draw={draw} />
			</section>
		</section>
	)
}

export default Page2
