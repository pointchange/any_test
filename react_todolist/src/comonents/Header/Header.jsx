import { TextField, Box } from '@mui/material';

export default function Header({ addTodo }) {

    return (
        <Box>
            <TextField onKeyUp={(e) => e.key === 'Enter' && addTodo({
                id: crypto.randomUUID(),
                content: e.target.value,
                done: false
            })} fullWidth label="请输入，按 Enter 确认" />
        </Box>
    )
}
