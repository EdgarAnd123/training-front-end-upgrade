document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function() {
    if(this.status == 200) {
      document.getElementById('text').innerHTML = this.responseText;
    } else if(this.status == 404) {
      document.getElementById('text').innerHTML = 'Not Found';
    }
  }

  /*xhr.onreadystatechange = function() {
    //console.log('READYSTATE: ', xhr.readyState);
    if(this.readyState && this.status == 200) {

    }
  }

  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState);
  }*/

  xhr.send();
}