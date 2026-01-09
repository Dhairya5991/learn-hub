import axios from "axios";
import {useEffect,useState} from "react";

export default function App(){
  const [courses,setCourses]=useState([]);
  useEffect(()=>{axios.get("/api/courses").then(r=>setCourses(r.data))},[]);
  return <div>
    <h1>LMS Platform</h1>
    {courses.map(c=><div key={c._id}>{c.title}</div>)}
  </div>;
}