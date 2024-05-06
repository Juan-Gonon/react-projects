import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";



// insert
export const Insert = async (title) => {
    await addDoc(collection(db, "todos"), {
        title,
        completed: false,
    });
};


//select

export const subscribeToTodos = (set) => {
    const q = query(collection(db, "todos"));

    const unsubscribe = onSnapshot(
        q,
        (data) => {
            const todos = [];

            data.forEach((doc) => {
                todos.push({ ...doc.data(), id: doc.id });
            });

            set(todos);
        },
        (error) => {
            console.error("Error fetching todos:", error);
        }
    );

    return () => unsubscribe();
};


//delete
export const deleteTodo = async(id)=>{
    
    await deleteDoc(doc(db, "todos", id))
}

//edit
export const editTodo = async(id, title)=>{
    await updateDoc(doc(db, 'todos', id), {
        title : title
    })
}

//edit marcar
export const marcarTodo = async(id, completed)=>{
    await updateDoc(doc(db, 'todos', id),{
        completed : !completed
    })
}
