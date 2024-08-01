import loading from '../assets/loading.gif'

function Loading() {
  return (
    <div className='w-100 mt-20'>
        <img className='text-center mx-auto' src={loading} width={180} alt="Loading..." />
    </div>
  )
}

export default Loading