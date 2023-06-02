import type { Comment } from '../redux/api';

type Props = { comment: Comment };

const Comment = ({ comment }: Props) => (
  <div className='list-group-item border border-dark rounded-0 mb-2'>
    <div className='d-flex justify-content-between'>
      <h6 className='mb-2'>{comment.name}</h6>
      <a href='/' className='email'>
        {comment.email}
      </a>
    </div>
    <p className='mb-1'>{comment.body}</p>
  </div>
);

export default Comment;
