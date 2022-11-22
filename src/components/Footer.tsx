import { FaFacebook, FaHeart, FaInstagram } from 'react-icons/fa';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <img src="/assets/img/logo.png" alt="Logo" />
        
        <p className="font-bold">
          Trance Therapy Sessions. <br/>`Bringing parties to party people...`
        </p> 
        <p className='flex items-center'>
          Todos os direitos reservados © 2022 - Feito com <FaHeart className='mx-1 text-red-800' /> por <a href="https://instagram.com/rodrigofplourenco" target="_blank" className='mx-1 text-blue-800 hover:text-blue-900 transition'>Rodrigo Lourenço</a> e <a href="https://instagram.com/pedrovilares_5" target="_blank" className='mx-1 text-blue-800 hover:text-blue-900 transition'>Pedro Vilares</a>
        </p>
      </div> 

      <div>
        <div className="grid grid-flow-col gap-4">
          <a href='https://www.instagram.com/trance_therapy_sessions/' target="_blank">
            <FaInstagram className='w-6 h-6' />
          </a> 
          <a href='https://www.facebook.com/trancetherapysessions' target="_blank">
            <FaFacebook className='w-6 h-6' />
          </a> 
        </div>
      </div>
    </footer>
  )
}

export default Footer