import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '../components/meals/meals-grid';
const meals=()=>{
    const meals=[
        {
            id:1,
            title:'Chicken Curry',
            slug:'curry',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vEyMV3ZYZviHGcFPM1YOHSBzw7bBPLgFjA&s',
            summary:'Tasty Indian chicken curry',
            creator:'Oshan'
        }
    ];
    return(
       <>
         <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipie and cook it yourself.It is easy and fun!</p>
            <p className={classes.cta}><Link href='/meals/share'>Share Your Favourite Recipie</Link></p>
         </header>
         <main className={classes.main}>
             <MealsGrid meals={meals}></MealsGrid>
         </main>
       </>
    )
}

export default meals;