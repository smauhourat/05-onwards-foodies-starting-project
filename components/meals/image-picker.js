'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef()

    const handlePickClick = () => {
        imageInputRef.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if(!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = (url) => {
            setPickedImage(fileReader.result)   
        }
        fileReader.readAsDataURL(file)

        console.log(file)
    }

    return (
    <div className={classes.picker}>
        <label htmlFor={name} >{ label }</label>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected" fill/>}
        </div>
        <div className={classes.control}>
            <input 
                className={classes.input}
                type="file" 
                id={name} 
                accept="image/png, image/jpeg, image/jpg" 
                name={name} 
                ref={imageInputRef}
                onChange={handleImageChange}
                required
            />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>
    </div>
    )
}