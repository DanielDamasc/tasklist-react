import { useState } from "react";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            type="text" placeholder="Digite o título"
            value={title}
            onChange={(event) => {
                setTitle(event.target.value);
            }} />

            <input 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            type="text" placeholder="Digite a descrição"
            value={description} 
            onChange={(event) => {
                setDescription(event.target.value);
            }}/>

            <button 
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            onClick={() => {
                // Verificar se ambos os campos estão preenchidos.
                if (!title.trim() || !description.trim()) {
                    return alert("Por favor, preencha os campos.");
                }
                props.onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}>Adicionar</button>
        </div>
    );
}

export default AddTask;