async function query(){
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    const json = await response.json();
  } catch (e){
    console.log(e);
  }
}

async function apiPost(){
  const data = {
    body: JSON.stringify({
      name: "Buster Bluth",
      job: "Student"
    }),
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    }
  }
  try {
    const response = await fetch('jahuu.com', data);
    const json = await response.json();
    console.log(json);
  } catch (e){
    console.log(e);
  }
}


apiPost();
query();
