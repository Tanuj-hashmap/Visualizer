var arr = [];
var lbl = []
var c_ = [];
var b_c = []
var myChart;
var speed=100;
var slider;

function chng(){
  slider=document.getElementById("slider");
  switch(parseInt(slider.value)){
    case 1:
      speed = 500;
      break;
    case 2:
      speed = 100;
      break;
    case 3:
      speed = 50;
      break;
  }
  var value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
    "linear-gradient(to right, #53e3a6 0%, #53e3a6 " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100%)";
}
function gen_random(){
  arr = [];
  lbl = []
  c_ = [];
  b_c = []
  while(arr.length < 100){
      var r = Math.floor(Math.random() * 100) + 1;
      r = Math.abs(r);
      if(arr.indexOf(r) === -1) 
      {arr.push(r);
      lbl.push("");
      }
      c_.push("#000");
      b_c.push("");
  }
  if(myChart!=undefined){
     myChart.destroy();
  }
  make_chart(arr,lbl,c_,b_c);
}

function make_chart(arr,lbl,c_,b_c){
var ctx = document.getElementById("myChart");
myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: lbl,
    datasets: [{
      label: "Sorting",
      data: arr,
      backgroundColor: c_,
      borderColor: b_c,
      borderWidth: 1
    }]
  },
  options: {
    animation: {
      duration: 0
  },
  legend: {
    display: false
 },tooltips: {
  enabled: false
},
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
            display:false,
            drawOnChartArea: false
        }
      },
      {        
        gridLines: {
          display:false,
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          display:false,
          beginAtZero: true
        }
      }]
    }
  }
});
}



function selection_sort(inputArr){ 
  let n = inputArr.length;
  let flag =0;
  completed_arr=[];
  for(var k=0;k<n;k++){
    completed_arr[k]=-1;
  }
  for(let i = 0; i < n; i++) {

    setTimeout(() => {
      if(i==n-1){
          for(var k=0;k<n;k++)
          {
            c_[k]="#fff";
          }
          myChart.destroy();
          make_chart(inputArr,lbl,c_,b_c);
          flag=1;
      }
      if(flag==0){
      let min = i;
      for(let j = i+1; j < n; j++){
          if(inputArr[j] < inputArr[min]) {
              min=j; 
          }
       }
       if (min != i) {
         for(var k=0;k<n;k++){
           if(k!=i && k!=min ){
             if(completed_arr[k]==-1)
              c_[k]="#000";
             else
             c_[k]="#fff";
           }
           else{
            c_[k]="#FFFF00";
           }
         }
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;
           myChart.destroy();
           make_chart(inputArr,lbl,c_,b_c);
        }      
      }
      completed_arr[i]=1;
      }, speed * i);
      
  }
  inAction = false;
}

function insertion_sort(inputArr){
  let n = inputArr.length;
  completed_arr=[];
  for(var k=0;k<n;k++){
    completed_arr[k]=-1;
  }
  for (let i = 1; i < n; i++) {
    setTimeout(() => {
      let current = inputArr[i];
      let j = i-1; 
      while ((j > -1) && (current < inputArr[j])) {
          inputArr[j+1] = inputArr[j];
          j--;
      }
      inputArr[j+1] = current;
      if(i==n-1){
        for(var k=0;k<n;k++)
        {
          c_[k]="#fff";
        }
        myChart.destroy();
        make_chart(inputArr,lbl,c_,b_c);  
    }
    else{
      myChart.destroy();
      completed_arr[i-1]=1;
      for(var k=0;k<n;k++){
        if(k!=j+1 && k!=j ){
          if(completed_arr[k]==-1)
           c_[k]="#000";
          else
          c_[k]="#fff";
        }
        else{
         c_[k]="#FFFF00";
        }
      }
      make_chart(inputArr,lbl,c_,b_c);
    }
    
  }, speed*i);
}
inAction = false;
}

function bubble_sort(array){
  let n = array.length;
  completed_arr=[];
  for(var k=0;k<n;k++){
    completed_arr[k]=-1;
  }

  for(let i=0; i<n;i++){
    setTimeout(() => {
    for(let j=0;j<n;j++){
      setTimeout(() => {
        if(i==n-1){
          for(var k=0;k<n;k++)
          {
            c_[k]="#fff";
          }
          myChart.destroy();
          make_chart(array,lbl,c_,b_c);  
      }
      if(array[j]>array[j+1]){
          for(var k=0;k<n;k++){
          if(completed_arr[k]==1){
            c_[k]="#FFF";
          }
          else{
            c_[k]="#000";
          }
        }
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        c_[j]="#FFFF00";
        c_[j+1]="#FFFF00";
        myChart.destroy();
        make_chart(array,lbl,c_,b_c);
    }
  }, speed*j );
  }
  completed_arr[i]=1;
}, speed*i );
  }
  inAction = false;
}


function swap(items, leftIndex, rightIndex){
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //sawpping two elements
          c_[i] = "#FFFF00";
          c_[j] = "#FFFF00";
          i++;
          j--;
          myChart.destroy();
          make_chart(items,lbl,c_,b_c);
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    setTimeout(() => {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
    }, speed)
  }

  for(var i = 0; i < items.length; i++){
    c_[i]="#fff";
  }
  myChart.destroy();
  make_chart(items,lbl,c_,b_c); 
}

var inAction = false;

function sort(){
 var algo = document.getElementById('algo').value;
 if(inAction == false)
  switch(algo){
    case "bubble":
      inAction = true;
      bubble_sort(arr);
      break
    case "selection":
      inAction = true;
      selection_sort(arr);
      break
    case "insertion":
      inAction = true;
      insertion_sort(arr);
      break;
    case "quick_sort":
      inAction = true;
      quickSort(arr, 0 , arr.length-1);
      break;
    default:
      alert("Invalid selection");
      break;
  }
}

