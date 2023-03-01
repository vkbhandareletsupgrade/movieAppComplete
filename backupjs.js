let movieAPI = [
    {
      id:1,
      title: "Anand",
      year: "1971",
      genres: ["Drama"],
      ratings: [
        5, 6, 8, 1, 2, 5, 8, 2, 8, 6, 10, 6, 3, 7, 6, 4, 1, 10, 3, 6, 5, 3, 9, 8,
        7, 2, 4, 10, 5, 9,
      ],
      poster:
        "MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
      contentRating: "",
      duration: "PT122M",
      releaseDate: "1971-03-12",
      averageRating: 0,
      originalTitle: "",
      storyline:
        "A melodramatic tale of a man with a terminal disease. The story begins with Dr Bhaksar winning a literary prize for his book about a patient called Anand. The rest is flashback. Anand, the title character, is suffering from lymphosarcoma of the intestine. He, however appears to be cheerful on the outside and is determined to extract as much pleasure from his remaining lifespan as is possible. Dr. Bhaskar his physician tends to Anand in his last days. After Anand dies we can however still hear his voice which was recorded on a tape. Dr Bhakser writes a book on his patient and wins a literary prize for it                Written by\nAnonymous",
      actors: ["Rajesh Khanna", "Amitabh Bachchan", "Sumita Sanyal"],
      imdbRating: 8.9,
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    },
    {
      id:2,
      title: "Dangal",
      year: "2016",
      genres: ["Action", "Biography", "Drama"],
      ratings: [
        5, 6, 3, 9, 6, 9, 7, 6, 4, 2, 7, 1, 10, 7, 7, 6, 2, 4, 2, 5, 7, 8, 6, 7,
        3, 3, 4, 6, 8, 1,
      ],
      poster:
        "MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
      contentRating: "",
      duration: "PT161M",
      releaseDate: "2016-12-23",
      averageRating: 0,
      originalTitle: "",
      storyline:
        "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
      actors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
      imdbRating: 8.9,
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
    }
  ];
    
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
  
  
          let view = document.createElement('i');
          // view.classList.add('fa');
          view.classList.add('fa-solid');
          view.classList.add('fa-eye');
          tdforACTION.appendChild(view);
          view.onclick = viewMovie.bind(this, ele.id)
      
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
      let lastid = movieAPI[movieAPI.length-1].id;
  
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