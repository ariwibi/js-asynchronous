const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if(delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    };
  }, delay);
};

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if(delay > 4000) {
        reject('Error: Connection Timeout');
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  })
}


requestCallback('movie.com', 
  function (response) {
    console.log(response);
    requestCallback('movie.com', 
      function (response) {
        console.log(response);
         requestCallback('movie.com', 
          function (response) {
            console.log(response);
             requestCallback('movie.com', 
              function (response) {
                console.log(response);
                 requestCallback('movie.com', 
                  function (response) {
                   console.log(response);
                  },
                  function (error) {
                    console.log(error);
                  }
                )
              },
              function (error) {
                console.log(error);
              }
            )
          },
          function (error) {
            console.log(error);
          }
        )
      },
      function (error) {
        console.log(error);
      }
    );
  }, function (error) {
    console.log(error);
  }
)
