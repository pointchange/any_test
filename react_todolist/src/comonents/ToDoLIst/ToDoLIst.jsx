import {  List } from '@mui/material';
import ToDoItem from '../ToDoItem/ToDoItem';
export default function ToDoLIst({  list}) {
    return (
        <List >
            {
                list.map(v =>
                    <ToDoItem key={v.id} {...v}></ToDoItem>
                )
            }
        </List>
    )
}
