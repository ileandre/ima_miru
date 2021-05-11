import React from 'react'
import './CarouselContainer.css'
import { useHistory} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = ({ allShows }) => {
  const history = useHistory()

  const onSelect = (title) => {
    const selectedShow = allShows.find(show => show.title === title)
    history.push(`/shows/${selectedShow._id}`)
  }

  return (
    <div className="carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          mobile: {
            breakpoint: {
              max: 767,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1299,
              min: 768
            },
            items: 2,
            partialVisibilityGutter: 30
          },
          desktop: {
            breakpoint: {
              max: 1800,
              min: 1300
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          desktop2: {
            breakpoint: {
              max: 2000,
              min: 1801
            },
            items: 4,
            partialVisibilityGutter: 40
          },
          desktop3: {
            breakpoint: {
              max: 2600,
              min: 2001
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          desktop4: {
            breakpoint: {
              max: 3000,
              min: 2601
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          desktop5: {
            breakpoint: {
              max: 3800,
              min: 3001
            },
            items: 7,
            partialVisibilityGutter: 40
          }
        }}
        showDots={true}
        sliderClass="slide"
        slidesToSlide={1}
        swipeable
      >

        <img className="image" onClick={() => { onSelect("Vampire Knight") }}
          src="http://cdn.shopify.com/s/files/1/0630/8509/products/pst2318vk_grande.jpeg?v=1467482965"
          alt="Vampire Knight"
        />

        <img className="image" onClick={() => { onSelect("Tokyo Ghoul") }}
          src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/tokyo-ghoul-guerrero-leonore.jpg"
          alt="Tokyo Ghoul"
        />

        <img className="image" onClick={() => { onSelect("Elemental Gelade") }}
          src="https://m.media-amazon.com/images/M/MV5BZDkzZjZlZmItM2E1OC00Y2M3LTljNGUtYzg4ZTUxNGY3MmNhXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg"
          alt="Elemental Gelade"
        />

        <img className="image" onClick={() => { onSelect("Attack on Titan") }}
          src="https://images-na.ssl-images-amazon.com/images/I/81dH7-pkjiL._AC_SY679_.jpg"
          alt="Attack on Titan"
        />

        <img className="image" onClick={() => { onSelect("Dragon Ball GT") }}
          src="https://i.pinimg.com/564x/d5/53/66/d5536643c2fb667f8cad981c0af76a4a.jpg"
          alt="Dragon Ball GT"
        />

        <img className="image" onClick={() => { onSelect("Parasyte") }}
          src="https://images-na.ssl-images-amazon.com/images/I/81Ajzfd4wjL._AC_SL1500_.jpg"
          alt="Parasyte"
        />

        <img className="image" onClick={() => { onSelect("One Punch Man") }}
          src="https://images-na.ssl-images-amazon.com/images/I/717aat3l-YL._AC_SL1224_.jpg"
          alt="One Punch Man"
        />

        <img className="image" onClick={() => { onSelect("My Hero Academia") }}
          src="https://images-na.ssl-images-amazon.com/images/I/91kjVOEopVL._AC_SL1500_.jpg"
          alt="My Hero Academia"
        />

        <img className="image" onClick={() => { onSelect("Demon Slayer: Kimetsu no Yaiba") }}
          src="https://images-na.ssl-images-amazon.com/images/I/61Zm2hsRJ0L._AC_SL1024_.jpg"
          alt="Demon Slayer: Kimetsu no Yaiba"
        />
      </Carousel>
    </div>
  )
}

export default CarouselContainer
