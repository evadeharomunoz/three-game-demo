import type { ReactElement } from 'react'
import { useEffect, useRef, useState } from 'react'
import generateNormalGrid from '../utils/generateGrid'
import { Backdrop } from '@react-three/drei'

/**
 * User: THe current user position. SHould also be kept on a state
 * Void: empty tiles that are not part of the map, used to check click so the mobile users can "fall"
 * event: The tiles with any kind of event, this may be random o fixed, could be added event types, TBD
 */
export const types = {
	user: 'rgb(255 0 0)',
	void: 'rgb(0,255,0)',
	event: 'rgb(0,0,255)',
	tile: 'rgb(255, 87, 51)',
}
export default function GenerateGrid() {
	const rootRef = useRef<HTMLDivElement>(null)
	const [type, setType] = useState<keyof typeof types>('tile')

	const arrayPosiciones: { x: number; y: number }[] = generateNormalGrid({})

	function changeType(id: number) {
		const element = document.getElementById(id.toString())
		if (!element) return
		element.style.backgroundColor = types[type]
		element.setAttribute('data-type', type)
	}

	function generateMap() {
		const tiles = Array.from(document.querySelectorAll(`[data-type]`)).map((el) => {
			const attributes = el.attributes
			const { 'data-y': y, 'data-x': x } = attributes
			console.log('Element:', { x, y, attributes })
		})
		// const colorsArr = types.map(({ color }) => {
		// 	const cells = Array.from(document.querySelectorAll(`[data-type="${color}"]`))
		// 	const coordinates = cells.map((cell) => {
		// 		const x = cell.getAttribute('data-x')
		// 		const y = cell.getAttribute('data-y')
		// 		return [x, y]
		// 	})
		// 	return { color, coordinates }
		// })
		// let text = ''
		// colorsArr.forEach(({ color, coordinates }) => {
		// 	if (color != 'rgb(255,255,255)') {
		// 		text += `fill${color.slice(3)};\n`
		// 		coordinates.forEach(([x, y]) => {
		// 			text += `rect(${x}, ${y}, 20, 20);\n`
		// 		})
		// 	}
		// })
		// if (rootRef.current) {
		// 	rootRef.current.textContent = text
		// }
	}
	useEffect(() => {})
	return (
		<div className='bg-white'>
			<div>
				{Object.entries(types).map(([key, value]) => (
					<div className={key === type ? 'border-2' : ''} style={{ background: value }} onClick={() => setType(key)}>
						{key}
					</div>
				))}
			</div>
			<div ref={rootRef} className='whitespace-pre'></div>
			<button className='mx-auto' onClick={() => generateMap()}>
				Click to generate map
			</button>
			<br></br>
			<div className='content-left mx-auto flex h-[1250px] w-[1250px] flex-wrap'>
				{arrayPosiciones?.map(({ x, y }, indiceArrayPosiciones) => {
					return (
						<>
							<div
								key={indiceArrayPosiciones}
								className={'h-[50px] w-[50px] select-none border border-black text-center'}
								data-y={x}
								data-x={y}
								data-type='void'
								id={`${indiceArrayPosiciones}`}
								onClick={() => {
									// e.preventDefault()
									changeType(indiceArrayPosiciones)
								}}
								onDragStart={() => {
									changeType(indiceArrayPosiciones)
								}}>
								{indiceArrayPosiciones + 1}
							</div>
						</>
					)
				})}
			</div>
		</div>
	)
}
