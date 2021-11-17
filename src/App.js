import './App.scss';
import Header from './components/header/header.component';
import Carousel from './components/carousel/carousel.component'
import samoyed from './assets/images/samoyed.png'

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <main className='main-content-wrapper'>
        <section className='main-content'>
          {/* <img src={ samoyed } className="" alt=""></img> */}
          <div>
            <h1 className="main-heading">Paw</h1>
            <p className="subtitle">Everything what you need for your doggo in one place.</p>
            <button className="main-button">Go to shop</button>
          </div>
          <nav className="carousel-navigation">
            <Carousel/>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
