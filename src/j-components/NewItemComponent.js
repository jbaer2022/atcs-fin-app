import React, { Component } from 'react';
import { NewItem } from "../ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "../App.css";

class NewItemComponent extends Component {
    render(){
        return (
          <div>
            <h1>New Item</h1>
            <NewItem />
          </div>
        );
    }
}

// function PutPerson() {
//   return (
//     <div>
//       <NewItem />
//     </div>
//   );
// }

export default NewItemComponent;