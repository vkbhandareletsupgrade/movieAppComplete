let movieAPI = [

];

// we store new movie in movieAPI via localstorage.stringfy but now to get it from there we use json.parse
  // movieAPI = JSON.parse(localStorage.getItem('movieAPI')); 
  if(localStorage.getItem('movieAPI') !== null){
    movieAPI = JSON.parse(localStorage.getItem('movieAPI')); 
  }else{
    localStorage.setItem('movieAPI',JSON.stringify(movieAPI));
  }


  function displayData(movieapi){
    document.getElementById('tbody').innerHTML="";
    movieapi.forEach((ele, index)=>{

        let createTR = document.createElement('tr');
        let tdforID = document.createElement('td');
        let tdforNAME = document.createElement('td');
        let tdforDATE = document.createElement('td');
        let tdforGENRE = document.createElement('td');
        let tdforDURATION = document.createElement('td');
        let tdforRATING = document.createElement('td');
        let tdforACTION = document.createElement('td');

        tdforACTION.classList.add('actions')
        let view = document.createElement('i');
        // view.classList.add('fa');
        view.classList.add('fa-solid');
        view.classList.add('fa-eye');
        tdforACTION.appendChild(view);
        view.onclick = viewMovie.bind(this, ele.id)

        let update = document.createElement('i');
        update.classList.add('fa-solid');
        update.classList.add('fa-pen-to-square');
        tdforACTION.appendChild(update);

        let deleteicon = document.createElement('i');
        deleteicon.classList.add('fa-solid');
        deleteicon.classList.add('fa-trash');
        tdforACTION.appendChild(deleteicon);
        deleteicon.onclick = removeMovie.bind('this',ele.id);
    
        tdforID.append(index+1);
        tdforNAME.append(ele.title);
        tdforDATE.append(ele.releaseDate);
        ele.genres.forEach((genre, i)=>{
          tdforGENRE.append(genre+" ");
          });
        tdforDURATION.append(ele.duration);
        tdforRATING.append(ele.imdbRating);
        
    
        createTR.appendChild(tdforID);
        createTR.appendChild(tdforNAME);
        createTR.appendChild(tdforDATE);
        createTR.appendChild(tdforGENRE);
        createTR.appendChild(tdforDURATION);
        createTR.appendChild(tdforRATING);
        createTR.appendChild(tdforACTION);
        

        document.getElementById('tbody').appendChild(createTR);
    })
  }
  displayData(movieAPI);


  function viewMovie(movieID){
    let storeID = movieAPI.find((ele,index)=>{
        return ele.id === movieID;
        
    });
   
    document.getElementById('moviePoster').src=storeID.posterurl;
    document.getElementById('mName').innerHTML = storeID.title;
    document.getElementById('movieName').innerHTML = storeID.title;
    document.getElementById('actorsName').innerHTML = storeID.actors;

    document.getElementById('duration').innerHTML = storeID.duration;
    document.getElementById('releaseDate').innerHTML = storeID.releaseDate;
    document.getElementById('imdbRating').innerHTML = storeID.imdbRating;
    document.getElementById('genres').innerHTML = storeID.genres;
    document.getElementById('movie-summary').innerHTML = storeID.storyline;

    //to show modal
    document.getElementById('modal').style.display="flex";
  }

  function openAddMovieModal(){
    document.getElementById('add_movie').style.display="flex";
  }
  
  // function to change text to date
 
  
  function addNewMovie()
  {
    let lastid;

    if(movieAPI.length !== 0){  // if theres some data in movieAPI then apply next line ,else make lastid =0 
      lastid = movieAPI[movieAPI.length-1].id;
    }else{
      lastid = 0;
    }
  
    let newMovie = {
      ratings:[],
      id : lastid + 1
    }
   newMovie.title = document.getElementById('mname').value;
   newMovie.releaseDate = document.getElementById('mrdate').value;
   newMovie.genres = document.getElementById('mgenre').value.split(",");
   newMovie.actors = document.getElementById('mactors').value.split(",");
   newMovie.duration = document.getElementById('mduration').value;
   newMovie.imdbRating = document.getElementById('mimdb').value;
   newMovie.posterurl = document.getElementById('mposterurl').value;
   newMovie.storyline = document.getElementById('msummary').value;

   movieAPI.push(newMovie);

   // to store data locally in browser we need to convert js obj into json obj , so we use stringify
   localStorage.setItem('movieAPI',JSON.stringify(movieAPI));

   displayData(movieAPI);
   closeModal('add_movie');
  
  //  console.log(newMovie);
  //  console.log(movieAPI.push(newMovie));
  //  console.log(movieAPI);
  }
  //  document.getElementById('add_movie_form').reset();
  function closeModal(modal){
    document.getElementById(modal).style.display="";
    // document.getElementById('modal').style.display="";
  };

  //function to change text field to date
  document.getElementById('mrdate').addEventListener('focus',()=>{
    document.getElementById('mrdate').type='date';
  });

   //function to change date field to text
  // document.getElementById('mrdate').addEventListener('focusout',()=>{
  //   document.getElementById('mrdate').type='text';
  // });
 
  document.getElementById('add_movie_form').reset();


  //to delete movie on click on trash icon

  function removeMovie(id){
    let alertDelete = confirm("Do you really want to delete the movie ? ");
    if(alertDelete === true){
      let getIndex = movieAPI.findIndex((ele,i)=>{
        return ele.id === id;
      });
      // console.log(getIndex);
  
      movieAPI.splice(getIndex,1); // to delete single movie onclick of trash
  
      // but still after delete we refresh the page data comes again coz we didnt update localstorage
      // to update local storage
  
      localStorage.setItem('movieAPI',JSON.stringify(movieAPI)); // now that movie deleted from localstorage too.
  
      displayData(movieAPI);
    }
  }