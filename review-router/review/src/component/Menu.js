import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/BedRoom'}>Phòng ngủ</Link>
                </li>
                <li>
                    <Link to={'/Kitchen'}>Phòng bếp</Link>
                </li>
                <li>
                    <Link to={'/WorkingRoom'}>Phòng làm việc</Link>
                </li>
                <li>
                    <Link to={'/LivingRoom'}>Phòng khách</Link>
                </li>
            </ul>
        </nav>
    )
}
