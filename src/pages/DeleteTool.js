import './DeleteTool.css';

import {Alert, Container, CardGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getTools} from '../actions/action';
import ToolCardDelete from '../components/cards/ToolCardDelete';



function DeleteTool(){
    const [tools, setTools] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(tools.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getTools();
                    setTools(data);
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[tools])

    if (tools.length > 0){
        return(
           <div className='view-tools'>
                <Container>
                    <h1>Delete Tools</h1>
                    <CardGroup>
                        {
                            tools.map((tool) => {
                                return <ToolCardDelete
                                    key={tool.id}
                                    rowId={tool.id}
                                    description={tool.description}
                                    img={tool.image}
                                    hire_price={tool.hire_price}
                                    category={tool.tool_category.description}
                                />
                            })
                        }
                    </CardGroup>
               </Container>
            </div>
      );
    }
    else if (error || tools.length === 0){
        return(
           <div className='delete-tool'>
                <Container>
                    <h1>Delete Tools</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "Tool does not Exists."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default DeleteTool;