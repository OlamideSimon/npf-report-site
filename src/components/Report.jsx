import { MenuItem, TextareaAutosize, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { crimes, states } from '../utils'
import { toast, ToastContainer } from 'react-toastify'
import Card from './Card'
import Spinner from './Spinner';

const Report = () => {
    const [formData, setFormData] = useState({
        state: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const { state, description } = formData;
    const { crime } = useParams()
    const data = crimes.find(item => item.name === crime)
    const [randomCrime, setRandomCrime] = useState([])

    useEffect(() => {
        const filtered = crimes.filter(({name}) => name !== crime)
        const rand1 = filtered[Math.floor(Math.random() * filtered.length)] 
        const rand2 = filtered[Math.floor(Math.random() * filtered.length)]
        const rand3 = [rand1, rand2]

        setRandomCrime(rand3)
    }, [crime])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        if (state === "" || description === "") {
          toast.error("Crime location with detailed description is required");
        } else {
          const getData = {
            crime,
            location: state,
            description,
          };
          console.log(getData)
          setIsLoading(true);
          fetch('https://police-api22.herokuapp.com/api/crimes', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(getData),
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsLoading(false)
                toast.success("Crime reported successfully")
                setFormData({
                    state: "",
                    description: "",
                });
            }).catch(err => {
                console.log(err)
                setIsLoading(false)
                toast.error("Error reporting crime")
                setFormData({
                    state: "",
                    description: "",
                });
            })
        //   const response = await axios.post(
        //     "https://police-api22.herokuapp.com/api/crimes",
        //     getData
        //   );
        //   toast.success(response.data);
        //   setFormData({
        //     state: "Abia",
        //     description: "",
        //   });
        }
      };

    return (
        <div>
            <ToastContainer />
            <img src={data.image} alt='' className='w-full' />
            <div className='p-10'>
                <div className='-space-y-2'>
                    <p className='text-slate-500'>Crime</p>
                    <p className='text-3xl uppercase font-semibold'>{crime}</p>
                </div>
                <div className='py-5 px-2'>
                    <p>{data.description}</p>
                </div>
                <div className='sm:px-10 md:px-36'>
                    <form onSubmit={onSubmit} className='space-y-3 bg-[#53ab98] shadow-2xl p-5'>
                        <p className='text-white text-center uppercase font-semibold text-3xl'>Make a <span className='text-[#2b6777]'>{crime} report</span></p>
                        <div className='space-y-5 text-white'>
                            <div className='flex items-center space-x-10'>
                                <label htmlFor='state'>States: </label>
                                <TextField variant='standard' select helperText='Please select State' value={state} onChange={onChange} name='state' className='flex-1 focus:outline-none hover:border-none'>
                                    {states.map(({id, state}) => (
                                        <MenuItem key={id} value={state}>{state}</MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='flex items-start space-x-1'>
                                <label>Description: </label>
                                <TextareaAutosize 
                                    minRows={3}
                                    name='description'
                                    value={description}
                                    onChange={onChange}
                                    className='flex-1 focus:outline-none p-1 text-black'
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            {isLoading ? (
                                <button className='bg-transparent p-2 rounded text-white border-white border-2 hover:bg-white hover:text-[#2b6777]' disabled>
                                    <Spinner />
                                </button>
                            ): (
                                <>
                                    <button 
                                        type='submit' 
                                        className='bg-transparent p-2 rounded text-white border-white border-2 hover:bg-white hover:text-[#2b6777]'
                                    >
                                        Send Report
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            {randomCrime.map(({name, image, description}, index) => (
                <Card key={index} title={name} image={image} description={description} />
            ))}
        </div>
    )
}

export default Report