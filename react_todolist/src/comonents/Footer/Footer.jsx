import { Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
export default function Footer({ checkAll, clearALL, list }) {
    const total = list.length;
    const done = list.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    return (
        <Grid container spacing={2}>
            <Grid size={8}>
                <FormControlLabel checked={total && done === total} control={<Checkbox onChange={e => checkAll(e.target.checked)} />} label={`已完成 ${done} / 共 ${total}`} />
            </Grid>
            <Grid size={4}>
                <Button disabled={total ===0 || done===0} onClick={clearALL} color="error" variant="outlined">清除已完成</Button>
            </Grid>
        </Grid>

    )
}
