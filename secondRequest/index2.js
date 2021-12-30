document.getElementById('button1').addEventListener('click', loadUser);

function loadUser() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'user.json', true);
    xhr.onload = function(){

        if(this.status == 200) {
            let user = JSON.parse(this.responseText);

            let output = '';
            
            for(let i in users) {
                output += `<ul>
                <li> ID: ${user[i].id} </li>
                <li> Name: ${user[i].name} </li>
                <li> Email: ${user[i].email} </li>
                </ul>`;
            }
            
            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}