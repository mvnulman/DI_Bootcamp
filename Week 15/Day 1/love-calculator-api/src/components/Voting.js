import React from 'react'

class Voting extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
    }
    //this.vote = this.vote.bind(this);
  }

  vote = (item) => {
    item.votes++;
    this.state.languages.sort((a,b) => b.votes-a.votes)
    this.setState({
      languages: [...this.state.languages]
    })
  }

  reset = () => {
    this.state.languages.forEach((item, i) => {
      item.votes = 0;
    });
    const newLanguages = [...this.state.languages]
    this.setState({
      languages: newLanguages
    })

  }

  render(){
    const {languages} = this.state;
    return(
      <div>
        {
          languages.map((lang,i)=>{
            return (
              <div>
              <h2>{lang.name} - {lang.votes}</h2>
              <button onClick={()=>this.vote(lang)}>Vote for {lang.name}!</button>
              </div>
            );
          })
        }
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
export default Voting;
