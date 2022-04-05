import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import MyCards from './MyCards';


const MyForm = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setUsername(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      }, [])

  }

  console.log(data)
  return (
    <>

      <div className='container'>
        <Form onSubmit={submitHandler} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              fontWeight: 'bold',
              textShadow : '1px 2px 3px red',
              color: 'purple',
              fontSize: '20px'
            }}> Github Search App</Form.Label>
            <Form.Control type="text" placeholder="Search Git Id" value={username} onChange={changeHandler} />

          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <MyCards data={data} />

      {/* <br />
      <div className='container'>
      <div className="card mb-3" style={{maxwidth: '540px',}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={data.avatar_url} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.bio}</p>
                            <p className="card-text">{data.html_url}</p>
                            <p className="card-text">Followers: {data.followers}</p>
                            <p className="card-text">Following: {data.following}</p>
                            <p className="card-text">Total Repo: {data.public_repos}</p>
                            <p className="card-text"><small className="text-muted">Last updated {data.updated_at}</small></p>
                        </div>
                    </div>
                </div>
            </div>
      </div> */}

    </>
  )
}

export default MyForm