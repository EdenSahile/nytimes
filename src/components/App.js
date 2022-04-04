import SearchBar from'./SearchBar'
import '../styles/App.css';
import React, { Component} from 'react'

class App extends Component{

  constructor (props){
    super(props)

    this.state={
      input:"",
      baseURL:"https://api.nytimes.com/svc/search/v2/articlesearch.json?",
      APIkey:'GHGq4ABMHaGM4CoY3HKyOhYlR0xE51tZ',
      results:[]


    }
  }


handleChange=(e)=>{

// console.log(e.target.value)
   this.setState({
     input:e.target.value
  })

}

handleSubmit=(e)=>{
    e.preventDefault()
  
  this.query()
  }


  query=()=>{

    let url = this.state.baseURL+"q="+this.state.input+'&api-key='+this.state.APIkey;

    fetch(url)
       .then(response=>{
         if(!response.ok){
           console.log(response.statusText)
         }
         return response.json()

       }).then(data=>{
          const docs=data.response.docs

         const results= docs.map(doc=>{

                 let link=doc.web_url;
                 let headline=doc.headline.main;
                 let date=doc.pub__date;
                 let author=doc.byline.original
                 let id=doc._id
                return{
                  id:id,
                  link:link,
                  title:headline,
                  date:date,
                  author:author

                }
        })

           this.setState({
             results:results
           })
           console.log(results)
       })


  }


  render(){

 return(

      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <SearchBar 
            results={this.state.results}
            change={(e)=>this.handleChange(e)} 
             submit={(e)=>this.handleSubmit(e)}/>
         </div>
        </div>

        <div className='row'>
        <div className='col-sm-6'>

       </div>
        </div>

        </div>


)



  }

}










export default App;
