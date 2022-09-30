import { useState } from "react";
import axios from "axios";
import { TextField, Button, ListItem} from '@material-ui/core';
const Home = () => {
    const [name, setName] = useState(undefined);
    const [gender, setGender] = useState(undefined);
    const [applyLocation, setApplyLocation] = useState(undefined);
    const [currentLocation, setCurrentLocation] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [table, setTable] = useState([]);

    const handlePost = async () => {
    const user = {
        name: name,
        gender: gender,
        apply_location: applyLocation,
        current_location: currentLocation,
        selectedFile: selectedFile
    };
    try {
        const res = await axios.post("http://localhost:5000/post", user);
        console.log("res", res.data);
    } catch (err) {
        console.log(err.message);
    }
};

    const handleGetList = async () => {
        try {
            await axios.get("http://localhost:5000/get").then(res => {
                console.log(res.data);
                setTable(res.data)
            });
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <div>
            <h>Application Form</h>
            <br></br>
            <br></br>
            <TextField
                id="outlined-required"
                label="Name"
                fullWidth
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
                id="outlined-required"
                label="Gender"
                fullWidth
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
                id="outlined-required"
                fullWidth
                label="Apply Address"
                value={applyLocation}
                onChange={(e) => setApplyLocation(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
                id="outlined-required"
                fullWidth
                label="Current Address"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
                id="outlined-required"
                fullWidth
                label="File"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
            />

            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" size="small" onClick={() => handlePost()}>post</Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" size="small" onClick={() => handleGetList()}>get all data</Button>
            {table.length > 0 && (table.map((el, index) => 
                <div><ListItem>#{index + 1}: {el.name} {el.apply_location}</ListItem></div>
            ))}
            </div>
            )
};

export default Home;