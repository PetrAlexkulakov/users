

const Register = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="d-flex flex-column border border-primary p-1 gap-1">
        <input type="text" name="name" placeholder='Name' />
        <input type="email" name="email" placeholder='E-mail' />
        <input type="password" name="password" placeholder='Password' />
        <button type="submit" className="btn border-primary">Register</button>
      </form>
    </div>
  )
}

export default Register
