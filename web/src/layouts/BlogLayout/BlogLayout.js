

const BlogLayout = ({ children }) => {
  const { isAuthenticated,currentUser, logOut} = useAuth()
  return (
    <>
      <header>HEADER</header>

      {children}
    </>
  )
}

export default BlogLayout
