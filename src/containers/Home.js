import React, {useState} from 'react'
import axios from 'axios';
function Home() {
    const [data_file, setDataFile] = useState();
    const [classifiedData , setClassifiedData] = useState();

    const uploadDataFile = () => {
        const uploadData =  new FormData();
        uploadData.append('data_file', data_file, data_file.name)
        axios.post('http://127.0.0.1:8000/api/data/classify/',uploadData )

            .then(res =>{
                console.log(res)
            })
    }

    return (
        <div>
            <label>Enter data file
            </label>
            <input type="file" onChange={evt => setDataFile(evt.target.files[0]) }/>
            <button onClick={() => uploadDataFile() }>Upload File</button>
        </div>
    )
}

export default Home; 

