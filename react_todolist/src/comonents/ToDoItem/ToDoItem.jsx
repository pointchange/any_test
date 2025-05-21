import  { useContext,  useRef, useState } from 'react'
import { ListItemText, ListItemButton, ListItem,  Checkbox, ListItemIcon, Button, TextField } from '@mui/material';

import { todos } from '../../App';
export default function ToDoItem({ id, content, done }) {
    const { checkedTodo, editTodo, deleteTodo } = useContext(todos);
    const [editing, setEditing] = useState(false);
    const textFieldRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    function keyUpHandle(e) {
        if (e.key === 'Enter') {
            editTodo(id, e.target.value)
            setEditing(false);
        }
    }
    function changeHandle(e) {
        setInputValue(e.target.value);
    }
    function editHandle() {
        setEditing(true);
        setInputValue(content);
    }
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton  selected={done}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={done}
                            tabIndex={-1}
                            disableRipple
                            onChange={e => checkedTodo(id, e.target.checked)}
                        />
                    </ListItemIcon>
                    {
                        editing ?
                            <TextField onChange={changeHandle} onBlur={() => setEditing(false)} autoFocus={editing} ref={textFieldRef} value={inputValue} onKeyUp={keyUpHandle} fullWidth label="请输入，回车确认" />
                            :
                            <ListItemText primary={content} />
                    }

                    <Button onClick={editHandle} variant="outlined">编辑</Button>
                    <Button onClick={() => deleteTodo(id)} color="error" variant="outlined">删除</Button>
                </ListItemButton>
            </ListItem>
        </>
    )
}
