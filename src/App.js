import './App.css'
import Card from './Components/Card';
import Image1 from './Components/Assets/Images/Web.jpg'
import Image2 from './Components/Assets/Images/android.jpg'
import Image3 from './Components/Assets/Images/python.png'
import Image4 from './Components/Assets/Images/mern.png'

const content1 = 'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).'

const content2 = 'Android development is a form of software engineering dedicated to creating applications for devices that run on the Android platform.'

const content3 = 'Python is a high-level, general-purpose programming language. Its design code readability with the use of significant indentation.'

const content4 = 'MERN Stack is a combination of the latest technologies used for creating premium web applications.'

function App() {
  return (
     <>
       <div className='container'>
       <h1 className='mt-4'>React Task 1</h1>
       <div className='row'>
          <div className='col-md-3'>
            <Card imgSrc={Image1} title='Web Development' content={content1}/>
          </div>
          <div className='col-md-3'>
            <Card imgSrc={Image2} title='Android Development' content={content2}/>
          </div>
          <div className='col-md-3'>
            <Card imgSrc={Image3} title='Python Development' content={content3}/>
          </div>
          <div className='col-md-3'>
            <Card imgSrc={Image4} title='Mern stack Development' content={content4}/>
          </div>
       </div>
       </div>
     </>
  )
}

export default App;
