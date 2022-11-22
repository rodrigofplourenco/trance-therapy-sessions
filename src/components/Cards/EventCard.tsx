import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

interface IProps {
  image: string;
  title: string;
  soon: boolean;
  date: string;
  place: string;
}

const EventCard = (props: IProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} alt="Imagem evento" className='h-56 w-full rounded object-cover object-top' />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {props.title}

          <div className={`badge ${props.soon ? 'badge-secondary' : 'badge-accent'}`}>
            {props.soon ? 'BREVE' : 'RECORDAÇÃO'}
          </div>
        </h2>

        {
          props.soon &&
          <p className='text-sm flex items-center'>
            <span className='font-bold mr-1 text-blue-500'><BsFillCalendarCheckFill /></span> {props.date}
          </p>
        }
        <p className='text-sm flex items-center'>
          <span className='font-bold mr-1 text-blue-500'><MdLocationPin /></span> {props.place}
        </p>

        <button className="btn btn-primary" disabled>Ver mais</button>
      </div>
    </div>
  )
}

export default EventCard