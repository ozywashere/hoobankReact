import styles from '../style';
import { robot } from "../assets/index.js";
import { discount } from "../assets/index.js";
import { GetStarted } from "./GetStarted.jsx";

export const Hero = () => {
    return ( <section id="home" className={ `flex md:flex-row flex-col ${ styles.paddingY }` }>
        <div className={ `flex-1 ${ styles.flexStart } flex-col xl:px-0 sm:px-16 px-6` }>
            <div className="px-4 py-[6px] flex flex-row items-center bg-discount-gradient rounded-[10px]">
                <img src={ discount } alt="discount" className="w-8 h-8"/>
                <span className="text-white text-sm font-medium ml-2">
                        <span className="text-white">20%</span>DISCOUNT FOR <span className="text-white">1MONTH</span>ACCOUNT</span>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
                    The Next <br className="hidden sm:block"/> <span className="text-gradient"> Generation</span> <br
                    className="sm:block hidden"/>
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted/>
                </div>
            </div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leaindg-[75px]">
                Payment Method.
            </h1>
            <p className={ `${ styles.paragraph } max-w-[470px]  mt-5` }>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                We examine annual percentage rates, annual fees.
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={ robot } alt="robo" className="w-[100%] h-[100%] relative z-[5]"/>
            {/* gradient start */}

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient ends */}

        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>
    </section> )
}