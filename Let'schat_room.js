
        const firebaseConfig = {
            apiKey: "AIzaSyCWlScFlsHSknI8FEhTPyK7Eo7KZpdEDVY",
            authDomain: "kwitter-83f68.firebaseapp.com",
            databaseURL: "https://kwitter-83f68-default-rtdb.firebaseio.com",
            projectId: "kwitter-83f68",
            storageBucket: "kwitter-83f68.appspot.com",
            messagingSenderId: "457176504149",
            appId: "1:457176504149:web:46bda7784be00a27eb81dc"
          };
        
          
          const app = initializeApp(firebaseConfig);


      
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
       console.log("room_name -"+ Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML += row;
      
      });});}
      getData();

      function addRoom(){
            Room_names = document.getElementById("room_name").nodeValue;
            firebase.database().ref("/").child(Room_names).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name", Room_names);
            window.location = "let'schat_page.html";
      }
       
      function redirectToRoomName(){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "let'schat_page.html";
      }

