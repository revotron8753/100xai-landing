import aayushmaan from '../assets/faces/Aayushmaan.jpeg'
import abhinav from '../assets/faces/Abhinav.jpeg'
import arun from '../assets/faces/Arun.jpeg'
import daurati from '../assets/faces/Daurati.jpg'
import kanchan from '../assets/faces/Kanchan.jpeg'
import aarush from '../assets/faces/aarush.jpeg'
import venu from '../assets/faces/venu.jpeg'
import mohan from '../assets/faces/Mohan.jpeg'
import sarah from '../assets/faces/Sarah.png'
import santosh from '../assets/faces/Santosh.jpeg'
import ayush from '../assets/faces/Ayush.svg'
import './Graduates.css'

const avatars = [aayushmaan, abhinav, arun, daurati, kanchan, aarush, venu, mohan, sarah, santosh, ayush]

export default function Graduates() {
  return (
    <section className="graduates-section">
      <div className="container">
        <p className="graduates-label">Join 100+ Global Business Leaders</p>
        <h2 className="graduates-title">
          Join Leaders who have already adopted AI for their businesses to{' '}
          <em>work faster, grow smarter, and stay ahead.</em>
        </h2>
        <div className="avatar-grid">
          {avatars.map((src, i) => (
            <img key={i} src={src} alt={`leader ${i + 1}`} className="avatar" />
          ))}
        </div>
      </div>
    </section>
  )
}
