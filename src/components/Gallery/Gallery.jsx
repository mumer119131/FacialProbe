import React from 'react'
import ImageGallery from 'react-image-gallery';


const Gallery = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <section id='gallery'>
            <h2 className='text-primary'>Gallery</h2>
            <p>"Take a look at our previous successes and see the power of FaceSketch in action."</p>
            <ImageGallery items={images} additionalClass='mt-4' />

        </section>
    )
}

export default Gallery