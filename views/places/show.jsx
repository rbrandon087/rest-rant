const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )  
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
      <div className="container text-center row">
      <div className="col">
        <img src={data.place.pic} alt ={data.place.name}/>
      </div>
      <div className="col">
      <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Description</h2>
        <p>{data.place.showEstablished()}</p>
        <h3>Located in {data.place.city}, {data.place.state}</h3>
        <h4>Serving {data.place.cuisines}</h4>
      </div>
      </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}



function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}                 
            ...
          </main>
        </Def>
    )
}

module.exports = new_form

module.exports = show;




