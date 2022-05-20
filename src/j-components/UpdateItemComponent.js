import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { UpdateItem } from "../ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { Person } from "../models";
import { useState, useEffect } from "react";
import "../App.css";

class UpdateItemComponent extends Component {
    render(){
      return (<PutPerson />);
    }
}

function PutPerson() {
  const { cid } = useParams();
  // this  function sets the paramenter to cid -> person ID. look more into
  const [cr, setMe] = useState(0);
  //set item of set me

  
  useEffect(()=>{
    const pullData = async() => {
      //an array object for all Person objects
      const persons = await DataStore.query(Person, p => p.id("eq", cid));
      //console.log(persons);
      setMe(persons[0]);
      //console.log(persons[0].plate);
    }
    pullData()
  }, [])

  return (
    <div>
      <p>{cid}</p>
      <UpdateItem person={cr}/>
      {/* The line above is probably messed up */}
    </div>
  );
}

export default UpdateItemComponent;