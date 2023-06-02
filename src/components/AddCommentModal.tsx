import { useAddCommentMutation } from '../redux/api';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

type Props = {
  postId: number;
  modal: boolean;
  setModal: (value: boolean) => void;
};

const AddCommentModal = ({ postId, modal, setModal }: Props) => {
  const [addComment] = useAddCommentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = ({ name, email, body }) => {
    addComment({ name, email, body, postId });
    reset();
    setModal(false);
  };

  return (
    <div className={modal ? 'modal d-block' : 'modal d-none'}>
      <div className='modal-main border border-dark'>
        <p className='header pl-1'>Add comment</p>
        <h4 className='text-center'>Add comment</h4>
        <div className='card-body'>
          <form className='container pt-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group row'>
              <label className='col-lg-3 col-form-label form-control-label pl-3 pt-0 '>Name</label>
              <div className='col-lg-9 input-group-sm pl-0 '>
                <input
                  autoComplete='off'
                  className={`form-control rounded-0 border ${errors.name ? 'border-danger' : 'border-dark'}`}
                  {...register('name', { required: true })}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-lg-3 col-form-label form-control-label pl-3 pt-0 '>Email</label>
              <div className='col-lg-9 input-group-sm pl-0'>
                <input
                  autoComplete='off'
                  className={`form-control rounded-0 border ${errors.email ? 'border-danger' : 'border-dark'}`}
                  type='email'
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-lg-3 col-form-label form-control-label pt-0'>Body</label>
              <div className='col-lg-9 pl-0'>
                <textarea
                  style={{ resize: 'none' }}
                  rows={4}
                  className={`form-control rounded-0 border ${errors.body ? 'border-danger' : 'border-dark'}`}
                  {...register('body', { required: true })}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-lg-3 col-form-label form-control-label'></label>
              <div className='col-lg-9'>
                <div className='row justify-content-end pr-3'>
                  <button className='btn-cancel border border-dark box-shadow' onClick={() => setModal(false)}>
                    Cancel
                  </button>
                  <button className='btn-save border border-dark box-shadow ml-2' type='submit'>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <p className='footer' />
      </div>
    </div>
  );
};

export default AddCommentModal;
