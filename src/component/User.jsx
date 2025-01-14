import {useEffect, useContext} from 'react'
import { UserContext } from './context/UserContext'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Loading from './Loading'
import RepoList from './RepoList'
import { FaCodepen, FaUserFriends, FaUsers } from 'react-icons/fa'

function User() {
  const {getUser, user, loading, repos, getRepos} = useContext(UserContext)

  const params = useParams()
  
  useEffect(() => {
    getUser(params.login)
    getRepos(params.login)
  }, [])

  if(loading){
    return <Loading />
  }

  const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following, public_repos, public_gists, hireable} = user

  return (
      <>
      <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>Back To Search</Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="User Profile" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title text-white mb-0">
                {name}
              </h2>
              {login}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">
                {type}
              </div>
              {hireable && (
                <div className="mx-1 badge badge-info">
                  Hireable
                </div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a className='btn btn-outline' href={html_url} target='_blank' rel = 'noreferrer'>Visit Profile</a>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">
                  Location
                </div>
                <div className="text-lg stat-value">
                  {location}
                </div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">
                  Website
                </div>
                <div className="text-lg stat-value">
                  <a target='_blank' rel='noreferrer' href={`https://${blog}`}>Web Link</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUsers className='text-3xl md:text-5xl' />
        </div>
        <div className="stat-title pr-5">Followers</div>
        <div className="stat-value pr-5 text-3xl md:text-4xl">
          {followers}
        </div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUserFriends className='text-3xl md:text-5xl' />
        </div>
        <div className="stat-title pr-5">Following</div>
        <div className="stat-value pr-5 text-3xl md:text-4xl">
          {following}
        </div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaCodepen className='text-3xl md:text-5xl' />
        </div>
        <div className="stat-title pr-5">Public Repos</div>
        <div className="stat-value pr-5 text-3xl md:text-4xl">
          {public_repos}
        </div>
      </div>
      </div>
      <RepoList repos={repos} />
      </div>
      </>
    )
  }
  
  export default User