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
    const response = await fetch('https://reqres.in/api/users', data);
    const json = await response.json();
    console.log(json);
  } catch (e){
    console.log(e);
  }
}

apiPost();
