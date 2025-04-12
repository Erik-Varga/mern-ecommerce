import React from 'react'
import { TbNotes } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
    const current_hr = 13;
    const current_min = 25;

    let zf_current_min = current_min
    var zeroFilledCurrentMin = ('0' + zf_current_min).slice(-4);

    const total_hr = 13;
    const total_min = 32;

    let zf_total_min = total_min
    var zeroFilledTotalMin = ('0' + zf_total_min).slice(-4);

    const current_time = (current_hr * 60) + current_min;
    const total_time = (total_hr * 60) + total_min;
    const pct_done = (Math.round((current_time / total_time) * 100)).toFixed(0);

    const percentage = pct_done;

    return (
        <div>
            <Link to="/devnotes">
                <div className='flex justify-center items-center gap-2 '>
                    <div>
                        <img src="ev_icon_pic.jpg" alt="" className='w-10 h-10 rounded-full shadow-lg' />
                    </div>
                    <div>
                        <TbNotes className='text-2xl' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='lexend text-md'>Erik Varga | <span className='text-xs'>{current_hr}:{current_min < 10 ? zeroFilledCurrentMin : current_min}:{total_hr}:                       
                        {total_min < 10 ? zeroFilledTotalMin : total_min}</span>  
                        {/* | {pct_done}% */}

                        </span>
                    <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProgressBar