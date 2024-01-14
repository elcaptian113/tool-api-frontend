import './ViewTools.css';

import {Alert, Container, CardGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getTools } from '../actions/action';
import ToolCard from '../components/cards/ToolCard';


function ViewTools(){
    const [tools, setTools] = useState([]);
    const [error, setError] = useState(null);

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

    if (tools.length > 0){
        return(
           <div className='view-tools'>
                <Container>
                    <h1>View Tools</h1>
                    <CardGroup>
                        {
                            tools.map((tool) => {
                                return <ToolCard
                                    key={tool.id}
                                    id={tool.id}
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
           <div className='view-tools'>
                <Container>
                    <h1>View Tools</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "You currently have no tools available in your service."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default ViewTools;