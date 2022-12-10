import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaSkype } from 'react-icons/fa'

import '../styles/Widget.css'
export default function Widget() {
    return (
        <div className="widget">
            <a href='tel:+907959590'>
                <FaPhoneAlt />
            </a>
            <a>
                <FaEnvelope />
            </a>
            <a>
                <FaSkype />
            </a>

        </div>
    )
}
