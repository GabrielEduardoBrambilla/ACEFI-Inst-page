import React from 'react'
import one from '../../assets/gallery/1.png'
import two from '../../assets/gallery/2.png'
import three from '../../assets/gallery/3.png'
import four from '../../assets/gallery/4.png'
import five from '../../assets/gallery/5.png'
const photos = [
  { src: one, width: 800, height: 600 },
  { src: two, width: 800, height: 600 },
  { src: three, width: 800, height: 600 },
  { src: four, width: 800, height: 600 },
  { src: five, width: 800, height: 600 }
]

import { useState } from 'react'

import PhotoAlbum from 'react-photo-album'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { Container } from './styles'

export default function App() {
  const [index, setIndex] = useState(-1)

  return (
    <Container>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <PhotoAlbum
        photos={photos}
        layout="columns"
        spacing={0}
        columns={2}
        targetRowHeight={552}
        onClick={({ index }) => setIndex(index)}
      />
    </Container>
  )
}
