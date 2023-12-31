import styles , { layout } from "../style";
import { Button } from "./Button.jsx";
import { card } from "../assets/index.js";

export const CardDeal = () => {
    return ( <section className={ layout.section }>
        <div className={ layout.sectionInfo }>
            <h2 className={ styles.heading2 }>Find a better card deal <br className="sm:block hidden"/>in few easy
                steps.</h2>
            <p className={`${styles.paragraph} w-[470px]`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button styles="mt-10"/>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card_deal" className="w-full h-full relative z-[5]"/>
        </div>
    </section> )
}