import React,{useState} from 'react'

const MyCards = ({data}) => {
  return (
    <>
    <br />
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
      </div>
    </>
  )
}

export default MyCards