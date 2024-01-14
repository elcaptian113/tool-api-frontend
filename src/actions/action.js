import axios from 'axios';

const url = 'http://localhost:8900/';

const getTools = async() => {
    let response = await axios.get(url + "tools").then(response => {
        return response.data;
    });
    
    return response;
};

const deleteTool = async (tool) => {
    let response = await axios.delete("http://localhost:8900/tools", {data: {id:tool}}
    ).then(response => {
        return response.data;
    });

    return response;
}

const addTool = async (tool) => {
    let response = await axios.post(url + "tools", tool,{
        headers: {
            'content-type':'multipart/form-data'
        }
    }).then(response => {
        return response.data;
    });

    return response;
}

const updateTool = async (tool) => {
    let response = await axios.put(url + "tools", tool,{
        headers: {
            'content-type':'multipart/form-data'
        }
    }).then(response => {
        return response.data;
    });

    return response;
}

export {getTools, addTool, updateTool, deleteTool};