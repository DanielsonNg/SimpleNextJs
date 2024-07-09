'use client'
import { useRef, useState } from 'react'
import style from './imagePicker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
    const imageInputRef = useRef()
    const [pickedImage, setpickedImage] = useState()

    function handlePickClick() {
        imageInputRef.current.click()
    }

    function handleImageChange(event){
        const file = event.target.files[0]
        if(!file){
            setpickedImage(null)
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
          setpickedImage (fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return <div className={style.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={style.controls}>
            <div className={style.preview}>
                {!pickedImage && <p>No Image Picked yey.</p>}
                {pickedImage && <Image src={pickedImage} fill />}
            </div>
            <input
                className={style.input}
                type='file'
                id={name}
                accept='image/png, image/jpeg'
                name={name} 
                ref={imageInputRef}
                onChange={handleImageChange}
                required
                />
            <button
                className={style.button}
                type='button'
                onClick={handlePickClick}
            >
                Pick an Image
            </button>
        </div>
    </div>
}