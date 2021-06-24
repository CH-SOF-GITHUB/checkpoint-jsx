import './style.css';
import chaker from "./images/chaker.jpg";
       

function App() {
  return (
    <div className="App">
    <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      <h1 class="title red">CHAKER BEN SAID</h1>
      <br />
      <img src="imageInPublic.jpg" alt="src" style={{ width: '1000px', height: '500px' }} />
      <br />
      <img src={chaker} alt="source" style={{ width: '1000px', height: '500px' }} />
      </div>
      <div className="video">
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
}

export default App;
