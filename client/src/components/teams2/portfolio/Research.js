import React, { useState, useRef, useEffect } from "react";
import Template from "./Template";
import Department from "./Department";
import { getRadTeam } from "../../../services/index";

const Research = () => {
  const [val, setVal] = useState(true);
  const [webTeam, setWebTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const btnRef1 = useRef();
  const btnRef2 = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const teamData = await getRadTeam();
        setWebTeam(teamData);
        setFilteredMembers(teamData[0].node.teamMembers.filter(member => !member.alumni)); // Filter only present team members initially
        setLoading(false);
      } catch (error) {
        console.error("Error fetching web team:", error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
    // handlePresentClick(); // Call handlePresentClick to ensure default state is present team members
  }, []);
  
  const handlePresentClick = () => {
    setVal(true);
    btnRef1.current.style.backgroundColor = "#153462";
    btnRef1.current.style.color = "white";
    btnRef2.current.style.backgroundColor = "white";
    btnRef2.current.style.color = "black";
    setFilteredMembers(webTeam[0].node.teamMembers.filter(member => !member.alumni));
  };

  const handleAlumniClick = () => {
    setVal(false);
    btnRef1.current.style.backgroundColor = "white";
    btnRef1.current.style.color = "black";
    btnRef2.current.style.backgroundColor = "#153462";
    btnRef2.current.style.color = "white";
    setFilteredMembers(webTeam[0].node.teamMembers.filter(member => member.alumni));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Department tag="Research And Development" />
      <div className="btn">
        <div className="flex mt-6  justify-end">
          <button
            ref={btnRef1}
            className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  tracking-wider cursor-pointer border border-solid hover:shadow-2xl hover:bg-[#BAD1C2] hover:border-2  border-black p-4 text-white bg-[#153462] hover:text-black "
            onClick={handlePresentClick}
          >
            Present
          </button>
          <button
            ref={btnRef2}
            className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  border border-solid border-black p-4 tracking-wider cursor-pointer hover:border-2 hover:shadow-2xl hover:bg-[#BAD1C2] hover:text-black"
            onClick={handleAlumniClick}
          >
            Alumni
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-5">
        {filteredMembers.map((member, index) => (
          <div className="flex flex-col items-center bg-gray-200 p-5 rounded-md shadow-xl justify-center gap-4 mx-6" key={index}>
            <img
              src={member.image.url}
              className="h-[300px] rounded-md w-[300px]"
              alt=""
            />
            <h1 className="text-xl font-bold">{member.name}</h1>
            <h2 className="text-lg">{member.batch}</h2>
            <a href={member.linkedIn ? member.linkedIn : "#"} className="text-blue-700 font-bold">LinkedIn</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
