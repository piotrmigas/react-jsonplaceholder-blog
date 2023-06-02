import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Post from '../components/Post';
import AddPostModal from '../components/AddPostModal';
import { useGetPostsQuery, useGetUserQuery } from '../redux/api';

const User = () => {
  const [modal, setModal] = useState(false);
  const { userId } = useParams();

  const { data: user } = useGetUserQuery(Number(userId));
  const { data: posts, isLoading } = useGetPostsQuery(Number(userId));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='container'>
      <div className='row justify-content-between pt-4 pb-5'>
        <div className='col-4'>
          <Link to='/'>
            <span className='fas fa-arrow-left fa-2x align-middle navy' />
          </Link>
          <span className='navy'> Back</span>
        </div>
        <div className='col-4 text-center'>
          <h4>{user?.name}</h4>
        </div>
        <div className='col-4 d-flex justify-content-end'>
          <i className='fas fa-plus-circle fa-2x navy' onClick={() => setModal(true)} />
        </div>
      </div>
      <div className='mb-5'>
        {posts?.map((post) => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </div>
      <AddPostModal userId={user?.id as number} modal={modal} setModal={setModal} />
    </div>
  );
};

export default User;
