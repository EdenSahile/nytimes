import React from'react'
// import propTypes from'prop-types'
import '../styles/style.css'




const SearchBar=({
    
    change,
    submit,
    results
  
})=>{

        return(
            <React.Fragment>

         <nav className="navbar navbar-default navbar-fixed-top navbar-light">
    <div className="container margin-left" >
        <form className="card my-6" onSubmit={submit}>
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                    <input 
                    className="form-control form-control-lg form-control-borderless" type="search"
                    placeholder="Search ..."
                   
                    onChange={change}/>
                </div>
                <div className="col-auto">
                    <button 
                    className="btn btn-lg btn-info"
                     type="submit" 

                     > Search </button>
                </div>
            </div>
        </form>
    </div>
</nav>

<ul>
    {
   results.map(result=>{
        return(<li key={result.id}>{result.title}</li>)
        })
    }

</ul>

</React.Fragment>



        )
    

}



// SearchBar.propTypes={
    
//     changeDefault: propTypes.string,
//     change:propTypes.func

// }

export default React.memo(SearchBar);