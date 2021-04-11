import React from 'react';
import './index.scss'

const Stars = ({ total, glowingCnt }) => {
    const stars = []
    for (let i = 1; i <= total; i++) {
        if (glowingCnt > 0) {
            stars.push('glow-star')
            glowingCnt--;
        }
        else {
            stars.push('dead-star')
        }
    }

    return (
        <span className="diff-stars">
            {
                stars.map((cls, index) => (
                    <i
                        key={index}
                        className={`fa fa-star ${cls}`}
                    ></i>
                ))
            }
        </span>
    )
}

export default Stars;