import React from 'react';
import '../styles/index.scss';
import markdown1 from './angular.md';
import markdown2 from './python.md';
import Markdown from './MarkdownComponent';

export default class App extends React.Component {
	constructor(){
		super()
		this.state={
			show1:true
		}
	}
	render() {

    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
				<button onClick={()=> this.setState({show1: !this.state.show1})}>Toggle Tab</button>
				<Markdown md={this.state.show1?markdown1: markdown2}/>
      </div>
    )
  }
}
