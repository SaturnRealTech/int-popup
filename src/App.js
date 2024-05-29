import React, { useEffect } from 'react';
import './App.css';
import { IoIosClose } from "react-icons/io";
import { focusedImage } from './assets/image_links';
import { amenitiesData, property_description, properyDetails } from './assets/constants';
import { CiBookmarkCheck } from "react-icons/ci";

function App() {
  const [view, setView] = React.useState(true)


  const [width, setWidth] = React.useState(window.innerWidth);
  console.log('width', width)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <button onClick={() => setView(!view)}>Show Modal</button>
      <div className="App" style={{ display: view ? 'block' : 'none' }}>

        <div className='modal'>
          {/* left half */}
          <div className='left_half_modal'>
            <div className='primary_image_div'>
              <img className='primary_image' src={focusedImage} alt='primary_focused_image_div' />
            </div>
            <div className='secondary_images_div'>
              <img className='secondary_image' src={focusedImage} alt='primary_focused_image' />
              <img className='secondary_image' src={focusedImage} alt='primary_focused_image' />
              <img className='secondary_image' src={focusedImage} alt='primary_focused_image' />
            </div>
          </div>

          {/* right half */}
          <div className='right_half_modal'>
            <div className='right_upper_div'>
              <IoIosClose size={30} style={{ position: "relative", top: '3rem', left: '45%', visibility: width > 500 ? 'block' : 'none' }} />

              <p className='right_heading_1'>
                Tangled Up In Green
              </p>
              <p className='right_heading_2'>
                Tangled Up In Green
              </p>
              <p className='property_description'>{property_description}</p>
              <hr className='horizontal_line' />
            </div>

            <div className='right_lower_div'>
              <div className='right_lower_inner_div' >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className='propert_details_box'>{properyDetails.map(item => {
                    return (
                      <div className="property_details_items">
                        <p className="property_details_items_heading">{item.title}</p>
                        <p className="property_details_items_description">{item.description}</p>
                      </div>
                    )
                  })}</div>
                  <hr className='horizontal_line_amenities' />

                  <div className='amenities_box'>
                    <p className='amenities_heading'>30+ amenities</p>
                    <div className='property_amenities'>
                      {amenitiesData.map(item => {
                        return (
                          <div style={{ display: "flex", flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                            <CiBookmarkCheck size={25} />
                            <p className='amenities_text'>{item}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                </div>
                <img className='map_image' src={focusedImage} alt='map-image' />
              </div>
              {/* buttons */}
              <div className='button_box'>
                {
                  (width < 500) ? (
                    <>
                      <button className='sec_button'>Know More</button>
                      <button className='primary_button'>Schedule</button>
                    </>
                  ) : (
                    <>
                      <button className='button'>Call Now</button>
                      <button className='button'>Call Now</button>
                      <button className='large_button'>Schedule Site Visit</button>
                    </>
                  )
                }
              </div>
              {
                (width < 500) && <img className='map_image' src={focusedImage} alt='map-image' />
              }
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
