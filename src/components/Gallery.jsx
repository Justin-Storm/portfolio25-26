import React, { useState } from "react";
import './Gallery.css';
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const photos = [
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
  {
    src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false',
    width: 192,
    height: 192,
  },
];

export default function Gallery() {
    const [imageIndex, setImageIndex] = useState(-1);

    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <hr />
            <ColumnsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setImageIndex(index)} />
            <Lightbox
                plugins={[Fullscreen, Zoom, Slideshow]}
                open={imageIndex >= 0}
                close={() => setImageIndex(-1)}
                slides={[
                  { src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false' },
                  { src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false' },
                  { src: 'https://www.nps.gov/glac/learn/nature/images/FlatheadRiver.jpg?maxwidth=650&autorotate=false' },
                ]}
            />
        </section>
    )
}