import {Button} from 'react-bootstrap';
import {getTools} from '../actions/action';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function UpdatePage() {
    const [tools, setTools] = useState([]);
    const [error, setError] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');


    useEffect(() => {
        if(tools.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getTools();
                    setTools(data);
                    console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[tools])

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        console.log({selectedValue})
      };


    return(
        <div className='update-tool'>
            <h1>Update Tool</h1>
            <br></br>

            <div>
              <select value={selectedValue} onChange={handleSelectChange}>
                  <option>SELECT TOOL TO UPDATE</option>
                  {tools.map((tools) => (
                   <option key={tools.id} value={tools.id}>{tools.description}</option>
                  ))}
               </select>
            </div>
            <br></br>
            <Link to={'/Update/' + selectedValue}>
                <Button>
                     <p>Update Selected Tool</p>
                </Button>
              </Link>
        </div>
    );
}

export default UpdatePage;