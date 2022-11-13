
    import React from 'react'
    import 'photoswipe/dist/photoswipe.css'
    import { Gallery, Item } from 'react-photoswipe-gallery'

    const GalleryItems = () => {
        const smallItemStyles = {
            cursor: 'pointer',
            // objectFit: 'cover',
            width: '100%',
            height:'300px'
            // maxHeight: '100%',
        }
        return(
            <Gallery>
            <div
            style={{
                display: 'grid',
                gridTemplateColumns: '450px 320px 320px',
                gridTemplateRows: '314px 314px',
                gridGap: 12,

            }}
            >
            <Item
                original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
                thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                width="1600"
                height="1600"
                alt="Photo of seashore by Folkert Gorter"
            >
                {({ ref, open }) => (
                <img
                    style={{height:'600px', width:'400px'}}
                    src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                    ref={ref}
                    onClick={open}
                />
                )}
            </Item>
            <Item
                original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
                thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                width="1600"
                height="1068"
                alt="Photo of mountain lake by Samuel Rohl"
            >
                {({ ref, open }) => (
                <img
                    style={smallItemStyles}
                    src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                    ref={ref}
                    onClick={open}
                />
                )}
            </Item>
            <Item
                original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
                thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                width="1600"
                height="1066"
                alt="Photo of fog in the village by Ales Krivec"
            >
                {({ ref, open }) => (
                <img
                    style={smallItemStyles}
                    src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                    ref={ref}
                    onClick={open}
                />
                )}
            </Item>
            <Item
                original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
                thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                width="1600"
                height="1066"
                alt="Photo of river sunset by Michael Hull"
            >
                {({ ref, open }) => (
                <img
                    style={{ ...smallItemStyles, gridColumnStart: 2 }}
                    src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                    ref={ref}
                    onClick={open}
                />
                )}
            </Item>
            <Item
                original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
                thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                width="1600"
                height="1066"
                alt="Photo of bear by Thomas Lefebvre"
            >
                {({ ref, open }) => (
                <img
                    style={smallItemStyles}
                    src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                    ref={ref}
                    onClick={open}
                />
                )}
            </Item>
            </div>
        </Gallery>
    )
            }
    
    export default GalleryItems;