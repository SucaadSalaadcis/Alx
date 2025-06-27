import { useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import Data from './data';

import ice_cream4 from '../assets/images/1.png'

export default function Products() {


    let [getData, setGetData] = useState(null);
    const [check, setCheck] = useState(false);
    const [changeColor, setChangeColor] = useState('');

    console.log(changeColor)

    function handleChange(item) {

        let filt = Data.filter((el) => el.name == item);
        setGetData(filt);
        setCheck(true);

        let mp = filt.map(e => e.name);

        if (item == mp) {
            setChangeColor(item);
        }
        return filt;
    }


    return (
        <div>
            <div className='mt-20 '>
                <motion.h1

                    className='text-2xl font-bold text-center md:text-5xl'>Pick Your Flavor</motion.h1>
                <div className='md:flex gap-8 md:ml-[30%] mt-10 leading-10 ml-[40%] cursor-pointer font-semibold'>

                    <p
                        className={`${changeColor == 'Rainbow' ? 'text-pink-500 md:border-pink-500 md:border-b-4' : 'text-gray-400'}`}
                        onClick={() => handleChange("Rainbow")}>RAINBOW</p>
                    <p
                        className={`${changeColor == 'Strawberry' ? 'text-pink-500 md:border-pink-500 md:border-b-4' : 'text-gray-400'}`}
                        onClick={() => handleChange("Strawberry")}>STRAWBERRY</p>
                    <p
                        className={`${changeColor == 'Chocolate' ? 'text-pink-500 md:border-pink-500 md:border-b-4' : 'text-gray-400'}`}
                        onClick={() => handleChange("Chocolate")}>CHOCOLATE</p>
                    <p
                        className={`${changeColor == 'Mango' ? 'text-pink-500 md:border-pink-500 md:border-b-4' : 'text-gray-400'}`}
                        onClick={() => handleChange("Mango")}>MANGO</p>
                    <p
                        className={`${changeColor == 'Pistachio' ? 'text-pink-500 md:border-pink-500 md:border-b-4' : 'text-gray-400'}`}
                        onClick={() => handleChange("Pistachio")}>PISTACHIO</p>

                </div>
            </div>


            {
                check ? (
                    <div
                    >

                        {getData.map((el, indx) => (
                            <div key={indx} className="flex justify-around py-1 mt-10">
                                <div className="flex flex-col items-center md:flex-row">

                                    <div className="  md:w-1/3 mr-10 w-[450px] md:block  md:mr-52">
                                        <AnimatePresence mode='wait'>

                                            <motion.img
                                                key={el.name}
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                                                exit={{
                                                    opacity: 0,
                                                    x: 100,
                                                    transition: {
                                                        duration: 0.4
                                                    }
                                                }}

                                                src={el.img} className="mt-5 ml-20 rounded-lg md:rounded-md" alt="" />
                                        </AnimatePresence>
                                    </div>

                                    <div
                                        className="ml-10 text-center md:text-left md:w-1/2 ">
                                        <AnimatePresence mode='wait'>
                                            <motion.div
                                                key={el.name}
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                                                exit={{
                                                    opacity: 0,
                                                    x: 100,
                                                    transition: {
                                                        duration: 0.4
                                                    }
                                                }}

                                            >

                                                <p className="mb-5 text-5xl font-extrabold tracking-wide text-black">{el.title}</p>
                                                <p className='text-black'>
                                                    {el.subtitle.map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </p>
                                                <p className='font-bold text-md'>{el.old_price} <span className='line-through'> {el.new_price}</span></p>
                                                <button className='border  md:block md:border-1 mt-5 text-md bg-pink-600
                                          md:font-semibold text-white border-pink-500 rounded px-6  p-1.5'>Buy Now
                                                </button>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                        ))
                        }
                    </div >
                ) : <h1 className='mt-10 font-extrabold text-center'>HELLO</h1>
            }

        </div >
    )
}
