import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '../redux/api';

type Props = {
  post: Post;
  user: User;
};

const Post = ({ post, user }: Props) => {
  const [deletePost] = useDeletePostMutation();

  return (
    <div className='list-group mx-3'>
      <div className='list-group-item d-flex mb-2 border border-dark rounded-0'>
        <div className='p-2'>
          <i
            className='far fa-trash-alt navy fa-lg'
            onClick={() => deletePost({ postId: post?.id, userId: user?.id as number })}
          />
        </div>
        <h6 className='text-body p-2'>{post.title}</h6>
        <div className='p-2 ml-auto'>
          <Link to={`/user/${user?.id}/${post.id}`}>
            <i className='fas fa-chevron-right navy fa-lg' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
