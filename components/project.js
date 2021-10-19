import React from 'react'
import Image from 'next/image'

export default function Project(props) {
    return (
        <div>
            <Image 
                src={props.img}
                height={props.height}
                width={props.width}
                alt={props.description}
            />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <div>
                <div></div>
                <div>
                    <a>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}