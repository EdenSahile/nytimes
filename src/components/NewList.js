import React from 'react'

const NewList = ({
    results
}) => {

  return (
    <React.Fragment>
   <ul>
    {
   results.map(result=>{
        return(<li key={result.id}><a  href={result.link}  target="_blank" rel="noopener noreferrer" >{result.title}</a></li>)
        })
    }
    </ul>
    </React.Fragment>
  )

}

export default React.memo(NewList);