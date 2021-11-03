import React from 'react';
import '../../App.css';
import Poster from '../Poster';
import Card from '../Card';
import Search from '../Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const posts = [ //temporary posts to test search bar functionailty on the Home page
  { id: '1', name: 'First food post' },
  { id: '2', name: 'Second food post' },
  { id: '3', name: 'Third food post' },
  { id: '4', name: 'Fourth Food post' },
];

//Post filtering methods
const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }
  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

function Home() {

    //filter base on search query
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    //adding immediate search functionality to the search bar
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery); //adding filter list capability to search bar

  return (
    <>
      <Poster />
      
      <div class = 'space'> 
      </div>

      <div class = 'center'>
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
                {filteredPosts.map((post) => ( //adding post looping (temporary to test out functionality)
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
            </div>
            
      <Card />

        <Link to='/Recipes'>
          <div className='center'>
            <h2>All Recipes</h2>
          </div>
        </Link>
        <div className='center'>
          <br></br>
          <br></br>
        </div>

    </>
  );
}

export default Home;