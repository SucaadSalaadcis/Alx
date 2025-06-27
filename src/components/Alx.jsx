import { useState } from 'react'
import ice_cream4 from '../assets/images/ice_cream4.png'


import Data from './data';

export default function Products() {


    let [getData, setGetData] = useState();
    const [check, setCheck] = useState(false);

    function test(item) {

        /*   let filt = Data.filter((el) => el.name == item);
          const mp = filt.map(e => e.img);
          setGetData(mp); */


        let filt = Data.filter((el) => el.name == item);
        // const mp = filt.map(e => e.img);
        setGetData(filt);
        setCheck(true);


        return filt
    }



    return (
        <div>
            <div className='mt-20 '>
                <h1 className='text-2xl font-bold text-center md:text-5xl'>Our Product</h1>
                <div className='md:flex gap-8 md:ml-[30%] mt-10 leading-10 ml-[40%]'>


                    <button className='cursor-pointer' onClick={() => test("ICE CREAM")}>ICE CREAM</button>
                    <button className='cursor-pointer' onClick={() => test("CAYENNE")}>CAYNNE</button>

                </div>
            </div>

            {
                check && (
                    <div>
                        {getData.map((el, indx) => (
                            <div key={indx}>
                                <p>{el.name}</p>
                                <img src={el.img} alt="" />
                            </div>
                        ))}
                    </div>
                )
            }

        </div>
    )
}
