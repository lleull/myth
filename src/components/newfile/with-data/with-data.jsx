import React from "react";
const WithData = (WrappedComponent, DataSource) => {
     class WithData extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
              data: [],
            };
        }
        
          
        
          componentDidMount() {

            setTimeout(() => {
                fetch(DataSource)
              .then(response => response.json())
              .then((data) => this.setState({ data: data.slice(0, 3) }));
            }, 1500);
            
          }
          render() {
            return this.state.data.length < 1 ? (
                <h1>LOAD..</h1>

            ):(
           
              <div>              
                            <WrappedComponent data={this.state.data} {...this.props}/>
          
              </div>
            )
            
           
           
        }
    }
       return WithData;
    
    
        
    
    
    
}
export default WithData