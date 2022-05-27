import React from 'react';

export default function ConfirmButton({ confirmbutton: { id, title, state }, onConfirm }) {
    
    
  return (
           <div id="update_status" >
            <h2>Please confirm your reservation:</h2>
            <form onSubmit={ () => {
      	
        this.preventDefault();

fetch('/session/token')
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log('session cookie:');
    console.log(data); // this will be a string
    function getParameter(parameter) {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
 
          if(urlParams.get(parameter)) {
              console.log(urlParams.get(parameter));
          }
          return urlParams.get(parameter);
    }
    function getUuidFromPath(path_integer) {
         const pathArray = window.location.pathname.split('/');
         return pathArray[path_integer];
    }
            const webform_id = 'shared_learning_room_reservation';
          //  const uuid = '317656b6-c701-4acc-8d34-ac2acb26b0d7';
          //  const uuid = getParameter('uuid');
            const uuid = getUuidFromPath(3);
            
             fetch('/webform_rest/' + webform_id + '/submission/' + uuid + '?_format=json', { 
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': data
              },
              body: JSON.stringify({
                'webform_id': webform_id,
                'uri' : ['/webform/webform_id/api'],
                'status' : 2, 
              }),
            })
            .then(response => response.json())
            .then(
              (data) => {
                //on success you do whatever you will want
                console.log('success', data);
                document.getElementById('slr_status').innerHTML = "Confirmed";
               document.getElementById('slr_update').innerHTML = "<h2>Thank you for confirming your shared learning room reservation.</h2>";
               // window.location.reload(true);
              },
              (error) => {
                console.log('error', error);
              }
            ); 
    
  });
      } }>
              <button className="usa-button" type="submit">Confirm</button>
            </form>
          </div>
  );
}

