import React from 'react'

const List = ({person}) => {
  
  return (
    <>
    {person.map((person)=> {
      const {id, name, age,img} =person;
     return (
        <article key={id} className="person">
            <img src={img} alt={name}/>
            <div>
            <h4>{name}</h4>
            <p>{age}</p>
            </div>
            
          </article>
      )
    })}
   </>
  )
}
export default List