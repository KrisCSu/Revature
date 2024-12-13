import './App.css';
import PostAndComments from './assignment';


function App() {
  const post={
    title:"This is a post!"
  };
  const comments=[
    "Great!",
    "Absolutely",
    "Tremendous",
    "Incrideable",
    "Yeah!"
  ]
  return (
    <div>
      <PostAndComments post={post} comments ={comments} />
    </div>
  );
}

export default App;
