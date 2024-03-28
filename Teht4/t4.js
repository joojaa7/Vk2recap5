async function fetchData(url, options){
  let response;
  let data;

  if (options.method != 'GET'){
    data = {
      method: options.method,
      headers: options.headers,
      body: options.body,
    }
  };

  if (options.method != 'GET'){
    response = await fetch(url, data);
  }
  else {
    response = await fetch(url);
  }


  if (response.status > 299){
    throw new Error('Response failed.')
  }
  return response.json();
}


async function funktio(){
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer'
    };
    const url = 'https://reqres.in/api/users/';
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


funktio();
