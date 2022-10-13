export const getAllTodos = async () => {

    const response = await fetch('/api2/todos');

    console.log(response);
    return await response.json(); 
     
}

