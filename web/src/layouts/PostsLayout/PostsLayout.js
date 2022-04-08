import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
const PostsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className="rw-scaffold">
      {isAuthenticated ? (
        <div>
          <span>Logged in as {currentUser.email}</span>
          {''}
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.posts()} className="rw-link">
            Posts
          </Link>
        </h1>
        <Link to={routes.newPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Post
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PostsLayout
