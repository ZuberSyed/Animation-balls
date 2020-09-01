#balls{
  position:relative;
}
#ball1{
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:pink;
  position:absolute;
  top:5px;
  margin:50px 250px;
  animation-name:move;
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function:linear;
  box-shadow:1px 10px 8px 1px rgba(50,50,50,0.2);
}
@keyframes move{
  0%{background-color:red;top:5px}
  25%{background-color:pink;top:100px}
  50%{background-color:green;top:200px}
  75%{background-color:yellow;top:300px}
  100%{background-color:blue;top:400px};
}
#ball2{
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:pink;
   position :absolute;
  top:5px;
  margin: 50px 400px;
  animation-name:move2;
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function:linear;
  box-shadow:1px 10px 8px 1px rgba(50,50,50,0.2);
}
@keyframes move2{
  0%{background-color:blue;top:5px}
  25%{background-color:yellow;top:100px}
  50%{background-color:red;top:200px}
  75%{background-color:green;top:300px }
  100%{background-color:black;top:400px};
}
