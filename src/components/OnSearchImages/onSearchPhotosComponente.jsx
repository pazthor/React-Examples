import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';
import {Title, Wrapper, Buttons, TomatoButton} from './Title'

class OnSearchPhotoComponent extends React.Component{
  state = { images: []};

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });
    
    this.setState({images: response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImagesList images={this.state.images} />
        
      <Wrapper>
      <Title>
        Hello World!
      </Title>
  </Wrapper>
  <div>
    <Buttons >
      Normal Buttons
    </Buttons>
    <TomatoButton>Tomato Buttons</TomatoButton>
  </div>

      </div>
    );
  }
}

export default OnSearchPhotoComponent;