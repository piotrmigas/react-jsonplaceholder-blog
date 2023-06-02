import { Link } from 'react-router-dom';

type Props = {
  user?: User;
};

const User = ({ user }: Props) => {
  return (
    <div className='col-lg-3 d-flex align-items-stretch'>
      <div className='card mt-4 border border-dark rounded-0'>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{user?.name}</h5>
          <ul className='list-unstyled'>
            <li>{user?.company.name}</li>
            <li>{user?.company.catchPhrase}</li>
            <li className='font-weight-bold'>{user?.company.bs}</li>
          </ul>
          <Link to={`/user/${user?.id}`} className='btn btn-details mt-auto mx-3 box-shadow rounded-0'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
