const mealList=({params})=>{
     return (
        <>
          <h2>This is the meal list section</h2>
          <h3>{params.slug}</h3>
        </>
     )
}

export default mealList;