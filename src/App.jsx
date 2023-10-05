import { useState } from 'react'
import styles from './style'
import {
    Navbar ,
    Hero ,
    Stats ,
    Business ,
    Billing ,
    CardDeal ,
    Testimonials ,
    Clients ,
    CTA ,
    Footer
} from './components'

function App () {
    const [ count , setCount ] = useState ( 0 )

    return ( <main className="bg-primary w-full overflow-hidden">
            <div className={ `${ styles.paddingX } ${ styles.flexCenter }` }>
                <div className={ `${ styles.boxWidth }` }>
                    <Navbar/>
                </div>
            </div>

            <div className={ `bg-primary ${ styles.flexStart }` }>
                <div className={ `${ styles.boxWidth }` }>
                    <Hero/>
                </div>
            </div>

            <div className={ `bg-primary ${ styles.paddingX } ${ styles.flexCenter }` }>
                <div className={ `${ styles.boxWidth }` }>
                    <Stats/>
                    <Business/>
                    <Billing/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>
        </main> )
}

export default App
